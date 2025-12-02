#!/bin/bash
# 간단한 HTTP 서버 시작 스크립트
cd "$(dirname "$0")"
echo "서버 시작 중..."
echo "브라우저에서 http://localhost:8000/index.html 을 열어주세요"
echo "서버를 중지하려면 Ctrl+C를 누르세요"
python3 -m http.server 8000


