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

// 조회수 증가 함수
function incrementViewCount() {
  const currentUrl = window.location.pathname;
  const viewCounts = JSON.parse(localStorage.getItem('economicsViewCounts') || '{}');
  
  if (viewCounts[currentUrl]) {
    viewCounts[currentUrl]++;
  } else {
    viewCounts[currentUrl] = 1;
  }
  
  localStorage.setItem('economicsViewCounts', JSON.stringify(viewCounts));
}

// 페이지 제목 동적 설정
function setPageTitle(title) {
  document.title = title + ' - 경제상식 | 이호기';
}
