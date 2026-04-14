const navToggleBtn = document.getElementById('navToggleBtn');
const navToggleLinks = document.querySelector('.nav-link-outer');

if (navToggleBtn && navToggleLinks) {
  navToggleBtn.addEventListener('click', () => {
    navToggleLinks.classList.toggle('active');
  });
}