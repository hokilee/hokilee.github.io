// 하루 한 생각 상세 페이지 스크립트
// 한줄 지식/잡학과 동일한 기능 제공

// 연도 표시 업데이트
function updateYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// 공감 버튼 기능
function likePost() {
  const likeCountElement = document.getElementById('likeCount');
  if (likeCountElement) {
    let currentCount = parseInt(likeCountElement.textContent) || 0;
    currentCount++;
    likeCountElement.textContent = currentCount;

    // 로컬 스토리지에 저장
    const postId = window.location.pathname
      .split('/')
      .pop()
      .replace('.html', '');
    localStorage.setItem(`likeCount_${postId}`, currentCount);

    // 공감 메시지 표시
    showMessage('공감해주셔서 감사합니다! ❤️');
  }
}

// 공감 수 로드
function loadLikeCount() {
  const likeCountElement = document.getElementById('likeCount');
  if (likeCountElement) {
    const postId = window.location.pathname
      .split('/')
      .pop()
      .replace('.html', '');
    const savedCount = localStorage.getItem(`likeCount_${postId}`);
    if (savedCount) {
      likeCountElement.textContent = savedCount;
    }
  }
}

// 메시지 표시
function showMessage(message) {
  const messageDiv = document.createElement('div');
  messageDiv.textContent = message;
  messageDiv.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #4CAF50;
    color: white;
    padding: 15px 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    z-index: 1000;
    font-size: 1rem;
    animation: slideIn 0.3s ease-out;
  `;

  document.body.appendChild(messageDiv);

  setTimeout(() => {
    messageDiv.style.animation = 'slideOut 0.3s ease-in';
    setTimeout(() => {
      document.body.removeChild(messageDiv);
    }, 300);
  }, 2000);
}

// 읽기 진행률 표시
function showReadingProgress() {
  const progressBar = document.createElement('div');
  progressBar.id = 'reading-progress';
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #90caf9, #e1bee7);
    z-index: 1000;
    transition: width 0.3s ease;
  `;

  document.body.appendChild(progressBar);

  window.addEventListener('scroll', updateReadingProgressBar);
  updateReadingProgressBar();
}

// 읽기 진행률 업데이트
function updateReadingProgressBar() {
  const progressBar = document.getElementById('reading-progress');
  if (progressBar) {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
  }
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function () {
  // 연도 업데이트
  updateYear();

  // 공감 수 로드
  loadLikeCount();

  // 읽기 진행률 표시
  showReadingProgress();

  // 뒤로가기 버튼 클릭 시 확인 (짧은 읽기 시간일 경우)
  const backButton = document.querySelector('.back');
  if (backButton) {
    backButton.addEventListener('click', function (e) {
      const pageLoadTime = window.pageLoadTime || Date.now();
      const currentTime = Date.now();
      const readingTime = currentTime - pageLoadTime;

      // 10초 미만 읽었을 경우 확인
      if (readingTime < 10000) {
        if (
          !confirm('아직 읽는 중인 것 같은데, 정말 목록으로 돌아가시겠어요?')
        ) {
          e.preventDefault();
        }
      }
    });
  }

  // 키보드 단축키
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      // ESC 키로 뒤로가기
      if (confirm('목록으로 돌아가시겠어요?')) {
        window.history.back();
      }
    } else if (e.key === ' ') {
      // 스페이스바로 스크롤
      e.preventDefault();
      window.scrollBy(0, window.innerHeight * 0.8);
    }
  });

  // 페이지 로드 시간 기록
  window.pageLoadTime = Date.now();
});

// CSS 애니메이션 추가
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
