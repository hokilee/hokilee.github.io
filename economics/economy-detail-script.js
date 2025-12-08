// 경제상식 상세 페이지 스크립트

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
  // 현재 연도 표시
  setCurrentYear();
  
  // 좋아요 버튼 이벤트
  setupLikeButton();
  
  // 조회수 증가 (Firebase 사용)
  // 중복 호출 방지를 위해 세션 스토리지 사용
  const currentPath = window.location.pathname;
  const pageId = currentPath.split('-').pop().replace('.html', '');
  const boardType = 'economics'; // 경제상식 게시판 타입
  const viewKey = `view_incremented_${boardType}_${pageId}`;
  
  // 이 세션에서 이미 조회수를 증가시켰는지 확인
  if (sessionStorage.getItem(viewKey)) {
    return;
  }
  
  // Firebase를 사용한 조회수 증가
  if (typeof firebase !== 'undefined') {
    const viewRef = firebase.database().ref(`views/${boardType}/${pageId}`);
    viewRef.transaction((current) => {
      return (current || 0) + 1;
    }, (error, committed, snapshot) => {
      if (error) {
        console.error('조회수 증가 실패:', error);
      } else if (committed) {
        console.log(`조회수 증가: ${boardType}/${pageId} = ${snapshot.val()}`);
        // 세션 스토리지에 표시하여 중복 호출 방지
        sessionStorage.setItem(viewKey, 'true');
      }
    });
  } else {
    console.warn('Firebase가 로드되지 않았습니다. 조회수는 증가하지 않습니다.');
  }
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
