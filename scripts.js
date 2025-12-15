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
    'notice.updateContent20251215': `<strong>2025-12-15</strong> - eBook Series 게시판과 한줄 지식/잡학 게시판에 새로운 콘텐츠를 추가했습니다.<br /><br />
📖 <strong>eBook Series:</strong> 「Hoki Lee eBook Series Vol.23 — 성과의 흐름을 설계하라 — 목표, 실행, 측정의 연결 구조」가 업데이트되었습니다. <strong>영업, 자기관리, 마케팅, 성과 분석</strong> 등 실무 인사이트를 담은 eBook 시리즈 스물세 번째 자료입니다.<br /><br />
💡 <strong>한줄 지식/잡학:</strong> 「기억의 재구성, 기억이 왜곡되는 이유와 신뢰성」에서는 우리가 과거의 경험을 기억한다고 생각하지만, 실제로는 기억이 매번 새롭게 재구성되는 과정을 거친다는 것을 설명합니다. 같은 사건을 여러 번 기억해도 매번 조금씩 다르게 기억되는 현상은 단순한 실수가 아니라, 우리 뇌가 기억을 저장하고 불러오는 방식의 특성 때문입니다. 기억의 재구성(Memory Reconsolidation)은 기억이 저장될 때 완전히 고정되는 것이 아니라, 기억을 불러올 때마다 다시 재구성되는 과정을 말합니다. 기억이 왜곡되는 이유, 거짓 기억의 형성, 기억의 신뢰성, 그리고 이러한 현상이 법적 증거, 개인적 관계, 학습과 교육 등 일상생활의 여러 영역에 미치는 영향을 상세히 다룹니다.<br /><br />
각 게시판에서 더 자세한 내용을 확인하실 수 있으니 많은 관심 부탁드립니다.`,
    'notice.updateContent20251212': `<strong>2025-12-12</strong> - eBook Series 게시판, 경제상식 게시판, 일반상식 게시판에 새로운 콘텐츠를 추가했습니다.<br /><br />
📖 <strong>eBook Series:</strong> 「Hoki Lee eBook Series Vol.22 — 핵심성과지표(KPI)의 본질 — 무엇을 측정해야 진짜 성과인가?」가 업데이트되었습니다. 조직 운영과 결과를 알기 위한 기본 툴인 KPI(Key Performance Indicator)에 대한 내용을 담고 있습니다. <strong>영업, 자기관리, 마케팅, 성과 분석</strong> 등 실무 인사이트를 담은 eBook 시리즈 스물두 번째 자료입니다.<br /><br />
💼 <strong>경제상식:</strong> 「서브스크립션 경제와 소비 패턴 변화」에서는 현대 사회에서 소비가 단순히 물건을 구매하는 행위를 넘어, 경험과 가치를 지속적으로 구독하는 형태로 진화하고 있는 현상을 분석합니다. 서브스크립션 경제는 소프트웨어, 콘텐츠, 상품, 심지어 자동차까지 다양한 분야에서 확산되며 우리의 소비 패턴을 근본적으로 변화시키고 있습니다. 과거에는 소유가 중요했지만, 이제는 '접근(Access)'이 핵심이 되는 시대로 접어든 것입니다. 서브스크립션 경제의 개념과 등장 배경, 유형과 사례, 소비 패턴 변화의 특징, 기업에게 미치는 영향과 대응 전략, 그리고 일반인이 이해해야 할 점을 상세히 다룹니다.<br /><br />
📚 <strong>일반상식:</strong> 「핑거 스패닝(Finger Spanning) 효과」는 손가락을 펼쳤을 때 손가락 사이의 간격이 시각적 인식과 공간 인식에 영향을 미치는 심리학적 현상입니다. 이 효과는 손가락의 물리적 간격과 우리가 인지하는 공간적 거리 사이의 관계를 보여주며, 촉각-시각 통합, 공간 인식, 몸의 표현 등과 밀접한 관련이 있습니다. 핑거 스패닝 효과의 개념, 발생 원인, 실생활에서의 영향, 그리고 관련 연구를 자세히 알아봅니다.<br /><br />
각 게시판에서 더 자세한 내용을 확인하실 수 있으니 많은 관심 부탁드립니다.`,
    'notice.updateContent20251211': `<strong>2025-12-11</strong> - eBook Series 게시판과 한줄 지식/잡학 게시판에 새로운 콘텐츠를 추가했습니다.<br /><br />
📖 <strong>eBook Series:</strong> 「Hoki Lee eBook Series Vol.21 — 제도가 문화를 완성한다 — 의지를 실행으로 바꾸는 조직의 시스템」이 업데이트되었습니다. 이번 업데이트에서는 eBook Series 게시판의 개별 자료 제목을 책의 부제목 기준으로 변경하였습니다. <strong>영업, 자기관리, 마케팅, 성과 분석</strong> 등 실무 인사이트를 담은 eBook 시리즈 스물한 번째 자료입니다.<br /><br />
💡 <strong>한줄 지식/잡학:</strong> 「아침 커피가 더 효과적인 이유, 생체리듬과 카페인의 관계」에서는 아침에 일어나자마자 커피를 마시는 것이 정말 더 효과적인지, 그리고 그 이유가 무엇인지를 과학적으로 설명합니다. 아침 커피가 더 효과적이라는 일반적인 믿음과 달리, 실제로는 생체리듬과 호르몬 분비 패턴에 따라 커피의 효과가 달라질 수 있습니다. 아침에 코르티솔이 자연스럽게 높게 분비되는 시기에는 카페인의 효과가 상대적으로 덜 느껴질 수 있으며, 오히려 코르티솔이 감소하는 시기(오전 9시 30분~11시 30분, 오후 2시~3시)에 카페인을 섭취하는 것이 더 효과적일 수 있습니다. 카페인은 아데노신 수용체를 차단하여 각성 상태를 유지하고, 도파민과 노르에피네프린 분비를 증가시켜 집중력과 기분을 향상시킵니다. 생체리듬과 카페인의 상호작용, 코르티솔과 카페인의 관계, 최적의 커피 섭취 시기와 방법, 카페인 내성과 효과, 커피 섭취 시 주의사항 등을 상세히 다룹니다.<br /><br />
각 게시판에서 더 자세한 내용을 확인하실 수 있으니 많은 관심 부탁드립니다.`,
    'notice.updateContent20251210': `<strong>2025-12-10</strong> - eBook Series 게시판, 경제상식 게시판, 일반상식 게시판에 새로운 콘텐츠를 추가했습니다.<br /><br />
📖 <strong>eBook Series:</strong> 「Hoki Lee eBook Series Vol.20 — 조직의 적응력은 사람에서 시작된다 — 변화에 강한 팀의 조건」이 업데이트되었습니다. 지금까지 프로세스에 대한 내용을 다루었으며, 이제 프로세스를 운영하는 사람들이 중요하기 때문에 향후 사람을 주제로 다루기 시작합니다. <strong>영업, 자기관리, 마케팅, 성과 분석</strong> 등 실무 인사이트를 담은 eBook 시리즈 스무 번째 자료입니다.<br /><br />
💼 <strong>경제상식:</strong> 「세대별 실업률 변화, 청년과 노년의 다른 고용 현실」에서는 최근 고용 통계에서 나타나는 흥미로운 현상을 분석합니다. 청년층의 실업률은 감소하고 있는 반면, 노년층의 실업률은 오히려 증가하고 있습니다. 이는 단순한 숫자의 변화가 아니라 우리 사회의 인구 구조 변화와 고용 시장의 구조적 변화를 보여주는 중요한 지표입니다. 청년층 실업 감소의 원인으로는 신규 일자리 창출 증가, 청년 고용 정책의 효과, 청년층 인구 감소 등이 있으며, 노년층 실업 증가의 원인으로는 고령화와 고용 불안정성, 기술 변화로 인한 재취업 어려움, 노년층 인구 증가와 일자리 부족 등이 있습니다. 고령화로 인해 노동력 구조가 변화하고 있으며, 세대 간 일자리 경쟁이 심화되고 있고, 고용 시장이 양극화되고 있습니다. 이러한 변화에 대응하기 위한 세대별 고용 정책과 대응 방안을 상세히 다룹니다.<br /><br />
📚 <strong>일반상식:</strong> 「제노비스 증후군(Bystander Effect)」은 비상 상황이 발생했을 때 주변에 사람이 많을수록 개인이 도움을 주지 않는 경향을 의미하는 심리학적 현상입니다. 1964년 뉴욕에서 발생한 키티 제노비스(Kitty Genovese) 살인 사건에서 유래한 용어로, 많은 사람들이 목격했지만 아무도 도움을 주지 않았다는 충격적인 사건이 방관자 효과 연구의 계기가 되었습니다. 제노비스 증후군의 핵심 메커니즘은 사회적 책임 분산, 평가 우려, 다수 무시 등입니다. 응급 상황에서 도움 지연, 사회적 무관심, 범죄 증가 등의 부정적 영향을 미칠 수 있지만, 안전 고려, 전문가 의존 등의 긍정적 측면도 있습니다. 제노비스 증후군을 극복하기 위한 방법과 교육의 중요성을 상세히 다룹니다.<br /><br />
각 게시판에서 더 자세한 내용을 확인하실 수 있으니 많은 관심 부탁드립니다.`,
    'notice.updateContent20251209': `<strong>2025-12-09</strong> - 한줄 지식/잡학 게시판과 eBook Series 게시판에 새로운 콘텐츠를 추가했습니다.<br /><br />
💡 <strong>한줄 지식/잡학:</strong> 「계절성 우울증(SAD), 겨울철 우울감의 과학적 원인」에서는 겨울이 되면 기분이 우울해지고, 에너지가 부족하며, 일상생활에 의욕이 떨어지는 경험의 과학적 원인을 설명합니다. 계절성 우울증은 계절의 변화에 따라 반복적으로 발생하는 우울증으로, 주로 가을과 겨울에 나타나고 봄과 여름에 호전되는 특징이 있습니다. 특히 일조량이 적은 겨울철에 많은 사람들이 경험하는 현상입니다. 일조량 부족으로 인해 멜라토닌과 세로토닌 같은 신경전달물질의 변화가 주요 원인이며, 비타민 D 부족, 유전적 요인, 환경적 요인 등도 영향을 미칩니다. 계절성 우울증의 증상, 진단 방법, 치료 방법(광치료, 약물 치료, 인지행동치료, 생활 습관 개선), 예방 방법 등을 상세히 다룹니다. 증상이 심하지 않다면 생활 습관 개선만으로도 충분히 관리할 수 있지만, 일상생활에 지장을 준다면 전문가의 도움을 받는 것이 중요합니다.<br /><br />
📖 <strong>eBook Series:</strong> 「Hoki Lee eBook Series Vol.19 — 개선의 힘 — 프로세스는 문제를 통해 성장한다」가 업데이트되었습니다. <strong>영업, 자기관리, 마케팅, 성과 분석</strong> 등 실무 인사이트를 담은 eBook 시리즈 열아홉 번째 자료입니다.<br /><br />
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
    'notice.updateContent20251215': `<strong>2025-12-15</strong> – We've added new content to the eBook Series board and One-line Knowledge/Trivia board.<br /><br />
📖 <strong>eBook Series:</strong> "Hoki Lee eBook Series Vol.23 — Design the Flow of Performance — The Connected Structure of Goals, Execution, and Measurement" has been updated. This is the twenty-third volume of the eBook series containing practical insights on <strong>sales, self-management, marketing, and performance analysis</strong>.<br /><br />
💡 <strong>One-line Knowledge/Trivia:</strong> "Memory Reconsolidation: Why Memories Become Distorted and Their Reliability" explains that while we think we remember past experiences, our memories actually go through a process of being reconstructed each time. The phenomenon where the same event is remembered slightly differently each time is not simply a mistake, but rather a characteristic of how our brain stores and retrieves memories. Memory Reconsolidation refers to the process where memories are not completely fixed when stored, but are reconstructed each time they are retrieved. It covers in detail why memories become distorted, the formation of false memories, the reliability of memories, and how these phenomena affect various areas of daily life including legal evidence, personal relationships, and learning and education.<br /><br />
Please check each board for more detailed content.`,
    'notice.updateContent20251212': `<strong>2025-12-12</strong> – We've added new content to the eBook Series board, Economics board, and General Knowledge board.<br /><br />
📖 <strong>eBook Series:</strong> "Hoki Lee eBook Series Vol.22 — The Essence of Key Performance Indicators (KPI) — What Should We Measure to Know True Performance?" has been updated. It covers KPI (Key Performance Indicator), a fundamental tool for understanding organizational operations and results. This is the twenty-second volume of the eBook series containing practical insights on <strong>sales, self-management, marketing, and performance analysis</strong>.<br /><br />
💼 <strong>Economics:</strong> "Subscription Economy and Changes in Consumption Patterns" analyzes the phenomenon where consumption in modern society has evolved beyond simply purchasing goods to continuously subscribing to experiences and values. The subscription economy is spreading across various fields including software, content, products, and even automobiles, fundamentally changing our consumption patterns. While ownership was important in the past, we have now entered an era where 'Access' is key. It covers in detail the concept and background of the subscription economy, types and examples, characteristics of consumption pattern changes, impacts on businesses and response strategies, and what the general public should understand.<br /><br />
📚 <strong>General Knowledge:</strong> "Finger Spanning Effect" is a psychological phenomenon where the spacing between fingers when spread affects visual perception and spatial recognition. This effect shows the relationship between the physical spacing of fingers and the spatial distance we perceive, and is closely related to tactile-visual integration, spatial recognition, and body representation. It explores in detail the concept of the finger spanning effect, its causes, impacts in daily life, and related research.<br /><br />
Please check each board for more detailed content.`,
    'notice.updateContent20251211': `<strong>2025-12-11</strong> – We've added new content to the eBook Series board and One-line Knowledge/Trivia board.<br /><br />
📖 <strong>eBook Series:</strong> "Hoki Lee eBook Series Vol.21 — Systems Complete Culture — Organizational Systems That Transform Will into Action" has been updated. In this update, we have changed the individual material titles in the eBook Series board to match the book's subtitles. This is the twenty-first volume of the eBook series containing practical insights on <strong>sales, self-management, marketing, and performance analysis</strong>.<br /><br />
💡 <strong>One-line Knowledge/Trivia:</strong> "Why Morning Coffee Is More Effective: The Relationship Between Circadian Rhythm and Caffeine" scientifically explains whether drinking coffee immediately upon waking is truly more effective and why. Contrary to the common belief that morning coffee is more effective, the effects of coffee can actually vary depending on circadian rhythm and hormone secretion patterns. When cortisol is naturally high in the morning, the effects of caffeine may be relatively less noticeable, and it may actually be more effective to consume caffeine when cortisol is decreasing (9:30 AM–11:30 AM, 2:00 PM–3:00 PM). Caffeine blocks adenosine receptors to maintain alertness and increases dopamine and norepinephrine secretion to improve focus and mood. It covers in detail the interaction between circadian rhythm and caffeine, the relationship between cortisol and caffeine, optimal coffee consumption timing and methods, caffeine tolerance and effects, and precautions when consuming coffee.<br /><br />
Please check each board for more detailed content.`,
    'notice.updateContent20251210': `<strong>2025-12-10</strong> – We've added new content to the eBook Series board, Economics board, and General Knowledge board.<br /><br />
📖 <strong>eBook Series:</strong> "Hoki Lee eBook Series Vol.20 — Organizational Adaptability Starts with People — Conditions for Teams Strong Against Change" has been updated. We have covered process-related content so far, and now we begin to focus on people as a topic because those who operate the processes are important. This is the twentieth volume of the eBook series containing practical insights on <strong>sales, self-management, marketing, and performance analysis</strong>.<br /><br />
💼 <strong>Economics:</strong> "Generational Unemployment Rate Changes: Different Employment Realities for Youth and Elderly" analyzes an interesting phenomenon revealed in recent employment statistics. While the youth unemployment rate is decreasing, the elderly unemployment rate is actually increasing. This is not just a numerical change but an important indicator showing the structural changes in our society's population structure and labor market. Factors contributing to the decrease in youth unemployment include increased creation of new jobs, the effectiveness of youth employment policies, and a decrease in the youth population. Factors contributing to the increase in elderly unemployment include aging and employment instability, difficulties in reemployment due to technological changes, and an increase in the elderly population with insufficient jobs. The labor force structure is changing due to aging, intergenerational job competition is intensifying, and the labor market is becoming polarized. It covers in detail generational employment policies and response strategies to address these changes.<br /><br />
📚 <strong>General Knowledge:</strong> "Genovese Syndrome (Bystander Effect)" refers to a psychological phenomenon where the more people present in an emergency situation, the less likely individuals are to help. The term originates from the 1964 murder of Kitty Genovese in New York, where many people witnessed the incident but no one helped, which became a catalyst for bystander effect research. The core mechanisms of Genovese Syndrome include diffusion of responsibility, evaluation apprehension, and pluralistic ignorance. It can have negative effects such as delayed assistance in emergencies, social apathy, and increased crime, but also has positive aspects such as safety considerations and reliance on experts. It covers in detail methods to overcome Genovese Syndrome and the importance of education.<br /><br />
Please check each board for more detailed content.`,
    'notice.updateContent20251209': `<strong>2025-12-09</strong> – We've added new content to the One-line Knowledge/Trivia board and eBook Series board.<br /><br />
💡 <strong>One-line Knowledge/Trivia:</strong> "Seasonal Affective Disorder (SAD): The Scientific Causes of Winter Depression" explains the scientific causes behind the experience of feeling depressed, lacking energy, and losing motivation in daily life when winter arrives. Seasonal Affective Disorder is a type of depression that occurs repeatedly according to seasonal changes, typically appearing in autumn and winter and improving in spring and summer. It is a phenomenon experienced by many people during winter when there is less sunlight. Changes in neurotransmitters such as melatonin and serotonin due to lack of sunlight are the main causes, and vitamin D deficiency, genetic factors, and environmental factors also play a role. It covers in detail the symptoms of SAD, diagnostic methods, treatment methods (light therapy, medication, cognitive behavioral therapy, lifestyle improvements), and prevention methods. If symptoms are not severe, lifestyle improvements alone may be sufficient for management, but if they interfere with daily life, it is important to seek professional help.<br /><br />
📖 <strong>eBook Series:</strong> "Hoki Lee eBook Series Vol.19 — The Power of Improvement — Processes Grow Through Problems" has been updated. This is the nineteenth volume of the eBook series containing practical insights on <strong>sales, self-management, marketing, and performance analysis</strong>.<br /><br />
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
