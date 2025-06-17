// 현재 연도를 footer에 자동으로 표시
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', () => {
  const likeSpan = document.getElementById('likeCount');
  if (!likeSpan) return;

  // 페이지 경로를 키로 사용하여 localStorage에서 좋아요 수 불러오기
  const pageKey = window.location.pathname;
  const savedLikes = localStorage.getItem('like-' + pageKey);
  if (savedLikes) {
    likeSpan.innerText = savedLikes;
  }

  // 전역 함수로 등록된 '공감했어요' 버튼 클릭 시 동작
  window.likePost = function () {
    let currentLikes = parseInt(likeSpan.innerText, 10) || 0;
    currentLikes += 1;
    likeSpan.innerText = currentLikes;

    // 페이지별로 localStorage에 좋아요 수 저장
    localStorage.setItem('like-' + pageKey, currentLikes);
  };
});
