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
    'profile.company6': 'The Junjin',
    'profile.position1': 'Executive Director, Head of Service Division',
    'profile.position2': 'Director, Service Division',
    'profile.position2a': 'Master Lab Manager',
    'profile.position3': 'Training & Technical Support Team Leader',
    'profile.position4': 'Technical Training & Service Manager',
    'profile.position5': 'Global Technical Support & Training',
    'profile.position6': 'Service Operations Manager',
    'modal.coreRole': '핵심 역할',
    'modal.keyAchievements': '주요 성과',
    'modal.meaning': '이 경험의 의미',
    'notice.heading': 'Update Contents',
    'weeklyNews.heading': '오늘의 일정 (자동차/IT)',
    'schedule.item1.title':
      'Automotive Testing Expo Korea 2026 사전 세미나 - 자동차 테스팅 기술 및 검증 솔루션',
    'schedule.item1.content':
      'Automotive Testing Expo Korea 2026 사전 세미나가 오늘 오전 9시부터 오후 5시까지(한국 시간) 서울 강남구에서 개최됩니다. 한국자동차산업협회와 자동차 제조사, 테스팅 기업, 검증 솔루션 기업이 참여하며, 내일 개막하는 Automotive Testing Expo Korea 2026(3월 18-20일, 킨텍스)을 앞두고 자동차 테스팅 기술과 검증 솔루션에 대한 심화 세미나가 진행됩니다. 통합 실-가상 검증(Integrated real-virtual validation), AI 기반 테스팅 솔루션, AUTOSAR 소프트웨어 컴포넌트 검증, 자동차 소프트웨어 테스팅 및 검증 툴 체인, 자동차 품질 관리 시스템 등이 주요 논의 주제입니다. ADAS 및 자율주행차 테스트, 전기·하이브리드 파워트레인 테스트, 배터리 및 주행거리 테스트, NVH 분석 및 측정, 충돌 테스트 기술 등도 다뤄집니다. 자동차 제조사, 부품 기업, 테스팅 기업, 검증 솔루션 기업, 연구기관이 참석합니다.',
    'schedule.item2.title':
      '자동차 AI 및 자율주행 기술 컨퍼런스 2026 - AI 기반 자율주행 시스템 개발',
    'schedule.item2.content':
      '자동차 AI 및 자율주행 기술 컨퍼런스 2026이 오늘 오전 10시부터 오후 4시까지(한국 시간) 서울 여의도에서 개최됩니다. 한국자동차산업협회와 자동차 제조사, AI 기업, 자율주행 기술 기업이 참여하며, AI 기반 자율주행 시스템 개발, 거대 주행모델(LDM) 활용, 자율주행 차량 인지·판단·제어 시스템, 자율주행 차량 안전 가드레일 기술, 자율주행 차량 시뮬레이션 및 검증 등이 주요 논의 주제입니다. AI 기반 객체 인식, 강화학습 기반 경로 계획, 자율주행 차량 의사결정 시스템, 자율주행 차량 센서 퓨전 기술, 자율주행 차량 실시간 처리 시스템 등도 다뤄집니다. 자동차 제조사, 부품 기업, AI 기업, 자율주행 기술 기업, 연구기관이 참석합니다.',
    'schedule.item3.title':
      '전기차 배터리 및 충전 기술 워크샵 2026 - 배터리 성능 최적화 및 충전 효율',
    'schedule.item3.content':
      '전기차 배터리 및 충전 기술 워크샵 2026이 오늘 오전 9시부터 오후 4시까지(한국 시간) 서울 강남구에서 개최됩니다. 한국전기자동차협회와 배터리 기업, 충전 인프라 기업, 전기차 제조사가 참여하며, 전기차 배터리 성능 최적화 기술, 배터리 충전 효율 향상, 배터리 열 관리 시스템, 배터리 수명 연장 기술, 초고속 충전 기술 등이 주요 논의 주제입니다. 고에너지밀도 배터리 기술, 배터리 원가 절감 전략, 배터리 안전성 향상 기술, 무선 충전 기술, 배터리 관리 시스템(BMS) 최적화 등도 다뤄집니다. 전기차 제조사, 배터리 기업, 충전 인프라 기업, 전력 기업, 연구기관이 참석합니다.',
    'schedule.item4.title':
      '자동차 사이버보안 및 네트워크 보안 기술 포럼 2026 - 차량 보안 강화 전략',
    'schedule.item4.content':
      '자동차 사이버보안 및 네트워크 보안 기술 포럼 2026이 오늘 오후 1시부터 5시까지(한국 시간) 서울 여의도에서 개최됩니다. 한국자동차산업협회와 자동차 제조사, 사이버보안 기업, 네트워크 보안 기업이 참여하며, 자동차 사이버보안 표준(ISO 21434) 준수, 차량 네트워크 보안 강화, OTA 업데이트 보안, V2X 통신 보안, 자율주행 차량 보안 등이 주요 논의 주제입니다. 자동차 사이버보안 게이트웨이, 실시간 위협 탐지 시스템, 차량 보안 인증, 자동차 사이버보안 사고 대응, 차량 소프트웨어 보안 업데이트 등도 다뤄집니다. 자동차 제조사, 부품 기업, 사이버보안 기업, 네트워크 보안 기업, 연구기관이 참석합니다.',
    'schedule.item5.title':
      '자동차 제조 스마트 팩토리 및 로봇 자동화 세미나 2026 - 제조 혁신 및 생산 효율화',
    'schedule.item5.content':
      '자동차 제조 스마트 팩토리 및 로봇 자동화 세미나 2026이 오늘 오전 9시부터 오후 5시까지(한국 시간) 서울 강남구에서 개최됩니다. 한국자동차산업협회와 자동차 제조사, 스마트 팩토리 솔루션 기업, 로봇 기업이 참여하며, 스마트 팩토리 구축 전략, 로봇 자동화 시스템, AI 기반 생산 최적화, 디지털 트윈 기반 제조, 실시간 생산 모니터링 등이 주요 논의 주제입니다. 제조 4.0 기술 도입, 협동 로봇 활용, AI 기반 품질 관리, 예측 정비 시스템, 스마트 공급망 관리, 생산 효율화 전략 등도 다뤄집니다. 자동차 제조사, 부품 기업, 스마트 팩토리 솔루션 기업, 로봇 기업, 연구기관이 참석합니다.',
    'notice.updateContent20260316': `<strong>2026-03-16</strong> - eBook Series 게시판, 오늘의 일정(자동차/IT), 한줄 지식/잡학 게시판을 업데이트했습니다.<br /><br />
📖 <strong>eBook Series:</strong> 「길을 물어볼 때 사용하는 실전 영어」가 추가되었습니다. 여행이나 일상 생활에서 길을 물어보거나 방향을 안내받을 때 필요한 실용적인 영어 표현과 대화 패턴을 중심으로 구성되어 있으며, 길 묻기, 방향 안내 받기, 교통수단 이용하기, 거리와 시간 묻기 등 다양한 상황의 영어 표현을 쉽게 학습할 수 있도록 정리했습니다. 길을 물어볼 때 사용하는 영어는 여행뿐만 아니라 일상 생활에서도 자주 사용되므로, 실용적인 영어 학습 자료로 활용할 수 있습니다. 앞으로 계속해서 다양한 주제의 실용적인 영어 학습 자료를 제공할 예정입니다.<br /><br />
📅 <strong>오늘의 일정(자동차/IT):</strong> 3월 17일 한국 자동차 및 IT 부문 일정이 업데이트되었습니다. Automotive Testing Expo Korea 2026 사전 세미나가 개최되며(자동차 테스팅 기술 및 검증 솔루션, 서울 강남구), 자동차 AI 및 자율주행 기술 컨퍼런스 2026(AI 기반 자율주행 시스템 개발, 서울 여의도), 전기차 배터리 및 충전 기술 워크샵 2026(배터리 성능 최적화 및 충전 효율, 서울 강남구), 자동차 사이버보안 및 네트워크 보안 기술 포럼 2026(차량 보안 강화 전략, 서울 여의도), 자동차 제조 스마트 팩토리 및 로봇 자동화 세미나 2026(제조 혁신 및 생산 효율화, 서울 강남구) 등이 개최됩니다. 자동차 테스팅 기술, AI 기반 자율주행 시스템, 전기차 배터리 성능 최적화, 자동차 사이버보안, 스마트 팩토리 및 로봇 자동화 등이 주요 논의 주제입니다. 자동차 제조사, 테스팅 기업, AI 기업, 배터리 기업, 사이버보안 기업, 스마트 팩토리 솔루션 기업, 연구기관이 참석합니다.<br /><br />
📚 <strong>한줄 지식/잡학:</strong> 「향신료 무역로(Spice Route)」가 추가되었습니다. 향신료 무역로는 고대와 중세 시대에 동남아시아와 인도에서 생산된 향신료를 유럽과 서아시아로 운송한 무역로 네트워크입니다. 실크로드와 함께 동서 문명을 연결한 중요한 무역로였으며, 특히 후추, 정향, 육두구, 계피, 생강 등 향신료가 주요 교역품이었습니다. 향신료 무역로는 육로와 해로를 모두 포함했으며, 인도양과 지중해를 연결하는 해상 무역로가 특히 중요했습니다. 기원전부터 17세기까지 약 2,000년 이상 번성한 향신료 무역로는 세계사를 바꾸는 중요한 역할을 했으며, 대항해 시대의 시작과 유럽의 식민지 확장에도 영향을 미쳤습니다. 향신료 무역로의 역사, 경로, 교역품, 그리고 현대적 의미를 상세히 다룹니다.<br /><br />
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
    'profile.company6': 'The Junjin',
    'profile.position1': 'Executive Director, Head of Service Division',
    'profile.position2': 'Director, Service Division',
    'profile.position2a': 'Master Lab Manager',
    'profile.position3': 'Training & Technical Support Team Leader',
    'profile.position4': 'Technical Training & Service Manager',
    'profile.position5': 'Global Technical Support & Training',
    'profile.position6': 'Service Operations Manager',
    'modal.coreRole': 'Core Role',
    'modal.keyAchievements': 'Key Achievements',
    'modal.meaning': 'The Meaning of This Experience',
    'notice.heading': 'Update Contents',
    'weeklyNews.heading': "Today's Schedule (Automotive / IT)",
    'schedule.item1.title':
      'Automotive Testing Expo Korea 2026 Pre-Seminar - Automotive Testing Technology & Verification Solutions',
    'schedule.item1.content':
      'Automotive Testing Expo Korea 2026 Pre-Seminar will be held today from 9:00 AM to 5:00 PM (Korea time) in Gangnam-gu, Seoul. The Korea Automobile Manufacturers Association, automakers, testing companies, and verification solution companies will participate. Ahead of tomorrow\'s opening of Automotive Testing Expo Korea 2026 (March 18-20, KINTEX), an in-depth seminar on automotive testing technology and verification solutions will be held. Key topics include integrated real-virtual validation, AI-based testing solutions, AUTOSAR software component verification, automotive software testing and verification tool chains, and automotive quality management systems. ADAS and autonomous vehicle testing, electric and hybrid powertrain testing, battery and range testing, NVH analysis and measurement, and crash testing technology are also discussed. Automakers, parts companies, testing companies, verification solution companies, and research institutions will attend.',
    'schedule.item2.title':
      'Automotive AI & Autonomous Driving Technology Conference 2026 - AI-Based Autonomous Driving System Development',
    'schedule.item2.content':
      'Automotive AI & Autonomous Driving Technology Conference 2026 will be held today from 10:00 AM to 4:00 PM (Korea time) in Yeouido, Seoul. The Korea Automobile Manufacturers Association, automakers, AI companies, and autonomous driving technology companies will participate. Key topics include AI-based autonomous driving system development, utilization of Large Driving Models (LDM), autonomous vehicle perception·decision·control systems, autonomous vehicle safety guardrail technology, and autonomous vehicle simulation and verification. AI-based object recognition, reinforcement learning-based path planning, autonomous vehicle decision-making systems, autonomous vehicle sensor fusion technology, and autonomous vehicle real-time processing systems are also discussed. Automakers, parts companies, AI companies, autonomous driving technology companies, and research institutions will attend.',
    'schedule.item3.title':
      'EV Battery & Charging Technology Workshop 2026 - Battery Performance Optimization & Charging Efficiency',
    'schedule.item3.content':
      'EV Battery & Charging Technology Workshop 2026 will be held today from 9:00 AM to 4:00 PM (Korea time) in Gangnam-gu, Seoul. The Korea Electric Vehicle Association, battery companies, charging infrastructure companies, and EV manufacturers will participate. Key topics include EV battery performance optimization technology, battery charging efficiency improvement, battery thermal management systems, battery lifespan extension technology, and ultra-fast charging technology. High energy density battery technology, battery cost reduction strategies, battery safety improvement technology, wireless charging technology, and battery management system (BMS) optimization are also discussed. EV manufacturers, battery companies, charging infrastructure companies, power companies, and research institutions will attend.',
    'schedule.item4.title':
      'Automotive Cybersecurity & Network Security Technology Forum 2026 - Vehicle Security Enhancement Strategy',
    'schedule.item4.content':
      'Automotive Cybersecurity & Network Security Technology Forum 2026 will be held today from 1:00 PM to 5:00 PM (Korea time) in Yeouido, Seoul. The Korea Automobile Manufacturers Association, automakers, cybersecurity companies, and network security companies will participate. Key topics include compliance with automotive cybersecurity standards (ISO 21434), vehicle network security enhancement, OTA update security, V2X communication security, and autonomous vehicle security. Automotive cybersecurity gateways, real-time threat detection systems, vehicle security certification, automotive cybersecurity incident response, and vehicle software security updates are also discussed. Automakers, parts companies, cybersecurity companies, network security companies, and research institutions will attend.',
    'schedule.item5.title':
      'Automotive Manufacturing Smart Factory & Robotic Automation Seminar 2026 - Manufacturing Innovation & Production Efficiency',
    'schedule.item5.content':
      'Automotive Manufacturing Smart Factory & Robotic Automation Seminar 2026 will be held today from 9:00 AM to 5:00 PM (Korea time) in Gangnam-gu, Seoul. The Korea Automobile Manufacturers Association, automakers, smart factory solution companies, and robot companies will participate. Key topics include smart factory construction strategy, robotic automation systems, AI-based production optimization, digital twin-based manufacturing, and real-time production monitoring. Introduction of Industry 4.0 technology, collaborative robot utilization, AI-based quality management, predictive maintenance systems, smart supply chain management, and production efficiency strategies are also discussed. Automakers, parts companies, smart factory solution companies, robot companies, and research institutions will attend.',
    'notice.updateContent20260316': `<strong>2026-03-16</strong> – We've updated the eBook Series board, Today's Schedule (Automotive/IT), and One-Line Knowledge/Trivia board.<br /><br />
📖 <strong>eBook Series:</strong> "Practical English for Asking Directions" has been added. It focuses on practical English expressions and conversation patterns needed when asking for directions or receiving directions while traveling or in daily life, organized to make learning English easy and practical. It covers various situations such as asking for directions, receiving directions, using transportation, and asking about distance and time. English for asking directions is frequently used not only when traveling but also in daily life, making this a practical English learning resource. We plan to continue providing practical English learning materials on various topics in the future.<br /><br />
📅 <strong>Today's Schedule (Automotive/IT):</strong> March 17 Korean automotive and IT sector schedules have been updated. Automotive Testing Expo Korea 2026 Pre-Seminar will be held (Automotive Testing Technology & Verification Solutions, Gangnam-gu, Seoul), and events include Automotive AI & Autonomous Driving Technology Conference 2026 (AI-Based Autonomous Driving System Development, Yeouido, Seoul), EV Battery & Charging Technology Workshop 2026 (Battery Performance Optimization & Charging Efficiency, Gangnam-gu, Seoul), Automotive Cybersecurity & Network Security Technology Forum 2026 (Vehicle Security Enhancement Strategy, Yeouido, Seoul), and Automotive Manufacturing Smart Factory & Robotic Automation Seminar 2026 (Manufacturing Innovation & Production Efficiency, Gangnam-gu, Seoul). Key discussion topics include automotive testing technology, AI-based autonomous driving systems, EV battery performance optimization, automotive cybersecurity, and smart factory and robotic automation. Automakers, testing companies, AI companies, battery companies, cybersecurity companies, smart factory solution companies, and research institutions will attend.<br /><br />
📚 <strong>One-Line Knowledge/Trivia:</strong> "Spice Route" has been added. The Spice Route was a trade route network that transported spices produced in Southeast Asia and India to Europe and West Asia during ancient and medieval times. It was an important trade route connecting Eastern and Western civilizations along with the Silk Road, with spices such as pepper, cloves, nutmeg, cinnamon, and ginger being the main trade goods. The Spice Route included both land and sea routes, with maritime trade routes connecting the Indian Ocean and the Mediterranean being particularly important. The Spice Route, which flourished for over 2,000 years from ancient times to the 17th century, played an important role in changing world history and also influenced the beginning of the Age of Discovery and European colonial expansion. It covers in detail the history, routes, trade goods, and modern significance of the Spice Route.<br /><br />
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
        } else if (el.tagName === 'H5' && el.closest('.news-item')) {
          // 일정 섹션의 h5 태그인 경우 New 배지를 보존
          const existingBadge = el.querySelector('.schedule-new-badge');
          const badgeHtml = existingBadge
            ? existingBadge.outerHTML
            : '<span class="schedule-new-badge" style="display: none">New</span>';
          el.innerHTML = translation + badgeHtml;
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

      setTimeout(
        () => {
          card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        },
        500 + index * 100,
      );
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
    'the-junjin': {
      companyName: 'The Junjin',
      position: 'Service Operations Manager',
      period: 'Mar. 2026 - 현재',
      coreRole: [
        '서비스 조직의 운영 체계 수립 및 구조 재정비',
        '기존 필터 설치·유지보수 인력의 역할 재정의 및 수익 구조 전환 설계',
        '신규 서비스 사업 기획 및 실행 로드맵 구축',
        '기술 교육 및 Certification 제도 도입 설계',
        '서비스 품질 기준 및 KPI 체계 구축',
        '제조사 및 거래처와의 기술 협업 체계 강화',
        '중장기 서비스 비즈니스 모델 전략 수립',
      ],
      achievements: [],
      meaning: '',
    },
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
    'the-junjin': {
      companyName: 'The Junjin',
      position: 'Service Operations Manager',
      period: 'Mar. 2026 - Present',
      coreRole: [
        'Establishment of service organization operational systems and structural reorganization',
        'Redefinition of roles for existing filter installation and maintenance personnel and design of revenue structure transformation',
        'Planning and execution roadmap for new service businesses',
        'Design of technical training and certification system introduction',
        'Establishment of service quality standards and KPI systems',
        'Strengthening technical collaboration systems with manufacturers and business partners',
        'Strategic planning for mid-to-long-term service business models',
      ],
      achievements: [],
      meaning: '',
    },
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
