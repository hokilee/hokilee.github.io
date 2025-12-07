const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Railway에서는 환경 변수로 데이터베이스 경로를 설정할 수 있습니다
const dbPath = process.env.DATABASE_PATH || path.join(__dirname, 'views.db');
const db = new sqlite3.Database(dbPath);

// 테이블 생성
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS views (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      board_type TEXT NOT NULL,
      item_id TEXT NOT NULL,
      view_count INTEGER DEFAULT 0,
      last_updated DATETIME DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(board_type, item_id)
    )
  `);
  
  // 인덱스 생성 (조회 성능 향상)
  db.run(`
    CREATE INDEX IF NOT EXISTS idx_board_item 
    ON views(board_type, item_id)
  `);
});

// 조회수 증가
function incrementView(boardType, itemId, callback) {
  db.run(`
    INSERT INTO views (board_type, item_id, view_count) 
    VALUES (?, ?, 1)
    ON CONFLICT(board_type, item_id) 
    DO UPDATE SET 
      view_count = view_count + 1,
      last_updated = CURRENT_TIMESTAMP
  `, [boardType, itemId], function(err) {
    if (err) {
      console.error('조회수 증가 실패:', err);
      if (callback) callback(err, null);
    } else {
      // 증가된 조회수 가져오기
      getView(boardType, itemId, callback);
    }
  });
}

// 조회수 가져오기
function getView(boardType, itemId, callback) {
  db.get(
    'SELECT view_count FROM views WHERE board_type = ? AND item_id = ?',
    [boardType, itemId],
    (err, row) => {
      if (err) {
        console.error('조회수 가져오기 실패:', err);
        if (callback) callback(err, 0);
      } else {
        const count = row ? row.view_count : 0;
        if (callback) callback(null, count);
      }
    }
  );
}

// 여러 항목의 조회수 일괄 가져오기
function getViewsBatch(boardType, itemIds, callback) {
  const placeholders = itemIds.map(() => '?').join(',');
  db.all(
    `SELECT item_id, view_count FROM views 
     WHERE board_type = ? AND item_id IN (${placeholders})`,
    [boardType, ...itemIds],
    (err, rows) => {
      if (err) {
        console.error('조회수 일괄 가져오기 실패:', err);
        if (callback) callback(err, {});
      } else {
        const result = {};
        rows.forEach(row => {
          result[row.item_id] = row.view_count;
        });
        // 요청한 모든 itemId에 대해 0으로 초기화
        itemIds.forEach(id => {
          if (!result[id]) result[id] = 0;
        });
        if (callback) callback(null, result);
      }
    }
  );
}

module.exports = {
  incrementView,
  getView,
  getViewsBatch
};

