#!/usr/bin/env python3
"""
PDF 파일에 보안 설정을 추가하는 스크립트
복사, 인쇄, 편집 등을 방지합니다.
"""

import PyPDF2
import os
from pathlib import Path

def secure_pdf(input_path, output_path):
    """
    PDF 파일에 보안 설정을 추가합니다.
    
    Args:
        input_path (str): 원본 PDF 파일 경로
        output_path (str): 보안이 설정된 PDF 파일 저장 경로
    """
    try:
        # 원본 PDF 파일 열기
        with open(input_path, 'rb') as file:
            reader = PyPDF2.PdfReader(file)
            writer = PyPDF2.PdfWriter()
            
            # 모든 페이지를 새 PDF에 복사
            for page in reader.pages:
                writer.add_page(page)
            
            # 보안 설정 추가
            # 복사 방지, 인쇄 방지, 편집 방지, 주석 방지
            writer.encrypt(
                user_pwd="",  # 사용자 비밀번호 (빈 문자열 = 비밀번호 없음)
                owner_pwd="owner123",  # 소유자 비밀번호
                use_128bit=True,  # 128비트 암호화 사용
                permissions_flag=0  # 모든 권한 차단 (복사, 인쇄, 편집, 주석 등)
            )
            
            # 보안이 설정된 PDF 저장
            with open(output_path, 'wb') as output_file:
                writer.write(output_file)
                
        print(f"✅ PDF 보안 설정 완료!")
        print(f"📁 원본 파일: {input_path}")
        print(f"📁 보안 파일: {output_path}")
        print(f"🔒 보안 설정:")
        print(f"   - 복사 방지: ✅")
        print(f"   - 인쇄 방지: ✅")
        print(f"   - 편집 방지: ✅")
        print(f"   - 주석 방지: ✅")
        print(f"   - 화면 읽기만 허용: ✅")
        
    except Exception as e:
        print(f"❌ 오류 발생: {e}")

def main():
    # 파일 경로 설정
    input_file = "tech-book/TG - Mastrena II - 137.419 - A - ko.pdf"
    output_file = "tech-book/TG - Mastrena II - 137.419 - A - ko_secure.pdf"
    
    # 파일 존재 확인
    if not os.path.exists(input_file):
        print(f"❌ 파일을 찾을 수 없습니다: {input_file}")
        return
    
    # PDF 보안 설정 실행
    secure_pdf(input_file, output_file)
    
    # 원본 파일 백업 및 새 파일로 교체
    if os.path.exists(output_file):
        backup_file = input_file + ".backup"
        print(f"\n📋 파일 교체 중...")
        print(f"   백업: {input_file} → {backup_file}")
        print(f"   교체: {output_file} → {input_file}")
        
        # 원본 파일 백업
        os.rename(input_file, backup_file)
        # 보안 파일을 원본 파일명으로 이동
        os.rename(output_file, input_file)
        
        print(f"✅ 파일 교체 완료!")
        print(f"💡 원본 파일은 {backup_file}로 백업되었습니다.")

if __name__ == "__main__":
    main() 