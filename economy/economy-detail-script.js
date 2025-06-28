document.addEventListener('DOMContentLoaded', () => {
  const pageKey = window.location.pathname;
  const likeSpan = document.getElementById('likeCount');

  const savedLikes = localStorage.getItem('like-' + pageKey);
  if (savedLikes && likeSpan) {
    likeSpan.innerText = savedLikes;
  }

  window.likePost = function () {
    let currentLikes = parseInt(likeSpan.innerText);
    currentLikes += 1;
    likeSpan.innerText = currentLikes;
    localStorage.setItem('like-' + pageKey, currentLikes);
  };
});
