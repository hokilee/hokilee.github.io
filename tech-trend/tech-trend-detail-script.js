// 기술 트렌드/뉴스 상세 페이지 스크립트

// 연도 표시
document.addEventListener('DOMContentLoaded', function () {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
