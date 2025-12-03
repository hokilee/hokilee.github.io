// Firebase 설정 파일
// 사용 방법:
// 1. Firebase Console (https://console.firebase.google.com/)에서 프로젝트 생성
// 2. Realtime Database 생성 (테스트 모드로 시작)
// 3. 아래 설정 정보를 Firebase 프로젝트 설정에서 복사하여 입력

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Firebase 초기화 (Firebase SDK가 로드된 후에만 실행)
if (typeof firebase !== 'undefined') {
  firebase.initializeApp(firebaseConfig);
} else {
  console.error('Firebase SDK가 로드되지 않았습니다. Firebase SDK 스크립트를 먼저 로드하세요.');
}

