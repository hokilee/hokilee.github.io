// 경제상식 상세 페이지 스크립트

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
  console.log('경제상식 상세 페이지가 로드되었습니다.');
  
  // 뒤로가기 버튼 이벤트
  const backButton = document.querySelector('.back-button');
  if (backButton) {
    backButton.addEventListener('click', function(e) {
      e.preventDefault();
      window.history.back();
    });
  }
  
  // 조회수 증가 (로컬 스토리지 사용)
  incrementViewCount();
});

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
