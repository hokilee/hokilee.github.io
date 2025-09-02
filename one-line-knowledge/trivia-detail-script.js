// 트리비아 상세 페이지 스크립트

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function () {
  // 연도 표시
  updateYear();

  // 좋아요 수 로드
  loadLikeCount();

  // 읽기 진행률 표시 (선택사항)
  showReadingProgress();
});

// 연도 업데이트
function updateYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// 좋아요 기능
function likePost() {
  const likeCountElement = document.getElementById('likeCount');
  const currentCount = parseInt(localStorage.getItem('likeCount_72') || '0');
  const newCount = currentCount + 1;

  // 로컬 스토리지에 저장
  localStorage.setItem('likeCount_72', newCount.toString());

  // 화면 업데이트
  likeCountElement.textContent = newCount;

  // 좋아요 버튼 애니메이션
  const likeButton = document.querySelector('.like');
  likeButton.style.transform = 'scale(1.1)';
  likeButton.style.background = 'linear-gradient(135deg, #ff8e8e, #ff6b6b)';

  setTimeout(() => {
    likeButton.style.transform = 'scale(1)';
    likeButton.style.background = 'linear-gradient(135deg, #ff6b6b, #ee5a24)';
  }, 200);

  // 성공 메시지
  showMessage('❤️ 공감해주셔서 감사합니다!');
}

// 좋아요 수 로드
function loadLikeCount() {
  const likeCountElement = document.getElementById('likeCount');
  if (likeCountElement) {
    const savedCount = localStorage.getItem('likeCount_72') || '0';
    likeCountElement.textContent = savedCount;
  }
}

// 메시지 표시
function showMessage(message) {
  // 기존 메시지 제거
  const existingMessage = document.querySelector('.message-popup');
  if (existingMessage) {
    existingMessage.remove();
  }

  // 새 메시지 생성
  const messagePopup = document.createElement('div');
  messagePopup.className = 'message-popup';
  messagePopup.textContent = message;
  messagePopup.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        padding: 15px 25px;
        border-radius: 50px;
        font-weight: 600;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        animation: slideInRight 0.5s ease-out;
    `;

  // 애니메이션 CSS 추가
  const style = document.createElement('style');
  style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
  document.head.appendChild(style);

  document.body.appendChild(messagePopup);

  // 3초 후 자동 제거
  setTimeout(() => {
    messagePopup.style.animation = 'slideOutRight 0.5s ease-in';
    messagePopup.style.transform = 'translateX(100%)';
    messagePopup.style.opacity = '0';

    setTimeout(() => {
      if (messagePopup.parentNode) {
        messagePopup.remove();
      }
    }, 500);
  }, 3000);
}

// 읽기 진행률 표시 (선택사항)
function showReadingProgress() {
  // 스크롤 이벤트 리스너
  window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    // 진행률 바 표시 (선택사항)
    updateReadingProgressBar(scrollPercent);
  });
}

// 읽기 진행률 바 업데이트 (선택사항)
function updateReadingProgressBar(percent) {
  let progressBar = document.querySelector('.reading-progress-bar');

  if (!progressBar) {
    progressBar = document.createElement('div');
    progressBar.className = 'reading-progress-bar';
    progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: ${percent}%;
            height: 4px;
            background: linear-gradient(90deg, #667eea, #764ba2);
            z-index: 1000;
            transition: width 0.3s ease;
        `;
    document.body.appendChild(progressBar);
  } else {
    progressBar.style.width = percent + '%';
  }
}

// 뒤로가기 버튼 클릭 시 확인
document.addEventListener('DOMContentLoaded', function () {
  const backButton = document.querySelector('.back');
  if (backButton) {
    backButton.addEventListener('click', function (e) {
      // 읽기 시간이 짧으면 확인 메시지 표시
      const readingTime = Date.now() - window.pageLoadTime;
      if (readingTime < 5000) {
        // 5초 미만
        const confirmed = confirm('정말 목록으로 돌아가시겠습니까?');
        if (!confirmed) {
          e.preventDefault();
        }
      }
    });
  }

  // 페이지 로드 시간 기록
  window.pageLoadTime = Date.now();
});

// 키보드 단축키
document.addEventListener('keydown', function (e) {
  // ESC 키로 뒤로가기
  if (e.key === 'Escape') {
    const backButton = document.querySelector('.back');
    if (backButton) {
      backButton.click();
    }
  }

  // 스페이스바로 스크롤
  if (e.key === ' ' && e.target === document.body) {
    e.preventDefault();
    window.scrollBy(0, window.innerHeight * 0.8);
  }
});

// 이미지 클릭 시 확대
document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.content img');
  images.forEach((img) => {
    img.addEventListener('click', function () {
      if (this.style.transform === 'scale(1.5)') {
        this.style.transform = 'scale(1)';
        this.style.cursor = 'zoom-in';
      } else {
        this.style.transform = 'scale(1.5)';
        this.style.cursor = 'zoom-out';
      }
    });

    // 초기 커서 설정
    img.style.cursor = 'zoom-in';
  });
});
