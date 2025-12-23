const LANGUAGE_STORAGE_KEY = 'preferredLanguage';
const DEFAULT_LANGUAGE = 'ko';

const translations = {
  ko: {
    'hero.subtitleMain': '이호기의 개인 홈페이지',
    'hero.slide1.title': '자동차 및 교육의 전문가',
    'hero.slide1.subtitle':
      'BMW Korea, 현대자동차, 삼성자동차에서의 기술 교육 경험',
    'hero.slide2.title': '글로벌 자동차 산업의 경험자',
    'hero.slide2.subtitle': '세계를 무대로 한 기술 협업과 커리어 성장',
    'hero.slide3.title': '팀워크와 리더십의 실천자',
    'hero.slide3.subtitle': 'BMW 한마음 축구대회 운영과 야구동호회 활동',
    'nav.about': 'About<br />Me',
    'nav.career': '경력<br />이야기',
    'nav.todayContent': '오늘의<br />콘텐츠',
    'nav.techLibrary': '기술<br />자료',
    'nav.techTrend': '기술<br />트렌드/뉴스',
    'nav.previousContent': '이전<br />자료',
    'nav.contact': '연락<br />할곳',
    'notice.heading': 'Update Contents',
    'notice.updateContent20251223': `<strong>2025-12-23</strong> - eBook Series 게시판과 경제상식 게시판에 새로운 콘텐츠를 추가했습니다.<br /><br />
📖 <strong>eBook Series:</strong> 「Hoki Lee eBook Series Vol.28 — 하이퍼포먼스팀을 경영하기 위한 4대 혁신방향」가 업데이트되었습니다. 오늘부터는 높은 성과를 얻기 위한 팀장이 준비해야 할 일에 대해서 정리하고자 합니다. 하이퍼포먼스팀을 만들기 위한 네 가지 혁신 방향을 제시하며, 팀의 성과를 극대화하기 위한 실전적인 방법을 다룹니다. 단순히 개인의 역량 향상이 아니라, 팀 전체의 시스템과 문화를 혁신하여 지속 가능한 고성과를 만들어내는 방법을 제시합니다. <strong>영업, 자기관리, 마케팅, 성과 분석</strong> 등 실무 인사이트를 담은 eBook 시리즈 스물여덟 번째 자료입니다.<br /><br />
💼 <strong>경제상식:</strong> 「인플레이션과 실질 구매력, 왜 물가는 오르는데 체감은 다를까」에서는 통계상 물가 상승률은 낮은데 실제로는 물가가 많이 올랐다고 느끼는 현상을 설명합니다. 공식 인플레이션 지표와 체감 물가 사이의 차이는 명목 인플레이션과 실질 구매력의 차이에서 비롯됩니다. 소비 패턴의 차이, 자주 구매하는 상품의 가격 변동, 지역과 계층의 차이 등이 체감 물가를 결정합니다. 인플레이션이 높으면 실질 구매력이 감소하여 생활 수준이 하락할 수 있으므로, 소득 증대, 투자, 소비 패턴 조정 등을 통해 대응해야 합니다. 인플레이션과 실질 구매력의 개념, 체감 물가가 다른 이유, 그리고 대응 전략을 상세히 다룹니다.<br /><br />
각 게시판에서 더 자세한 내용을 확인하실 수 있으니 많은 관심 부탁드립니다.`,
  },
  en: {
    'hero.subtitleMain': "Hoki Lee's Personal Homepage",
    'hero.slide1.title': 'Automotive and Education Expert',
    'hero.slide1.subtitle':
      'Technical training experience with BMW Korea, Hyundai Motor, and Samsung Motors',
    'hero.slide2.title': 'Global Automotive Industry Collaborator',
    'hero.slide2.subtitle':
      'Technical partnerships and career growth on the global stage',
    'hero.slide3.title': 'Practitioner of Teamwork and Leadership',
    'hero.slide3.subtitle':
      'Organizing the BMW Harmony Football Tournament and leading the baseball club',
    'nav.about': 'About Me',
    'nav.career': 'Career Stories',
    'nav.todayContent': "Today's Content",
    'nav.techLibrary': 'Technical Resources',
    'nav.techTrend': 'Tech Trends & News',
    'nav.previousContent': 'Previous<br />Materials',
    'nav.contact': 'Contact',
    'notice.heading': 'Update Contents',
    'notice.updateContent20251223': `<strong>2025-12-23</strong> – We've added new content to the eBook Series board and Economics board.<br /><br />
📖 <strong>eBook Series:</strong> "Hoki Lee eBook Series Vol.28 — Four Innovation Directions for Managing Hyper-Performance Teams" has been updated. Starting today, we will organize what team leaders need to prepare to achieve high performance. It presents four innovation directions for creating hyper-performance teams and explores practical methods to maximize team performance. Rather than simply improving individual capabilities, it presents methods to innovate the entire team's system and culture to create sustainable high performance. This is the twenty-eighth volume of the eBook series containing practical insights on <strong>sales, self-management, marketing, and performance analysis</strong>.<br /><br />
💼 <strong>Economics:</strong> "Inflation and Real Purchasing Power: Why Do We Feel Prices Have Risen More Than Statistics Show?" explains the phenomenon where inflation rates appear low in statistics, but we actually feel that prices have risen significantly. The difference between official inflation indicators and perceived prices stems from the difference between nominal inflation and real purchasing power. Differences in consumption patterns, price changes in frequently purchased goods, and regional and class differences determine perceived prices. When inflation is high, real purchasing power decreases, which can lower living standards, so we must respond through income increases, investment, and consumption pattern adjustments. It covers in detail the concepts of inflation and real purchasing power, why perceived prices differ, and response strategies.<br /><br />
Please check each board for more detailed content.`,
  },
};

const visitorCounterConfig = {
  ko: {
    src: 'https://hits.sh/leehoki.com.svg?view=today-total&style=flat-square&label=%EB%88%84%EC%A0%81%20%EB%B0%A9%EB%AC%B8%EC%9E%90%20%EC%88%98%20(%EC%98%A4%EB%8A%98%20%2F%20%EC%A0%84%EC%B2%B4)&extraCount=1850&logo=hoki',
    alt: '누적 방문자 수 (오늘 / 전체)',
  },
  en: {
    src: 'https://hits.sh/leehoki.com.svg?view=today-total&style=flat-square&label=Visitor%20Count%20%28Today%20%2F%20Total%29&extraCount=1850&logo=hoki',
    alt: 'Visitor Count (Today / Total)',
  },
};

// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function () {
  // 슬라이더 기능 - 슬라이드 요소가 존재하는 경우에만 실행
  const slides = document.querySelectorAll('.hero-slide');
  const indicators = document.querySelectorAll('.indicator');

  if (slides.length > 0 && indicators.length > 0) {
    let currentSlideIndex = 0;
    let slideInterval;

    // 슬라이드 표시 함수
    function showSlide(index) {
      // 모든 슬라이드와 인디케이터 비활성화
      slides.forEach((slide) => slide.classList.remove('active'));
      indicators.forEach((indicator) => indicator.classList.remove('active'));

      // 현재 슬라이드와 인디케이터 활성화
      slides[index].classList.add('active');
      indicators[index].classList.add('active');
    }

    // 슬라이드 변경 함수
    function changeSlide(direction) {
      currentSlideIndex =
        (currentSlideIndex + direction + slides.length) % slides.length;
      showSlide(currentSlideIndex);
      resetSlideInterval();
    }

    // 특정 슬라이드로 이동
    function currentSlide(index) {
      currentSlideIndex = index - 1;
      showSlide(currentSlideIndex);
      resetSlideInterval();
    }

    // 자동 슬라이드 간격 재설정
    function resetSlideInterval() {
      clearInterval(slideInterval);
      startAutoSlide();
    }

    // 자동 슬라이드 시작
    function startAutoSlide() {
      slideInterval = setInterval(() => {
        changeSlide(1);
      }, 5000);
    }

    // 자동 슬라이드 시작
    startAutoSlide();

    // 마우스 호버 시 자동 슬라이드 일시정지
    const heroBanner = document.querySelector('.hero-banner');
    if (heroBanner) {
      heroBanner.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
      });

      heroBanner.addEventListener('mouseleave', () => {
        startAutoSlide();
      });
    }

    // 터치 이벤트 지원 (모바일)
    let touchStartX = 0;
    let touchEndX = 0;

    if (heroBanner) {
      heroBanner.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      });

      heroBanner.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      });
    }

    // 스와이프 제스처 처리
    function handleSwipe() {
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          // 왼쪽으로 스와이프 - 다음 슬라이드
          changeSlide(1);
        } else {
          // 오른쪽으로 스와이프 - 이전 슬라이드
          changeSlide(-1);
        }
      }
    }

    // 키보드 이벤트 지원
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        changeSlide(-1);
      } else if (e.key === 'ArrowRight') {
        changeSlide(1);
      }
    });
  } // 슬라이드 기능 종료

  // 네비게이션 아이템 클릭 이벤트
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      // 여기에 각 메뉴에 대한 동작을 추가할 수 있습니다
      console.log(`메뉴 ${index + 1} 클릭됨`);

      // 예시: 스크롤 애니메이션
      const targetSection = getTargetSection(index);
      if (targetSection) {
        smoothScrollTo(targetSection);
      }
    });
  });

  // 언어 토글 버튼 상태 관리 및 번역 적용
  const languageToggle = document.querySelector('.language-toggle');
  let currentLanguage =
    localStorage.getItem(LANGUAGE_STORAGE_KEY) || DEFAULT_LANGUAGE;

  applyTranslations(currentLanguage);
  document.documentElement.setAttribute('lang', currentLanguage);
  setActiveLanguageButton(languageToggle, currentLanguage);
  updateVisitorCounterImage(currentLanguage);

  if (languageToggle) {
    const langButtons = languageToggle.querySelectorAll('.lang-btn');
    langButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const selectedLang = button.dataset.lang;
        if (!selectedLang || selectedLang === currentLanguage) {
          return;
        }

        currentLanguage = selectedLang;
        localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage);
        setActiveLanguageButton(languageToggle, currentLanguage);
        applyTranslations(currentLanguage);
        document.documentElement.setAttribute('lang', currentLanguage);
        updateVisitorCounterImage(currentLanguage);
      });
    });
  }

  // 타겟 섹션 찾기
  function getTargetSection(index) {
    const sections = [
      'about-me-section',
      'career-section',
      'insight-section',
      'tech-section',
      'activity-section',
      'contact-section',
    ];

    if (sections[index]) {
      return (
        document.getElementById(sections[index]) ||
        document.querySelector(`[data-section="${sections[index]}"]`)
      );
    }
    return null;
  }

  // 부드러운 스크롤 함수
  function smoothScrollTo(element) {
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  function setActiveLanguageButton(toggleElement, lang) {
    if (!toggleElement) return;
    const langButtons = toggleElement.querySelectorAll('.lang-btn');
    langButtons.forEach((btn) => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (!key) return;
      const translation =
        translations[lang]?.[key] ?? translations[DEFAULT_LANGUAGE]?.[key];
      if (translation !== undefined) {
        // 공지사항인 경우 NEW 배지를 보존
        if (el.classList.contains('notice-item')) {
          const existingBadge = el.querySelector('.new-badge');
          const badgeHtml = existingBadge
            ? existingBadge.outerHTML
            : '<span class="new-badge" style="display: none">NEW</span>';
          el.innerHTML = badgeHtml + translation;
        } else {
          el.innerHTML = translation;
        }
      }
    });
    // 공지사항 내용이 변경된 후 NEW 배지 다시 업데이트
    if (typeof window.updateNewBadges === 'function') {
      setTimeout(() => {
        window.updateNewBadges();
      }, 100);
    }
  }

  function updateVisitorCounterImage(lang) {
    const img = document.querySelector('[data-visitor-counter="true"]');
    if (!img) return;

    const config =
      visitorCounterConfig[lang] ?? visitorCounterConfig[DEFAULT_LANGUAGE];
    if (!config) return;

    img.src = config.src;
    img.alt = config.alt;
  }

  // 스크롤 시 네비게이션 바 스타일 변경
  let lastScrollTop = 0;
  const navigation = document.querySelector('.main-navigation');

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
      navigation.style.background =
        'linear-gradient(135deg, rgba(101, 67, 33, 0.95) 0%, rgba(139, 69, 19, 0.95) 50%, rgba(101, 67, 33, 0.95) 100%)';
      navigation.style.backdropFilter = 'blur(10px)';
    } else {
      navigation.style.background =
        'linear-gradient(135deg, #654321 0%, #8b4513 50%, #654321 100%)';
      navigation.style.backdropFilter = 'none';
    }

    lastScrollTop = scrollTop;
  });

  // 콘텐츠 카드 호버 효과
  const contentCards = document.querySelectorAll('.content-card, .career-card');
  contentCards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });

  // 이미지 로딩 최적화
  const images = document.querySelectorAll('img');
  images.forEach((img) => {
    img.addEventListener('load', () => {
      img.style.opacity = '1';
    });

    img.addEventListener('error', () => {
      img.style.opacity = '0.5';
      img.alt = '이미지를 불러올 수 없습니다';
    });
  });

  // 연도 표시
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 페이지 로딩 완료 후 애니메이션 시작
  window.addEventListener('load', () => {
    // 히어로 섹션 페이드인 효과
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      heroContent.style.opacity = '0';
      heroContent.style.transform = 'translateY(20px)';

      setTimeout(() => {
        heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
      }, 300);
    }

    // 콘텐츠 카드들 순차적으로 나타나기
    const cards = document.querySelectorAll('.content-card, .career-card');
    cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';

      setTimeout(() => {
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 500 + index * 100);
    });
  });

  // 성능 최적화: Intersection Observer 사용
  if ('IntersectionObserver' in window) {
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

    // 관찰할 요소들
    const observeElements = document.querySelectorAll(
      '.content-card, .career-card, .notice-section, .news-section'
    );
    observeElements.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }
});

// 전역 함수들 (HTML에서 직접 호출) - 슬라이드 요소가 존재하는 경우에만 실행
function changeSlide(direction) {
  const slides = document.querySelectorAll('.hero-slide');
  const indicators = document.querySelectorAll('.indicator');

  if (slides.length > 0 && indicators.length > 0) {
    // 이벤트 위임을 위해 이벤트 객체를 전달
    const event = new Event('slideChange');
    event.direction = direction;
    document.dispatchEvent(event);
  }
}

function currentSlide(index) {
  const slides = document.querySelectorAll('.hero-slide');
  const indicators = document.querySelectorAll('.indicator');

  if (slides.length > 0 && indicators.length > 0) {
    const event = new Event('slideChange');
    event.index = index;
    document.dispatchEvent(event);
  }
}

// 전역 이벤트 리스너
document.addEventListener('slideChange', (e) => {
  const slides = document.querySelectorAll('.hero-slide');
  const indicators = document.querySelectorAll('.indicator');

  if (slides.length > 0 && indicators.length > 0) {
    if (e.direction !== undefined) {
      // changeSlide 함수 호출
      let currentSlideIndex = 0;

      // 현재 활성 슬라이드 찾기
      slides.forEach((slide, index) => {
        if (slide.classList.contains('active')) {
          currentSlideIndex = index;
        }
      });

      // 슬라이드 변경
      const newIndex =
        (currentSlideIndex + e.direction + slides.length) % slides.length;
      showSlide(newIndex);
    } else if (e.index !== undefined) {
      // currentSlide 함수 호출
      slides.forEach((slide) => slide.classList.remove('active'));
      indicators.forEach((indicator) => indicator.classList.remove('active'));

      slides[e.index - 1].classList.add('active');
      indicators[e.index - 1].classList.add('active');
    }
  }
});

function showSlide(index) {
  const slides = document.querySelectorAll('.hero-slide');
  const indicators = document.querySelectorAll('.indicator');

  if (slides.length > 0 && indicators.length > 0) {
    slides.forEach((slide) => slide.classList.remove('active'));
    indicators.forEach((indicator) => indicator.classList.remove('active'));

    slides[index].classList.add('active');
    indicators[index].classList.add('active');
  }
}
