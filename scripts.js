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
    'nav.contact': '연락<br />할곳',
    'notice.heading': 'Update Contents',
    'notice.updateContent20251124': `<strong>2025-11-24</strong> - 경제상식 게시판과 일반상식 게시판에 새로운 콘텐츠를 추가했습니다.<br /><br />
💼 <strong>경제상식:</strong> 「오픈뱅킹과 마이데이터, 금융 흐름의 패러다임 전환」에서는 오픈뱅킹과 마이데이터가 한국 금융 산업에 가져온 변화를 다룹니다. 하나의 애플리케이션에서 여러 은행 계좌를 통합 관리할 수 있는 오픈뱅킹과 개인의 금융 정보를 한 곳에서 통합 조회할 수 있는 마이데이터 서비스의 확대 현황, 금융 서비스 접근성 향상과 금융사 간 경쟁 심화, 새로운 금융 서비스 모델의 등장, 데이터 보안과 개인정보 보호 이슈 등을 상세히 설명합니다. 디지털 금융 시대의 변화를 이해하는 데 도움이 됩니다.<br /><br />
📚 <strong>일반상식:</strong> 「파레토 최적」에서는 이탈리아 경제학자 빌프레도 파레토가 제안한 자원 배분의 효율성을 평가하는 개념을 설명합니다. 파레토 최적 상태는 한 개인의 이익을 증가시키려면 반드시 다른 개인의 이익이 감소해야 하는 상태로, 더 이상의 파레토 개선이 불가능한 효율적인 상태를 의미합니다. 파레토 개선과 파레토 최적의 차이, 일상생활에서의 예시, 효율성과 공평성의 관계, 경제 정책과 경영 의사결정에서의 활용 등을 다룹니다.<br /><br />
각 게시판에서 더 자세한 내용을 확인하실 수 있으니 많은 관심 부탁드립니다.`,
    'notice.updateContent20251126': `<strong>2025-11-26</strong> - 경제상식 게시판, 일반상식 게시판, eBook Series 게시판에 새로운 콘텐츠를 추가했습니다.<br /><br />
💼 <strong>경제상식:</strong> 「원화 약세 지속과 환율 전망, 일반인들의 대처 방안」에서는 최근 원·달러 환율이 1,470원을 돌파하며 원화 약세가 지속되는 상황을 분석합니다. 미국 연준의 고금리 정책, 글로벌 경제 불확실성 확대, 해외투자에 따른 외환수급 불균형 등이 원인으로 지적되며, 정부는 과거 IMF 외환위기와 같은 상황이 재발하지 않도록 정부 부서 간 업무 통합 등 적극적인 대응 정책을 추진하고 있습니다. 향후 환율 전망과 함께 일반인들이 취할 수 있는 대처 방안(해외여행 계획 조정, 해외직구 신중, 외화 자산 투자 고려, 부채 관리 강화 등)을 상세히 제시합니다.<br /><br />
📚 <strong>일반상식:</strong> 「리바운드 효과」에서는 어떤 조치나 개입을 취한 후, 그 효과가 사라지거나 의도와 반대되는 결과가 나타나는 현상을 설명합니다. 의학 분야의 약물 중단 후 반동 증상, 심리학 분야의 억압된 감정의 재발, 경제학 분야의 에너지 효율 개선의 역효과, 일상생활에서의 다이어트·금연·금주 리바운드 등 다양한 예시를 통해 리바운드 효과의 원인과 대처 방안을 다룹니다.<br /><br />
📖 <strong>eBook Series:</strong> 「Hoki Lee eBook Series Vol.9 — 미래를 설계하는 리더십 — 지속 가능한 조직의 조건」가 업데이트되었습니다. <strong>영업, 자기관리, 마케팅, 성과 분석</strong> 등 실무 인사이트를 담은 eBook 시리즈 아홉 번째 자료입니다.<br /><br />
각 게시판에서 더 자세한 내용을 확인하실 수 있으니 많은 관심 부탁드립니다.`,
    'notice.updateContent20251125': `<strong>2025-11-25</strong> - 한줄 지식/잡학 게시판과 eBook Series 게시판에 새로운 콘텐츠를 추가했습니다.<br /><br />
💡 <strong>한줄 지식/잡학:</strong> 「근육의 기억, 운동을 오래 쉬어도 다시 빨리 회복되는 이유」에서는 운동을 열심히 하다가 몇 달, 심지어 몇 년을 쉬었는데도 다시 운동을 시작하면 생각보다 빠르게 이전 수준으로 돌아오는 현상인 근육의 기억에 대해 설명합니다. 근육 세포의 핵 수 증가, 신경계의 적응, 미토콘드리아의 변화 등 여러 메커니즘이 함께 작동하는 복합적인 생물학적 현상으로, 운동을 중단한 후에도 다시 시작할 때 빠르게 회복할 수 있도록 돕는 놀라운 현상입니다. 운동을 포기하지 말고, 언제든지 다시 시작할 수 있다는 희망을 주는 내용입니다.<br /><br />
📖 <strong>eBook Series:</strong> 「Hoki Lee eBook Series Vol.8」가 업데이트되었습니다. <strong>영업, 자기관리, 마케팅, 성과 분석</strong> 등 실무 인사이트를 담은 eBook 시리즈 여덟 번째 자료입니다.<br /><br />
각 게시판에서 더 자세한 내용을 확인하실 수 있으니 많은 관심 부탁드립니다.`,
    'notice.updateContent20251120': `<strong>2025-11-20</strong> - 경제상식 및 일반상식 게시판에 새로운 글을 추가하고, 경력이야기 항목에 영어 번역을 추가했습니다.<br /><br />
💼 <strong>경제상식:</strong> 「한국 주식 시장 변동성, 불확실성의 원인과 대처 전략」에서는 최근 한국 주식 시장의 높은 변동성 원인을 분석합니다. 특히 국내 전문가들이 제기한 <strong>AI 거품론</strong>이 시장 변동성의 주요 원인 중 하나라는 평가를 포함하여, 변동성 시장에서의 투자 대처 전략을 제시합니다.<br /><br />
📚 <strong>일반상식:</strong> 「브레튼우즈」에서는 1944년 브레튼우즈 회의에서 수립된 국제 금융 체제의 배경과 특징, 성공과 한계, 붕괴 과정을 설명합니다. 현재의 국제 금융 질서를 이해하는 데 중요한 역사적 교훈을 제공합니다.<br /><br />
🎯 <strong>경력이야기:</strong> 경력이야기 항목의 8개 메뉴 설명에 영어 번역을 추가하여 한글과 영문을 함께 제공합니다. 영어 텍스트는 갈색 이탤릭체로 표시됩니다.<br /><br />
각 게시판에서 더 자세한 내용을 확인하실 수 있으니 많은 관심 부탁드립니다.`,
    'notice.updateContent': `<strong>2025-11-18</strong> - 오늘의 콘텐츠 게시판에 새로운 글들을 추가했습니다.<br /><br />
💡 <strong>한줄 지식/잡학:</strong> 「소비자 물가지수와 생산자 물가지수, 경제 지표 읽는 법」에서는 경제 뉴스에서 자주 등장하는 소비자 물가지수(CPI)와 생산자 물가지수(PPI)의 의미와 차이를 설명합니다. CPI는 가계가 느끼는 물가 상승률을, PPI는 기업이 느끼는 비용 상승률을 나타내며, PPI는 CPI보다 먼저 변동하는 선행 지표로 활용됩니다. 물가 상승률을 읽는 방법, 실질 소득 계산, 투자 결정에 활용하는 방법, 경제 정책 예측 등 일상생활에서 경제 지표를 활용하는 실용적인 방법을 제시합니다.<br /><br />
📖 <strong>eBook Series:</strong> 「Hoki Lee eBook Series Vol.4」가 업데이트되었습니다. <strong>영업, 자기관리, 마케팅, 성과 분석</strong> 등 실무 인사이트를 담은 eBook 시리즈 네 번째 자료입니다.<br /><br />
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
    'nav.contact': 'Contact',
    'notice.heading': 'Update Contents',
    'notice.updateContent20251124': `<strong>2025-11-24</strong> – We've added new content to the Economics and General Knowledge boards.<br /><br />
💼 <strong>Economics:</strong> "Open Banking and MyData: Paradigm Shift in Financial Flow" covers the changes that open banking and MyData have brought to the Korean financial industry. It explains the expansion of open banking services that allow integrated management of multiple bank accounts in one application, and MyData services that enable integrated viewing of personal financial information in one place. It details the improvement in financial service accessibility, intensifying competition among financial institutions, the emergence of new financial service models, and data security and privacy protection issues. It helps understand the changes in the digital finance era.<br /><br />
📚 <strong>General Knowledge:</strong> "Pareto Optimal" explains the concept proposed by Italian economist Vilfredo Pareto for evaluating the efficiency of resource allocation. Pareto optimal state means a state where increasing one individual's benefit necessarily requires decreasing another individual's benefit, representing an efficient state where no further Pareto improvement is possible. It covers the difference between Pareto improvement and Pareto optimal, examples in daily life, the relationship between efficiency and fairness, and applications in economic policy and management decision-making.<br /><br />
Please check each board for more detailed content.`,
    'notice.updateContent20251126': `<strong>2025-11-26</strong> – We've added new content to the Economics board, General Knowledge board, and eBook Series board.<br /><br />
💼 <strong>Economics:</strong> "Continued KRW Weakness and Exchange Rate Outlook: Coping Strategies for the General Public" analyzes the situation where the KRW-USD exchange rate has exceeded 1,470 won, with the Korean won continuing to weaken. The causes include the U.S. Federal Reserve's high interest rate policy, expanding global economic uncertainty, and foreign exchange supply-demand imbalances due to overseas investment. The government is actively pursuing response policies, including inter-departmental integration, to prevent a recurrence of situations like the IMF foreign exchange crisis. It presents detailed coping strategies for the general public (adjusting overseas travel plans, being cautious with overseas purchases, considering foreign currency asset investment, strengthening debt management, etc.) along with future exchange rate outlook.<br /><br />
📚 <strong>General Knowledge:</strong> "Rebound Effect" explains the phenomenon where after taking some action or intervention, the effect disappears or results opposite to the intention occur. It covers various examples including rebound symptoms after drug discontinuation in medicine, recurrence of suppressed emotions in psychology, reverse effects of energy efficiency improvements in economics, and rebound effects in daily life such as diet, smoking cessation, and alcohol abstinence, explaining the causes and coping strategies of the rebound effect.<br /><br />
📖 <strong>eBook Series:</strong> "Hoki Lee eBook Series Vol.9 — Designing Leadership for the Future: Conditions for Sustainable Organizations" has been updated. This is the ninth volume of the eBook series containing practical insights on <strong>sales, self-management, marketing, and performance analysis</strong>.<br /><br />
Please check each board for more detailed content.`,
    'notice.updateContent20251125': `<strong>2025-11-25</strong> – We've added new content to the One-line Knowledge/Trivia board and eBook Series board.<br /><br />
💡 <strong>One-line Knowledge/Trivia:</strong> "Muscle Memory: Why You Can Quickly Recover Even After a Long Break from Exercise" explains the phenomenon of muscle memory, where you can quickly return to your previous level even after taking a break from exercise for months or even years. It describes how this is a complex biological phenomenon involving multiple mechanisms working together, such as an increase in the number of muscle cell nuclei, neural system adaptation, and mitochondrial changes. This amazing phenomenon helps you recover quickly when you restart exercise after a break, giving hope that you can always start again without giving up on exercise.<br /><br />
📖 <strong>eBook Series:</strong> "Hoki Lee eBook Series Vol.8" has been updated. This is the eighth volume of the eBook series containing practical insights on <strong>sales, self-management, marketing, and performance analysis</strong>.<br /><br />
Please check each board for more detailed content.`,
    'notice.updateContent20251120': `<strong>2025-11-20</strong> – We've added new posts to the Economics and General Knowledge boards, and added English translations to the Career Stories section.<br /><br />
💼 <strong>Economics:</strong> "Korean Stock Market Volatility: Causes of Uncertainty and Coping Strategies" analyzes the causes of recent high volatility in the Korean stock market. It includes the assessment by domestic experts that the <strong>AI bubble theory</strong> is one of the main causes of market volatility, and presents investment coping strategies in volatile markets.<br /><br />
📚 <strong>General Knowledge:</strong> "Bretton Woods" explains the background, characteristics, successes and limitations, and collapse process of the international financial system established at the Bretton Woods Conference in 1944. It provides important historical lessons for understanding the current international financial order.<br /><br />
🎯 <strong>Career Stories:</strong> English translations have been added to the descriptions of 8 menu items in the Career Stories section, providing both Korean and English text. English text is displayed in brown italics.<br /><br />
Please check each board for more detailed content.`,
    'notice.updateContent': `<strong>2025-11-18</strong> – We've added new posts to Today's Content board.<br /><br />
💡 <strong>One-line Knowledge/Trivia:</strong> "Consumer Price Index and Producer Price Index: How to Read Economic Indicators" explains the meaning and differences between the Consumer Price Index (CPI) and Producer Price Index (PPI), which frequently appear in economic news. CPI represents the inflation rate felt by households, while PPI represents the cost increase rate felt by businesses. PPI serves as a leading indicator that changes before CPI. It presents practical methods for using economic indicators in daily life, including how to read inflation rates, calculate real income, use them for investment decisions, and predict economic policies.<br /><br />
📖 <strong>eBook Series:</strong> "Hoki Lee eBook Series Vol.4" has been updated. This is the fourth volume of the eBook series containing practical insights on <strong>sales, self-management, marketing, and performance analysis</strong>.<br /><br />
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
