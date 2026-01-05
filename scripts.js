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
    'weeklyNews.heading': '오늘의 일정 (자동차/IT)',
    'schedule.item1.title':
      '월드 베스트 카 어워드 2026 발표, 올해의 최고 차량 선정',
    'schedule.item1.content':
      '세계적인 자동차 전문 매체들이 선정한 월드 베스트 카 어워드 2026 수상 차량이 발표됩니다. 디자인, 성능, 혁신성, 안전성 등을 종합적으로 평가하여 최고의 차량을 선정하는 이 어워드는 글로벌 자동차 산업의 트렌드를 보여주는 중요한 지표입니다. 전기차, 하이브리드, 수소차 등 다양한 파워트레인을 가진 차량들이 수상 후보로 올랐으며, 한국 자동차 브랜드들의 수상 여부도 주목받고 있습니다.',
    'schedule.item2.title': 'CES 2026 개막, 글로벌 IT 기업들의 신기술 대전',
    'schedule.item2.content':
      '세계 최대 전자제품 박람회인 CES 2026이 미국 라스베이거스에서 개막합니다. 삼성전자, LG전자, 소니, 구글, 마이크로소프트 등 글로벌 IT 기업들이 AI, 자율주행, 가상현실, 스마트홈 등 최신 기술과 신제품을 공개합니다. 특히 AI 기술의 실용화와 자율주행 기술의 발전이 주요 화두로 떠오르며, 한국 기업들의 혁신 기술과 제품이 전 세계의 주목을 받을 것으로 예상됩니다.',
    'schedule.item3.title':
      '삼성전자, CES 2026에서 갤럭시 S26 시리즈 공식 공개',
    'schedule.item3.content':
      '삼성전자는 CES 2026에서 차세대 스마트폰 갤럭시 S26 시리즈를 공식 공개합니다. 새로운 디자인과 향상된 성능을 자랑하는 갤럭시 S26, S26+, S26 울트라의 상세 스펙과 가격을 공개하며, 최신 AI 기능과 카메라 성능 개선 사항을 시연합니다. CES 현장에서 직접 체험할 수 있는 기회가 제공되며, 글로벌 시장 출시 일정도 함께 발표할 예정입니다.',
    'schedule.item4.title': '애플, AR 글래스 공식 발표 및 혼합현실 시대 개막',
    'schedule.item4.content':
      '애플은 캘리포니아 쿠퍼티노 본사에서 증강현실(AR) 글래스를 공식 발표합니다. 애플의 첫 AR 전용 기기로, 혼합현실(MR) 기능을 탑재하여 업계의 큰 관심을 받고 있습니다. AR 글래스는 일상생활과 업무 환경을 혁신할 것으로 예상되며, 가격, 출시 일정, 호환 기기 등 상세 정보가 공개됩니다. 애플의 AR 생태계 구축 전략과 개발자 지원 프로그램도 함께 발표할 예정입니다.',
    'schedule.item5.title':
      '테슬라, CES 2026에서 사이버트럭 한국 출시 계획 발표',
    'schedule.item5.content':
      '테슬라는 CES 2026에서 사이버트럭의 한국 시장 진출 계획을 발표합니다. 전기 픽업트럭인 사이버트럭의 한국 출시 일정과 가격 정보를 공개하며, 한국 도로 환경에 맞춘 사양과 충전 인프라 구축 계획을 공유합니다. 테슬라는 한국 시장에서의 전기차 확대 전략과 함께 자율주행 기술의 한국 적용 방안도 함께 발표할 예정입니다.',
    'notice.updateContent20260105': `<strong>2026-01-05</strong> - eBook Series 게시판과 일반상식 게시판에 새로운 콘텐츠를 추가했습니다. 또한 오늘의 일정도 업데이트되었습니다.<br /><br />
📖 <strong>eBook Series:</strong> 「Hoki Lee eBook Series Vol.35 — 고객 중심의 경영 — 모든 전략의 시작은 고객이다」가 업데이트되었습니다. 성공하는 기업의 공통점은 고객을 중심으로 경영한다는 것입니다. 고객 중심 경영은 단순히 고객 서비스를 잘하는 것이 아니라, 모든 전략과 의사결정의 출발점을 고객에게 두는 경영 철학입니다. 고객 가치 창출, 고객 경험 개선, 고객 피드백 활용, 고객과의 장기적 관계 구축 등 실무 인사이트를 담은 eBook 시리즈 서른다섯 번째 자료입니다.<br /><br />
📚 <strong>일반상식:</strong> 「플린 효과(Flynn Effect)」가 등록되었습니다. 플린 효과는 지능 검사 점수가 시간이 지나면서 계속 상승하는 현상으로, 뉴질랜드의 정치학자 제임스 플린이 발견한 현상입니다. 부모 세대보다 자녀 세대가 평균적으로 더 높은 지능 검사 점수를 받는 이 현상은 전 세계적으로 관찰되며, 교육 수준 향상, 환경의 복잡성 증가, 영양 상태 개선 등이 주요 원인입니다. 플린 효과의 개념, 특징, 원인, 그리고 의미를 상세히 다룹니다.<br /><br />
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
    'weeklyNews.heading': "Today's Schedule (Automotive / IT)",
    'schedule.item1.title':
      'World Car Awards 2026 Announcement, Best Car of the Year Selected',
    'schedule.item1.content':
      'The World Car Awards 2026 winners selected by global automotive media will be announced. This award, which comprehensively evaluates design, performance, innovation, and safety to select the best vehicle, is an important indicator of global automotive industry trends. Vehicles with various powertrains including electric, hybrid, and hydrogen vehicles have been nominated, and whether Korean automotive brands will win awards is also drawing attention.',
    'schedule.item2.title':
      'CES 2026 Opens, Global IT Companies Battle of New Technologies',
    'schedule.item2.content':
      "CES 2026, the world's largest consumer electronics show, opens in Las Vegas, USA. Global IT companies including Samsung Electronics, LG Electronics, Sony, Google, and Microsoft will unveil latest technologies and new products in AI, autonomous driving, virtual reality, and smart home sectors. The practical application of AI technology and advancement of autonomous driving technology are emerging as major topics, and Korean companies' innovative technologies and products are expected to draw global attention.",
    'schedule.item3.title':
      'Samsung Electronics to Officially Unveil Galaxy S26 Series at CES 2026',
    'schedule.item3.content':
      'Samsung Electronics will officially unveil its next-generation smartphone Galaxy S26 series at CES 2026. The company will reveal detailed specifications and pricing for the Galaxy S26, S26+, and S26 Ultra featuring new design and enhanced performance, and demonstrate latest AI features and camera performance improvements. Opportunities to experience the devices directly at CES will be provided, and global market launch schedules will also be announced.',
    'schedule.item4.title':
      'Apple to Officially Announce AR Glasses, Opening Mixed Reality Era',
    'schedule.item4.content':
      "Apple will officially announce its augmented reality (AR) glasses at its headquarters in Cupertino, California. As Apple's first AR-dedicated device featuring mixed reality (MR) capabilities, it is drawing significant industry attention. The AR glasses are expected to revolutionize daily life and work environments, and detailed information including pricing, launch schedule, and compatible devices will be revealed. Apple's AR ecosystem strategy and developer support programs will also be announced.",
    'schedule.item5.title':
      'Tesla to Announce Cybertruck Korea Launch Plan at CES 2026',
    'schedule.item5.content':
      'Tesla will announce its plan to enter the Korean market with the Cybertruck at CES 2026. The company will reveal the Korean launch schedule and pricing information for the Cybertruck, an electric pickup truck, and share specifications tailored for Korean road conditions and charging infrastructure construction plans. Tesla will also announce its strategy for expanding electric vehicles in the Korean market and plans for applying autonomous driving technology in Korea.',
    'notice.updateContent20260105': `<strong>2026-01-05</strong> – We've added new content to the eBook Series board and General Knowledge board. Today's schedule has also been updated.<br /><br />
📖 <strong>eBook Series:</strong> "Hoki Lee eBook Series Vol.35 — Customer-Centric Management — All Strategies Begin with the Customer" has been updated. The common characteristic of successful companies is that they manage with customers at the center. Customer-centric management is not simply about providing good customer service, but a management philosophy that places the starting point of all strategies and decisions with the customer. This is the thirty-fifth volume of the eBook series containing practical insights on <strong>customer value creation, customer experience improvement, utilizing customer feedback, and building long-term relationships with customers</strong>.<br /><br />
📚 <strong>General Knowledge:</strong> "Flynn Effect" has been registered. The Flynn Effect is the phenomenon where intelligence test scores continue to rise over time, discovered by New Zealand political scientist James Flynn. This phenomenon, where children's generation receives higher average intelligence test scores than their parents' generation, is observed worldwide, with main causes including improved education levels, increased environmental complexity, and improved nutrition. This article covers in detail the concept, characteristics, causes, and significance of the Flynn Effect.<br /><br />
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
