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
    'schedule.item1.title': '기아자동차, 2026년 전기차 라인업 확대 전략 발표',
    'schedule.item1.content':
      '기아자동차는 서울 강남구 기아자동차 본사에서 2026년 전기차 라인업 확대 전략을 발표합니다. EV3, EV4 등 신형 전기차 모델의 출시 일정과 글로벌 시장 진출 계획을 공개하며, 전기차 생산 능력 확대와 배터리 공급망 안정화 방안을 제시할 예정입니다.',
    'schedule.item2.title': '엔비디아, 한국 AI 데이터센터 투자 계획 발표',
    'schedule.item2.content':
      '엔비디아는 서울 강남구 엔비디아 코리아 오피스에서 한국 AI 데이터센터 투자 계획을 발표합니다. 한국 기업들의 AI 인프라 구축을 지원하기 위한 데이터센터 건설 계획과 GPU 공급 전략을 공유하며, 한국 AI 생태계 발전을 위한 파트너십을 발표할 예정입니다.',
    'schedule.item3.title':
      'SK하이닉스, HBM4 양산 착수 및 2026년 생산 목표 발표',
    'schedule.item3.content':
      'SK하이닉스는 경기도 이천시 SK하이닉스 반도체 사업장에서 차세대 HBM4 메모리 반도체 양산 착수를 발표합니다. AI 반도체 수요 급증에 대응하기 위한 생산 능력 확대 계획과 2026년 생산 목표를 공개하며, 글로벌 AI 기업들과의 공급 계약 현황을 공유할 예정입니다.',
    'schedule.item4.title':
      '네이버, 하이퍼클로바X 2026 버전 출시 및 AI 서비스 확대 계획',
    'schedule.item4.content':
      '네이버는 경기도 성남시 판교 네이버 본사에서 하이퍼클로바X 2026 버전 출시와 AI 서비스 확대 계획을 발표합니다. 멀티모달 AI 기능 강화와 엔터프라이즈 AI 솔루션 출시 계획을 공개하며, 한국어 AI 생태계 확장을 위한 개발자 지원 프로그램을 발표할 예정입니다.',
    'schedule.item5.title':
      '현대모비스, 자율주행 센서 융합 기술 및 로보택시 플랫폼 공개',
    'schedule.item5.content':
      '현대모비스는 경기도 용인시 현대모비스 본사에서 자율주행 센서 융합 기술과 로보택시 플랫폼을 공개합니다. 라이다, 레이더, 카메라 센서를 통합한 자율주행 시스템의 성능을 시연하며, 2026년 로보택시 상용화를 위한 기술 로드맵과 파트너십 전략을 발표할 예정입니다.',
    'notice.updateContent20251231': `<strong>2025-12-31</strong> - eBook Series 게시판과 한줄 지식/잡학 게시판에 새로운 콘텐츠를 추가했습니다. 또한 오늘의 일정도 업데이트되었습니다.<br /><br />
📖 <strong>eBook Series:</strong> 「Hoki Lee eBook Series Vol.33 — 조직의 실행력을 지속시키는 피드백 문화 — 성과는 대화 속에서 완성된다」가 업데이트되었습니다. 조직의 지속 가능한 성과 창출을 위해서는 효과적인 피드백 문화가 필수적입니다. 피드백은 단순한 평가나 지적이 아니라, 조직 구성원들이 함께 성장하고 개선해나가는 대화의 과정입니다. 건설적인 피드백을 통해 실행력을 높이고, 지속적인 소통을 통해 성과를 완성해나가는 것이 핵심입니다. 피드백 문화 구축, 효과적인 피드백 기법, 대화를 통한 성과 관리, 조직 실행력 강화 등 실무 인사이트를 담은 eBook 시리즈 서른세 번째 자료입니다.<br /><br />
📚 <strong>한줄 지식/잡학:</strong> 「냉각기술의 한계, 데이터센터 전력 소비와 환경 문제」가 등록되었습니다. AI 기술의 폭발적 성장과 함께 데이터센터의 전력 소비가 급증하고 있습니다. ChatGPT, Claude 같은 대규모 AI 모델의 학습과 추론에는 막대한 연산 자원이 필요하며, 이를 냉각하기 위한 전력 소비가 전체 전력의 상당 부분을 차지하고 있습니다. 데이터센터의 전력 소비 현황, 냉각 기술의 한계, 환경에 미치는 영향, 그리고 대응 방안을 상세히 다룹니다.<br /><br />
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
      'Kia Motors to Announce 2026 Electric Vehicle Lineup Expansion Strategy',
    'schedule.item1.content':
      'Kia Motors will announce its 2026 electric vehicle lineup expansion strategy at its headquarters in Gangnam-gu, Seoul. The company will reveal launch schedules for new EV models such as EV3 and EV4, global market entry plans, and present strategies for expanding EV production capacity and stabilizing battery supply chains.',
    'schedule.item2.title':
      'NVIDIA to Announce AI Data Center Investment Plan in Korea',
    'schedule.item2.content':
      "NVIDIA will announce its AI data center investment plan in Korea at NVIDIA Korea Office in Gangnam-gu, Seoul. The company will share its data center construction plan and GPU supply strategy to support Korean companies' AI infrastructure development, and announce partnerships for advancing Korea's AI ecosystem.",
    'schedule.item3.title':
      'SK Hynix to Begin HBM4 Mass Production and Announce 2026 Production Targets',
    'schedule.item3.content':
      'SK Hynix will announce the start of mass production of next-generation HBM4 memory semiconductors at its semiconductor facility in Icheon, Gyeonggi-do. The company will reveal production capacity expansion plans to meet surging AI semiconductor demand, announce 2026 production targets, and share supply contract status with global AI companies.',
    'schedule.item4.title':
      'Naver to Launch HyperClovaX 2026 Version and Expand AI Services',
    'schedule.item4.content':
      'Naver will announce the launch of HyperClovaX 2026 version and AI service expansion plans at Naver headquarters in Pangyo, Seongnam, Gyeonggi-do. The company will reveal enhanced multimodal AI capabilities and enterprise AI solution launch plans, and announce developer support programs to expand the Korean AI ecosystem.',
    'schedule.item5.title':
      'Hyundai Mobis to Unveil Autonomous Driving Sensor Fusion Technology and RoboTaxi Platform',
    'schedule.item5.content':
      'Hyundai Mobis will unveil autonomous driving sensor fusion technology and RoboTaxi platform at its headquarters in Yongin, Gyeonggi-do. The company will demonstrate the performance of its autonomous driving system integrating LiDAR, radar, and camera sensors, and announce technology roadmap and partnership strategies for RoboTaxi commercialization in 2026.',
    'notice.updateContent20251231': `<strong>2025-12-31</strong> – We've added new content to the eBook Series board and One-Line Knowledge/Trivia board. Today's schedule has also been updated.<br /><br />
📖 <strong>eBook Series:</strong> "Hoki Lee eBook Series Vol.33 — Feedback Culture That Sustains Organizational Execution — Performance is Completed Through Dialogue" has been updated. Effective feedback culture is essential for organizations to achieve sustainable performance. Feedback is not simply evaluation or criticism, but a process of dialogue through which organizational members grow and improve together. The key is to enhance execution through constructive feedback and complete performance through continuous communication. This is the thirty-third volume of the eBook series containing practical insights on <strong>building feedback culture, effective feedback techniques, performance management through dialogue, and strengthening organizational execution</strong>.<br /><br />
📚 <strong>One-Line Knowledge/Trivia:</strong> "Limitations of Cooling Technology, Data Center Power Consumption and Environmental Issues" has been registered. As AI technology grows explosively, data center power consumption is surging. Training and inference of large-scale AI models like ChatGPT and Claude require massive computational resources, and the power consumption for cooling accounts for a significant portion of total power. This article covers in detail the current state of data center power consumption, limitations of cooling technology, environmental impacts, and response measures.<br /><br />
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
