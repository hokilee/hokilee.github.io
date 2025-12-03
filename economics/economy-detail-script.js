// 경제상식 상세 페이지 스크립트

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
  console.log('경제상식 상세 페이지가 로드되었습니다.');
  
  // 현재 연도 표시
  setCurrentYear();
  
  // 좋아요 버튼 이벤트
  setupLikeButton();
  
  // 조회수 증가
  incrementViewCount();
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

// 조회수 증가 함수 (Firebase 사용)
function incrementViewCount() {
  const currentPath = window.location.pathname;
  const pageId = currentPath.split('-').pop().replace('.html', '');
  const boardType = 'economics'; // 경제상식 게시판 타입

  // Firebase를 사용한 조회수 증가
  if (typeof firebase !== 'undefined') {
    const viewRef = firebase.database().ref(`views/${boardType}/${pageId}`);
    viewRef.transaction((current) => {
      return (current || 0) + 1;
    }, (error, committed, snapshot) => {
      if (!error && committed) {
        console.log(`경제상식 페이지 ${pageId} 조회수: ${snapshot.val()}`);
      } else if (error) {
        console.error('조회수 증가 실패:', error);
      }
    });
  } else {
    console.warn('Firebase가 로드되지 않았습니다. 조회수는 증가하지 않습니다.');
  }
}

// 페이지 제목 동적 설정
function setPageTitle(title) {
  document.title = title + ' - 경제상식 | 이호기';
}
