// 현재 연도를 footer에 자동으로 표시
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// 좋아요 버튼 및 localStorage 처리
document.addEventListener('DOMContentLoaded', () => {
  const likeSpan = document.getElementById('likeCount');
  if (likeSpan) {
    const pageKey = window.location.pathname;
    const savedLikes = localStorage.getItem('like-' + pageKey);
    if (savedLikes) {
      likeSpan.innerText = savedLikes;
    }

    window.likePost = function () {
      let currentLikes = parseInt(likeSpan.innerText, 10) || 0;
      currentLikes += 1;
      likeSpan.innerText = currentLikes;
      localStorage.setItem('like-' + pageKey, currentLikes);
    };
  }
});

// 음악 토글 버튼
function toggleMusic() {
  const audio = document.getElementById('bgm');
  const button = document.getElementById('musicButton');

  if (audio.paused) {
    audio.play();
    button.textContent = '⏸ 음악 끄기';
  } else {
    audio.pause();
    button.textContent = '🎵 음악 켜기';
  }
}

// ✅ 한국 시간 기준 "New" 처리 기능
document.addEventListener('DOMContentLoaded', () => {
  const today = new Date();
  today.setHours(today.getHours() + 9); // UTC+9
  const todayStr = today.toISOString().slice(0, 10);

  // ✅ 상세 페이지: 제목 옆에 "New"
  const dateElement = document.querySelector('.date');
  const titleElement = document.querySelector('h1');

  if (dateElement && titleElement) {
    const postDate = dateElement.textContent.trim();
    if (postDate === todayStr) {
      const badge = document.createElement('span');
      badge.className = 'new-badge';
      badge.textContent = ' "New"';
      titleElement.appendChild(badge);
    }
  }

  // ✅ 메뉴: index.html에서 "New" 표시
  function checkNewContent(pageUrl, linkId) {
    fetch(pageUrl)
      .then((response) => response.text())
      .then((html) => {
        if (html.includes(todayStr)) {
          const link = document.getElementById(linkId);
          if (link) {
            const newBadge = document.createElement('span');
            newBadge.textContent = ' "New"';
            newBadge.classList.add('new-badge');
            link.parentNode.appendChild(newBadge);
          }
        }
      });
  }

  // trivia-link / thought-link는 index.html에서 각 메뉴에 id 부여해야 함
  checkNewContent('trivia-board.html', 'trivia-link');
  checkNewContent('thought-board.html', 'thought-link');

  // ✅ 게시판 목록 제목 옆에 "New" 표시
  function markNewInTable() {
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach((row) => {
      const dateCell = row.querySelector('td:last-child');
      const titleCell = row.querySelector('td.title a');
      if (dateCell && titleCell && dateCell.textContent.trim() === todayStr) {
        const badge = document.createElement('span');
        badge.textContent = ' "New"';
        badge.classList.add('new-badge');
        titleCell.parentNode.appendChild(badge);
      }
    });
  }

  if (
    window.location.href.includes('trivia-board.html') ||
    window.location.href.includes('thought-board.html')
  ) {
    markNewInTable();
  }
});
