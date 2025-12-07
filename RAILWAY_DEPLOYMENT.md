# Railway 배포 가이드

이 문서는 조회수 카운터 서버를 Railway에 배포하는 방법을 안내합니다.

## 1단계: Railway에 프로젝트 연결

1. Railway 대시보드 접속: https://railway.app
2. "New Project" 클릭
3. "Deploy from GitHub repo" 선택
4. `hokilee/hokilee.github.io` 저장소 선택
5. "Add Service" → "Empty Service" 선택

## 2단계: 서비스 설정

Railway 대시보드에서 생성된 서비스의 Settings로 이동:

### General 설정
- **Root Directory**: `server`
- **Start Command**: `npm start`
- **Port**: Railway가 자동으로 설정 (환경 변수 `PORT` 사용)

### Variables (환경 변수)
기본적으로는 추가 설정이 필요 없습니다. 필요시:
- `PORT`: 서버 포트 (Railway가 자동 설정)
- `DATABASE_PATH`: SQLite 데이터베이스 경로 (기본값: ./views.db)

## 3단계: 배포 확인

1. Railway가 자동으로 배포를 시작합니다
2. 배포 완료 후 "Settings" → "Domains"에서 제공되는 URL 확인
   - 예: `your-project.up.railway.app`
3. 브라우저에서 `https://your-project.up.railway.app/health` 접속하여 서버 동작 확인
   - 응답: `{"status":"ok","timestamp":"2025-12-06T..."}`

## 4단계: API URL 설정

배포가 완료되면 `api-config.js` 파일을 수정하세요:

```javascript
// api-config.js 파일 수정
const API_BASE_URL_PROD = 'https://your-project.up.railway.app'; // Railway에서 제공된 URL로 변경
```

## 5단계: GitHub에 푸시

변경사항을 GitHub에 푸시하면 Railway가 자동으로 재배포합니다:

```bash
git add .
git commit -m "Add view counter server and update frontend"
git push origin main
```

## 6단계: 프론트엔드 배포

GitHub Pages에 배포되면 자동으로 개인 서버를 사용하게 됩니다.

## 문제 해결

### 서버가 시작되지 않는 경우
- Railway 대시보드 → "Deployments" → "Logs"에서 오류 확인
- `package.json`의 `start` 스크립트 확인
- Root Directory가 `server`로 설정되어 있는지 확인

### CORS 오류가 발생하는 경우
- `server/server.js`의 CORS 설정에서 도메인 확인
- GitHub Pages 도메인(`https://hokilee.github.io`)이 허용되어 있는지 확인

### 조회수가 증가하지 않는 경우
- 브라우저 개발자 도구(F12) → Console에서 오류 확인
- Network 탭에서 API 요청 상태 확인
- `api-config.js`의 API URL이 올바른지 확인

## 추가 정보

- Railway 무료 플랜: 월 $5 크레딧 제공
- 데이터베이스: SQLite 파일은 Railway의 영구 스토리지에 저장됨
- 자동 배포: GitHub에 푸시하면 자동으로 재배포됨

