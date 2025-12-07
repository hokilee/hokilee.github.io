// 과학적 상식 Detail 페이지 스크립트

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
document.addEventListener('DOMContentLoaded', function () {
  // 연도 표시
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 조회수 증가 (server-views.js의 전역 함수 사용)
  // 중복 호출 방지를 위해 세션 스토리지 사용
  const currentPath = window.location.pathname;
  const pageId = currentPath.split('-').pop().replace('.html', '');
  const boardType = 'science'; // 일반상식 게시판 타입
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

// 좋아요 기능 (향후 확장용)
function likePost() {
  const likeCountElement = document.getElementById('likeCount');
  if (likeCountElement) {
    let currentLikes = parseInt(likeCountElement.textContent) || 0;
    currentLikes++;
    likeCountElement.textContent = currentLikes;

    // 로컬 스토리지에 저장
    const currentPath = window.location.pathname;
    const pageId = currentPath.split('-').pop().replace('.html', '');
    const likeCounts = JSON.parse(
      localStorage.getItem('scienceLikeCounts') || '{}'
    );
    likeCounts[pageId] = currentLikes;
    localStorage.setItem('scienceLikeCounts', JSON.stringify(likeCounts));

    // 좋아요 버튼 비활성화
    const likeButton = document.querySelector('.like');
    if (likeButton) {
      likeButton.disabled = true;
      likeButton.style.opacity = '0.6';
      likeButton.textContent = `❤️ 공감했어요 (${currentLikes})`;
    }
  }
}

// 페이지 로드 시 좋아요 상태 복원
function restoreLikeState() {
  const currentPath = window.location.pathname;
  const pageId = currentPath.split('-').pop().replace('.html', '');
  const likeCounts = JSON.parse(
    localStorage.getItem('scienceLikeCounts') || '{}'
  );

  if (likeCounts[pageId]) {
    const likeCountElement = document.getElementById('likeCount');
    if (likeCountElement) {
      likeCountElement.textContent = likeCounts[pageId];
    }

    // 이미 좋아요를 눌렀다면 버튼 비활성화
    const likeButton = document.querySelector('.like');
    if (likeButton && likeCounts[pageId] > 0) {
      likeButton.disabled = true;
      likeButton.style.opacity = '0.6';
    }
  }
}

// 페이지 로드 시 좋아요 상태 복원 실행
document.addEventListener('DOMContentLoaded', restoreLikeState);

// 페이지 제목 동적 설정
function setPageTitle(title) {
  document.title = title + ' - 과학적 상식 | 이호기';
}

// 실험/관찰 결과 하이라이트
function highlightExperiment(element) {
  element.classList.add('experiment');
}

// 중요 개념 하이라이트
function highlightConcept(element) {
  element.classList.add('highlight');
}
