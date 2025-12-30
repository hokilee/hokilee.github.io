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
    'weeklyNews.heading': '오늘의 일정(자동차/IT)',
    'schedule.item1.title':
      '현대자동차, 차세대 전기차 아이오닉 7 공개 행사 개최',
    'schedule.item1.content':
      '현대자동차는 서울 강남구 현대자동차 본사에서 차세대 전기차 아이오닉 7의 공개 행사를 개최합니다. 800V 고속 충전 시스템과 700km 이상의 주행거리를 자랑하는 신형 전기차의 상세 스펙과 디자인을 공개하며, 현대자동차의 전기차 라인업 확장 전략을 발표할 예정입니다.',
    'schedule.item2.title': '테슬라, FSD 베타 12.5 버전 한국 시연회 개최',
    'schedule.item2.content':
      '테슬라는 서울 강남구 테슬라 서비스 센터에서 완전 자율주행(FSD) 베타 12.5 버전의 한국 시연회를 개최합니다. 최신 AI 기반 자율주행 기술의 도심 주행 성능을 직접 시연하며, 한국 시장 진출을 위한 기술 로드맵을 공유할 예정입니다.',
    'schedule.item3.title': '삼성전자, HBM4 메모리 반도체 기술 세미나 개최',
    'schedule.item3.content':
      '삼성전자는 경기도 화성시 삼성전자 반도체 사업장에서 차세대 HBM4 고대역폭 메모리 반도체 기술 세미나를 개최합니다. AI 반도체 시장을 겨냥한 최신 메모리 기술과 양산 계획을 발표하며, 엔비디아, AMD 등 글로벌 파트너사와의 협력 현황을 공유할 예정입니다.',
    'schedule.item4.title': '구글, 제미나이 2.0 AI 모델 한국 런칭 이벤트 개최',
    'schedule.item4.content':
      '구글은 서울 강남구 구글 코리아 오피스에서 차세대 AI 모델 제미나이 2.0의 한국 런칭 이벤트를 개최합니다. 멀티모달 AI 기능과 한국어 최적화 성능을 시연하며, 한국 기업 및 개발자들을 위한 AI 클라우드 서비스 전략을 발표할 예정입니다.',
    'schedule.item5.title':
      '카카오모빌리티, 로보택시 상용화 로드맵 발표회 개최',
    'schedule.item5.content':
      '카카오모빌리티는 경기도 성남시 판교 카카오 본사에서 자율주행 로보택시 상용화 로드맵 발표회를 개최합니다. 현대모비스, 네이버와의 협업을 통한 자율주행 기술 개발 현황과 2026년 상반기 시범 서비스 계획을 공개하며, 모빌리티 플랫폼의 미래 비전을 제시할 예정입니다.',
    'notice.updateContent20251230': `<strong>2025-12-30</strong> - eBook Series 게시판과 일반상식 게시판에 새로운 콘텐츠를 추가했습니다.<br /><br />
📖 <strong>eBook Series:</strong> 「Hoki Lee eBook Series Vol.32 — 비전과 코칭 중심의 동기부여적 팀장역량 — 팀장은 사람의 에너지를 움직이는 리더다」가 업데이트되었습니다. 팀장의 핵심 역할은 단순히 업무를 관리하는 것이 아니라, 팀원들의 에너지를 움직이고 동기를 부여하는 것입니다. 비전을 제시하고 코칭을 통해 팀원들의 역량을 개발하며, 동기부여를 통해 조직의 성과를 이끌어내는 것이 팀장의 중요한 역할입니다. 비전 설정, 코칭 기법, 동기부여 전략, 팀 역량 개발 등 실무 인사이트를 담은 eBook 시리즈 서른두 번째 자료입니다.<br /><br />
📚 <strong>일반상식:</strong> 「레드 셔츠 효과(Red-Shirt Effect)」는 집단 내에서 신규 멤버나 경력이 적은 멤버가 위험한 상황에서 먼저 희생되거나 불리한 처지를 받는 현상을 말합니다. 스타트렉에서 빨간 셔츠를 입은 보안 요원들이 위험한 임무에서 먼저 죽는 장면에서 유래한 이 용어는 실제 사회에서도 관찰되는 심리학적 현상입니다. 직장 내 신입사원, 학교 내 신입생, 스포츠 팀의 신규 선수 등이 위험하거나 어려운 업무를 먼저 맡게 되는 현상을 설명하며, 이러한 현상의 부정적 영향과 완화 방법을 상세히 다룹니다.<br /><br />
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
    'weeklyNews.heading': "Today's Schedule (Automotive/IT)",
    'schedule.item1.title':
      'Hyundai Motor to Hold Unveiling Event for Next-Gen IONIQ 7 Electric Vehicle',
    'schedule.item1.content':
      'Hyundai Motor will hold an unveiling event for its next-generation IONIQ 7 electric vehicle at its headquarters in Gangnam-gu, Seoul. The company will reveal detailed specifications and design of the new EV featuring an 800V fast-charging system and a driving range of over 700km, and announce its electric vehicle lineup expansion strategy.',
    'schedule.item2.title':
      'Tesla to Hold FSD Beta 12.5 Demonstration Event in Korea',
    'schedule.item2.content':
      'Tesla will hold a demonstration event for its Full Self-Driving (FSD) Beta 12.5 version at its service center in Gangnam-gu, Seoul. The company will showcase the urban driving performance of its latest AI-based autonomous driving technology and share its technology roadmap for entering the Korean market.',
    'schedule.item3.title':
      'Samsung Electronics to Hold HBM4 Memory Semiconductor Technology Seminar',
    'schedule.item3.content':
      'Samsung Electronics will hold a seminar on next-generation HBM4 high-bandwidth memory semiconductor technology at its semiconductor facility in Hwaseong, Gyeonggi-do. The company will announce the latest memory technology targeting the AI semiconductor market and mass production plans, and share collaboration status with global partners such as NVIDIA and AMD.',
    'schedule.item4.title':
      'Google to Hold Gemini 2.0 AI Model Launch Event in Korea',
    'schedule.item4.content':
      'Google will hold a launch event for its next-generation Gemini 2.0 AI model at Google Korea Office in Gangnam-gu, Seoul. The company will demonstrate multimodal AI capabilities and Korean language optimization performance, and announce its AI cloud service strategy for Korean businesses and developers.',
    'schedule.item5.title':
      'Kakao Mobility to Hold RoboTaxi Commercialization Roadmap Presentation',
    'schedule.item5.content':
      'Kakao Mobility will hold a presentation on its autonomous driving RoboTaxi commercialization roadmap at Kakao headquarters in Pangyo, Seongnam, Gyeonggi-do. The company will reveal the current status of autonomous driving technology development through collaboration with Hyundai Mobis and Naver, announce plans for pilot services in the first half of 2026, and present its future vision for the mobility platform.',
    'notice.updateContent20251230': `<strong>2025-12-30</strong> – We've added new content to the eBook Series board and General Knowledge board.<br /><br />
📖 <strong>eBook Series:</strong> "Hoki Lee eBook Series Vol.32 — Motivational Team Leader Competency Focused on Vision and Coaching — Team Leaders are Leaders Who Move People's Energy" has been updated. The core role of a team leader is not simply to manage tasks, but to move team members' energy and motivate them. Presenting a vision, developing team members' competencies through coaching, and driving organizational performance through motivation are important roles of a team leader. This is the thirty-second volume of the eBook series containing practical insights on <strong>vision setting, coaching techniques, motivation strategies, and team competency development</strong>.<br /><br />
📚 <strong>General Knowledge:</strong> "Red-Shirt Effect" refers to the phenomenon where new members or members with less experience are the first to be sacrificed or placed in unfavorable positions in dangerous situations within a group. This term, derived from scenes in Star Trek where security officers wearing red shirts die first in dangerous missions, is a psychological phenomenon observed in real society. It explains the phenomenon where new employees in the workplace, new students in schools, and new players on sports teams are assigned dangerous or difficult tasks first, and covers in detail the negative impacts of this phenomenon and methods to mitigate it.<br /><br />
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
