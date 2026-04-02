const hideNavBtn = document.getElementById('hide-nav');
const outerNav = document.querySelector('.outer-dash-nav');
const toggleNav = document.querySelector('.toggle-dash-nav');

if (hideNavBtn && outerNav && toggleNav) {
  hideNavBtn.addEventListener('click', () => {
    outerNav.style.display = 'none';
    toggleNav.style.display = 'flex';
  });
}

if (window.innerWidth < 768) {
  if (outerNav && toggleNav) {
    toggleNav.addEventListener('click', () => {
      outerNav.style.display = 'flex';
      toggleNav.style.display = 'none';
    });
  }
}

if (window.innerWidth > 768) {
  if (toggleNav && outerNav) {
    toggleNav.addEventListener('mouseenter', () => {
      outerNav.style.display = 'flex';
      toggleNav.style.display = 'none';
    });
  }

  if (outerNav && toggleNav) {
    outerNav.addEventListener('mouseleave', () => {
      outerNav.style.display = 'none';
      toggleNav.style.display = 'flex';
    });
  }
}