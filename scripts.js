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
      'CES 2026 리뷰 & 인사이트 콘서트 in 경북 - 피지컬 AI 및 지능형 모빌리티 기술 트렌드',
    'schedule.item1.content':
      'CES 2026 리뷰 & 인사이트 콘서트 in 경북이 오늘 오후 포항 포스코 국제관 1층 국제회의장에서 개최됩니다. 포항테크노파크와 경상북도경제진흥원이 주최하며, CES 2026에서 확인된 핵심 기술 트렌드를 지역 기업 및 산학연 관계자들과 공유합니다. 피지컬 AI(Physical AI), 휴머노이드 로봇, 지능형 모빌리티, 소프트웨어 중심 차량(SDV) 등 미래 산업 기술이 주요 논의 주제입니다. CES 2026을 통해 본 AI의 실체화와 자율성, 피지컬 AI와 우리의 삶, CES 2026 리뷰 및 산업동향, 기자의 눈으로 바라본 CES 2026 등이 발표됩니다. CES 2027 참가 추진 방향과 기업 모집 계획도 안내됩니다. 자동차 제조사, IT 기업, 로봇 기업, 지역 기업, 산학연 관계자가 참석합니다.',
    'schedule.item2.title':
      'AW 2026 스마트공장·자동화산업전 2일차 - AI 팩토리 특별관 및 휴머노이드로봇 특별관',
    'schedule.item2.content':
      'AW 2026 스마트공장·자동화산업전이 오늘 오전 10시부터 오후 5시까지(한국 시간) 코엑스 전관에서 2일차 행사를 진행합니다. AI 팩토리 특별관과 휴머노이드로봇 특별관이 운영되며, AI 기반 스마트팩토리 솔루션, 휴머노이드 로봇의 제조업 적용, AI 팩토리의 자동차 제조 공정 통합, 휴머노이드 로봇과 인간의 협업 시스템 등이 주요 전시 주제입니다. LS일렉트릭 등 주요 기업이 AI 팩토리 솔루션을 전면 공개하며, 자동차 제조 공정의 AI 기반 자율화, 휴머노이드 로봇의 정밀 작업 능력, AI 팩토리의 실시간 의사결정 시스템 등도 다뤄집니다. 자동차 제조사, 부품 기업, 로봇 기업, IT 기업, 스마트팩토리 솔루션 기업, 연구기관이 참석합니다.',
    'schedule.item3.title':
      '미래 자동차 전자파 국제표준 회의 2026 - 전자파 호환성 및 국제표준화',
    'schedule.item3.content':
      '미래 자동차 전자파 국제표준 회의 2026이 오늘 오전 9시부터 오후 5시까지(한국 시간) 서울에서 개최됩니다. 한국이 주최하며, 글로벌 기술 주도권 선도를 목표로 합니다. 전기차 및 자율주행 차량의 전자파 호환성(EMC), 전자파 간섭 방지 기술, 전자파 국제표준 제정 및 개정, 미래 자동차의 전자파 안전 기준, 전자파 테스트 및 인증 체계 등이 주요 논의 주제입니다. 전기차 충전 시 전자파 영향, 자율주행 센서의 전자파 간섭 방지, V2X 통신의 전자파 호환성, 전자파 국제표준의 통합 방안, 한국의 전자파 기술 경쟁력 강화 등도 다뤄집니다. 자동차 제조사, 부품 기업, 전자파 관련 기업, 국제표준 기구, 연구기관이 참석합니다.',
    'schedule.item4.title':
      'AI 팩토리 기술 세미나 2026 - 자동차 제조 공정의 AI 통합 및 자율화',
    'schedule.item4.content':
      'AI 팩토리 기술 세미나 2026이 오늘 오전 10시부터 오후 4시까지(한국 시간) 코엑스에서 개최됩니다. 한국산업지능화협회와 자동차 제조사, AI 기업이 참여하며, 자동차 제조 공정의 AI 통합, AI 기반 실시간 생산 최적화, AI 팩토리의 자율 의사결정 시스템, AI 기반 품질 예측 및 관리, AI 팩토리의 에너지 효율성 향상 등이 주요 논의 주제입니다. 생성형 AI의 제조 공정 적용, AI 기반 불량 예측 및 자동 조치, AI 팩토리의 디지털 트윈 연동, AI 기반 공급망 최적화, AI 팩토리의 인력-기계 협업 등도 다뤄집니다. 자동차 제조사, 부품 기업, AI 기업, 스마트팩토리 솔루션 기업, 연구기관이 참석합니다.',
    'schedule.item5.title':
      '휴머노이드 로봇 및 지능형 모빌리티 포럼 2026 - 자동차 제조 및 서비스 로봇',
    'schedule.item5.content':
      '휴머노이드 로봇 및 지능형 모빌리티 포럼 2026이 오늘 오후 1시부터 5시까지(한국 시간) 코엑스에서 개최됩니다. 한국로봇산업협회와 자동차 제조사, 로봇 기업이 참여하며, 휴머노이드 로봇의 자동차 제조 공정 적용, 지능형 모빌리티 로봇의 서비스 활용, 휴머노이드 로봇과 인간의 협업 시스템, 지능형 모빌리티의 자율주행 기술, 휴머노이드 로봇의 정밀 작업 능력 등이 주요 논의 주제입니다. CES 2026에서 주목받은 휴머노이드 로봇 기술, 지능형 모빌리티의 V2X 통신 연동, 휴머노이드 로봇의 자동차 부품 조립, 지능형 모빌리티의 로봇택시 서비스, 휴머노이드 로봇의 안전성 및 신뢰성 등도 다뤄집니다. 자동차 제조사, 부품 기업, 로봇 기업, 모빌리티 기업, 연구기관이 참석합니다.',
    'notice.updateContent20260305': `<strong>2026-03-05</strong> - 일반상식 게시판과 오늘의 일정(자동차/IT)을 업데이트했습니다.<br /><br />
🧠 <strong>일반상식:</strong> 「역후광 효과(Horn Effect)」가 추가되었습니다. 역후광 효과는 한 사람이나 사물의 한 가지 부정적인 특성이 그 사람이나 사물의 전체적인 평가에 영향을 미치는 인지 편향입니다. 이는 후광 효과(Halo Effect)의 반대 개념으로, "뿔 효과"라고도 불립니다. 역후광 효과는 우리가 다른 사람이나 사물을 평가할 때, 한 가지 부정적인 특징에 기반하여 전체적인 부정적 판단을 내리는 경향을 의미합니다. 예를 들어, 한 가지 실수를 한 사람을 전반적으로 무능하다고 평가하거나, 한 가지 단점이 있는 제품을 전체적으로 나쁘다고 생각하는 것이 역후광 효과의 예입니다. 역후광 효과는 후광 효과와 함께 우리의 일상적인 판단과 의사결정에 큰 영향을 미치며, 인사 관리, 마케팅, 교육, 법률 등 다양한 분야에서 중요한 역할을 합니다. 역후광 효과의 개념, 발생 원인, 실제 적용 사례, 후광 효과와의 비교, 관련 인지 편향, 부정적 영향, 극복 방법, 사회적 영향, 비즈니스, 연구 발전 등을 상세히 다룹니다. 역후광 효과를 이해하고 극복하는 것은 더 정확한 평가와 의사결정을 가능하게 하며, 공정하고 포용적인 사회를 만드는 데 기여합니다.<br /><br />
📅 <strong>오늘의 일정(자동차/IT):</strong> 3월 5일 한국 자동차 및 IT 부문 일정이 업데이트되었습니다. CES 2026 리뷰 & 인사이트 콘서트 in 경북(피지컬 AI 및 지능형 모빌리티 기술 트렌드, 포항), AW 2026 스마트공장·자동화산업전 2일차(AI 팩토리 특별관 및 휴머노이드로봇 특별관, 코엑스), 미래 자동차 전자파 국제표준 회의 2026(전자파 호환성 및 국제표준화, 서울), AI 팩토리 기술 세미나 2026(자동차 제조 공정의 AI 통합 및 자율화, 코엑스), 휴머노이드 로봇 및 지능형 모빌리티 포럼 2026(자동차 제조 및 서비스 로봇, 코엑스) 등이 개최됩니다. CES 2026에서 확인된 핵심 기술 트렌드, 피지컬 AI, 휴머노이드 로봇, 지능형 모빌리티, 소프트웨어 중심 차량(SDV), AI 팩토리 솔루션, 전자파 호환성, 휴머노이드 로봇의 자동차 제조 적용 등이 주요 논의 주제입니다. 자동차 제조사, 부품 기업, 로봇 기업, IT 기업, 스마트팩토리 솔루션 기업, 연구기관이 참석합니다.<br /><br />
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
      'CES 2026 Review & Insight Concert in Gyeongbuk - Physical AI & Intelligent Mobility Technology Trends',
    'schedule.item1.content':
      'CES 2026 Review & Insight Concert in Gyeongbuk will be held today in the afternoon at the International Conference Hall, 1st floor of POSCO International Hall in Pohang. Organized by Pohang Technopark and Gyeongbuk Economic Promotion Agency, the event shares key technology trends confirmed at CES 2026 with local companies and industry-academia-research stakeholders. Key topics include Physical AI, humanoid robots, intelligent mobility, and Software-Defined Vehicles (SDV). Presentations cover the materialization and autonomy of AI through CES 2026, Physical AI and our lives, CES 2026 review and industry trends, and CES 2026 from a journalist\'s perspective. CES 2027 participation plans and company recruitment plans will also be introduced. Automakers, IT companies, robot companies, local companies, and industry-academia-research stakeholders will attend.',
    'schedule.item2.title':
      'AW 2026 Smart Factory & Automation Industry Exhibition Day 2 - AI Factory Special Pavilion & Humanoid Robot Special Pavilion',
    'schedule.item2.content':
      'AW 2026 Smart Factory & Automation Industry Exhibition continues today from 10:00 AM to 5:00 PM (Korea time) at COEX Convention Center for Day 2. The AI Factory Special Pavilion and Humanoid Robot Special Pavilion are operating, with key exhibition topics including AI-based smart factory solutions, application of humanoid robots in manufacturing, integration of AI factories in automotive manufacturing processes, and collaboration systems between humanoid robots and humans. Major companies such as LS Electric will fully unveil AI factory solutions, covering AI-based automation in automotive manufacturing processes, precision capabilities of humanoid robots, and real-time decision-making systems in AI factories. Automakers, parts companies, robot companies, IT companies, smart factory solution companies, and research institutions will attend.',
    'schedule.item3.title':
      'Future Automotive EMC International Standards Meeting 2026 - Electromagnetic Compatibility & International Standardization',
    'schedule.item3.content':
      'Future Automotive EMC International Standards Meeting 2026 will be held today from 9:00 AM to 5:00 PM (Korea time) in Seoul. Hosted by Korea, the meeting aims to lead global technology leadership. Key topics include electromagnetic compatibility (EMC) of electric and autonomous vehicles, electromagnetic interference prevention technology, international EMC standard development and revision, EMC safety standards for future vehicles, and EMC testing and certification systems. EMC impact during EV charging, electromagnetic interference prevention for autonomous driving sensors, EMC of V2X communications, integration of international EMC standards, and strengthening Korea\'s EMC technology competitiveness are also discussed. Automakers, parts companies, EMC-related companies, international standard organizations, and research institutions will attend.',
    'schedule.item4.title':
      'AI Factory Technology Seminar 2026 - AI Integration & Automation in Automotive Manufacturing Processes',
    'schedule.item4.content':
      'AI Factory Technology Seminar 2026 will be held today from 10:00 AM to 4:00 PM (Korea time) at COEX. The Korea Industrial Intelligence Association, automakers, and AI companies will participate. Key topics include AI integration in automotive manufacturing processes, AI-based real-time production optimization, autonomous decision-making systems in AI factories, AI-based quality prediction and management, and energy efficiency improvement in AI factories. Application of generative AI in manufacturing processes, AI-based defect prediction and automatic actions, digital twin integration in AI factories, AI-based supply chain optimization, and human-machine collaboration in AI factories are also discussed. Automakers, parts companies, AI companies, smart factory solution companies, and research institutions will attend.',
    'schedule.item5.title':
      'Humanoid Robot & Intelligent Mobility Forum 2026 - Automotive Manufacturing & Service Robots',
    'schedule.item5.content':
      'Humanoid Robot & Intelligent Mobility Forum 2026 will be held today from 1:00 PM to 5:00 PM (Korea time) at COEX. The Korea Robot Industry Association, automakers, and robot companies will participate. Key topics include application of humanoid robots in automotive manufacturing processes, service utilization of intelligent mobility robots, collaboration systems between humanoid robots and humans, autonomous driving technology in intelligent mobility, and precision capabilities of humanoid robots. Humanoid robot technology that gained attention at CES 2026, V2X communication integration in intelligent mobility, automotive parts assembly by humanoid robots, robotaxi services in intelligent mobility, and safety and reliability of humanoid robots are also discussed. Automakers, parts companies, robot companies, mobility companies, and research institutions will attend.',
    'notice.updateContent20260305': `<strong>2026-03-05</strong> – We've updated the General Knowledge board and Today's Schedule (Automotive/IT).<br /><br />
🧠 <strong>General Knowledge:</strong> "Horn Effect" has been added. The Horn Effect is a cognitive bias where one negative characteristic of a person or object influences the overall evaluation of that person or object. This is the opposite concept of the Halo Effect and is also called the "horn effect." The Horn Effect means the tendency to make overall negative judgments based on one negative characteristic when evaluating other people or objects. For example, evaluating someone who made one mistake as generally incompetent, or thinking that a product with one drawback is generally bad are examples of the Horn Effect. The Horn Effect, together with the Halo Effect, has a significant impact on our daily judgments and decision-making, and plays an important role in various fields including human resources, marketing, education, and law. It covers in detail the concept of the Horn Effect, causes, real-world applications, comparison with the Halo Effect, related cognitive biases, negative impacts, methods to overcome, social impacts, business, and research developments. Understanding and overcoming the Horn Effect enables more accurate evaluation and decision-making and contributes to creating a fair and inclusive society.<br /><br />
📅 <strong>Today's Schedule (Automotive/IT):</strong> March 5 Korean automotive and IT sector schedules have been updated. Events include CES 2026 Review & Insight Concert in Gyeongbuk (Physical AI & Intelligent Mobility Technology Trends, Pohang), AW 2026 Smart Factory & Automation Industry Exhibition Day 2 (AI Factory Special Pavilion & Humanoid Robot Special Pavilion, COEX), Future Automotive EMC International Standards Meeting 2026 (Electromagnetic Compatibility & International Standardization, Seoul), AI Factory Technology Seminar 2026 (AI Integration & Automation in Automotive Manufacturing Processes, COEX), and Humanoid Robot & Intelligent Mobility Forum 2026 (Automotive Manufacturing & Service Robots, COEX). Key discussion topics include key technology trends confirmed at CES 2026, Physical AI, humanoid robots, intelligent mobility, Software-Defined Vehicles (SDV), AI factory solutions, electromagnetic compatibility, and application of humanoid robots in automotive manufacturing. Automakers, parts companies, robot companies, IT companies, smart factory solution companies, and research institutions will attend.<br /><br />
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
