# Firebase 조회수 시스템 설정 가이드

이 가이드는 Firebase를 사용한 누적 조회수 시스템을 설정하는 방법을 설명합니다.

## 1. Firebase 프로젝트 생성

1. [Firebase Console](https://console.firebase.google.com/)에 접속합니다.
2. "프로젝트 추가"를 클릭합니다.
3. 프로젝트 이름을 입력하고 "계속"을 클릭합니다.
4. Google Analytics 설정은 선택사항입니다 (원하시면 활성화하세요).
5. "프로젝트 만들기"를 클릭합니다.

## 2. Realtime Database 생성

1. Firebase Console에서 왼쪽 메뉴의 "Realtime Database"를 클릭합니다.
2. "데이터베이스 만들기"를 클릭합니다.
3. 위치를 선택합니다 (가장 가까운 지역 선택, 예: `asia-northeast1`).
4. 보안 규칙 설정:
   - **테스트 모드로 시작**을 선택합니다 (개발 중에는 이렇게 설정).
   - 나중에 프로덕션 환경에서는 보안 규칙을 수정해야 합니다.

## 3. Firebase 설정 정보 가져오기

1. Firebase Console에서 왼쪽 상단의 톱니바퀴 아이콘을 클릭합니다.
2. "프로젝트 설정"을 클릭합니다.
3. "일반" 탭에서 아래로 스크롤하여 "내 앱" 섹션을 찾습니다.
4. 웹 아이콘 (`</>`)을 클릭하여 웹 앱을 추가합니다.
5. 앱 닉네임을 입력하고 "앱 등록"을 클릭합니다.
6. Firebase SDK 추가 화면에서 설정 정보를 복사합니다.

## 4. firebase-config.js 파일 업데이트

`firebase-config.js` 파일을 열고 Firebase Console에서 복사한 설정 정보를 입력합니다:

```javascript
const firebaseConfig = {
  apiKey: "여기에_API_KEY_입력",
  authDomain: "여기에_AUTH_DOMAIN_입력",
  databaseURL: "여기에_DATABASE_URL_입력",
  projectId: "여기에_PROJECT_ID_입력",
  storageBucket: "여기에_STORAGE_BUCKET_입력",
  messagingSenderId: "여기에_MESSAGING_SENDER_ID_입력",
  appId: "여기에_APP_ID_입력"
};
```

## 5. 보안 규칙 설정 (중요!)

Firebase Console의 Realtime Database > 규칙 탭에서 다음 규칙을 설정합니다:

```json
{
  "rules": {
    "views": {
      ".read": true,
      ".write": true
    }
  }
}
```

**주의**: 이 규칙은 누구나 읽고 쓸 수 있도록 설정되어 있습니다. 프로덕션 환경에서는 더 엄격한 규칙을 설정하는 것을 권장합니다.

## 6. 게시판 타입별 조회수 저장 구조

조회수는 다음과 같은 구조로 저장됩니다:

```
views/
  ├── today-content/        (오늘의 콘텐츠)
  │   ├── daily-thoughts/   (하루 한 생각)
  │   ├── one-line-knowledge/ (한줄 지식/잡학)
  │   ├── economics/        (경제상식)
  │   └── science/          (일반상식)
  ├── tech-library/         (기술자료)
  ├── tech-trend/           (기술 트렌드/뉴스)
  ├── about-me/             (About Me)
  └── previous-materials/   (이전 자료)
```

## 7. 테스트

1. 웹사이트를 열고 게시판에 접속합니다.
2. 게시글을 클릭하여 조회수를 증가시킵니다.
3. Firebase Console의 Realtime Database에서 조회수가 증가하는지 확인합니다.

## 8. 개별 상세 페이지에 Firebase SDK 추가

개별 상세 페이지 HTML 파일들(`science-detail-*.html`, `economy-detail-*.html`, `trivia-detail-*.html` 등)의 `<head>` 섹션에 다음 코드를 추가해야 합니다:

```html
<!-- Firebase SDK -->
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js"></script>
<!-- Firebase 설정 및 유틸리티 -->
<script src="../firebase-config.js"></script>
<script src="../firebase-views.js"></script>
```

**참고**: 상세 페이지의 위치에 따라 경로가 다를 수 있습니다:
- `science/science-detail-*.html` → `../firebase-config.js`
- `economics/economy-detail-*.html` → `../firebase-config.js`
- `one-line-knowledge/trivia-detail-*.html` → `../firebase-config.js`

## 문제 해결

### 조회수가 증가하지 않을 때
1. 브라우저 콘솔에서 오류 메시지를 확인합니다.
2. Firebase 설정 정보가 올바르게 입력되었는지 확인합니다.
3. Realtime Database의 보안 규칙이 올바르게 설정되었는지 확인합니다.
4. 네트워크 연결을 확인합니다.

### Firebase SDK 로드 오류
1. 인터넷 연결을 확인합니다.
2. Firebase SDK 스크립트 태그가 올바른 순서로 로드되는지 확인합니다.
3. 브라우저 콘솔에서 스크립트 로드 오류를 확인합니다.

## 추가 참고사항

- Firebase 무료 플랜(Spark Plan)은 충분한 용량을 제공합니다.
- 조회수는 실시간으로 업데이트됩니다.
- 모든 사용자의 조회수가 누적되어 표시됩니다.

