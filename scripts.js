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
    'schedule.item1.title': '현대자동차 전기차 신모델 발표회',
    'schedule.item1.content':
      '현대자동차가 오늘 오전 10시(한국 시간)에 서울 코엑스 컨벤션 센터에서 새로운 전기차 모델 발표회를 개최합니다. 차세대 전기차 플랫폼과 배터리 기술, 자율주행 기능 등이 공개될 예정이며, 주요 딜러와 파트너사가 참석합니다.',
    'schedule.item2.title': '삼성전자 AI 기술 컨퍼런스',
    'schedule.item2.content':
      '삼성전자가 오늘 오후 2시(한국 시간)에 서울 서초사옥에서 AI 기술 컨퍼런스를 개최합니다. 생성형 AI의 최신 동향과 발전 방향, 반도체 기술과의 융합, 실무 적용 사례 등이 논의될 예정입니다.',
    'schedule.item3.title': '애플 신제품 발표 이벤트',
    'schedule.item3.content':
      '애플이 오늘 오전 9시(태평양 표준시)에 미국 캘리포니아 쿠퍼티노 본사에서 새로운 제품 라인업을 소개하는 발표 이벤트를 개최합니다. AI 기능이 강화된 신제품과 소프트웨어 업데이트가 공개될 예정입니다.',
    'schedule.item4.title': '테슬라 자율주행 기술 세미나',
    'schedule.item4.content':
      '테슬라가 오늘 오후 1시(태평양 표준시)에 캘리포니아 팰로알토 본사에서 자율주행 기술 세미나를 개최합니다. FSD(Full Self-Driving) 기술의 최신 업데이트와 로봇택시 서비스 계획이 발표될 예정입니다.',
    'schedule.item5.title': '네이버 클라우드 플랫폼 컨퍼런스',
    'schedule.item5.content':
      '네이버가 오늘 오후 3시(한국 시간)에 서울 판교 본사에서 클라우드 플랫폼 컨퍼런스를 개최합니다. AI 기반 클라우드 서비스와 엔터프라이즈 솔루션의 새로운 기능, 그리고 개발자 도구 업데이트가 공개됩니다.',
    'notice.updateContent20260114': `<strong>2026-01-14</strong> - eBook Series 게시판과 경제상식 게시판에 새로운 콘텐츠를 추가했습니다.<br /><br />
📖 <strong>eBook Series:</strong> 「Hoki Lee eBook Series Vol.41 — 브랜드 경험 관리(BX) — 고객이 기억하는 순간의 설계」가 업데이트되었습니다. 브랜드 경험 관리(Brand Experience, BX)는 고객이 브랜드와 상호작용하는 모든 순간을 설계하고 관리하는 전략입니다. 단순한 제품이나 서비스를 넘어서 고객이 기억하고 공유하고 싶어하는 경험을 만드는 것이 성공적인 브랜드 구축의 핵심입니다. 브랜드 경험의 설계 원칙, 고객 기억에 남는 순간의 창조, 감각적 경험과 감정적 연결, 브랜드 경험 측정 방법, 그리고 지속 가능한 브랜드 경험 관리 등 실무 인사이트를 담은 eBook 시리즈 마흔한 번째 자료입니다.<br /><br />
💼 <strong>경제상식:</strong> 「중앙은행 디지털 화폐(CBDC)의 도입과 경제적 영향」이 등록되었습니다. 최근 전 세계 중앙은행들이 중앙은행 디지털 화폐(Central Bank Digital Currency, CBDC) 도입을 검토하고 있습니다. 한국은행을 비롯한 주요 중앙은행들이 CBDC 연구와 파일럿 테스트를 진행하고 있으며, 일부 국가에서는 이미 상용화 단계에 접어들었습니다. CBDC는 현금과 전자화폐의 장점을 결합한 새로운 형태의 화폐로, 통화정책의 효율성을 높이고, 금융 포용성을 강화하며, 결제 시스템을 혁신할 수 있는 잠재력을 가지고 있습니다. CBDC의 개념, 도입 배경, 경제적 영향, 그리고 미래 전망을 상세히 다룹니다.<br /><br />
각 게시판에서 더 자세한 내용을 확인하실 수 있으니 많은 관심 부탁드립니다.`,
    'notice.updateContent20260112': `<strong>2026-01-12</strong> - eBook Series 게시판, 한줄 지식/잡학 게시판, 그리고 오늘의 일정(자동차/IT)에 새로운 콘텐츠를 추가했습니다.<br /><br />
📖 <strong>eBook Series:</strong> 「Hoki Lee eBook Series Vol.40 — 브랜드 아이덴티티의 구조 — 조직의 철학을 고객의 언어로 바꾸는 법」이 업데이트되었습니다. 브랜드 아이덴티티는 단순한 로고나 디자인이 아니라 조직의 철학과 가치를 고객이 이해할 수 있는 언어로 전달하는 체계입니다. 조직 내부의 철학과 비전을 고객의 관점에서 재구성하고, 일관된 메시지로 전달하는 것이 성공적인 브랜드 아이덴티티 구축의 핵심입니다. 브랜드 아이덴티티의 구조, 조직 철학의 고객 언어 전환, 브랜드 메시징 전략, 아이덴티티 일관성 유지, 그리고 브랜드 스토리텔링 등 실무 인사이트를 담은 eBook 시리즈 마흔 번째 자료입니다.<br /><br />
🧠 <strong>한줄 지식/잡학:</strong> 「AI 생성 콘텐츠의 저작권 딜레마 — 창작자와 AI의 경계」가 등록되었습니다. 최근 ChatGPT, Midjourney, DALL-E 등 인공지능 도구를 활용한 콘텐츠 생성이 급속히 확산되면서 저작권 문제가 새로운 화두로 떠오르고 있습니다. AI가 생성한 작품의 저작권은 누구에게 귀속되는가? AI 학습에 사용된 기존 작품들의 저작권은 어떻게 보호되는가? 이러한 질문들이 법률, 기술, 창작자 커뮤니티를 중심으로 뜨거운 논쟁을 불러일으키고 있습니다. AI 생성 콘텐츠의 저작권 귀속 문제, AI 학습 데이터와 저작권 침해, 상업적 이용과 수익 분배, 각국의 법적 대응, 그리고 창작자와 AI의 공존 방안을 상세히 다룹니다.<br /><br />
📅 <strong>오늘의 일정(자동차/IT):</strong> 오늘(1월 14일) 자동차 및 IT 분야의 주요 일정이 업데이트되었습니다. 현대자동차 전기차 신모델 발표회(오전 10시, 서울 코엑스), 삼성전자 AI 기술 컨퍼런스(오후 2시, 서울 서초사옥), 애플 신제품 발표 이벤트(오전 9시, 쿠퍼티노 본사), 테슬라 자율주행 기술 세미나(오후 1시, 팰로알토 본사), 네이버 클라우드 플랫폼 컨퍼런스(오후 3시, 서울 판교) 등이 예정되어 있습니다.<br /><br />
각 게시판에서 더 자세한 내용을 확인하실 수 있으니 많은 관심 부탁드립니다.`,
    'notice.updateContent20260109': `<strong>2026-01-09</strong> - eBook Series 게시판과 일반상식 게시판에 새로운 콘텐츠를 추가했습니다.<br /><br />
📖 <strong>eBook Series:</strong> 「Hoki Lee eBook Series Vol.39 — 브랜드 신뢰와 고객 충성도 — 감동 이후의 관계 경영」이 업데이트되었습니다. 고객 감동을 넘어서는 단계는 브랜드 신뢰 구축과 고객 충성도 확보입니다. 일회성 감동이 아닌 지속적인 관계 경영을 통해 고객과의 장기적인 유대를 형성하는 것이 핵심입니다. 브랜드 신뢰의 요소, 고객 충성도 측정 방법, 관계 경영 전략, 고객 생애 가치(LTV) 관리, 그리고 장기적 고객 관계 구축 등 실무 인사이트를 담은 eBook 시리즈 서른아홉 번째 자료입니다.<br /><br />
🧠 <strong>일반상식:</strong> 「맨더빌의 역설(Mandeville's Paradox)」이 등록되었습니다. 개인이 자신의 사적 이익을 추구하는 행동(악덕)이 결과적으로 사회 전체의 공공 이익을 창출한다는 역설적인 현상을 설명하는 개념입니다. "사적 악덕이 공공의 이익"이라는 명제로 요약되며, 시장 메커니즘이 개인의 이기심을 사회적 이익으로 전환시킬 수 있다는 것을 보여줍니다. 맨더빌의 역설은 현대 경제학의 시장 메커니즘과 밀접한 관련이 있으며, 애덤 스미스의 "보이지 않는 손" 개념의 선구자적 아이디어입니다. 맨더빌의 역설의 개념, 특징, 원인, 그리고 현대 경제학에서의 의미를 상세히 다룹니다.<br /><br />
각 게시판에서 더 자세한 내용을 확인하실 수 있으니 많은 관심 부탁드립니다.`,
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
      'Hyundai Motor Company Electric Vehicle New Model Launch Event',
    'schedule.item1.content':
      'Hyundai Motor Company will hold a new electric vehicle model launch event today at 10:00 AM (Korea time) at COEX Convention Center in Seoul. Next-generation electric vehicle platforms, battery technology, and autonomous driving features will be unveiled, with major dealers and partners in attendance.',
    'schedule.item2.title': 'Samsung Electronics AI Technology Conference',
    'schedule.item2.content':
      'Samsung Electronics will hold an AI technology conference today at 2:00 PM (Korea time) at its Seocho headquarters in Seoul. The latest trends and developments in generative AI, integration with semiconductor technology, and practical application cases will be discussed.',
    'schedule.item3.title': 'Apple New Product Launch Event',
    'schedule.item3.content':
      'Apple will hold a new product launch event today at 9:00 AM (Pacific Standard Time) at its headquarters in Cupertino, California, USA. New product lineups with enhanced AI features and software updates will be unveiled.',
    'schedule.item4.title': 'Tesla Autonomous Driving Technology Seminar',
    'schedule.item4.content':
      'Tesla will hold an autonomous driving technology seminar today at 1:00 PM (Pacific Standard Time) at its headquarters in Palo Alto, California. The latest updates on FSD (Full Self-Driving) technology and robotaxi service plans will be announced.',
    'schedule.item5.title': 'Naver Cloud Platform Conference',
    'schedule.item5.content':
      'Naver will hold a cloud platform conference today at 3:00 PM (Korea time) at its headquarters in Pangyo, Seoul. New features of AI-based cloud services and enterprise solutions, as well as developer tool updates, will be unveiled.',
    'notice.updateContent20260114': `<strong>2026-01-14</strong> – We've added new content to the eBook Series board and Economics Knowledge board.<br /><br />
📖 <strong>eBook Series:</strong> "Hoki Lee eBook Series Vol.41 — Brand Experience Management (BX) — Designing Moments Customers Remember" has been updated. Brand Experience Management (BX) is a strategy for designing and managing every moment of customer interaction with a brand. Beyond simply products or services, creating experiences that customers want to remember and share is the key to successful brand building. This is the forty-first volume of the eBook series containing practical insights on <strong>brand experience design principles, creating memorable moments for customers, sensory experiences and emotional connections, brand experience measurement methods, and sustainable brand experience management</strong>.<br /><br />
💼 <strong>Economics Knowledge:</strong> "The Introduction of Central Bank Digital Currency (CBDC) and Its Economic Impact" has been registered. Recently, central banks around the world have been reviewing the introduction of Central Bank Digital Currency (CBDC). Major central banks, including the Bank of Korea, are conducting CBDC research and pilot tests, and some countries have already entered the commercialization stage. CBDC is a new form of currency that combines the advantages of cash and electronic money, with the potential to enhance the efficiency of monetary policy, strengthen financial inclusion, and revolutionize payment systems. This article covers in detail <strong>the concept of CBDC, introduction background, economic impact, and future prospects</strong>.<br /><br />
Please check each board for more detailed content.`,
    'notice.updateContent20260112': `<strong>2026-01-12</strong> – We've added new content to the eBook Series board, One-Line Knowledge/Trivia board, and Today's Schedule (Automotive/IT).<br /><br />
📖 <strong>eBook Series:</strong> "Hoki Lee eBook Series Vol.40 — The Structure of Brand Identity — Transforming Organizational Philosophy into Customer Language" has been updated. Brand identity is not simply a logo or design, but a system that translates an organization's philosophy and values into language that customers can understand. The key to building a successful brand identity is reconstructing internal organizational philosophy and vision from the customer's perspective and communicating them through consistent messaging. This is the fortieth volume of the eBook series containing practical insights on <strong>the structure of brand identity, transforming organizational philosophy into customer language, brand messaging strategies, maintaining identity consistency, and brand storytelling</strong>.<br /><br />
🧠 <strong>One-Line Knowledge/Trivia:</strong> "The Copyright Dilemma of AI-Generated Content — The Boundary Between Creators and AI" has been registered. Recently, as content generation using AI tools such as ChatGPT, Midjourney, and DALL-E has rapidly spread, copyright issues have emerged as a new topic of discussion. Who owns the copyright of works created by AI? How are the copyrights of existing works used for AI training protected? These questions are sparking heated debates in legal, technical, and creator communities. This article covers in detail <strong>copyright attribution issues of AI-generated content, AI training data and copyright infringement, commercial use and profit distribution, legal responses by various countries, and coexistence strategies between creators and AI</strong>.<br /><br />
📅 <strong>Today's Schedule (Automotive/IT):</strong> Today's (January 14) major schedules in the automotive and IT sectors have been updated. Scheduled events include Hyundai Motor Company Electric Vehicle New Model Launch Event (10:00 AM, COEX, Seoul), Samsung Electronics AI Technology Conference (2:00 PM, Seocho headquarters, Seoul), Apple New Product Launch Event (9:00 AM, Cupertino headquarters), Tesla Autonomous Driving Technology Seminar (1:00 PM, Palo Alto headquarters), and Naver Cloud Platform Conference (3:00 PM, Pangyo, Seoul).<br /><br />
Please check each board for more detailed content.`,
    'notice.updateContent20260109': `<strong>2026-01-09</strong> – We've added new content to the eBook Series board and General Knowledge board.<br /><br />
📖 <strong>eBook Series:</strong> "Hoki Lee eBook Series Vol.39 — Brand Trust and Customer Loyalty — Relationship Management After Delight" has been updated. Beyond customer delight, the next stage is building brand trust and securing customer loyalty. The key is forming long-term bonds with customers through continuous relationship management, not one-time delight. This is the thirty-ninth volume of the eBook series containing practical insights on <strong>elements of brand trust, customer loyalty measurement methods, relationship management strategies, customer lifetime value (LTV) management, and building long-term customer relationships</strong>.<br /><br />
🧠 <strong>General Knowledge:</strong> "Mandeville's Paradox" has been registered. This concept explains the paradoxical phenomenon where individuals' pursuit of their private interests (vices) ultimately creates public benefits for society as a whole. Summarized by the proposition "private vices, public benefits," it shows how market mechanisms can transform individual self-interest into social benefits. Mandeville's Paradox is closely related to modern economics' market mechanisms and is a pioneering idea behind Adam Smith's concept of the "invisible hand." This article covers in detail the concept, characteristics, causes, and meaning of Mandeville's Paradox in modern economics.<br /><br />
Please check each board for more detailed content.`,
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
