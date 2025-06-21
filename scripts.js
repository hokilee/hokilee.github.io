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

  // ✅ 음악 선택 드롭다운 기능 (자동 생성 + 선택 시 재생)
  const musicList = [
    'cozycoffeehouse.mp3',
    'dawnofchange.mp3',
    'firesidechat.mp3',
    'hearty.mp3',
    'moonlightdrive.mp3',
    'prism.mp3',
    'slowlife.mp3',
    'yesterday.mp3',
  ];

  const selector = document.getElementById('musicSelector');
  const player = document.getElementById('audioPlayer');
  const source = document.getElementById('audioSource');

  if (selector && player && source) {
    // 드롭다운 옵션 자동 생성
    musicList.forEach((filename) => {
      const option = document.createElement('option');
      option.value = filename;
      option.textContent = filename.replace('.mp3', '').replace(/[-_]/g, ' ');
      selector.appendChild(option);
    });

    // 기본 첫 곡 설정 및 재생
    source.src = `music/${musicList[0]}`;
    player.load();
    player.play();

    // 선택 시 음악 재생
    selector.addEventListener('change', () => {
      const selected = selector.value;
      source.src = `music/${selected}`;
      player.load();
      player.play();
    });
  }
});

// 음악 토글 버튼 (예전 bgm 재생용 기능, 필요 없으면 제거해도 무방)
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
  if (
    window.location.href.includes('trivia-detail') ||
    window.location.href.includes('thought-detail')
  ) {
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
    window.location.href.includes('trivia-board') ||
    window.location.href.includes('thought-board')
  ) {
    markNewInTable();
  }
});
