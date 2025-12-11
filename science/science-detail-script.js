// 과학적 상식 Detail 페이지 스크립트

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function () {
  // 연도 표시
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

// 좋아요 기능 (향후 확장용)
function likePost() {
  const likeCountElement = document.getElementById('likeCount');
  if (likeCountElement) {
    let currentLikes = parseInt(likeCountElement.textContent) || 0;
    currentLikes++;
    likeCountElement.textContent = currentLikes;

    // 로컬 스토리지에 저장
    const currentPath = window.location.pathname;
    const pageId = currentPath.split('-').pop().replace('.html', '');
    const likeCounts = JSON.parse(
      localStorage.getItem('scienceLikeCounts') || '{}'
    );
    likeCounts[pageId] = currentLikes;
    localStorage.setItem('scienceLikeCounts', JSON.stringify(likeCounts));

    // 좋아요 버튼 비활성화
    const likeButton = document.querySelector('.like');
    if (likeButton) {
      likeButton.disabled = true;
      likeButton.style.opacity = '0.6';
      likeButton.textContent = `❤️ 공감했어요 (${currentLikes})`;
    }
  }
}

// 페이지 로드 시 좋아요 상태 복원
function restoreLikeState() {
  const currentPath = window.location.pathname;
  const pageId = currentPath.split('-').pop().replace('.html', '');
  const likeCounts = JSON.parse(
    localStorage.getItem('scienceLikeCounts') || '{}'
  );

  if (likeCounts[pageId]) {
    const likeCountElement = document.getElementById('likeCount');
    if (likeCountElement) {
      likeCountElement.textContent = likeCounts[pageId];
    }

    // 이미 좋아요를 눌렀다면 버튼 비활성화
    const likeButton = document.querySelector('.like');
    if (likeButton && likeCounts[pageId] > 0) {
      likeButton.disabled = true;
      likeButton.style.opacity = '0.6';
    }
  }
}

// 페이지 로드 시 좋아요 상태 복원 실행
document.addEventListener('DOMContentLoaded', restoreLikeState);

// 페이지 제목 동적 설정
function setPageTitle(title) {
  document.title = title + ' - 과학적 상식 | 이호기';
}

// 실험/관찰 결과 하이라이트
function highlightExperiment(element) {
  element.classList.add('experiment');
}

// 중요 개념 하이라이트
function highlightConcept(element) {
  element.classList.add('highlight');
}
