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
 * 게시판 목록에서 "New" 배지 표시 (테이블 형식)
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
 * 게시판 목록에서 "New" 배지 자동 관리 (리스트 형식)
 */
function autoManageNewBadges() {
  const boardItems = document.querySelectorAll('.board-item');
  const today = getTodayDate();

  boardItems.forEach((item) => {
    const dateElement = item.querySelector('.date');
    const titleElement = item.querySelector('h3');

    if (!dateElement || !titleElement) return;

    const postDate = dateElement.textContent.trim();
    const existingBadge = titleElement.querySelector('.new-badge');

    if (isToday(postDate)) {
      // 오늘 날짜인데 배지가 없으면 추가
      if (!existingBadge) {
        const badge = document.createElement('span');
        badge.className = 'new-badge';
        badge.textContent = 'New';
        titleElement.appendChild(badge);
      }
    } else {
      // 오늘 날짜가 아닌데 배지가 있으면 제거
      if (existingBadge) {
        existingBadge.remove();
      }
    }
  });
}

/**
 * 메인 페이지에서 콘텐츠 링크에 "New" 배지 표시
 */
function markNewInMainPage() {
  const today = getTodayDate();

  fetch('latest_posts.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('네트워크 응답이 올바르지 않습니다.');
      }
      return response.json();
    })
    .then((latestPosts) => {
      // "오늘의 한줄 지식/잡학" (trivia) 확인
      const triviaLink = document.getElementById('trivia-link');
      if (triviaLink && latestPosts.trivia === today) {
        const newBadge = createNewBadge();
        triviaLink.parentNode.appendChild(newBadge);
      }

      // "이호기의 하루 한생각" (thought) 확인
      const thoughtLink = document.getElementById('thought-link');
      if (thoughtLink && latestPosts.thought === today) {
        const newBadge = createNewBadge();
        thoughtLink.parentNode.appendChild(newBadge);
      }

      // "오늘의 기술 팁" 확인
      const techTipsLink = document.querySelector(
        'a[href="tech-tips-board.html"]'
      );
      if (techTipsLink && latestPosts.techTips === today) {
        const newBadge = createNewBadge();
        techTipsLink.parentNode.appendChild(newBadge);
      }

      // "오늘의 경제 상식" 확인
      const economyLink = document.querySelector(
        'a[href="economy-board.html"]'
      );
      if (economyLink && latestPosts.economy === today) {
        const newBadge = createNewBadge();
        economyLink.parentNode.appendChild(newBadge);
      }

      // "오늘의 자기계발" 확인
      const selfImprovementLink = document.querySelector(
        'a[href="self-improvement-board.html"]'
      );
      if (selfImprovementLink && latestPosts.selfImprovement === today) {
        const newBadge = createNewBadge();
        selfImprovementLink.parentNode.appendChild(newBadge);
      }

      // 미리보기 내용 업데이트
      updateAllPreviews(latestPosts, today);
    })
    .catch((error) => {
      console.error('최신 게시물 정보를 불러오는 데 실패했습니다:', error);
    });
}

/**
 * 모든 미리보기 내용을 업데이트
 */
function updateAllPreviews(latestPosts, today) {
  // 각 카테고리별로 미리보기 업데이트
  updatePreviewForCategory('trivia', latestPosts.trivia, today);
  updatePreviewForCategory('thought', latestPosts.thought, today);
  updatePreviewForCategory('tech', latestPosts.techTips, today);
  updatePreviewForCategory('economy', latestPosts.economy, today);
  updatePreviewForCategory(
    'self-improvement',
    latestPosts.selfImprovement,
    today
  );
}

/**
 * 특정 카테고리의 미리보기 업데이트
 */
function updatePreviewForCategory(category, latestDate, today) {
  const previewElement = document.getElementById(`${category}-preview`);
  if (!previewElement) return;

  // 오늘 날짜와 비교
  if (latestDate === today) {
    // 오늘 업데이트된 경우 - 최신 게시물 표시
    const latestPost = getLatestPostForCategory(category);
    if (latestPost) {
      previewElement.innerHTML = `
        <div class="preview-item">
          <span class="preview-number">#${latestPost.number}</span>
          <span class="preview-title">${latestPost.title}</span>
          <span class="preview-date">(${today})</span>
        </div>
      `;
    } else {
      // 게시물 정보를 찾을 수 없는 경우
      previewElement.innerHTML = `
        <div class="preview-item">
          <span class="preview-title">오늘 새로운 게시물이 업데이트되었습니다</span>
          <span class="preview-date">(${today})</span>
        </div>
      `;
    }
  } else {
    // 오늘 업데이트되지 않은 경우 - "없음" 표시
    previewElement.innerHTML = `
      <div class="preview-item">
        <span class="preview-title">없음</span>
      </div>
    `;
  }
}

/**
 * 카테고리별 최신 게시물 정보 반환
 */
function getLatestPostForCategory(category) {
  const latestPosts = {
    trivia: { number: '18', title: '코카콜라는 처음엔 약이었다' },
    thought: { number: '19', title: '한 번에 하나씩' },
    tech: { number: '7', title: '강력한 비밀번호 만드는 방법' },
    economy: { number: '7', title: '프로토콜 경제(Protocol Economy)' },
    'self-improvement': { number: '7', title: '시간을 아끼는 이메일 정리법' },
  };

  return latestPosts[category] || null;
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
 * 메인 페이지의 실시간 정보(날짜/시간) 초기화
 */
function initializeRealtimeInfo() {
  const datetimeElement = document.getElementById('datetime-info');
  if (!datetimeElement) return;

  // 1. 날짜 및 시간 표시
  const updateDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const day = ['일', '월', '화', '수', '목', '금', '토'][now.getDay()];
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    datetimeElement.textContent = `${year}년 ${month}월 ${date}일 (${day}) ${hours}:${minutes}:${seconds}`;
  };

  updateDateTime();
  setInterval(updateDateTime, 1000);
}

/**
 * 메인 페이지의 Sticky 제목 기능 초기화
 */
function initializeStickyTitle() {
  const titleBox = document.querySelector('.header-title-box');
  if (!titleBox) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      // isIntersecting이 false이면, titleBox가 뷰포트 상단으로 사라졌다는 의미
      titleBox.classList.toggle('is-sticky', !entry.isIntersecting);
    },
    { threshold: 1.0 } // titleBox가 100% 보일 때와 아닐 때를 감지
  );

  observer.observe(titleBox);
}

/**
 * 페이지별 기능 초기화
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
    currentPath.includes('thought-board') ||
    currentPath.includes('economy-board') ||
    currentPath.includes('tech-tips-board') ||
    currentPath.includes('self-improvement-board')
  ) {
    markNewInBoardList();
    autoManageNewBadges();
  }

  // 메인 페이지
  if (currentPath.endsWith('index.html') || currentPath.endsWith('/')) {
    markNewInMainPage();
    initializeRealtimeInfo();
    initializeStickyTitle(); // 메인 페이지에 Sticky 제목 기능 추가
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
