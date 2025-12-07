// 경제상식 상세 페이지 스크립트

// api-config.js와 server-views.js 동적 로드 함수
function loadRequiredScripts(callback) {
  console.log('loadRequiredScripts 시작');
  console.log('현재 상태:', {
    incrementViewCount: typeof incrementViewCount,
    API_BASE_URL: window.API_BASE_URL
  });
  
  // 이미 로드되었는지 확인
  if (typeof incrementViewCount === 'function' && window.API_BASE_URL) {
    console.log('스크립트가 이미 로드되어 있습니다.');
    if (callback) callback();
    return;
  }
  
  // api-config.js 로드 (먼저 로드 필요)
  function loadApiConfig() {
    console.log('loadApiConfig 시작');
    if (window.API_BASE_URL) {
      console.log('API_BASE_URL이 이미 설정되어 있습니다:', window.API_BASE_URL);
      loadServerViews();
      return;
    }
    
    console.log('api-config.js 동적 로드 시작');
    const apiConfigScript = document.createElement('script');
    apiConfigScript.src = '../api-config.js';
    apiConfigScript.onload = () => {
      console.log('api-config.js 로드 완료. API_BASE_URL:', window.API_BASE_URL);
      loadServerViews();
    };
    apiConfigScript.onerror = () => {
      console.error('api-config.js 로드 실패');
      loadServerViews(); // 실패해도 계속 진행
    };
    document.head.appendChild(apiConfigScript);
  }
  
  // server-views.js 로드
  function loadServerViews() {
    console.log('loadServerViews 시작');
    if (typeof incrementViewCount === 'function') {
      console.log('incrementViewCount 함수가 이미 존재합니다.');
      if (callback) callback();
      return;
    }
    
    const existingScript = document.querySelector('script[src="../server-views.js"]');
    if (existingScript) {
      console.log('server-views.js 스크립트 태그가 이미 존재합니다.');
      existingScript.addEventListener('load', () => {
        console.log('기존 server-views.js 로드 완료');
        if (callback) callback();
      });
    } else {
      console.log('server-views.js 동적 로드 시작');
      const serverViewsScript = document.createElement('script');
      serverViewsScript.src = '../server-views.js';
      serverViewsScript.onload = () => {
        console.log('server-views.js 로드 완료. incrementViewCount:', typeof incrementViewCount);
        if (callback) callback();
      };
      serverViewsScript.onerror = () => {
        console.error('server-views.js 로드 실패');
        if (callback) callback(); // 실패해도 계속 진행
      };
      document.head.appendChild(serverViewsScript);
    }
  }
  
  loadApiConfig();
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
  console.log('경제상식 상세 페이지가 로드되었습니다.');
  
  // 현재 연도 표시
  setCurrentYear();
  
  // 좋아요 버튼 이벤트
  setupLikeButton();
  
  // 조회수 증가 (server-views.js의 전역 함수 사용)
  // 중복 호출 방지를 위해 세션 스토리지 사용
  const currentPath = window.location.pathname;
  const pageId = currentPath.split('-').pop().replace('.html', '');
  const boardType = 'economics'; // 경제상식 게시판 타입
  const viewKey = `view_incremented_${boardType}_${pageId}`;
  
  console.log('조회수 증가 시도:', { boardType, pageId, viewKey });
  
  // 이 세션에서 이미 조회수를 증가시켰는지 확인
  if (sessionStorage.getItem(viewKey)) {
    console.log('이 세션에서 이미 조회수를 증가시켰습니다. 세션 스토리지:', sessionStorage.getItem(viewKey));
    return;
  }
  
  // 필요한 스크립트 로드 후 조회수 증가
  loadRequiredScripts(() => {
    console.log('스크립트 로드 완료. incrementViewCount 함수 존재:', typeof incrementViewCount === 'function');
    console.log('API_BASE_URL:', window.API_BASE_URL);
    
    if (typeof incrementViewCount === 'function') {
      console.log('조회수 증가 함수 호출:', boardType, pageId);
      incrementViewCount(boardType, pageId);
      // 세션 스토리지에 표시하여 중복 호출 방지
      sessionStorage.setItem(viewKey, 'true');
      console.log('조회수 증가 완료. 세션 스토리지에 저장:', viewKey);
    } else {
      console.error('incrementViewCount 함수를 찾을 수 없습니다. server-views.js가 제대로 로드되었는지 확인하세요.');
    }
  });
});

// 현재 연도 설정
function setCurrentYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// 좋아요 버튼 설정
function setupLikeButton() {
  const likeButton = document.querySelector('.like');
  if (likeButton) {
    // 로컬 스토리지에서 좋아요 수 불러오기
    const currentUrl = window.location.pathname;
    const likeCounts = JSON.parse(localStorage.getItem('economicsLikeCounts') || '{}');
    const currentLikes = likeCounts[currentUrl] || 0;
    
    // 좋아요 수 표시
    const likeCountSpan = document.getElementById('likeCount');
    if (likeCountSpan) {
      likeCountSpan.textContent = currentLikes;
    }
    
    // 좋아요 버튼 클릭 이벤트
    likeButton.addEventListener('click', function() {
      likePost();
    });
  }
}

// 좋아요 기능
function likePost() {
  const currentUrl = window.location.pathname;
  const likeCounts = JSON.parse(localStorage.getItem('economicsLikeCounts') || '{}');
  
  if (likeCounts[currentUrl]) {
    likeCounts[currentUrl]++;
  } else {
    likeCounts[currentUrl] = 1;
  }
  
  localStorage.setItem('economicsLikeCounts', JSON.stringify(likeCounts));
  
  // 화면에 좋아요 수 업데이트
  const likeCountSpan = document.getElementById('likeCount');
  if (likeCountSpan) {
    likeCountSpan.textContent = likeCounts[currentUrl];
  }
  
  // 좋아요 버튼 애니메이션
  const likeButton = document.querySelector('.like');
  if (likeButton) {
    likeButton.style.transform = 'scale(1.1)';
    setTimeout(() => {
      likeButton.style.transform = 'scale(1)';
    }, 200);
  }
  
  console.log('좋아요가 추가되었습니다!');
}

// 이 함수는 server-views.js의 전역 함수를 사용하므로 제거됨

// 페이지 제목 동적 설정
function setPageTitle(title) {
  document.title = title + ' - 경제상식 | 이호기';
}
