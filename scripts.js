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
    'profile.heading': 'Brief Profile',
    'profile.name': "Hoki Lee's Brief Profile",
    'profile.instruction':
      '아래 회사를 클릭할 경우 간단한 핵심 역할, 주요 성과, 경험의 의미에 대한 내용을 확인할 수 있습니다',
    'profile.title1': '자동차 및 교육의 전문가',
    'profile.title2': '글로벌 자동차 산업의 경험자',
    'profile.title3': '팀워크와 리더십의 실천자',
    'profile.company1': '오진양행',
    'profile.company2': 'BMW Deutsch Motors',
    'profile.company2a': 'BMW Bavarian Motors',
    'profile.company3': 'BMW Korea',
    'profile.company4': '삼성자동차',
    'profile.company5': '현대자동차',
    'profile.position1': 'Executive Director, Head of Service Division',
    'profile.position2': 'Director, Service Division',
    'profile.position2a': 'Master Lab Manager',
    'profile.position3': 'Training & Technical Support Team Leader',
    'profile.position4': 'Technical Training & Service Manager',
    'profile.position5': 'Global Technical Support & Training',
    'modal.coreRole': '핵심 역할',
    'modal.keyAchievements': '주요 성과',
    'modal.meaning': '이 경험의 의미',
    'notice.heading': 'Update Contents',
    'weeklyNews.heading': '오늘의 일정 (자동차/IT)',
    'schedule.item1.title':
      '한국 자동차 제조사 자율주행 기술 워크샵 2026 - 엔비디아 알파마요 플랫폼 적용 전략',
    'schedule.item1.content':
      '한국 자동차 제조사 자율주행 기술 워크샵 2026이 오늘 오전 9시부터 오후 5시까지(한국 시간) 서울 강남구에서 개최됩니다. 현대자동차, 기아, 한국GM 등 국내 주요 자동차 제조사와 자율주행 기술 기업이 참여하며, 엔비디아 알파마요(Alpamayo) 플랫폼의 적용 전략, Vision-Language-Action 모델의 활용 방안, 자율주행 시뮬레이션 환경 구축, 자율주행 개발 비용 절감 전략 등이 주요 논의 주제입니다. 엔비디아 알파마요 플랫폼이 자율주행 개발의 게임 체인저로 부상하면서, 완성차 기업의 역할이 기술 개발에서 외부 플랫폼 기반의 통합자 역할로 변화하는 전략이 논의됩니다. 자율주행 기술 개발의 민주화와 표준화, 개발 기간 단축과 비용 절감 방안, 자율주행 기술의 블랙박스 문제 해결 등도 다뤄집니다. 자동차 제조사, 자율주행 기술 기업, AI 기업, 연구기관이 참석합니다.',
    'schedule.item2.title':
      '소프트웨어 정의 차량(SDV) 개발자 포럼 2026 - 통합 개발 환경 및 AI 기반 자동화',
    'schedule.item2.content':
      '소프트웨어 정의 차량(SDV) 개발자 포럼 2026이 오늘 오전 9시부터 오후 4시까지(한국 시간) 서울 여의도에서 개최됩니다. 국내 주요 IT 기업과 자동차 제조사가 참여하며, SDV 통합 개발 전략, 가상제어기(Virtual ECU)를 활용한 SIL(Software-in-the-Loop) 전략, HIL(Hardware-in-the-Loop) 단계 확장, AI 기반 자동화 도구, 클라우드 기반 SDV 플랫폼 등이 주요 논의 주제입니다. Jira, Codebeamer, PREEvision, Jfrog 등 개발 도구의 REST API 통합, 요구사항 관리부터 변경사항 추적까지의 단일 데이터 흐름, OTA 소프트웨어 배포, 데이터 수집·분석, 예지 정비 등도 다뤄집니다. 개발 비용 20~60% 절감, 시장 출시 시점 최대 12개월 단축 등 SDV 개발 효율성 향상 방안이 논의됩니다. 자동차 제조사, 소프트웨어 개발 기업, IT 솔루션 제공업체, 개발자 커뮤니티가 참석합니다.',
    'schedule.item3.title':
      '로보택시 사이버보안 세미나 2026 - 해킹 위협 대응 및 보안 체계 구축',
    'schedule.item3.content':
      '로보택시 사이버보안 세미나 2026이 오늘 오전 10시부터 오후 4시까지(한국 시간) 서울 강남구에서 개최됩니다. 국내 사이버보안 기업과 자동차 제조사, 로보택시 운영 기업이 참여하며, 로보택시 해킹 위협 분석, 완전 자율주행 차량의 사이버보안 요구사항, 다층 보안 체계 구축, 실시간 위협 탐지 시스템, 원격 제어 보안, 데이터 탈취 방지, 서비스 중단 방지 등이 주요 논의 주제입니다. 업스트림 시큐리티에 따르면 현재 전 세계 3,000만 대 이상의 차량을 모니터링하고 있으며, 자동차 사이버보안 시장 규모는 연 22조원에 달합니다. 로보택시의 경우 승객 안전이 최우선이므로, ISO/SAE 21434 자동차 사이버보안 표준 준수, 보안 게이트웨이 도입, 암호화 기술 적용, OTA 업데이트 보안 등이 필수적입니다. 자동차 제조사, 로보택시 운영 기업, 사이버보안 솔루션 제공업체, 연구기관이 참석합니다.',
    'schedule.item4.title':
      'V2X 통신 기술 세미나 2026 - 차세대 통신 및 톨링 기술',
    'schedule.item4.content':
      'V2X 통신 기술 세미나 2026이 오늘 오후 1시부터 5시까지(한국 시간) 서울 강남구에서 개최됩니다. 국내 통신 기업과 자동차 제조사가 참여하며, V2X(Vehicle-to-Everything) 통신 기술, V2V(차량 간 통신), V2I(차량-인프라 통신), V2N(차량-네트워크 통신), V2P(차량-보행자 통신) 등이 주요 논의 주제입니다. V2X 기반 톨링(통행료 결제) 기술, 자율주행차와 무인 이동체의 원격 결제 시스템, 5G 네트워크 기반 V2X 통신 인프라, 실시간 교통 정보 공유, 사고 예방, 교통 효율성 향상 등도 다뤄집니다. 에티포스가 퀄컴, 아우토크립트와 협력하여 미국 5GAA 총회에서 V2X 기반 톨링 기술을 성공적으로 시연했으며, 자율주행 로보택시의 경우 승객이 별도로 결제할 필요 없이 자동으로 통행료가 정산되는 기술이 소개됩니다. 통신 기업, 자동차 제조사, 인프라 기업, 연구기관이 참석합니다.',
    'schedule.item5.title':
      '한국 자동차 산업 정책 세미나 2026 - 정부 투자 및 산업 지원 전략',
    'schedule.item5.content':
      '한국 자동차 산업 정책 세미나 2026이 오늘 오전 10시부터 오후 3시까지(한국 시간) 서울 여의도에서 개최됩니다. 산업통상자원부와 한국자동차모빌리티산업협회(KAMA)가 주최하며, 2026년 자동차 산업 투자 계획(4,645억원), 자율주행·전기·수소차 R&D 투자(3,827억원), E2E-AI 자율주행 기술 개발, SDV(소프트웨어 정의 차량) 시스템 개발, 차용 반도체 국산화 등이 주요 논의 주제입니다. 정부의 자동차 산업 디지털 전환 지원 정책, 기술 혁신 지원 방안, 글로벌 경쟁력 강화 전략, 자율주행 안전 표준 국제 협력(UNECE WP.29), 자율주행 기술의 안전성 검증 및 법적 프레임워크 구축 등도 다뤄집니다. 정부 기관, 자동차 제조사, 부품 기업, 연구기관, 협회 관계자가 참석합니다.',
    'notice.updateContent20260218': `<strong>2026-02-18</strong> - 기술 트렌드/뉴스 게시판에 새로운 콘텐츠를 추가했습니다.<br /><br />
📰 <strong>기술 트렌드/뉴스:</strong> 「2026년 2월 7일~2월 18일 기술 트렌드/뉴스」가 추가되었습니다. 이번 기간 기술 트렌드는 자율주행 기술의 패권이 완성차 기업에서 빅테크로 이동하는 중요한 전환점을 맞이했습니다. 엔비디아가 자율주행 개발 통합 플랫폼 '알파마요(Alpamayo)'를 공개하면서 자율주행 생태계의 게임 체인저로 부상했고, 현대자동차가 알파마요 채택을 검토하며 자율주행 기술 개발 전략을 재편하고 있습니다. 로보택시 상용화 시대가 본격적으로 도래했으며, 서울에서 2026년 10월 레벨 4 무인 로보택시 운영이 예정되어 세계 3번째 도시가 될 전망입니다. 로보택시 시장은 지난해 15억 달러에서 2035년 591조원 규모로 급팽창할 것으로 전망되며, 카카오모빌리티, 휴맥스모빌리티 등이 로보택시 서비스 플랫폼을 구축하고 있습니다. 자동차 사이버보안의 중요성이 더욱 부각되며, 로보택시의 해킹 위협이 심각한 과제로 대두되었습니다. 업스트림 시큐리티에 따르면 현재 전 세계 3,000만 대 이상의 차량을 모니터링하고 있으며, 자동차 사이버보안 시장 규모는 연 22조원에 달합니다. 에티포스가 퀄컴, 아우토크립트와 협력하여 미국 5GAA 총회에서 V2X 기반 톨링 기술을 성공적으로 시연했으며, 자율주행차와 무인 이동체의 원격 결제 시장 진출을 의미합니다. 정부는 2026년 자동차 산업에 4,645억원을 투자하며, 자율주행·전기·수소차 R&D에 3,827억원을 할당하고 있습니다. SEMICON Korea 2026이 역대 최대 규모로 개최되며, 550개 기업과 2,400개 부스가 참여했고, 자동차용 반도체 기술과 협력이 논의되었습니다. 자동차, IT, 반도체 산업의 융합이 가속화되며, AI 기술이 모든 분야에 통합되고 있습니다.<br /><br />
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
    'profile.heading': 'Brief Profile',
    'profile.name': "Hoki Lee's Brief Profile",
    'profile.instruction':
      'Click on the companies below to view details about core roles, key achievements, and the meaning of each experience',
    'profile.title1': 'Expert in Automotive and Education',
    'profile.title2': 'Experienced in Global Automotive Industry',
    'profile.title3': 'Practitioner of Teamwork and Leadership',
    'profile.company1': 'Ohjin Corporation',
    'profile.company2': 'BMW Deutsch Motors',
    'profile.company2a': 'BMW Bavarian Motors',
    'profile.company3': 'BMW Korea',
    'profile.company4': 'Samsung Motors',
    'profile.company5': 'Hyundai Motor Company',
    'profile.position1': 'Executive Director, Head of Service Division',
    'profile.position2': 'Director, Service Division',
    'profile.position2a': 'Master Lab Manager',
    'profile.position3': 'Training & Technical Support Team Leader',
    'profile.position4': 'Technical Training & Service Manager',
    'profile.position5': 'Global Technical Support & Training',
    'modal.coreRole': 'Core Role',
    'modal.keyAchievements': 'Key Achievements',
    'modal.meaning': 'The Meaning of This Experience',
    'notice.heading': 'Update Contents',
    'weeklyNews.heading': "Today's Schedule (Automotive / IT)",
    'schedule.item1.title':
      'Korea Automakers Autonomous Driving Technology Workshop 2026 - Nvidia Alpamayo Platform Application Strategy',
    'schedule.item1.content':
      'Korea Automakers Autonomous Driving Technology Workshop 2026 will be held today from 9:00 AM to 5:00 PM (Korea time) in Gangnam-gu, Seoul. Major Korean automakers including Hyundai Motor, Kia, and GM Korea, along with autonomous driving technology companies, will participate. Key topics include application strategies for Nvidia\'s Alpamayo platform, utilization of Vision-Language-Action models, construction of autonomous driving simulation environments, and strategies for reducing autonomous driving development costs. As Nvidia\'s Alpamayo platform emerges as a game changer in autonomous driving development, strategies for transforming automakers\' roles from technology developers to integrators based on external platforms will be discussed. Democratization and standardization of autonomous driving technology development, methods for shortening development periods and reducing costs, and solutions to the black box problem in autonomous driving technology are also discussed. Automakers, autonomous driving technology companies, AI companies, and research institutions will attend.',
    'schedule.item2.title':
      'Software-Defined Vehicle (SDV) Developer Forum 2026 - Integrated Development Environment & AI-Based Automation',
    'schedule.item2.content':
      'Software-Defined Vehicle (SDV) Developer Forum 2026 will be held today from 9:00 AM to 4:00 PM (Korea time) in Yeouido, Seoul. Major Korean IT companies and automakers will participate. Key topics include SDV integrated development strategies, SIL (Software-in-the-Loop) strategies utilizing Virtual ECU, HIL (Hardware-in-the-Loop) stage expansion, AI-based automation tools, and cloud-based SDV platforms. REST API integration of development tools such as Jira, Codebeamer, PREEvision, and Jfrog, single data flow from requirements management to change tracking, OTA software deployment, data collection and analysis, and predictive maintenance are also discussed. Methods for improving SDV development efficiency, including 20-60% cost reduction and up to 12 months reduction in time to market, will be discussed. Automakers, software development companies, IT solution providers, and developer communities will attend.',
    'schedule.item3.title':
      'Robotaxi Cybersecurity Seminar 2026 - Hacking Threat Response & Security System Construction',
    'schedule.item3.content':
      'Robotaxi Cybersecurity Seminar 2026 will be held today from 10:00 AM to 4:00 PM (Korea time) in Gangnam-gu, Seoul. Korean cybersecurity companies, automakers, and robotaxi operating companies will participate. Key topics include robotaxi hacking threat analysis, cybersecurity requirements for fully autonomous vehicles, multi-layered security system construction, real-time threat detection systems, remote control security, data theft prevention, and service disruption prevention. According to Upstream Security, over 30 million vehicles worldwide are currently being monitored, and the automotive cybersecurity market size reaches 22 trillion won annually. For robotaxis, passenger safety is paramount, making ISO/SAE 21434 automotive cybersecurity standard compliance, security gateway introduction, encryption technology application, and OTA update security essential. Automakers, robotaxi operating companies, cybersecurity solution providers, and research institutions will attend.',
    'schedule.item4.title':
      'V2X Communication Technology Seminar 2026 - Next-Generation Communication & Tolling Technology',
    'schedule.item4.content':
      'V2X Communication Technology Seminar 2026 will be held today from 1:00 PM to 5:00 PM (Korea time) in Gangnam-gu, Seoul. Korean communication companies and automakers will participate. Key topics include V2X (Vehicle-to-Everything) communication technology, V2V (Vehicle-to-Vehicle), V2I (Vehicle-to-Infrastructure), V2N (Vehicle-to-Network), and V2P (Vehicle-to-Pedestrian) communication. V2X-based tolling (toll payment) technology, remote payment systems for autonomous vehicles and unmanned mobile devices, 5G network-based V2X communication infrastructure, real-time traffic information sharing, accident prevention, and traffic efficiency improvement are also discussed. Etipos successfully demonstrated V2X-based tolling technology at the U.S. 5GAA General Assembly in cooperation with Qualcomm and Autocrypt, introducing technology that automatically settles tolls for autonomous robotaxis without passengers needing to pay separately. Communication companies, automakers, infrastructure companies, and research institutions will attend.',
    'schedule.item5.title':
      'Korea Automotive Industry Policy Seminar 2026 - Government Investment & Industry Support Strategy',
    'schedule.item5.content':
      'Korea Automotive Industry Policy Seminar 2026 will be held today from 10:00 AM to 3:00 PM (Korea time) in Yeouido, Seoul. Hosted by the Ministry of Trade, Industry and Energy and the Korea Automobile Manufacturers Association (KAMA), key topics include 2026 automotive industry investment plans (464.5 billion won), autonomous driving, EV, and hydrogen vehicle R&D investment (382.7 billion won), E2E-AI autonomous driving technology development, SDV (Software-Defined Vehicle) system development, and automotive semiconductor localization. Government policies supporting the automotive industry\'s digital transformation, technology innovation support measures, global competitiveness enhancement strategies, international cooperation on autonomous driving safety standards (UNECE WP.29), and safety verification and legal framework construction for autonomous driving technology are also discussed. Government agencies, automakers, parts companies, research institutions, and association representatives will attend.',
    'notice.updateContent20260218': `<strong>2026-02-18</strong> – We've added new content to the Tech Trends/News board.<br /><br />
📰 <strong>Tech Trends/News:</strong> "2026 February 7-18 Tech Trends/News" has been added. During this period, tech trends reached an important turning point as autonomous driving technology leadership shifted from automakers to big tech companies. NVIDIA's announcement of the autonomous driving development integrated platform "Alpamayo" positioned it as a game changer in the autonomous driving ecosystem, and Hyundai Motor is reviewing Alpamayo adoption and restructuring its autonomous driving technology development strategy. The robotaxi commercialization era has officially arrived, with Seoul scheduled to operate Level 4 unmanned robotaxis in October 2026, making it the world's third city. The robotaxi market is expected to rapidly expand from $1.5 billion last year to 591 trillion won by 2035, with companies like Kakao Mobility and Humax Mobility building robotaxi service platforms. The importance of automotive cybersecurity has become more prominent, with robotaxi hacking threats emerging as a serious challenge. According to Upstream Security, over 30 million vehicles worldwide are currently being monitored, and the automotive cybersecurity market size reaches 22 trillion won annually. Etipos successfully demonstrated V2X-based tolling technology at the U.S. 5GAA General Assembly in cooperation with Qualcomm and Autocrypt, meaning entry into the remote payment market for autonomous vehicles and unmanned mobile devices. The government is investing 464.5 billion won in the automotive industry in 2026, allocating 382.7 billion won to autonomous driving, EV, and hydrogen vehicle R&D. SEMICON Korea 2026 was held on the largest scale ever, with 550 companies and 2,400 booths participating, discussing automotive semiconductor technology and cooperation. The convergence of automotive, IT, and semiconductor industries is accelerating, with AI technology being integrated into all fields.<br /><br />
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

// 현재 언어 가져오기 함수
function getCurrentLanguage() {
  return localStorage.getItem(LANGUAGE_STORAGE_KEY) ||
    navigator.language.startsWith('ko')
    ? 'ko'
    : 'en' || DEFAULT_LANGUAGE;
}

// 현재 언어 가져오기 함수
function getCurrentLanguage() {
  return (
    localStorage.getItem(LANGUAGE_STORAGE_KEY) ||
    (navigator.language.startsWith('ko') ? 'ko' : 'en') ||
    DEFAULT_LANGUAGE
  );
}

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
    const koButton = toggleElement.querySelector('.lang-btn[data-lang="ko"]');

    langButtons.forEach((btn) => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    // English 버튼이 active일 때 한국어 버튼 배경색을 흰색으로 설정
    if (lang === 'en' && koButton) {
      koButton.style.background = '#ffffff';
      koButton.style.borderColor = 'rgba(0, 0, 0, 0.1)';
    } else if (lang === 'ko' && koButton) {
      koButton.style.background = '';
      koButton.style.borderColor = '';
    }
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
        'linear-gradient(135deg, rgba(0, 86, 179, 0.95) 0%, rgba(0, 123, 255, 0.95) 50%, rgba(0, 86, 179, 0.95) 100%)';
      navigation.style.backdropFilter = 'blur(10px)';
    } else {
      navigation.style.background =
        'linear-gradient(135deg, #0056b3 0%, #007bff 50%, #0056b3 100%)';
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
      '.content-card, .career-card, .notice-section, .news-section',
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

// 회사 상세 정보 데이터
const companyDetails = {
  ko: {
    ohjin: {
      companyName: '오진양행 (Ohjin Corporation)',
      position: 'Executive Director · Head of Service Division',
      period: 'Feb. 2022 – Oct. 2025',
      coreRole: [
        '서비스본부 총괄 책임자로서 조직 운영, 손익 구조, 품질, 인력, 교육 체계 전반을 관리',
        '브랜드 판매·렌탈 사업부와 연계된 서비스 운영 구조 재설계',
        '해외 제조사 및 파트너사와의 기술·품질·교육 협업 주도',
      ],
      achievements: [
        '서비스 조직 구조 개편 및 KPI 체계 정립',
        '스타벅스, 네스프레소, 엘로치오, 비로보틱스 등 신규 서비스 계약 유치',
        '서비스 매출 배정·관리 앱 기획 및 도입 → 운영 효율성 향상',
        '8개 지방 사무소 근무 환경 표준화 및 운영 품질 개선',
        'Thermoplan, Welbilt 등 글로벌 제조사와 직접 품질 이슈 해결 및 교육 운영',
      ],
      meaning:
        '"현장 중심 서비스 조직을 수익과 구조로 연결하는 경험을 완성한 단계"',
    },
    'bmw-deutsch-motors': {
      companyName: 'BMW Deutsch Motors',
      position: 'Director · Service Division',
      period: 'Jan. 2018 – Jan. 2022',
      coreRole: [
        '현장 기술 문제(Field Fix) 직접 해결 및 기술 지원',
        '테크니션 대상 기술 교육·현장 교육(Field Fix Training) 기획 및 실행',
        '신입 및 경력 테크니션 채용·평가·육성 체계 운영',
        '딜러사 내부 교육·품질·CS 개선 활동 총괄',
      ],
      achievements: [
        'Master Lab 기반 고난도 기술 이슈 해결 속도 및 품질 향상',
        '현장 중심 교육을 통해 테크니션 기술 수준의 균질화 달성',
        '반복 고장 및 품질 클레임 감소',
        '테크니션 역량 평가 및 육성 체계 정착으로 인력 안정성 강화',
      ],
      meaning:
        '"교육은 교실이 아니라 현장에서 완성된다"는 확신을 갖게 된 시기. 기술, 교육, 품질, 인력 운영을 하나의 시스템으로 연결하는 경험. 이후 서비스 조직을 설계할 때 현장 실행력 중심 사고의 기반이 됨',
    },
    'bmw-bavarian-motors': {
      companyName: 'BMW Bavarian Motors',
      position: 'Master Lab Manager',
      period: 'Feb. 2016 – Dec. 2017',
      coreRole: [
        'BMW 딜러사 내 서비스 운영 및 기술 지원 핵심 인력',
        '현장 수리(Field Fix) 및 난이도 높은 기술 이슈 대응',
        '테크니션 대상 정규 교육 및 CS 교육 운영',
        '서비스 품질 기준 유지 및 현장 프로세스 개선 참여',
      ],
      achievements: [
        '복합·고난도 기술 문제에 대한 현장 해결 능력 강화',
        '기술 교육과 CS 교육을 병행하여 고객 불만 감소',
        '서비스 프로세스 안정화에 기여',
      ],
      meaning:
        "\"서비스 현장의 현실적인 제약과 한계를 깊이 이해한 시기. 기술 역량뿐 아니라 프로세스와 사람 관리의 중요성을 체득. 이후 '기술 중심 관리자'에서 '조직을 운영하는 리더'로 사고가 확장됨\"",
    },
    'bmw-korea': {
      companyName: 'BMW Korea',
      position: 'Training & Technical Support Team Leader',
      period: 'Jan. 2000 – Jan. 2016',
      coreRole: [
        'BMW Korea 기술 교육 및 기술 지원 조직 리딩',
        '신차 기술 교육, 현장 기술 지원, 글로벌 협업 담당',
        '국내외 딜러 기술 수준 표준화 및 교육 체계 구축',
      ],
      achievements: [
        'New Model Training / Field Fix Training 기획 및 운영',
        'Master Trainer 자격 취득',
        '기술 레벨 테스트 및 기능올림픽 운영',
        '현장 품질 이슈 분석 및 본사 보고 체계 구축',
        'Apprentic 기획 및 운영',
      ],
      meaning: '"기술을 사람과 조직의 역량으로 전환한 커리어의 기반"',
    },
    samsung: {
      companyName: '삼성자동차 (Renault Samsung Motors)',
      position: 'Technical Training & Service Manager',
      period: 'Apr. 1997 – Dec. 1999',
      coreRole: [
        '서비스 기술 교육 및 정비 인력 역량 강화 담당',
        '초기 서비스 품질 안정화 및 교육 체계 구축',
      ],
      achievements: [
        '정비사 대상 기술 교육 프로그램 개발',
        '서비스 품질 기준 수립 및 현장 적용',
        '초기 브랜드 서비스 신뢰도 확보에 기여',
      ],
      meaning: '"서비스 품질의 시작이 교육과 표준임을 체득한 시기"',
    },
    hyundai: {
      companyName: '현대자동차 (Hyundai Motor Company)',
      position: 'Global Technical Support & Training',
      period: 'Sep. 1991 – Feb. 1997',
      coreRole: [
        '해외 딜러 대상 기술 지원 및 교육',
        '수출 차량 품질 이슈 대응 및 기술 보고',
      ],
      achievements: [
        '해외 현장 Field Fix Training 수행',
        '수출 차량 품질 이슈 본사 피드백 및 개선 지원',
        '글로벌 기술 커뮤니케이션 경험 축적',
      ],
      meaning: '"글로벌 현장에서 기술과 커뮤니케이션의 중요성을 배운 출발점"',
    },
  },
  en: {
    ohjin: {
      companyName: 'Ohjin Corporation',
      position: 'Executive Director · Head of Service Division',
      period: 'Feb. 2022 – Oct. 2025',
      coreRole: [
        'Managed overall service division operations including organizational management, profit structure, quality, personnel, and training systems',
        'Redesigned service operations structure integrated with brand sales and rental business units',
        'Led technical, quality, and training collaboration with overseas manufacturers and partners',
      ],
      achievements: [
        'Restructured service organization and established KPI system',
        'Secured new service contracts with Starbucks, Nespresso, Elo Touch, Birobotics, etc.',
        'Planned and implemented service revenue allocation and management app → Improved operational efficiency',
        'Standardized working environments and improved operational quality at 8 regional offices',
        'Directly resolved quality issues and operated training programs with global manufacturers such as Thermoplan and Welbilt',
      ],
      meaning:
        '"A stage where I completed the experience of connecting field-centered service organizations with profits and structure"',
    },
    'bmw-deutsch-motors': {
      companyName: 'BMW Deutsch Motors',
      position: 'Director · Service Division',
      period: 'Jan. 2018 – Jan. 2022',
      coreRole: [
        'Directly resolved field technical issues (Field Fix) and provided technical support',
        'Planned and executed technical training and field training (Field Fix Training) for technicians',
        'Operated recruitment, evaluation, and development systems for new and experienced technicians',
        'Oversaw internal education, quality, and CS improvement activities within dealerships',
      ],
      achievements: [
        'Improved speed and quality of resolving high-difficulty technical issues based on Master Lab',
        'Achieved homogenization of technician skill levels through field-centered training',
        'Reduced recurring failures and quality claims',
        'Strengthened workforce stability through establishment of technician competency evaluation and development systems',
      ],
      meaning:
        '"A period when I gained the conviction that \'education is completed in the field, not in the classroom\'. Experience of connecting technology, education, quality, and workforce management as one system. Became the foundation for field-execution-centered thinking when designing service organizations thereafter"',
    },
    'bmw-bavarian-motors': {
      companyName: 'BMW Bavarian Motors',
      position: 'Master Lab Manager',
      period: 'Feb. 2016 – Dec. 2017',
      coreRole: [
        'Core personnel for service operations and technical support within BMW dealerships',
        'Responded to field repairs (Field Fix) and high-difficulty technical issues',
        'Operated regular training and CS training for technicians',
        'Maintained service quality standards and participated in field process improvements',
      ],
      achievements: [
        'Enhanced on-site problem-solving capabilities for complex and high-difficulty technical issues',
        'Reduced customer complaints by combining technical training with CS training',
        'Contributed to service process stabilization',
      ],
      meaning:
        "\"A period of deep understanding of realistic constraints and limitations in service field. Learned the importance of process and people management beyond technical capabilities. Expanded thinking from 'technology-centered manager' to 'leader who operates organizations'\"",
    },
    'bmw-korea': {
      companyName: 'BMW Korea',
      position: 'Training & Technical Support Team Leader',
      period: 'Jan. 2000 – Jan. 2016',
      coreRole: [
        'Led BMW Korea technical training and technical support organization',
        'Responsible for new vehicle technical training, field technical support, and global collaboration',
        'Standardized domestic and international dealer technical levels and established training systems',
      ],
      achievements: [
        'Planned and operated New Model Training / Field Fix Training',
        'Obtained Master Trainer certification',
        'Operated technical level tests and Skills Olympics',
        'Established field quality issue analysis and headquarters reporting system',
        'Planned and operated Apprentic',
      ],
      meaning:
        '"The foundation of a career that transformed technology into human and organizational capabilities"',
    },
    samsung: {
      companyName: 'Samsung Motors (Renault Samsung Motors)',
      position: 'Technical Training & Service Manager',
      period: 'Apr. 1997 – Dec. 1999',
      coreRole: [
        'Responsible for service technical training and enhancing maintenance personnel capabilities',
        'Stabilized initial service quality and established training systems',
      ],
      achievements: [
        'Developed technical training programs for technicians',
        'Established service quality standards and applied them in the field',
        'Contributed to securing initial brand service reliability',
      ],
      meaning:
        '"A period when I learned that the foundation of service quality lies in education and standards"',
    },
    hyundai: {
      companyName: 'Hyundai Motor Company',
      position: 'Global Technical Support & Training',
      period: 'Sep. 1991 – Feb. 1997',
      coreRole: [
        'Technical support and training for overseas dealers',
        'Response to export vehicle quality issues and technical reporting',
      ],
      achievements: [
        'Conducted Field Fix Training at overseas sites',
        'Provided headquarters feedback and improvement support for export vehicle quality issues',
        'Accumulated global technical communication experience',
      ],
      meaning:
        '"The starting point where I learned the importance of technology and communication in the global field"',
    },
  },
};

// 현재 열려있는 모달의 회사 키 저장
let currentModalCompanyKey = null;

// 모달 열기 함수
function openCompanyModal(companyKey) {
  const currentLang = getCurrentLanguage();
  const companyData = companyDetails[currentLang][companyKey];

  if (!companyData) return;

  currentModalCompanyKey = companyKey;

  const modal = document.getElementById('companyModal');
  document.getElementById('modalCompanyName').textContent =
    companyData.companyName;
  document.getElementById('modalPosition').textContent = companyData.position;
  document.getElementById('modalPeriod').textContent = companyData.period;

  // 핵심 역할
  const coreRoleList = document.getElementById('modalCoreRole');
  coreRoleList.innerHTML = '';
  companyData.coreRole.forEach((role) => {
    const li = document.createElement('li');
    li.textContent = role;
    coreRoleList.appendChild(li);
  });

  // 주요 성과
  const achievementsList = document.getElementById('modalAchievements');
  achievementsList.innerHTML = '';
  companyData.achievements.forEach((achievement) => {
    const li = document.createElement('li');
    li.textContent = achievement;
    achievementsList.appendChild(li);
  });

  // 이 경험의 의미
  document.getElementById('modalMeaning').textContent = companyData.meaning;

  modal.style.display = 'block';
}

// 모달 닫기 함수
function closeCompanyModal() {
  const modal = document.getElementById('companyModal');
  modal.style.display = 'none';
  currentModalCompanyKey = null;
}

// 이미지 모달 열기 함수
function openImageModal(imageSrc) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  modalImg.src = imageSrc;
  modal.style.display = 'block';
}

// 이미지 모달 닫기 함수
function closeImageModal() {
  const modal = document.getElementById('imageModal');
  modal.style.display = 'none';
}

// 모달 이벤트 리스너 설정
document.addEventListener('DOMContentLoaded', function () {
  // 프로필 이미지 클릭 이벤트
  const profileImage = document.querySelector('.profile-image');
  if (profileImage) {
    profileImage.addEventListener('click', () => {
      openImageModal(profileImage.src);
    });
  }

  // 박스 전체 클릭 이벤트
  document.querySelectorAll('.career-item').forEach((item) => {
    const companyKey = item.getAttribute('data-company');
    if (companyKey) {
      item.addEventListener('click', () => {
        openCompanyModal(companyKey);
      });
    }
  });

  // 모달 닫기 버튼
  const closeBtn = document.querySelector('.modal-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeCompanyModal);
  }

  // 모달 배경 클릭 시 닫기
  const modal = document.getElementById('companyModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeCompanyModal();
      }
    });
  }

  // 이미지 모달 닫기 버튼
  const imageModalClose = document.querySelector('.image-modal-close');
  if (imageModalClose) {
    imageModalClose.addEventListener('click', closeImageModal);
  }

  // 이미지 모달 배경 클릭 시 닫기
  const imageModal = document.getElementById('imageModal');
  if (imageModal) {
    imageModal.addEventListener('click', (e) => {
      if (e.target === imageModal) {
        closeImageModal();
      }
    });
  }

  // ESC 키로 모달 닫기
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCompanyModal();
      closeImageModal();
    }
  });
});

// 언어 변경 시 모달 내용 업데이트
const originalApplyTranslations = applyTranslations;
applyTranslations = function (lang) {
  originalApplyTranslations(lang);
  // 현재 열려있는 모달이 있다면 내용 업데이트
  if (currentModalCompanyKey) {
    openCompanyModal(currentModalCompanyKey);
  }
};
