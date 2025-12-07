# 조회수 카운터 서버

이 서버는 leehoki.com 웹사이트의 게시판 조회수를 관리하는 백엔드 서버입니다.

## 기술 스택

- Node.js
- Express.js
- SQLite3

## 설치 및 실행

### 로컬 개발 환경

```bash
# 의존성 설치
npm install

# 서버 실행
npm start
```

서버는 기본적으로 포트 3000에서 실행됩니다.

### Railway 배포

1. Railway 대시보드에서 "New Project" 클릭
2. "Deploy from GitHub repo" 선택
3. `hokilee/hokilee.github.io` 저장소 선택
4. 설정:
   - Root Directory: `server`
   - Start Command: `npm start`
   - Port: Railway가 자동으로 설정

## API 엔드포인트

### 조회수 증가
- **POST** `/api/views/increment`
- Body: `{ "boardType": "science", "itemId": "1" }`
- Response: `{ "success": true, "count": 123 }`

### 조회수 가져오기
- **GET** `/api/views/:boardType/:itemId`
- Response: `{ "count": 123 }`

### 조회수 일괄 가져오기
- **POST** `/api/views/batch`
- Body: `{ "boardType": "science", "itemIds": ["1", "2", "3"] }`
- Response: `{ "views": { "1": 123, "2": 45, "3": 67 } }`

### 헬스 체크
- **GET** `/health`
- Response: `{ "status": "ok", "timestamp": "2025-12-06T..." }`

## 환경 변수

- `PORT`: 서버 포트 (기본값: 3000)
- `DATABASE_PATH`: SQLite 데이터베이스 파일 경로 (기본값: ./views.db)
- `API_BASE_URL`: 프론트엔드에서 사용할 API 기본 URL

## 데이터베이스 구조

```sql
CREATE TABLE views (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  board_type TEXT NOT NULL,
  item_id TEXT NOT NULL,
  view_count INTEGER DEFAULT 0,
  last_updated DATETIME DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(board_type, item_id)
);
```

