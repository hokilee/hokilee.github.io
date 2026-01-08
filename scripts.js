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
      '현대자동차그룹, 휴머노이드 로봇 아틀라스 제조 현장 도입 계획 발표',
    'schedule.item1.content':
      '현대자동차그룹은 CES 2026에서 보스턴다이내믹스의 휴머노이드 로봇 아틀라스를 제조 현장에 도입하는 로드맵을 공개했습니다. 제조업 자동화와 로봇 기술의 상용화를 추진하며, 로봇 구독 서비스도 계획하고 있습니다. 현대자동차그룹은 로봇 기술을 통해 제조 효율성을 향상시키고, 미래 모빌리티 생태계를 확장할 계획입니다.',
    'schedule.item2.title':
      '인벤티스·업스테이지, RPA 기반 AI 자동화 솔루션 공동 개발 발표',
    'schedule.item2.content':
      'IT 솔루션 기업 인벤티스는 업스테이지와 함께 로봇 프로세스 자동화(RPA) 기반의 인공지능(AI) 자동화 솔루션 분야에서 기술 협력 및 시장 확대를 위한 전략적 업무협약(MOU)을 체결했습니다. 자동차 산업의 디지털 전환과 AI 전환을 지원할 계획이며, RPA와 생성형 AI를 결합한 차세대 자동화 솔루션을 개발합니다.',
    'schedule.item3.title':
      '인텔·마이크론, 한국 기술 인재 유치 강화 및 반도체 협력 확대',
    'schedule.item3.content':
      '인공지능 등 첨단 기술 분야에서 글로벌 기업들의 한국 기술 인재 유치 경쟁이 심화되고 있습니다. 인텔과 마이크론 등 미국 기업들이 한국의 반도체, 자동차, 2차전지 분야의 인재를 적극적으로 채용하고 있으며, 한국 기업들과의 협력도 확대하고 있습니다. AI 반도체와 메모리 반도체 분야에서의 기술 협력이 강화될 전망입니다.',
    'schedule.item4.title':
      '삼성전자, HBM 생산 확대 및 AI 반도체 시장 공략 강화',
    'schedule.item4.content':
      '삼성전자가 AI 서버용 고대역폭 메모리(HBM) 생산을 확대하며 AI 반도체 시장 공략을 강화하고 있습니다. 엔비디아의 AI GPU와 함께 사용되는 HBM3, HBM3E 등 고성능 메모리 수요가 급증하는 가운데, 삼성전자는 생산 능력을 확대하고 수율 개선에 집중하고 있습니다. HBM 시장에서의 경쟁력 강화를 통해 AI 반도체 생태계의 핵심 파트너로 자리매김할 계획입니다.',
    'schedule.item5.title':
      '구글, 차량 내 AI 기능 강화 및 안드로이드 오토 통합 확대',
    'schedule.item5.content':
      '구글이 차량 내 AI 기능을 강화한 안드로이드 오토 플랫폼을 확대하며, 자동차 제조사들과의 협력을 강화하고 있습니다. 대규모 언어 모델(LLM)을 활용한 차량 내 AI 어시스턴트가 운전자의 음성 명령을 더 정확하게 이해하고, 차량 기능을 제어할 수 있게 되었습니다. 구글은 자동차 제조사들과 협력하여 안드로이드 오토를 차량에 통합하며, 차량 내 인포테인먼트 시스템과 자율주행 기능을 연결하는 플랫폼을 구축하고 있습니다.',
    'notice.updateContent20260108': `<strong>2026-01-08</strong> - eBook Series 게시판, 경제상식 게시판, 그리고 기술트렌드/뉴스 게시판에 새로운 콘텐츠를 추가했습니다.<br /><br />
📖 <strong>eBook Series:</strong> 「Hoki Lee eBook Series Vol.38 — 고객 감동의 경영 — 서비스 품질이 브랜드가 되는 순간」이 업데이트되었습니다. 현대 비즈니스 환경에서 서비스 품질은 단순한 고객 만족을 넘어 브랜드의 핵심 가치로 자리잡고 있습니다. 고객 감동을 통한 브랜드 구축은 서비스 품질 관리, 고객 경험 최적화, 그리고 지속적인 개선을 통해 실현됩니다. 서비스 품질 측정, 고객 감동 전략, 브랜드 가치 창출, 서비스 혁신 등 실무 인사이트를 담은 eBook 시리즈 서른여덟 번째 자료입니다.<br /><br />
💼 <strong>경제상식:</strong> 「CES에서 주목받는 AI와 자동차 융합 기술」이 등록되었습니다. 매년 1월 라스베가스에서 열리는 CES(Consumer Electronics Show)는 전 세계 기술 트렌드의 방향을 제시하는 중요한 행사입니다. 최근 CES에서 가장 큰 화두는 AI(인공지능)와 자동차의 융합 기술입니다. 자동차 제조사와 IT 기업들이 협력하여 자율주행, 스마트 모빌리티, 차량 내 AI 어시스턴트 등 혁신적인 기술을 선보이고 있습니다. 이러한 AI와 자동차의 융합은 단순한 기술 발전을 넘어 새로운 산업 생태계를 만들고, 경제 구조에 큰 변화를 가져오고 있습니다.<br /><br />
📰 <strong>기술트렌드/뉴스:</strong> 「2026년 1월 1주차 기술 트렌드/뉴스」가 등록되었습니다. 이번 기간 기술 트렌드는 CES 2026이 열리면서 AI와 자동차 융합 기술이 주요 화두로 부상했습니다. 특히 퀄컴의 스냅드래곤 디지털 섀시 솔루션과 에이전틱 AI 모빌리티 기술, 현대자동차그룹의 스마트 모빌리티 플랫폼 발표가 주목받았습니다. IT 분야에서는 생성형 AI의 실무 적용 확대와 엣지 AI 기술의 발전이 두드러졌으며, 반도체 산업에서는 AI 반도체 수요 증가와 자동차용 반도체 시장 성장이 주요 트렌드로 나타났습니다.<br /><br />
각 게시판에서 더 자세한 내용을 확인하실 수 있으니 많은 관심 부탁드립니다.`,
    'notice.updateContent20260107': `<strong>2026-01-07</strong> - eBook Series 게시판과 경제상식 게시판에 새로운 콘텐츠를 추가했습니다.<br /><br />
📖 <strong>eBook Series:</strong> 「Hoki Lee eBook Series Vol.37 — VOC의 힘 — 고객의 목소리를 데이터로 바꾸는 법」이 업데이트되었습니다. 고객의 목소리(Voice of Customer, VOC)는 기업이 고객의 니즈와 불만을 파악하고 제품 및 서비스를 개선하는 핵심 데이터입니다. VOC를 체계적으로 수집하고 분석하여 데이터로 전환하는 것이 고객 만족도 향상과 비즈니스 성장의 핵심입니다. VOC 수집 방법, 데이터 분석 기법, 인사이트 도출, 개선 액션 수립까지 실무 인사이트를 담은 eBook 시리즈 서른일곱 번째 자료입니다.<br /><br />
💼 <strong>경제상식:</strong> 「슈퍼 앱(Super App)의 부상, 하나의 앱이 만드는 경제 생태계」가 등록되었습니다. 최근 카카오, 네이버 등 국내 주요 플랫폼 기업들이 하나의 앱 안에 메신저, 쇼핑, 금융, 모빌리티, 결제 등 다양한 서비스를 통합하는 슈퍼 앱(Super App) 전략을 추진하고 있습니다. 중국의 위챗(WeChat), 알리페이(Alipay)를 모델로 한 슈퍼 앱은 사용자에게 편의성을 제공하는 동시에 플랫폼 기업의 시장 지배력을 강화하고 있습니다. 슈퍼 앱의 개념, 성장 배경, 경제적 영향, 그리고 시장 구조 변화를 상세히 다룹니다.<br /><br />
각 게시판에서 더 자세한 내용을 확인하실 수 있으니 많은 관심 부탁드립니다.`,
    'notice.updateContent20260106': `<strong>2026-01-06</strong> - eBook Series 게시판과 한줄 지식/잡학 게시판에 새로운 콘텐츠를 추가했습니다.<br /><br />
📖 <strong>eBook Series:</strong> 「Hoki Lee eBook Series Vol.36 — 고객경험의 구조화 — 고객여정에서 가치여정으로」가 업데이트되었습니다. 현대 비즈니스 환경에서 고객 경험(CX)은 단순한 서비스 제공을 넘어서 고객과의 모든 접점에서 가치를 창출하는 핵심 요소입니다. 고객여정(Customer Journey)을 체계적으로 구조화하고, 이를 가치여정(Value Journey)으로 전환하는 것이 성공적인 고객 경험 관리의 핵심입니다. 고객여정 맵핑, 터치포인트 최적화, 고객 가치 창출 전략, 고객 경험 측정 및 개선 등 실무 인사이트를 담은 eBook 시리즈 서른여섯 번째 자료입니다.<br /><br />
🧠 <strong>한줄 지식/잡학:</strong> 「소셜 미디어 피로감, 디지털 미니멀리즘의 부상」이 등록되었습니다. 최근 많은 사람들이 소셜 미디어 사용을 줄이거나 완전히 중단하는 현상이 증가하고 있습니다. 인스타그램, 페이스북, 트위터 등 소셜 미디어 플랫폼에서 벗어나려는 움직임이 확산되면서 디지털 미니멀리즘(Digital Minimalism)이 새로운 트렌드로 부상하고 있습니다. 소셜 미디어 피로감의 원인, 디지털 미니멀리즘의 개념, 그리고 디지털 라이프스타일의 변화를 상세히 다룹니다.<br /><br />
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
      'Hyundai Motor Group Announces Atlas Humanoid Robot Deployment in Manufacturing',
    'schedule.item1.content':
      'Hyundai Motor Group has unveiled a roadmap to deploy Boston Dynamics Atlas humanoid robots in manufacturing facilities at CES 2026. The company is pursuing manufacturing automation and commercialization of robotics technology, and also planning robot subscription services. Hyundai Motor Group plans to improve manufacturing efficiency through robotics technology and expand its future mobility ecosystem.',
    'schedule.item2.title':
      'Inventis and Upstage Announce Joint Development of RPA-Based AI Automation Solutions',
    'schedule.item2.content':
      'IT solutions company Inventis has signed a strategic MOU with Upstage for technical cooperation and market expansion in the field of robot process automation (RPA)-based artificial intelligence (AI) automation solutions. The companies plan to support digital transformation and AI transformation in the automotive industry, and develop next-generation automation solutions combining RPA and generative AI.',
    'schedule.item3.title':
      'Intel and Micron Strengthen Recruitment of Korean Tech Talent and Expand Semiconductor Cooperation',
    'schedule.item3.content':
      'Competition among global companies to recruit Korean tech talent in advanced technology fields such as artificial intelligence is intensifying. US companies such as Intel and Micron are actively recruiting talent from Korea in semiconductors, automotive, and secondary battery sectors, and are also expanding cooperation with Korean companies. Cooperation in AI semiconductors and memory semiconductors is expected to strengthen.',
    'schedule.item4.title':
      'Samsung Electronics Expands HBM Production and Strengthens AI Semiconductor Market Strategy',
    'schedule.item4.content':
      'Samsung Electronics is expanding production of high-bandwidth memory (HBM) for AI servers and strengthening its AI semiconductor market strategy. As demand for high-performance memory such as HBM3 and HBM3E used with NVIDIA AI GPUs surges, Samsung Electronics is expanding production capacity and focusing on yield improvement. The company plans to establish itself as a key partner in the AI semiconductor ecosystem by strengthening competitiveness in the HBM market.',
    'schedule.item5.title':
      'Google Enhances In-Vehicle AI Features and Expands Android Auto Integration',
    'schedule.item5.content':
      'Google is expanding its Android Auto platform with enhanced in-vehicle AI features and strengthening cooperation with automotive manufacturers. In-vehicle AI assistants utilizing large language models (LLM) can now more accurately understand driver voice commands and control vehicle functions. Google is collaborating with automotive manufacturers to integrate Android Auto into vehicles and build a platform connecting in-vehicle infotainment systems with autonomous driving features.',
    'notice.updateContent20260108': `<strong>2026-01-08</strong> – We've added new content to the eBook Series board, Economics board, and Tech Trends/News board.<br /><br />
📖 <strong>eBook Series:</strong> "Hoki Lee eBook Series Vol.38 — Customer Delight Management — The Moment Service Quality Becomes a Brand" has been updated. In the modern business environment, service quality has become a core brand value beyond simple customer satisfaction. Building a brand through customer delight is realized through service quality management, customer experience optimization, and continuous improvement. This is the thirty-eighth volume of the eBook series containing practical insights on <strong>service quality measurement, customer delight strategies, brand value creation, and service innovation</strong>.<br /><br />
💼 <strong>Economics:</strong> "AI and Automotive Convergence Technology Gaining Attention at CES" has been registered. CES (Consumer Electronics Show), held annually in Las Vegas in January, is an important event that sets the direction for global technology trends. The biggest topic at recent CES events has been the convergence of AI (Artificial Intelligence) and automotive technology. Automotive manufacturers and IT companies are collaborating to showcase innovative technologies such as autonomous driving, smart mobility, and in-vehicle AI assistants. This convergence of AI and automotive technology is creating new industrial ecosystems and bringing significant changes to economic structures, beyond simple technological advancement.<br /><br />
📰 <strong>Tech Trends/News:</strong> "2026 January Week 1 Tech Trends/News" has been registered. During this period, AI and automotive convergence technology emerged as a major topic as CES 2026 opened. Particularly notable were Qualcomm's Snapdragon Digital Chassis solution and Agentic AI mobility technology, as well as Hyundai Motor Group's smart mobility platform announcement. In the IT sector, expansion of practical applications of generative AI and development of edge AI technology were prominent, while in the semiconductor industry, increased demand for AI semiconductors and growth in automotive semiconductor markets were major trends.<br /><br />
Please check each board for more detailed content.`,
    'notice.updateContent20260107': `<strong>2026-01-07</strong> – We've added new content to the eBook Series board and Economics board.<br /><br />
📖 <strong>eBook Series:</strong> "Hoki Lee eBook Series Vol.37 — The Power of VOC — Transforming Customer Voice into Data" has been updated. Voice of Customer (VOC) is key data that enables companies to understand customer needs and complaints and improve products and services. Systematically collecting and analyzing VOC to transform it into data is essential for improving customer satisfaction and business growth. This is the thirty-seventh volume of the eBook series containing practical insights on <strong>VOC collection methods, data analysis techniques, insight derivation, and improvement action planning</strong>.<br /><br />
💼 <strong>Economics:</strong> "The Rise of Super Apps, The Economic Ecosystem Created by a Single App" has been registered. Recently, major Korean platform companies such as Kakao and Naver are pursuing Super App strategies that integrate various services including messaging, shopping, finance, mobility, and payments within a single app. Super Apps modeled after China's WeChat and Alipay provide convenience to users while strengthening platform companies' market dominance. This article covers in detail the concept of Super Apps, growth background, economic impact, and changes in market structure.<br /><br />
Please check each board for more detailed content.`,
    'notice.updateContent20260106': `<strong>2026-01-06</strong> – We've added new content to the eBook Series board and One-Line Knowledge/Trivia board.<br /><br />
📖 <strong>eBook Series:</strong> "Hoki Lee eBook Series Vol.36 — Structuring Customer Experience — From Customer Journey to Value Journey" has been updated. In the modern business environment, customer experience (CX) is a key element that creates value at all touchpoints with customers, beyond simply providing services. Systematically structuring the customer journey and transforming it into a value journey is the core of successful customer experience management. This is the thirty-sixth volume of the eBook series containing practical insights on <strong>customer journey mapping, touchpoint optimization, customer value creation strategies, customer experience measurement and improvement</strong>.<br /><br />
🧠 <strong>One-Line Knowledge/Trivia:</strong> "Social Media Fatigue, The Rise of Digital Minimalism" has been registered. Recently, an increasing number of people are reducing or completely stopping their use of social media. As movements to escape from social media platforms such as Instagram, Facebook, and Twitter spread, digital minimalism is emerging as a new trend. This article covers in detail the causes of social media fatigue, the concept of digital minimalism, and changes in digital lifestyle.<br /><br />
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
