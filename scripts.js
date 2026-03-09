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
      '미래 자동차 전자파 국제표준화 회의 2026 - 한국자동차연구원 방문 및 기술 교류',
    'schedule.item1.content':
      '미래 자동차 전자파 국제표준화 회의 2026이 오늘 오전 9시부터 오후 5시까지(한국 시간) 인천 청라 한국자동차연구원에서 진행됩니다. 국립전파연구원과 한국정보통신기술협회가 주최하며, 미국, 일본, 중국 등 12개국의 70여 명 전문가와 한국 산·학·연 전문가 17명이 참석합니다. 오늘은 한국자동차연구원을 방문하여 전기차 및 자율주행 차량의 전자파 호환성(EMC) 테스트 시설을 견학하고, 한국의 자동차 전자파 기술 현황을 공유합니다. 전자파 국제표준 제정 및 개정, 전자파 간섭 방지 기술, 전자파 안전 기준, 전자파 테스트 및 인증 체계 등이 주요 논의 주제입니다. 한국자동차연구원의 전자파 테스트 기술, 한국 자동차 제조사의 전자파 대응 사례, 국제표준과 한국 표준의 조화 방안, 한국의 전자파 기술 경쟁력 강화 등도 다뤄집니다. 자동차 제조사, 부품 기업, 전자파 관련 기업, 국제표준 기구, 연구기관이 참석합니다.',
    'schedule.item2.title':
      '자동차 소프트웨어 아키텍처 및 플랫폼 기술 세미나 2026 - SDV 아키텍처 및 통합 플랫폼',
    'schedule.item2.content':
      '자동차 소프트웨어 아키텍처 및 플랫폼 기술 세미나 2026이 오늘 오전 10시부터 오후 4시까지(한국 시간) 서울 강남구에서 개최됩니다. 한국자동차산업협회와 자동차 제조사, IT 기업, 소프트웨어 기업이 참여하며, 소프트웨어 정의 차량(SDV) 아키텍처 설계, 차량 소프트웨어 플랫폼 통합, 차량 운영체제(OS) 표준화, 차량 소프트웨어 개발 방법론, 차량 소프트웨어 테스트 및 검증 등이 주요 논의 주제입니다. AUTOSAR 기반 소프트웨어 아키텍처, 차량 클라우드 연동 플랫폼, 차량 엣지 컴퓨팅 플랫폼, 차량 소프트웨어의 모듈화 및 재사용, 차량 소프트웨어의 업그레이드 가능성 등도 다뤄집니다. 자동차 제조사, 부품 기업, IT 기업, 소프트웨어 기업, 연구기관이 참석합니다.',
    'schedule.item3.title':
      '전기차 충전 인프라 및 스마트 그리드 기술 포럼 2026 - 충전 네트워크 및 V2G 기술',
    'schedule.item3.content':
      '전기차 충전 인프라 및 스마트 그리드 기술 포럼 2026이 오늘 오전 9시부터 오후 4시까지(한국 시간) 서울 여의도에서 개최됩니다. 한국전기자동차협회와 전력 기업, 충전 인프라 기업, 전기차 제조사가 참여하며, 전기차 충전 인프라 확대 전략, 스마트 충전 네트워크 구축, V2G(Vehicle-to-Grid) 기술, 충전 인프라의 스마트 그리드 연동, 충전 인프라의 표준화 등이 주요 논의 주제입니다. 초고속 충전 인프라(350kW 이상) 확대, 무선 충전 인프라 도입, 충전 인프라의 원격 모니터링 및 관리, 충전 인프라의 수요 관리, 충전 인프라의 수익 모델 등도 다뤄집니다. 전기차 제조사, 충전 인프라 기업, 전력 기업, 스마트 그리드 기업, 연구기관이 참석합니다.',
    'schedule.item4.title':
      '자율주행 차량 센서 및 퓨전 기술 워크샵 2026 - 라이다, 레이더, 카메라 센서 통합',
    'schedule.item4.content':
      '자율주행 차량 센서 및 퓨전 기술 워크샵 2026이 오늘 오후 1시부터 5시까지(한국 시간) 서울 강남구에서 개최됩니다. 한국자동차산업협회와 자동차 제조사, 센서 기업, AI 기업이 참여하며, 자율주행 차량 센서 기술(라이다, 레이더, 카메라), 센서 퓨전 기술, 센서 데이터 처리 및 분석, 센서 신뢰성 및 안전성, 센서 표준화 등이 주요 논의 주제입니다. 라이다 센서의 고해상도 및 저비용화, 레이더 센서의 장거리 감지 기술, 카메라 센서의 AI 기반 객체 인식, 센서 퓨전 알고리즘, 센서 데이터의 실시간 처리 등도 다뤄집니다. 자동차 제조사, 부품 기업, 센서 기업, AI 기업, 연구기관이 참석합니다.',
    'schedule.item5.title':
      '자동차 산업 디지털 전환 및 스마트 팩토리 세미나 2026 - 제조 4.0 및 AI 기반 생산',
    'schedule.item5.content':
      '자동차 산업 디지털 전환 및 스마트 팩토리 세미나 2026이 오늘 오전 9시부터 오후 5시까지(한국 시간) 서울 여의도에서 개최됩니다. 한국자동차산업협회와 자동차 제조사, IT 기업, 스마트 팩토리 솔루션 기업이 참여하며, 자동차 제조의 디지털 전환 전략, 스마트 팩토리 구축, AI 기반 생산 최적화, 디지털 트윈 기반 제조, 로봇 자동화 등이 주요 논의 주제입니다. 제조 4.0 기술 도입, AI 기반 품질 관리, 실시간 생산 모니터링, 예측 정비 시스템, 스마트 공급망 관리 등도 다뤄집니다. 자동차 제조사, 부품 기업, IT 기업, 스마트 팩토리 솔루션 기업, 연구기관이 참석합니다.',
    'notice.updateContent20260310': `<strong>2026-03-10</strong> - 경제상식 게시판과 오늘의 일정(자동차/IT)을 업데이트했습니다.<br /><br />
📚 <strong>경제상식:</strong> 「트레이드오프(Trade-off)」가 추가되었습니다. 트레이드오프는 경제학과 의사결정에서 가장 기본적이면서도 중요한 개념 중 하나입니다. 한정된 자원을 사용할 때, 한 가지를 선택하면 다른 것을 포기해야 하는 상황을 의미합니다. 즉, 어떤 선택을 할 때 그 선택으로 인해 얻는 이익과 함께 포기하게 되는 다른 이익 사이의 관계가 바로 트레이드오프입니다. 트레이드오프는 기회비용과 밀접한 관련이 있으며, 개인, 기업, 정부의 모든 의사결정에 핵심적인 역할을 합니다. 트레이드오프의 개념, 종류(시간과 돈, 품질과 가격, 위험과 수익, 효율성과 공정성, 단기와 장기), 개인 의사결정에서의 트레이드오프, 기업 의사결정에서의 트레이드오프, 정부 정책에서의 트레이드오프, 트레이드오프의 실제 적용 사례, 트레이드오프의 한계와 주의사항, 트레이드오프와 효율적인 의사결정 등을 상세히 다룹니다. 트레이드오프를 이해하는 것은 효율적인 의사결정을 위한 핵심 도구이며, 현대 경제에서 필수적인 능력입니다.<br /><br />
📅 <strong>오늘의 일정(자동차/IT):</strong> 3월 10일 한국 자동차 및 IT 부문 일정이 업데이트되었습니다. 미래 자동차 전자파 국제표준화 회의 2026이 한국자동차연구원을 방문하여 진행되며(한국자동차연구원 방문 및 기술 교류, 인천 청라), 자동차 소프트웨어 아키텍처 및 플랫폼 기술 세미나 2026(SDV 아키텍처 및 통합 플랫폼, 서울 강남구), 전기차 충전 인프라 및 스마트 그리드 기술 포럼 2026(충전 네트워크 및 V2G 기술, 서울 여의도), 자율주행 차량 센서 및 퓨전 기술 워크샵 2026(라이다, 레이더, 카메라 센서 통합, 서울 강남구), 자동차 산업 디지털 전환 및 스마트 팩토리 세미나 2026(제조 4.0 및 AI 기반 생산, 서울 여의도) 등이 개최됩니다. 전기차 및 자율주행 차량의 전자파 호환성(EMC) 국제 표준 제정 및 개정, 소프트웨어 정의 차량(SDV) 아키텍처 설계, 전기차 충전 인프라 확대 전략, 자율주행 차량 센서 기술, 자동차 제조의 디지털 전환 전략 등이 주요 논의 주제입니다. 자동차 제조사, 부품 기업, IT 기업, 소프트웨어 기업, 충전 인프라 기업, 센서 기업, 스마트 팩토리 솔루션 기업, 연구기관이 참석합니다.<br /><br />
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
      'Future Automotive EMC International Standardization Meeting 2026 - Korea Automotive Technology Institute Visit & Technical Exchange',
    'schedule.item1.content':
      'Future Automotive EMC International Standardization Meeting 2026 will be held today from 9:00 AM to 5:00 PM (Korea time) at the Korea Automotive Technology Institute in Cheongna, Incheon. Organized by the National Radio Research Agency and Korea Information and Communication Technology Association, the meeting brings together 70 experts from 12 countries including the United States, Japan, and China, along with 17 Korean industry-academia-research experts. Today, participants will visit the Korea Automotive Technology Institute to tour EMC testing facilities for electric and autonomous vehicles and share Korea\'s automotive EMC technology status. Key topics include international standard development and revision for electromagnetic compatibility (EMC), electromagnetic interference prevention technology, EMC safety standards, and EMC testing and certification systems. EMC testing technology at the Korea Automotive Technology Institute, EMC response cases from Korean automakers, harmonization of international and Korean standards, and strengthening Korea\'s EMC technology competitiveness are also discussed. Automakers, parts companies, EMC-related companies, international standard organizations, and research institutions will attend.',
    'schedule.item2.title':
      'Automotive Software Architecture & Platform Technology Seminar 2026 - SDV Architecture & Integrated Platform',
    'schedule.item2.content':
      'Automotive Software Architecture & Platform Technology Seminar 2026 will be held today from 10:00 AM to 4:00 PM (Korea time) in Gangnam-gu, Seoul. The Korea Automobile Manufacturers Association, automakers, IT companies, and software companies will participate. Key topics include Software-Defined Vehicle (SDV) architecture design, vehicle software platform integration, vehicle operating system (OS) standardization, vehicle software development methodology, and vehicle software testing and verification. AUTOSAR-based software architecture, vehicle-cloud integration platform, vehicle edge computing platform, modularization and reuse of vehicle software, and upgradeability of vehicle software are also discussed. Automakers, parts companies, IT companies, software companies, and research institutions will attend.',
    'schedule.item3.title':
      'EV Charging Infrastructure & Smart Grid Technology Forum 2026 - Charging Network & V2G Technology',
    'schedule.item3.content':
      'EV Charging Infrastructure & Smart Grid Technology Forum 2026 will be held today from 9:00 AM to 4:00 PM (Korea time) in Yeouido, Seoul. The Korea Electric Vehicle Association, power companies, charging infrastructure companies, and EV manufacturers will participate. Key topics include EV charging infrastructure expansion strategy, smart charging network construction, V2G (Vehicle-to-Grid) technology, smart grid integration of charging infrastructure, and standardization of charging infrastructure. Expansion of ultra-fast charging infrastructure (350kW and above), introduction of wireless charging infrastructure, remote monitoring and management of charging infrastructure, demand management for charging infrastructure, and revenue models for charging infrastructure are also discussed. EV manufacturers, charging infrastructure companies, power companies, smart grid companies, and research institutions will attend.',
    'schedule.item4.title':
      'Autonomous Vehicle Sensor & Fusion Technology Workshop 2026 - LiDAR, Radar, Camera Sensor Integration',
    'schedule.item4.content':
      'Autonomous Vehicle Sensor & Fusion Technology Workshop 2026 will be held today from 1:00 PM to 5:00 PM (Korea time) in Gangnam-gu, Seoul. The Korea Automobile Manufacturers Association, automakers, sensor companies, and AI companies will participate. Key topics include autonomous vehicle sensor technology (LiDAR, radar, camera), sensor fusion technology, sensor data processing and analysis, sensor reliability and safety, and sensor standardization. High-resolution and cost reduction of LiDAR sensors, long-range detection technology for radar sensors, AI-based object recognition for camera sensors, sensor fusion algorithms, and real-time processing of sensor data are also discussed. Automakers, parts companies, sensor companies, AI companies, and research institutions will attend.',
    'schedule.item5.title':
      'Automotive Industry Digital Transformation & Smart Factory Seminar 2026 - Industry 4.0 & AI-Based Production',
    'schedule.item5.content':
      'Automotive Industry Digital Transformation & Smart Factory Seminar 2026 will be held today from 9:00 AM to 5:00 PM (Korea time) in Yeouido, Seoul. The Korea Automobile Manufacturers Association, automakers, IT companies, and smart factory solution companies will participate. Key topics include digital transformation strategy for automotive manufacturing, smart factory construction, AI-based production optimization, digital twin-based manufacturing, and robotic automation. Introduction of Industry 4.0 technology, AI-based quality management, real-time production monitoring, predictive maintenance systems, and smart supply chain management are also discussed. Automakers, parts companies, IT companies, smart factory solution companies, and research institutions will attend.',
    'notice.updateContent20260310': `<strong>2026-03-10</strong> – We've updated the Economics board and Today's Schedule (Automotive/IT).<br /><br />
📚 <strong>Economics:</strong> "Trade-off" has been added. Trade-off is one of the most fundamental and important concepts in economics and decision-making. It refers to the situation where choosing one thing means giving up another when using limited resources. In other words, when making a choice, the relationship between the benefits gained from that choice and the other benefits that must be sacrificed is the trade-off. Trade-off is closely related to opportunity cost and plays a crucial role in all decisions made by individuals, companies, and governments. It covers in detail the concept of trade-off, types of trade-offs (time and money, quality and price, risk and return, efficiency and fairness, short-term and long-term), trade-offs in personal decision-making, trade-offs in corporate decision-making, trade-offs in government policy, real-world applications of trade-offs, limitations and cautions of trade-offs, and trade-offs and efficient decision-making. Understanding trade-offs is a core tool for efficient decision-making and an essential ability in modern economics.<br /><br />
📅 <strong>Today's Schedule (Automotive/IT):</strong> March 10 Korean automotive and IT sector schedules have been updated. The Future Automotive EMC International Standardization Meeting 2026 will visit the Korea Automotive Technology Institute (Korea Automotive Technology Institute Visit & Technical Exchange, Cheongna, Incheon), and events include Automotive Software Architecture & Platform Technology Seminar 2026 (SDV Architecture & Integrated Platform, Gangnam-gu, Seoul), EV Charging Infrastructure & Smart Grid Technology Forum 2026 (Charging Network & V2G Technology, Yeouido, Seoul), Autonomous Vehicle Sensor & Fusion Technology Workshop 2026 (LiDAR, Radar, Camera Sensor Integration, Gangnam-gu, Seoul), and Automotive Industry Digital Transformation & Smart Factory Seminar 2026 (Industry 4.0 & AI-Based Production, Yeouido, Seoul). Key discussion topics include international standard development and revision for electromagnetic compatibility (EMC) of electric and autonomous vehicles, Software-Defined Vehicle (SDV) architecture design, EV charging infrastructure expansion strategy, autonomous vehicle sensor technology, and digital transformation strategy for automotive manufacturing. Automakers, parts companies, IT companies, software companies, charging infrastructure companies, sensor companies, smart factory solution companies, and research institutions will attend.<br /><br />
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
