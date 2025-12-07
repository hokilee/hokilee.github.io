const express = require('express');
const cors = require('cors');
const { incrementView, getView, getViewsBatch } = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

// CORS 설정 (프론트엔드 도메인 허용)
app.use(cors({
  origin: [
    'http://localhost:8080',
    'https://leehoki.com',
    'https://www.leehoki.com',
    'https://hokilee.github.io'
  ],
  credentials: true
}));

app.use(express.json());

// 조회수 증가 API
app.post('/api/views/increment', (req, res) => {
  const { boardType, itemId } = req.body;
  
  if (!boardType || !itemId) {
    return res.status(400).json({ error: 'boardType과 itemId가 필요합니다.' });
  }
  
  incrementView(boardType, itemId, (err, count) => {
    if (err) {
      return res.status(500).json({ error: '조회수 증가 실패' });
    }
    res.json({ success: true, count });
  });
});

// 조회수 가져오기 API
app.get('/api/views/:boardType/:itemId', (req, res) => {
  const { boardType, itemId } = req.params;
  
  getView(boardType, itemId, (err, count) => {
    if (err) {
      return res.status(500).json({ error: '조회수 가져오기 실패' });
    }
    res.json({ count });
  });
});

// 여러 항목의 조회수 일괄 가져오기 API
app.post('/api/views/batch', (req, res) => {
  const { boardType, itemIds } = req.body;
  
  if (!boardType || !Array.isArray(itemIds)) {
    return res.status(400).json({ error: 'boardType과 itemIds 배열이 필요합니다.' });
  }
  
  getViewsBatch(boardType, itemIds, (err, views) => {
    if (err) {
      return res.status(500).json({ error: '조회수 일괄 가져오기 실패' });
    }
    res.json({ views });
  });
});

// 헬스 체크
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`조회수 서버가 포트 ${PORT}에서 실행 중입니다.`);
});

