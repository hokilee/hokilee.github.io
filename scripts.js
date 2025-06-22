/**
 * Hoki Lee Personal Website - Main JavaScript
 * 주요 기능: 음악 플레이어, 좋아요 시스템, "New" 배지 표시
 */

// ===== 전역 변수 및 설정 =====
const MUSIC_LIST = [
  'cozycoffeehouse.mp3',
  'dawnofchange.mp3',
  'firesidechat.mp3',
  'hearty.mp3',
  'moonlightdrive.mp3',
  'prism.mp3',
  'slowlife.mp3',
  'yesterday.mp3',
];

// ===== 유틸리티 함수 =====

/**
 * 한국 시간 기준 오늘 날짜를 YYYY-MM-DD 형식으로 반환
 */
function getTodayDate() {
  const today = new Date();
  today.setHours(today.getHours() + 9); // UTC+9 (한국 시간)
  return today.toISOString().slice(0, 10);
}

/**
 * 날짜 문자열이 오늘 날짜와 같은지 확인
 */
function isToday(dateString) {
  return dateString === getTodayDate();
}

/**
 * "New" 배지를 생성하는 함수 (박스 스타일)
 */
function createNewBadge() {
  const badge = document.createElement('span');
  badge.className = 'new-badge';
  badge.textContent = ' "New"';
  return badge;
}

/**
 * "New" 배지를 생성하는 함수 (게시판 목록용 텍스트 스타일)
 */
function createNewBadgeForBoard() {
  const badge = document.createElement('span');
  badge.className = 'new-badge-text';
  badge.textContent = ' "New"';
  return badge;
}

// ===== 음악 플레이어 기능 =====

/**
 * 음악 플레이어 초기화
 */
function initializeMusicPlayer() {
  const selector = document.getElementById('musicSelector');
  const player = document.getElementById('audioPlayer');
  const source = document.getElementById('audioSource');

  if (!selector || !player || !source) return;

  // 드롭다운 옵션 생성
  MUSIC_LIST.forEach((filename) => {
    const option = document.createElement('option');
    option.value = filename;
    option.textContent = filename.replace('.mp3', '').replace(/[-_]/g, ' ');
    selector.appendChild(option);
  });

  // 기본 첫 곡 설정 및 재생
  source.src = `music/${MUSIC_LIST[0]}`;
  player.load();
  player.play().catch((e) => console.log('자동 재생 실패:', e));

  // 선택 시 음악 재생
  selector.addEventListener('change', () => {
    const selected = selector.value;
    source.src = `music/${selected}`;
    player.load();
    player.play().catch((e) => console.log('음악 재생 실패:', e));
  });
}

/**
 * 배경 음악 토글 (기존 bgm용)
 */
function toggleBackgroundMusic() {
  const audio = document.getElementById('bgm');
  const button = document.getElementById('musicButton');

  if (!audio || !button) return;

  if (audio.paused) {
    audio.play().catch((e) => console.log('배경음악 재생 실패:', e));
    button.textContent = '⏸ 음악 끄기';
  } else {
    audio.pause();
    button.textContent = '🎵 음악 켜기';
  }
}

// ===== 좋아요 시스템 =====

/**
 * 좋아요 기능 초기화
 */
function initializeLikeSystem() {
  const likeSpan = document.getElementById('likeCount');
  if (!likeSpan) return;

  const pageKey = window.location.pathname;
  const savedLikes = localStorage.getItem(`like-${pageKey}`);

  if (savedLikes) {
    likeSpan.innerText = savedLikes;
  }

  // 전역 함수로 등록
  window.likePost = function () {
    let currentLikes = parseInt(likeSpan.innerText, 10) || 0;
    currentLikes += 1;
    likeSpan.innerText = currentLikes;
    localStorage.setItem(`like-${pageKey}`, currentLikes);
  };
}

// ===== "New" 배지 시스템 =====

/**
 * 상세 페이지에서 "New" 배지 표시
 */
function markNewInDetailPage() {
  const dateElement = document.querySelector('.date');
  const titleElement = document.querySelector('h1');

  if (!dateElement || !titleElement) return;

  const postDate = dateElement.textContent.trim();
  if (isToday(postDate)) {
    const badge = createNewBadgeForBoard();
    titleElement.appendChild(badge);
  }
}

/**
 * 게시판 목록에서 "New" 배지 표시
 */
function markNewInBoardList() {
  const rows = document.querySelectorAll('tbody tr');
  const today = getTodayDate();

  rows.forEach((row) => {
    const dateCell = row.querySelector('td:last-child');
    const titleCell = row.querySelector('td.title a');

    if (dateCell && titleCell && dateCell.textContent.trim() === today) {
      const badge = createNewBadgeForBoard();
      titleCell.parentNode.appendChild(badge);
    }
  });
}

/**
 * 메인 페이지에서 콘텐츠 링크에 "New" 배지 표시
 */
function markNewInMainPage() {
  const today = getTodayDate();

  // trivia와 thought 링크에 "New" 배지 추가
  const contentTypes = [
    {
      urls: ['trivia-board.html', 'trivia-board-2.html'],
      linkId: 'trivia-link',
    },
    {
      urls: ['thought-board.html', 'thought-board-2.html'],
      linkId: 'thought-link',
    },
  ];

  contentTypes.forEach(({ urls, linkId }) => {
    let hasNewContent = false;
    let checkedCount = 0;

    urls.forEach((url) => {
      fetch(url)
        .then((response) => response.text())
        .then((html) => {
          // 더 정확한 날짜 확인: <td class="date">2025-06-22</td> 형태 찾기
          const datePattern = new RegExp(`<td class="date">${today}</td>`, 'g');
          if (datePattern.test(html)) {
            hasNewContent = true;
          }

          checkedCount++;
          if (checkedCount === urls.length) {
            // 모든 페이지 확인 완료 후 배지 추가
            if (hasNewContent) {
              const link = document.getElementById(linkId);
              if (link) {
                const newBadge = createNewBadge();
                link.parentNode.appendChild(newBadge);
              }
            }
          }
        })
        .catch((error) => {
          console.log(`${url} 확인 실패:`, error);
          checkedCount++;
          if (checkedCount === urls.length && hasNewContent) {
            const link = document.getElementById(linkId);
            if (link) {
              const newBadge = createNewBadge();
              link.parentNode.appendChild(newBadge);
            }
          }
        });
    });
  });
}

// ===== 연도 표시 =====

/**
 * 푸터에 현재 연도 표시
 */
function updateFooterYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// ===== 페이지별 초기화 =====

/**
 * 현재 페이지에 따른 기능 초기화
 */
function initializePageFeatures() {
  const currentPath = window.location.pathname;

  // 공통 기능
  updateFooterYear();
  initializeLikeSystem();

  // 음악 플레이어 페이지
  if (currentPath.includes('music-player.html')) {
    initializeMusicPlayer();
  }

  // 상세 페이지 (trivia-detail 또는 thought-detail)
  if (
    currentPath.includes('trivia-detail') ||
    currentPath.includes('thought-detail')
  ) {
    markNewInDetailPage();
  }

  // 게시판 페이지 (trivia-board 또는 thought-board)
  if (
    currentPath.includes('trivia-board') ||
    currentPath.includes('thought-board')
  ) {
    markNewInBoardList();
  }

  // 메인 페이지
  if (currentPath.endsWith('index.html') || currentPath.endsWith('/')) {
    markNewInMainPage();
  }
}

// ===== 이벤트 리스너 =====

/**
 * DOM 로드 완료 시 초기화
 */
document.addEventListener('DOMContentLoaded', () => {
  initializePageFeatures();
});

// ===== 전역 함수 등록 =====

// 기존 호환성을 위한 전역 함수들
window.toggleMusic = toggleBackgroundMusic;
