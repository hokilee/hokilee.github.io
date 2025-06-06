// 이미지 클릭 시 모달 열기
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const zoomableImages = document.querySelectorAll('.zoomable');

zoomableImages.forEach((img) => {
  img.addEventListener('click', () => {
    modalImg.src = img.src;
    modal.style.display = 'flex';
    modalImg.classList.remove('fullscreen');
  });
});

function closeModal() {
  modal.style.display = 'none';
  modalImg.src = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    document.querySelectorAll('.fullscreen').forEach((img) => {
      img.classList.remove('fullscreen');
    });
  }
});

// 클릭한 이미지에 fullscreen 클래스 추가
zoomableImages.forEach((img) => {
  img.addEventListener('click', () => {
    img.classList.add('fullscreen');
  });
});
