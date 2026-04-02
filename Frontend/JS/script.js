const navToggleBtn = document.getElementById('navToggleBtn');
const navToggleLinks = document.querySelector('.nav-toggle-links');

if (navToggleBtn && navToggleLinks) {
  navToggleBtn.addEventListener('click', () => {
    navToggleLinks.classList.toggle('active');
  });
}



