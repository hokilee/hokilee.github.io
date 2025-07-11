document.addEventListener('DOMContentLoaded', () => {
  // 기존 이미지 확대/축소 기능
  const zoomableImages = document.querySelectorAll('.zoomable');
  const imageModal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  // 이미지 모달의 닫기 버튼은 직접 onclick에 연결되어 있으므로 별도 변수 선언은 불필요 (HTML의 closeModal 함수 사용)

  zoomableImages.forEach((img) => {
    img.addEventListener('click', () => {
      modalImg.src = img.src;
      imageModal.style.display = 'flex';
      modalImg.classList.remove('fullscreen'); // 혹시 모를 fullscreen 클래스 제거
    });
  });

  // 이미지 모달 닫기 함수 (HTML의 onclick에서 호출)
  window.closeModal = function () {
    imageModal.style.display = 'none';
    modalImg.src = '';
  };

  // 이미지 모달 배경 클릭 시 닫기
  if (imageModal) {
    // imageModal이 존재하는지 확인
    imageModal.addEventListener('click', (e) => {
      if (e.target === imageModal) {
        window.closeModal();
      }
    });
  }

  // 키보드 ESC 눌렀을 때 모달 닫기 (기존 코드 개선)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (imageModal && imageModal.style.display === 'flex') {
        window.closeModal();
      }
      // 스토리 모달도 닫기
      document.querySelectorAll('.modal-story').forEach((modal) => {
        if (modal.style.display === 'flex') {
          modal.style.display = 'none';
        }
      });
    }
  });

  // ----------------------------------------------------
  // 새로운 타임라인 더보기 모달 기능 추가
  const readMoreButtons = document.querySelectorAll('.read-more');
  readMoreButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const targetModalId = event.target.dataset.target;
      const targetModal = document.getElementById(targetModalId);
      if (targetModal) {
        // 모달을 flex로 설정하여 중앙 정렬이 작동하도록
        targetModal.style.display = 'flex';
      }
    });
  });

  // 모든 스토리 모달 닫기 버튼 공통 처리 및 배경 클릭 시 닫기
  const allStoryModals = document.querySelectorAll('.modal-story');
  allStoryModals.forEach((modal) => {
    const modalCloseBtn = modal.querySelector('.close-btn');
    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    }
    // 모달 배경 클릭 시 닫기
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });

  // 현재 연도 자동 업데이트 (기존 코드)
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
