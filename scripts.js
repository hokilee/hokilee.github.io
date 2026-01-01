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
      '현대자동차, 전기차 신모델 아이오닉 7 사전 예약 개시',
    'schedule.item1.content':
      '현대자동차는 서울 강남구 현대자동차 본사에서 차세대 전기차 신모델 아이오닉 7의 사전 예약을 시작합니다. 800V 고속 충전 시스템과 700km 이상의 주행거리를 자랑하는 아이오닉 7의 상세 스펙과 가격 정보를 공개하며, 사전 예약 고객을 위한 특별 혜택과 출고 일정을 안내할 예정입니다.',
    'schedule.item2.title':
      '삼성전자, 갤럭시 S26 시리즈 공식 발표 및 사전 예약 시작',
    'schedule.item2.content':
      '삼성전자는 서울 강남구 삼성전자 본사에서 차세대 스마트폰 갤럭시 S26 시리즈의 공식 발표회를 개최합니다. 최신 AI 기능과 향상된 카메라 성능을 탑재한 갤럭시 S26, S26+, S26 울트라의 상세 스펙과 가격을 공개하며, 사전 예약 고객을 위한 특별 프로모션과 출시 일정을 발표할 예정입니다.',
    'schedule.item3.title':
      '테슬라, 자율주행 소프트웨어 FSD 베타 13.0 버전 업데이트 발표',
    'schedule.item3.content':
      '테슬라는 서울 강남구 테슬라 서비스 센터에서 완전 자율주행(FSD) 베타 13.0 버전 업데이트를 발표합니다. 최신 AI 기반 자율주행 알고리즘의 성능 개선 사항과 한국 도로 환경에 최적화된 기능을 공개하며, 한국 시장에서의 FSD 서비스 확대 계획과 정식 출시 로드맵을 공유할 예정입니다.',
    'schedule.item4.title': '애플, iOS 20.2 버전 정식 배포 및 신기능 공개',
    'schedule.item4.content':
      '애플은 iOS 20.2 버전의 정식 배포를 시작합니다. 향상된 AI 기능과 보안 강화, 새로운 위젯과 개인화 옵션 등 주요 업데이트 내용을 공개하며, iPhone 사용자들의 업데이트 방법과 호환 기기 목록을 안내합니다. iOS 20.2는 더욱 스마트하고 안전한 사용자 경험을 제공할 예정입니다.',
    'schedule.item5.title': 'CES 2026 개막, 글로벌 IT 기업들의 신기술 발표',
    'schedule.item5.content':
      '세계 최대 전자제품 박람회인 CES 2026이 미국 라스베이거스에서 개막합니다. 삼성전자, LG전자, 소니, 구글, 마이크로소프트 등 글로벌 IT 기업들이 AI, 자율주행, 가상현실, 스마트홈 등 최신 기술과 신제품을 공개합니다. 한국 기업들의 혁신 기술과 제품이 주목받을 것으로 예상됩니다.',
    'notice.updateContent20260102': `<strong>2026-01-02</strong> - eBook Series 게시판과 경제상식 게시판에 새로운 콘텐츠를 추가했습니다. 또한 오늘의 일정도 업데이트되었습니다.<br /><br />
📖 <strong>eBook Series:</strong> 「Hoki Lee eBook Series Vol.34 — 학습하는 조직 — 지속 성장의 DNA를 만드는 방법」이 업데이트되었습니다. 급변하는 환경에서 조직이 지속적으로 성장하고 경쟁력을 유지하기 위해서는 학습하는 조직(Learning Organization)이 되어야 합니다. 학습하는 조직은 단순히 교육을 받는 것이 아니라, 지식과 경험을 공유하고, 실험과 혁신을 통해 지속적으로 개선해나가는 조직입니다. 조직 학습 문화 구축, 지식 공유 시스템, 실험과 실패를 통한 학습, 지속적 개선 프로세스 등 실무 인사이트를 담은 eBook 시리즈 서른네 번째 자료입니다.<br /><br />
💼 <strong>경제상식:</strong> 「리셀(Resale) 경제의 부상, 중고거래가 만드는 새로운 시장」이 등록되었습니다. 최근 중고거래 플랫폼의 급속한 성장과 함께 리셀 경제가 새로운 시장으로 부상하고 있습니다. 당근마켓, 번개장터, 중고나라 등 중고거래 플랫폼이 일상생활의 필수 도구가 되었고, 패션, 전자제품, 가구, 자동차 등 다양한 분야에서 중고거래가 활성화되고 있습니다. 리셀 경제의 개념, 성장 배경, 시장 영향, 그리고 경제적 의미를 상세히 다룹니다.<br /><br />
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
      'Hyundai Motor to Begin Pre-Orders for New Electric Vehicle IONIQ 7',
    'schedule.item1.content':
      'Hyundai Motor will begin pre-orders for its new electric vehicle model IONIQ 7 at its headquarters in Gangnam-gu, Seoul. The company will reveal detailed specifications and pricing for the IONIQ 7 featuring an 800V fast-charging system and a driving range of over 700km, and announce special benefits for pre-order customers and delivery schedules.',
    'schedule.item2.title':
      'Samsung Electronics to Officially Announce Galaxy S26 Series and Begin Pre-Orders',
    'schedule.item2.content':
      'Samsung Electronics will hold an official announcement event for its next-generation smartphone Galaxy S26 series at Samsung Electronics headquarters in Gangnam-gu, Seoul. The company will reveal detailed specifications and pricing for the Galaxy S26, S26+, and S26 Ultra featuring latest AI capabilities and enhanced camera performance, and announce special promotions for pre-order customers and launch schedules.',
    'schedule.item3.title': 'Tesla to Announce FSD Beta 13.0 Software Update',
    'schedule.item3.content':
      'Tesla will announce its Full Self-Driving (FSD) Beta 13.0 software update at its service center in Gangnam-gu, Seoul. The company will reveal performance improvements of the latest AI-based autonomous driving algorithm and features optimized for Korean road conditions, and share plans for expanding FSD services in the Korean market and official launch roadmap.',
    'schedule.item4.title':
      'Apple to Release iOS 20.2 Version and Unveil New Features',
    'schedule.item4.content':
      'Apple will begin official distribution of iOS 20.2 version. The company will reveal major update contents including enhanced AI features, security improvements, new widgets and personalization options, and guide iPhone users on update methods and compatible device lists. iOS 20.2 is expected to provide a smarter and safer user experience.',
    'schedule.item5.title':
      'CES 2026 Opens, Global IT Companies to Unveil New Technologies',
    'schedule.item5.content':
      "CES 2026, the world's largest consumer electronics show, opens in Las Vegas, USA. Global IT companies including Samsung Electronics, LG Electronics, Sony, Google, and Microsoft will unveil latest technologies and new products in AI, autonomous driving, virtual reality, and smart home sectors. Korean companies' innovative technologies and products are expected to draw attention.",
    'notice.updateContent20260102': `<strong>2026-01-02</strong> – We've added new content to the eBook Series board and Economics board. Today's schedule has also been updated.<br /><br />
📖 <strong>eBook Series:</strong> "Hoki Lee eBook Series Vol.34 — Learning Organization — Methods to Create the DNA of Sustainable Growth" has been updated. In a rapidly changing environment, organizations must become learning organizations to continuously grow and maintain competitiveness. A learning organization is not simply about receiving education, but about sharing knowledge and experiences, and continuously improving through experimentation and innovation. This is the thirty-fourth volume of the eBook series containing practical insights on <strong>building organizational learning culture, knowledge sharing systems, learning through experimentation and failure, and continuous improvement processes</strong>.<br /><br />
💼 <strong>Economics:</strong> "The Rise of Resale Economy, New Markets Created by Second-Hand Trading" has been registered. With the rapid growth of second-hand trading platforms, the resale economy is emerging as a new market. Platforms like Karrot Market, Bunjang, and Joonggonara have become essential tools in daily life, and second-hand trading is active in various sectors including fashion, electronics, furniture, and automobiles. This article covers in detail the concept of resale economy, growth background, market impact, and economic significance.<br /><br />
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
