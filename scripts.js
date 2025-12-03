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
    'notice.updateContent20251204': `<strong>2025-12-04</strong> - 경제상식 게시판, 일반상식 게시판과 eBook Series 게시판에 새로운 콘텐츠를 추가했습니다.<br /><br />
💼 <strong>경제상식:</strong> 「ESG 투자와 지속가능 금융의 확산」에서는 환경(Environment), 사회(Social), 지배구조(Governance)를 고려한 투자 방식인 ESG 투자가 전 세계적으로 빠르게 확산되고 있는 현상을 다룹니다. 단순히 수익만을 추구하는 것이 아니라, 지속가능한 발전과 사회적 가치를 함께 추구하는 투자 패러다임의 전환을 의미합니다. 한국의 ESG 투자 규모가 100조원을 넘어서며 급속히 증가하고 있으며, ESG 펀드, ESG 채권, 지속가능 금융 상품 등이 빠르게 확대되고 있습니다. ESG 투자의 개념과 확산 배경, 한국 시장 현황, ESG 평가와 등급, 지속가능 금융의 확산, 그리고 일반 투자자들이 ESG 투자에 접근하는 방법을 상세히 설명합니다.<br /><br />
📚 <strong>일반상식:</strong> 「선택적 노출(Selective Exposure)」에서는 사람들이 자신의 기존 신념, 태도, 가치관과 일치하거나 지지하는 정보에만 노출되고, 모순되거나 반대되는 정보는 회피하거나 무시하는 심리적 경향을 설명합니다. 이는 인지적 일관성을 유지하고 인지 부조화를 피하기 위한 방어 메커니즘으로 작용합니다. 특히 디지털 시대에 소셜 미디어와 알고리즘이 이러한 경향을 강화하고 있으며, 필터 버블과 에코 챔버 형성, 정치적 양극화 심화 등의 부정적 영향을 미칩니다. 선택적 노출의 개념, 발생 원인, 실생활에서의 영향, 그리고 극복 방안을 자세히 다룹니다.<br /><br />
📖 <strong>eBook Series:</strong> 「Hoki Lee eBook Series Vol.15 — 조직을움직이는힘 — 효율적인프로세스가문화를완성한다」가 업데이트되었습니다. <strong>영업, 자기관리, 마케팅, 성과 분석</strong> 등 실무 인사이트를 담은 eBook 시리즈 열다섯 번째 자료입니다.<br /><br />
각 게시판에서 더 자세한 내용을 확인하실 수 있으니 많은 관심 부탁드립니다.`,
    'notice.updateContent20251203': `<strong>2025-12-03</strong> - 한줄 지식/잡학 게시판과 eBook Series 게시판에 새로운 콘텐츠를 추가했습니다.<br /><br />
💡 <strong>한줄 지식/잡학:</strong> 「온도와 수면의 관계, 잠들기 좋은 온도는 몇 도일까?」에서는 겨울밤에 이불을 덮고 잠을 자거나, 여름밤에 에어컨을 켜고 잠을 자는 경험의 과학적 원리를 설명합니다. 인간의 몸은 하루 종일 체온을 조절하며, 이는 수면의 질과 직접적으로 연관되어 있습니다. 대부분의 수면 전문가들은 18~22도를 최적의 수면 온도로 권장하며, 이 온도 범위는 우리 몸이 체온을 자연스럽게 낮출 수 있도록 도와주어 깊은 수면에 도달하기 쉽게 만듭니다. 너무 높거나 낮은 온도는 수면의 질을 떨어뜨리고 건강에 악영향을 미칠 수 있습니다. 적절한 온도와 습도를 유지하고, 계절에 맞는 침구를 선택하며, 잠들기 전에 체온을 낮추는 방법을 실천하면 더욱 깊고 편안한 수면을 취할 수 있습니다.<br /><br />
📖 <strong>eBook Series:</strong> 「Hoki Lee eBook Series Vol.14 — 좋은조직문화는어떻게만들어지는가 — 현실속에서작동하는문화의조건」가 업데이트되었습니다. <strong>영업, 자기관리, 마케팅, 성과 분석</strong> 등 실무 인사이트를 담은 eBook 시리즈 열네 번째 자료입니다.<br /><br />
각 게시판에서 더 자세한 내용을 확인하실 수 있으니 많은 관심 부탁드립니다.`,
    'notice.updateContent20251202': `<strong>2025-12-02</strong> - 경제상식 게시판, 일반상식 게시판과 eBook Series 게시판에 새로운 콘텐츠를 추가했습니다.<br /><br />
💼 <strong>경제상식:</strong> 「소비자 물가 상승과 생활비 부담, 가계 경제의 현실」에서는 최근 한국의 소비자 물가가 지속적으로 상승하며 가계의 생활비 부담을 증가시키는 상황을 분석합니다. 특히 식료품, 주거비, 교통비 등 필수 생활비 항목의 물가 상승이 두드러지며, 이는 가계의 실질 구매력을 저하시키고 있습니다. 물가 상승의 원인과 현황, 가계에 미치는 영향, 계층별 영향 차이, 정부의 물가 안정 정책, 그리고 일반인들이 취할 수 있는 대처 방안을 상세히 설명합니다. 물가 상승은 앞으로도 지속될 것으로 예상되므로, 가계는 장기적인 관점에서 물가 상승에 대응해야 합니다.<br /><br />
📚 <strong>일반상식:</strong> 「인지 부조화(Cognitive Dissonance)」에서는 미국의 심리학자 레온 페스팅거가 제시한 개념으로, 서로 모순되거나 일치하지 않는 두 가지 이상의 인지를 동시에 가지게 될 때 발생하는 심리적 불편함을 설명합니다. 사람들은 이러한 불편함을 해소하기 위해 자신의 생각이나 행동을 변화시키거나, 새로운 정보를 찾아 모순을 해결하려고 합니다. 인지 부조화의 발생 원인과 해소 방법, 실생활에서의 예시, 마케팅과 교육에서의 활용, 조직 관리와 정치에서의 역할 등을 다룹니다. 인지 부조화를 이해하고 활용하는 것은 개인의 성장과 변화, 그리고 사회적 변화를 이해하는 데 도움이 됩니다.<br /><br />
📖 <strong>eBook Series:</strong> 「Hoki Lee eBook Series Vol.13 — 동기부여의 힘 — 사람의 마음이 움직일 때 조직이 움직인다」가 업데이트되었습니다. <strong>영업, 자기관리, 마케팅, 성과 분석</strong> 등 실무 인사이트를 담은 eBook 시리즈 열세 번째 자료입니다.<br /><br />
각 게시판에서 더 자세한 내용을 확인하실 수 있으니 많은 관심 부탁드립니다.`,
    'notice.updateContent20251201': `<strong>2025-12-01</strong> - 한줄 지식/잡학 게시판과 eBook Series 게시판에 새로운 콘텐츠를 추가했습니다.<br /><br />
💡 <strong>한줄 지식/잡학:</strong> 「노이즈 캔슬링의 원리, 소리를 없애는 기술」에서는 비행기 안에서, 지하철에서, 또는 시끄러운 카페에서 헤드폰을 끼고 음악을 들을 때 주변 소음이 사라지는 경험의 원리를 설명합니다. 노이즈 캔슬링은 파동의 상쇄 간섭(Destructive Interference) 원리를 이용하여 주변 소음을 제거하는 기술입니다. 마이크로 소음을 감지하고, 정확히 반대되는 파동을 생성하여 소음을 상쇄시킵니다. 피드포워드, 피드백, 하이브리드 방식 등 다양한 노이즈 캔슬링 기술의 종류와 작동 원리, 저주파 소음 제거에 효과적이지만 고주파 소음 제거에는 한계가 있다는 특징, 이동 수단, 사무실, 수면 등 다양한 활용 분야를 다룹니다. AI 기반 적응형 노이즈 캔슬링 등 미래 기술 발전 방향도 함께 소개합니다.<br /><br />
📖 <strong>eBook Series:</strong> 「Hoki Lee eBook Series Vol.12 — 스스로 움직이는 조직 — 자발성이 성과를 만든다」가 업데이트되었습니다. <strong>영업, 자기관리, 마케팅, 성과 분석</strong> 등 실무 인사이트를 담은 eBook 시리즈 열두 번째 자료입니다.<br /><br />
각 게시판에서 더 자세한 내용을 확인하실 수 있으니 많은 관심 부탁드립니다.`,
    'notice.updateContent20251128': `<strong>2025-11-28</strong> - 경제상식 게시판, 일반상식 게시판, eBook Series 게시판에 새로운 콘텐츠를 추가했습니다. 또한 이전 자료 게시판이 새로 추가되었습니다.<br /><br />
💼 <strong>경제상식:</strong> 「가계부채와 경제 성장, 한국 경제의 숨겨진 리스크」에서는 한국의 가계부채가 GDP 대비 100%를 넘어서는 수준으로 증가하며 경제의 주요 리스크 요인으로 부상하고 있는 상황을 분석합니다. 가계부채는 단순히 개인 가계의 문제가 아니라, 경제 전반의 성장 동력과 금융 안정성에 직결되는 중요한 이슈입니다. 주택담보대출이 전체의 70% 이상을 차지하는 부동산 의존도가 높은 구조, 고금리 비담보 대출의 증가, 소득 대비 부채 비율의 증가 등 한국 가계부채의 구조적 문제점을 분석하고, 가계부채가 소비 위축과 경제 성장 둔화, 금융 시스템의 취약성 증가, 통화정책의 제약 등에 미치는 영향을 설명합니다. 일반인들이 취할 수 있는 부채 관리 전략도 함께 제시합니다.<br /><br />
📚 <strong>일반상식:</strong> 「잠재지(Tacit Knowledge) vs 형식지(Explicit Knowledge)」에서는 헝가리 출신의 철학자이자 과학자 마이클 폴라니가 제시한 지식의 분류를 설명합니다. 형식지는 말이나 글로 표현할 수 있는 지식인 반면, 잠재지는 말로 표현하기 어렵지만 실제로는 우리가 알고 있고 사용하는 지식입니다. "우리는 말할 수 있는 것보다 더 많은 것을 알고 있다"는 폴라니의 통찰이 잠재지의 본질을 잘 설명합니다. SECI 모델을 통한 지식의 변환 과정, 실생활에서의 예시, 교육과 조직 관리에서의 활용, 혁신에서의 역할 등을 다룹니다.<br /><br />
📖 <strong>eBook Series:</strong> 「Hoki Lee eBook Series Vol.11 — 책임이 경쟁력이 된다 — 지속 가능한 영향력의 시대」가 업데이트되었습니다. <strong>영업, 자기관리, 마케팅, 성과 분석</strong> 등 실무 인사이트를 담은 eBook 시리즈 열한 번째 자료입니다.<br /><br />
📁 <strong>이전 자료:</strong> 초기화면 메뉴에 "이전 자료" 게시판이 새로 추가되었습니다. 예전에 게시판에 올렸던 하루 한 생각 자료들을 모아 PDF 책으로 정리한 자료를 자유롭게 다운로드하여 읽어보실 수 있습니다. 많은 관심과 다운로드를 부탁드립니다.<br /><br />
각 게시판에서 더 자세한 내용을 확인하실 수 있으니 많은 관심 부탁드립니다.`,
    'notice.updateContent20251124': `<strong>2025-11-24</strong> - 경제상식 게시판과 일반상식 게시판에 새로운 콘텐츠를 추가했습니다.<br /><br />
💼 <strong>경제상식:</strong> 「오픈뱅킹과 마이데이터, 금융 흐름의 패러다임 전환」에서는 오픈뱅킹과 마이데이터가 한국 금융 산업에 가져온 변화를 다룹니다. 하나의 애플리케이션에서 여러 은행 계좌를 통합 관리할 수 있는 오픈뱅킹과 개인의 금융 정보를 한 곳에서 통합 조회할 수 있는 마이데이터 서비스의 확대 현황, 금융 서비스 접근성 향상과 금융사 간 경쟁 심화, 새로운 금융 서비스 모델의 등장, 데이터 보안과 개인정보 보호 이슈 등을 상세히 설명합니다. 디지털 금융 시대의 변화를 이해하는 데 도움이 됩니다.<br /><br />
📚 <strong>일반상식:</strong> 「파레토 최적」에서는 이탈리아 경제학자 빌프레도 파레토가 제안한 자원 배분의 효율성을 평가하는 개념을 설명합니다. 파레토 최적 상태는 한 개인의 이익을 증가시키려면 반드시 다른 개인의 이익이 감소해야 하는 상태로, 더 이상의 파레토 개선이 불가능한 효율적인 상태를 의미합니다. 파레토 개선과 파레토 최적의 차이, 일상생활에서의 예시, 효율성과 공평성의 관계, 경제 정책과 경영 의사결정에서의 활용 등을 다룹니다.<br /><br />
각 게시판에서 더 자세한 내용을 확인하실 수 있으니 많은 관심 부탁드립니다.`,
    'notice.updateContent20251127': `<strong>2025-11-27</strong> - 한줄 지식/잡학 게시판과 eBook Series 게시판에 새로운 콘텐츠를 추가했습니다.<br /><br />
💡 <strong>한줄 지식/잡학:</strong> 「선택의 역설, 옵션이 많을수록 만족도가 떨어지는 이유」에서는 슈퍼마켓에서 잼을 고를 때 6가지 종류가 있을 때와 24가지 종류가 있을 때, 어떤 상황에서 더 많은 사람이 구매하고 만족하는지에 대한 심리학적 현상을 설명합니다. 선택의 옵션이 많을수록 오히려 만족도가 떨어지고, 결정을 내리기 어려워지며, 선택 후 후회가 커지는 선택의 역설(Paradox of Choice)에 대해 다룹니다. 인지 부하의 증가, 기회비용의 증가, 완벽주의의 증가, 책임감의 증가 등이 원인으로 지적되며, 일상생활에서 쇼핑, 직업 선택, 인간관계, 엔터테인먼트 등 다양한 영역에서 나타나는 현상을 분석합니다. 선택의 역설을 극복하는 방법도 함께 제시합니다.<br /><br />
📖 <strong>eBook Series:</strong> 「Hoki Lee eBook Series Vol.10 — 문화가 전략을 이긴다 — 지속 가능한 조직의 마지막 조건」가 업데이트되었습니다. <strong>영업, 자기관리, 마케팅, 성과 분석</strong> 등 실무 인사이트를 담은 eBook 시리즈 열 번째 자료입니다.<br /><br />
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
    'nav.previousContent': 'Previous<br />Materials',
    'nav.contact': 'Contact',
    'notice.heading': 'Update Contents',
    'notice.updateContent20251204': `<strong>2025-12-04</strong> – We've added new content to the Economics board, General Knowledge board, and eBook Series board.<br /><br />
💼 <strong>Economics:</strong> "ESG Investment and the Spread of Sustainable Finance" covers the phenomenon of ESG (Environment, Social, Governance) investment rapidly spreading worldwide. It represents a paradigm shift in investment, pursuing not only profits but also sustainable development and social value. Korea's ESG investment scale has exceeded 100 trillion won and is rapidly increasing, with ESG funds, ESG bonds, and sustainable financial products expanding rapidly. It explains in detail the concept and background of ESG investment, the Korean market status, ESG evaluation and ratings, the spread of sustainable finance, and how general investors can access ESG investment.<br /><br />
📚 <strong>General Knowledge:</strong> "Selective Exposure" explains the psychological tendency where people are only exposed to information that matches or supports their existing beliefs, attitudes, and values, while avoiding or ignoring contradictory or opposing information. This acts as a defense mechanism to maintain cognitive consistency and avoid cognitive dissonance. Especially in the digital age, social media and algorithms are strengthening this tendency, creating negative effects such as filter bubbles and echo chambers, and intensifying political polarization. It covers in detail the concept of selective exposure, its causes, its impact on daily life, and methods to overcome it.<br /><br />
📖 <strong>eBook Series:</strong> "Hoki Lee eBook Series Vol.15 — The Force That Moves Organizations — Efficient Processes Complete Culture" has been updated. This is the fifteenth volume of the eBook series containing practical insights on <strong>sales, self-management, marketing, and performance analysis</strong>.<br /><br />
Please check each board for more detailed content.`,
    'notice.updateContent20251203': `<strong>2025-12-03</strong> – We've added new content to the One-line Knowledge/Trivia board and eBook Series board.<br /><br />
💡 <strong>One-line Knowledge/Trivia:</strong> "Temperature and Sleep: What is the Ideal Temperature for Sleep?" explains the scientific principles behind the experience of sleeping under a blanket on winter nights or with air conditioning on summer nights. The human body regulates its temperature throughout the day, which is directly related to sleep quality. Most sleep experts recommend 18-22°C (64-72°F) as the optimal sleep temperature, and this temperature range helps our body naturally lower its temperature, making it easier to reach deep sleep. Temperatures that are too high or too low can reduce sleep quality and negatively impact health. By maintaining appropriate temperature and humidity, choosing bedding suitable for the season, and practicing methods to lower body temperature before sleep, you can achieve deeper and more comfortable sleep.<br /><br />
📖 <strong>eBook Series:</strong> "Hoki Lee eBook Series Vol.14 — How Good Organizational Culture is Created — Conditions for Culture That Works in Reality" has been updated. This is the fourteenth volume of the eBook series containing practical insights on <strong>sales, self-management, marketing, and performance analysis</strong>.<br /><br />
Please check each board for more detailed content.`,
    'notice.updateContent20251202': `<strong>2025-12-02</strong> – We've added new content to the Economics board, General Knowledge board, and eBook Series board.<br /><br />
💼 <strong>Economics:</strong> "Consumer Price Inflation and Living Cost Burden: The Reality of Household Economics" analyzes the situation where Korea's consumer prices continue to rise, increasing the burden of living costs on households. In particular, price increases in essential living expenses such as groceries, housing costs, and transportation expenses are prominent, which is reducing households' real purchasing power. It explains in detail the causes and current status of price inflation, its impact on households, differences in impact by income level, government price stabilization policies, and coping strategies that the general public can adopt. Price inflation is expected to continue in the future, so households must respond to price inflation from a long-term perspective.<br /><br />
📚 <strong>General Knowledge:</strong> "Cognitive Dissonance" explains the concept proposed by American psychologist Leon Festinger, describing the psychological discomfort that occurs when holding two or more contradictory or inconsistent cognitions simultaneously. People try to resolve this discomfort by changing their thoughts or behaviors, or by seeking new information to resolve contradictions. It covers the causes and resolution methods of cognitive dissonance, examples in daily life, applications in marketing and education, and its role in organizational management and politics. Understanding and utilizing cognitive dissonance helps understand personal growth and change, as well as social change.<br /><br />
📖 <strong>eBook Series:</strong> "Hoki Lee eBook Series Vol.13 — The Power of Motivation — When People's Hearts Move, Organizations Move" has been updated. This is the thirteenth volume of the eBook series containing practical insights on <strong>sales, self-management, marketing, and performance analysis</strong>.<br /><br />
Please check each board for more detailed content.`,
    'notice.updateContent20251201': `<strong>2025-12-01</strong> – We've added new content to the One-line Knowledge/Trivia board and eBook Series board.<br /><br />
💡 <strong>One-line Knowledge/Trivia:</strong> "The Principle of Noise Cancelling: Technology That Eliminates Sound" explains the principle behind the experience of surrounding noise disappearing when listening to music with headphones on an airplane, subway, or in a noisy café. Noise cancelling is a technology that removes surrounding noise using the principle of destructive interference. It detects noise through a microphone and generates an exactly opposite wave to cancel out the noise. It covers various types of noise cancelling technologies such as feedforward, feedback, and hybrid methods, their working principles, the characteristic that it is effective at removing low-frequency noise but has limitations with high-frequency noise, and various application areas such as transportation, offices, and sleep. It also introduces future technological developments such as AI-based adaptive noise cancelling.<br /><br />
📖 <strong>eBook Series:</strong> "Hoki Lee eBook Series Vol.12 — Self-Moving Organizations — Voluntariness Creates Performance" has been updated. This is the twelfth volume of the eBook series containing practical insights on <strong>sales, self-management, marketing, and performance analysis</strong>.<br /><br />
Please check each board for more detailed content.`,
    'notice.updateContent20251128': `<strong>2025-11-28</strong> – We've added new content to the Economics board, General Knowledge board, and eBook Series board. We've also added a new Previous Materials board.<br /><br />
💼 <strong>Economics:</strong> "Household Debt and Economic Growth: Hidden Risks in the Korean Economy" analyzes the situation where Korea's household debt has risen to over 100% of GDP, emerging as a major risk factor for the economy. Household debt is not just a problem for individual households, but an important issue directly connected to the overall economic growth momentum and financial stability. It analyzes the structural problems of Korean household debt, including a structure highly dependent on real estate with mortgage loans accounting for over 70% of total debt, an increase in high-interest unsecured loans, and an increase in the debt-to-income ratio. It explains how household debt affects consumption contraction and economic growth slowdown, increased vulnerability of the financial system, and constraints on monetary policy. It also presents debt management strategies that the general public can adopt.<br /><br />
📚 <strong>General Knowledge:</strong> "Tacit Knowledge vs Explicit Knowledge" explains the classification of knowledge proposed by Hungarian-born philosopher and scientist Michael Polanyi. Explicit knowledge is knowledge that can be expressed in words or writing, while tacit knowledge is knowledge that is difficult to express but is actually what we know and use. Polanyi's insight that "we know more than we can tell" well explains the essence of tacit knowledge. It covers the knowledge conversion process through the SECI model, examples in daily life, applications in education and organizational management, and its role in innovation.<br /><br />
📖 <strong>eBook Series:</strong> "Hoki Lee eBook Series Vol.11 — Responsibility Becomes Competitiveness — The Era of Sustainable Influence" has been updated. This is the eleventh volume of the eBook series containing practical insights on <strong>sales, self-management, marketing, and performance analysis</strong>.<br /><br />
📁 <strong>Previous Materials:</strong> A new "Previous Materials" board has been added to the main menu. You can freely download and read PDF materials compiled from the "Daily Thoughts" content that was previously posted on the board. We hope you will show great interest and download these materials.<br /><br />
Please check each board for more detailed content.`,
    'notice.updateContent20251124': `<strong>2025-11-24</strong> – We've added new content to the Economics and General Knowledge boards.<br /><br />
💼 <strong>Economics:</strong> "Open Banking and MyData: Paradigm Shift in Financial Flow" covers the changes that open banking and MyData have brought to the Korean financial industry. It explains the expansion of open banking services that allow integrated management of multiple bank accounts in one application, and MyData services that enable integrated viewing of personal financial information in one place. It details the improvement in financial service accessibility, intensifying competition among financial institutions, the emergence of new financial service models, and data security and privacy protection issues. It helps understand the changes in the digital finance era.<br /><br />
📚 <strong>General Knowledge:</strong> "Pareto Optimal" explains the concept proposed by Italian economist Vilfredo Pareto for evaluating the efficiency of resource allocation. Pareto optimal state means a state where increasing one individual's benefit necessarily requires decreasing another individual's benefit, representing an efficient state where no further Pareto improvement is possible. It covers the difference between Pareto improvement and Pareto optimal, examples in daily life, the relationship between efficiency and fairness, and applications in economic policy and management decision-making.<br /><br />
Please check each board for more detailed content.`,
    'notice.updateContent20251127': `<strong>2025-11-27</strong> – We've added new content to the One-line Knowledge/Trivia board and eBook Series board.<br /><br />
💡 <strong>One-line Knowledge/Trivia:</strong> "Paradox of Choice: Why More Options Lead to Less Satisfaction" explains the psychological phenomenon where when choosing jam at a supermarket, more people purchase and are satisfied when there are 6 types compared to 24 types. It covers the Paradox of Choice, where having more options actually leads to less satisfaction, difficulty in making decisions, and increased regret after choosing. The causes include increased cognitive load, increased opportunity costs, increased perfectionism, and increased responsibility. It analyzes how this phenomenon appears in various areas of daily life such as shopping, career choices, relationships, and entertainment, and also presents methods to overcome the paradox of choice.<br /><br />
📖 <strong>eBook Series:</strong> "Hoki Lee eBook Series Vol.10 — Culture Beats Strategy — The Final Condition for Sustainable Organizations" has been updated. This is the tenth volume of the eBook series containing practical insights on <strong>sales, self-management, marketing, and performance analysis</strong>.<br /><br />
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
