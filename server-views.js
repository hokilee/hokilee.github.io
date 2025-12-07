// 개인 서버를 사용한 조회수 관리 유틸리티 함수

// API 서버 URL (api-config.js에서 설정)
// api-config.js가 로드되지 않은 경우 기본값 사용
const API_BASE_URL = (typeof window !== 'undefined' && window.API_BASE_URL) 
  ? window.API_BASE_URL 
  : 'https://your-project.up.railway.app'; // Railway 배포 후 실제 URL로 변경 필요

/**
 * 조회수 증가 함수
 * @param {string} boardType - 게시판 타입 (예: 'today-content', 'science', 'economics')
 * @param {string|number} itemId - 항목 ID
 */
function incrementViewCount(boardType, itemId) {
  fetch(`${API_BASE_URL}/api/views/increment`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ boardType, itemId })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      console.log(`조회수 증가: ${boardType}/${itemId} = ${data.count}`);
    }
  })
  .catch(error => {
    console.error('조회수 증가 실패:', error);
  });
}

/**
 * 조회수 가져오기 함수 (비동기)
 * @param {string} boardType - 게시판 타입
 * @param {string|number} itemId - 항목 ID
 * @param {function} callback - 조회수를 받을 콜백 함수 (count) => {}
 * @param {number} defaultValue - 기본값 (서버 연결 실패 시 사용)
 */
function getViewCount(boardType, itemId, callback, defaultValue = 0) {
  fetch(`${API_BASE_URL}/api/views/${boardType}/${itemId}`)
    .then(response => response.json())
    .then(data => {
      if (callback) callback(data.count || defaultValue);
    })
    .catch(error => {
      console.error('조회수 가져오기 실패:', error);
      if (callback) callback(defaultValue);
    });
}

/**
 * 여러 항목의 조회수를 한 번에 가져오기
 * @param {string} boardType - 게시판 타입
 * @param {Array} itemIds - 항목 ID 배열
 * @param {function} callback - 조회수 맵을 받을 콜백 함수 (viewCounts) => {} (viewCounts는 {itemId: count} 형식)
 */
function getViewCountsBatch(boardType, itemIds, callback) {
  fetch(`${API_BASE_URL}/api/views/batch`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ boardType, itemIds })
  })
    .then(response => response.json())
    .then(data => {
      if (callback) callback(data.views || {});
    })
    .catch(error => {
      console.error('조회수 일괄 가져오기 실패:', error);
      if (callback) callback({});
    });
}

/**
 * 실시간 조회수 구독 (폴링 방식으로 구현)
 * @param {string} boardType - 게시판 타입
 * @param {string|number} itemId - 항목 ID
 * @param {function} callback - 조회수 변경 시 호출될 콜백 함수 (count) => {}
 * @param {number} interval - 폴링 간격 (밀리초, 기본값: 5000ms)
 * @returns {function} 구독 해제 함수
 */
function subscribeViewCount(boardType, itemId, callback, interval = 5000) {
  let lastCount = null;
  let pollingInterval = null;

  const poll = () => {
    getViewCount(boardType, itemId, (count) => {
      if (lastCount !== count) {
        lastCount = count;
        if (callback) callback(count);
      }
    });
  };

  // 즉시 한 번 조회
  poll();
  
  // 주기적으로 조회
  pollingInterval = setInterval(poll, interval);

  // 구독 해제 함수 반환
  return () => {
    if (pollingInterval) {
      clearInterval(pollingInterval);
      pollingInterval = null;
    }
  };
}

