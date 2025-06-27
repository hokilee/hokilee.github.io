// 페이지 로드 시 애니메이션 효과
document.addEventListener('DOMContentLoaded', function () {
  // 헤더 애니메이션
  const header = document.querySelector('.header');
  header.style.opacity = '0';
  header.style.transform = 'translateY(-30px)';

  setTimeout(() => {
    header.style.transition = 'all 0.8s ease';
    header.style.opacity = '1';
    header.style.transform = 'translateY(0)';
  }, 200);

  // 섹션들 순차적 애니메이션
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';

    setTimeout(() => {
      section.style.transition = 'all 0.6s ease';
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }, 400 + index * 200);
  });

  // 스크롤 시 요소들 애니메이션
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // 모든 섹션과 아이템들을 관찰
  document
    .querySelectorAll(
      'section, .overview-item, .experience-item, .significance-item'
    )
    .forEach((el) => {
      observer.observe(el);
    });

  // 호버 효과 강화
  const hoverItems = document.querySelectorAll(
    '.overview-item, .experience-item, .significance-item'
  );
  hoverItems.forEach((item) => {
    item.addEventListener('mouseenter', function () {
      this.style.boxShadow = '0 8px 25px rgba(52, 152, 219, 0.2)';
    });

    item.addEventListener('mouseleave', function () {
      this.style.boxShadow = 'none';
    });
  });

  // 네비게이션 링크 효과
  const navLink = document.querySelector('.nav-link');
  navLink.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-3px) scale(1.05)';
  });

  navLink.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(0) scale(1)';
  });

  // 페이지 로드 완료 후 스크롤 활성화
  setTimeout(() => {
    document.body.style.overflow = 'auto';
  }, 1000);
});

// 스크롤 시 헤더 효과
window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  const scrolled = window.pageYOffset;

  if (scrolled > 100) {
    header.style.transform = 'translateY(-10px)';
    header.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.15)';
  } else {
    header.style.transform = 'translateY(0)';
    header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
  }
});

// 부드러운 스크롤 효과
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// 이미지 모달 기능
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const closeBtn = document.querySelector('.close');

  // 모든 사진에 클릭 이벤트 추가
  const images = document.querySelectorAll('.photo-grid img');
  images.forEach((img) => {
    img.addEventListener('click', function () {
      modal.style.display = 'block';
      modalImg.src = this.src;
    });
  });

  // X 버튼으로 모달 닫기
  closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  // 모달 외부 클릭으로 닫기
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // ESC 키로 모달 닫기
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      modal.style.display = 'none';
    }
  });
});
