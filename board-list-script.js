// 게시판 목록 자동 생성 스크립트
class BoardListGenerator {
  constructor(boardType) {
    this.boardType = boardType;
    this.postsJsonPath = this.getPostsJsonPath();
    this.detailPath = this.getDetailPath();
    this.postsPerPage = 10; // 페이지당 게시글 수
    this.currentPage = this.getCurrentPage();
    this.init();
  }

  getPostsJsonPath() {
    const paths = {
      'self-improvement': 'self-improvement/posts.json',
      'tech-tips': 'tech-tips/posts.json',
      economy: 'economy/posts.json',
      thought: 'thought/posts.json',
      trivia: 'trivia/posts.json',
    };
    return paths[this.boardType];
  }

  getDetailPath() {
    const paths = {
      'self-improvement': 'self-improvement/self-improvement-detail-',
      'tech-tips': 'tech-tips/tech-tips-detail-',
      economy: 'economy/economy-detail-',
      thought: 'thought/thought-detail-',
      trivia: 'trivia/trivia-detail-',
    };
    return paths[this.boardType];
  }

  getCurrentPage() {
    const urlParams = new URLSearchParams(window.location.search);
    let page = parseInt(urlParams.get('page')) || 1;
    return page;
  }

  async init() {
    try {
      const posts = await this.loadPosts();
      this.renderBoardList(posts);
      this.renderPagination(posts.length);
    } catch (error) {
      console.error('게시판 목록 로드 실패:', error);
      this.showFallbackContent();
    }
  }

  async loadPosts() {
    const response = await fetch(this.postsJsonPath);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.posts || [];
  }

  renderBoardList(posts) {
    const boardList = document.querySelector('.board-list');
    if (!boardList) return;

    // 기존 내용 제거
    boardList.innerHTML = '';

    // New 배지 기준 날짜 (정확히 2025-06-30)
    const newBadgeDate = '2025-08-01';

    // 번호 역순 정렬 (최신 번호가 맨 위로)
    const sortedPosts = posts.sort((a, b) => {
      return parseInt(b.number) - parseInt(a.number);
    });

    // 페이지네이션을 위한 게시글 슬라이싱
    const startIndex = (this.currentPage - 1) * this.postsPerPage;
    const endIndex = startIndex + this.postsPerPage;
    const currentPagePosts = sortedPosts.slice(startIndex, endIndex);

    currentPagePosts.forEach((post) => {
      const listItem = this.createBoardItem(post, newBadgeDate);
      boardList.appendChild(listItem);
    });
  }

  renderPagination(totalPosts) {
    const pagination = document.querySelector('.pagination');
    if (!pagination) return;

    const totalPages = Math.ceil(totalPosts / this.postsPerPage);

    // 페이지가 1개뿐이면 페이지네이션 숨기기
    if (totalPages <= 1) {
      pagination.style.display = 'none';
      return;
    }

    pagination.style.display = 'block';
    pagination.innerHTML = '';

    // 이전 페이지 버튼
    if (this.currentPage > 1) {
      const prevLink = document.createElement('a');
      prevLink.href = `?page=${this.currentPage - 1}`;
      prevLink.textContent = '←';
      pagination.appendChild(prevLink);
    }

    // 페이지 번호들
    const maxVisiblePages = 5;
    let startPage = Math.max(
      1,
      this.currentPage - Math.floor(maxVisiblePages / 2)
    );
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      const pageLink = document.createElement('a');
      pageLink.href = `?page=${i}`;
      pageLink.textContent = i;

      if (i === this.currentPage) {
        pageLink.className = 'current';
      }

      pagination.appendChild(pageLink);
    }

    // 다음 페이지 버튼
    if (this.currentPage < totalPages) {
      const nextLink = document.createElement('a');
      nextLink.href = `?page=${this.currentPage + 1}`;
      nextLink.textContent = '→';
      pagination.appendChild(nextLink);
    }
  }

  createBoardItem(post, todayString) {
    const li = document.createElement('li');
    li.className = 'board-item';

    // 오늘 날짜와 정확히 일치하는 경우에만 New 표시
    const isNew = post.date === todayString;

    // trivia 게시판은 filename 필드를 직접 사용, 그 외는 기존 방식
    let detailLink = '';
    if (this.boardType === 'trivia') {
      detailLink = `trivia/${post.filename}`;
    } else {
      detailLink = `${this.detailPath}${post.number}.html`;
    }

    li.innerHTML = `
      <a href="${detailLink}">
        <div class="left-content">
          <div class="number">#${post.number}</div>
          <h3>
            ${post.title}${isNew ? '<span class="new-badge">New</span>' : ''}
          </h3>
        </div>
        <div class="date">${post.date}</div>
      </a>
    `;

    return li;
  }

  showFallbackContent() {
    const boardList = document.querySelector('.board-list');
    if (boardList) {
      boardList.innerHTML = `
        <li class="board-item">
          <div class="left-content">
            <div class="number">#1</div>
            <h3>게시글을 불러올 수 없습니다</h3>
          </div>
          <div class="date">-</div>
        </li>
      `;
    }
  }
}

// 페이지 로드 시 자동으로 게시판 타입 감지 및 초기화
document.addEventListener('DOMContentLoaded', function () {
  // URL에서 게시판 타입 감지
  const currentPath = window.location.pathname;
  let boardType = '';

  if (currentPath.includes('self-improvement-board')) {
    boardType = 'self-improvement';
  } else if (currentPath.includes('tech-tips-board')) {
    boardType = 'tech-tips';
  } else if (currentPath.includes('economy-board')) {
    boardType = 'economy';
  } else if (currentPath.includes('thought-board')) {
    boardType = 'thought';
  } else if (currentPath.includes('trivia-board')) {
    boardType = 'trivia';
  }

  if (boardType) {
    new BoardListGenerator(boardType);
  }
});
