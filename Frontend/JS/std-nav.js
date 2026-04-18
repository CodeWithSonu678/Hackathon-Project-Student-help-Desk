function loadHTML(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;

            // 👉 Call function AFTER loading
            initNavbar();
        });
}

document.addEventListener("DOMContentLoaded", () => {
    loadHTML("header", "std-nav.html");
});

// ✅ Move all nav logic into a function
function initNavbar() {
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
}