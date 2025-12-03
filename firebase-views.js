// Firebase를 사용한 조회수 관리 유틸리티 함수

/**
 * 조회수 증가 함수
 * @param {string} boardType - 게시판 타입 (예: 'today-content', 'science', 'economics')
 * @param {string|number} itemId - 항목 ID
 */
function incrementViewCount(boardType, itemId) {
  if (typeof firebase === 'undefined') {
    console.warn('Firebase가 로드되지 않았습니다. 조회수는 증가하지 않습니다.');
    return;
  }

  try {
    const viewRef = firebase.database().ref(`views/${boardType}/${itemId}`);
    viewRef.transaction((current) => {
      return (current || 0) + 1;
    }, (error, committed, snapshot) => {
      if (error) {
        console.error('조회수 증가 실패:', error);
      } else if (committed) {
        console.log(`조회수 증가: ${boardType}/${itemId} = ${snapshot.val()}`);
      }
    });
  } catch (error) {
    console.error('조회수 증가 중 오류:', error);
  }
}

/**
 * 조회수 가져오기 함수 (비동기)
 * @param {string} boardType - 게시판 타입
 * @param {string|number} itemId - 항목 ID
 * @param {function} callback - 조회수를 받을 콜백 함수 (count) => {}
 * @param {number} defaultValue - 기본값 (Firebase 연결 실패 시 사용)
 */
function getViewCount(boardType, itemId, callback, defaultValue = 0) {
  if (typeof firebase === 'undefined') {
    console.warn('Firebase가 로드되지 않았습니다. 기본값을 반환합니다.');
    if (callback) callback(defaultValue);
    return defaultValue;
  }

  try {
    const viewRef = firebase.database().ref(`views/${boardType}/${itemId}`);
    viewRef.once('value', (snapshot) => {
      const count = snapshot.val() || defaultValue;
      if (callback) callback(count);
    }, (error) => {
      console.error('조회수 가져오기 실패:', error);
      if (callback) callback(defaultValue);
    });
  } catch (error) {
    console.error('조회수 가져오기 중 오류:', error);
    if (callback) callback(defaultValue);
  }
}

/**
 * 여러 항목의 조회수를 한 번에 가져오기
 * @param {string} boardType - 게시판 타입
 * @param {Array} itemIds - 항목 ID 배열
 * @param {function} callback - 조회수 맵을 받을 콜백 함수 (viewCounts) => {} (viewCounts는 {itemId: count} 형식)
 */
function getViewCountsBatch(boardType, itemIds, callback) {
  if (typeof firebase === 'undefined') {
    console.warn('Firebase가 로드되지 않았습니다.');
    if (callback) callback({});
    return;
  }

  try {
    const viewRef = firebase.database().ref(`views/${boardType}`);
    viewRef.once('value', (snapshot) => {
      const allViews = snapshot.val() || {};
      const result = {};
      
      itemIds.forEach((itemId) => {
        result[itemId] = allViews[itemId] || 0;
      });
      
      if (callback) callback(result);
    }, (error) => {
      console.error('조회수 일괄 가져오기 실패:', error);
      if (callback) callback({});
    });
  } catch (error) {
    console.error('조회수 일괄 가져오기 중 오류:', error);
    if (callback) callback({});
  }
}

/**
 * 실시간 조회수 구독 (조회수가 변경될 때마다 콜백 호출)
 * @param {string} boardType - 게시판 타입
 * @param {string|number} itemId - 항목 ID
 * @param {function} callback - 조회수 변경 시 호출될 콜백 함수 (count) => {}
 * @returns {function} 구독 해제 함수
 */
function subscribeViewCount(boardType, itemId, callback) {
  if (typeof firebase === 'undefined') {
    console.warn('Firebase가 로드되지 않았습니다.');
    return () => {}; // 빈 해제 함수 반환
  }

  try {
    const viewRef = firebase.database().ref(`views/${boardType}/${itemId}`);
    const handler = viewRef.on('value', (snapshot) => {
      const count = snapshot.val() || 0;
      if (callback) callback(count);
    }, (error) => {
      console.error('조회수 구독 실패:', error);
    });

    // 구독 해제 함수 반환
    return () => {
      viewRef.off('value', handler);
    };
  } catch (error) {
    console.error('조회수 구독 중 오류:', error);
    return () => {}; // 빈 해제 함수 반환
  }
}

