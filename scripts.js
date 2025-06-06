// 현재 연도를 footer에 자동으로 표시
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
