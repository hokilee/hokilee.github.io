// 현재 연도를 footer에 자동으로 표시
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', () => {
  const likeSpan = document.getElementById('likeCount');
  if (!likeSpan) return;

  const pageKey = window.location.pathname;
  const savedLikes = localStorage.getItem('like-' + pageKey);
  if (savedLikes) {
    likeSpan.innerText = savedLikes;
  }

  window.likePost = function () {
    let currentLikes = parseInt(likeSpan.innerText);
    currentLikes += 1;
    likeSpan.innerText = currentLikes;
    localStorage.setItem('like-' + pageKey, currentLikes);
  };
});
