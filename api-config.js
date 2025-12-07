// API 서버 설정
// Railway 배포 후 실제 URL로 변경하세요
// Railway 대시보드 → 프로젝트 → Settings → Domains에서 확인 가능한 URL 사용

// 개발 환경 (로컬 테스트용)
const API_BASE_URL_DEV = 'http://localhost:3000';

// 프로덕션 환경 (Railway 배포 후 실제 URL로 변경)
// 예: 'https://your-project.up.railway.app'
const API_BASE_URL_PROD = 'https://your-project.up.railway.app';

// 현재 사용할 API URL 선택
// 배포 전에는 API_BASE_URL_DEV 사용, 배포 후에는 API_BASE_URL_PROD 사용
const API_BASE_URL = API_BASE_URL_PROD;

// 전역 변수로 설정 (server-views.js에서 사용)
if (typeof window !== 'undefined') {
  window.API_BASE_URL = API_BASE_URL;
}

