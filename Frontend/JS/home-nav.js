function loadHTML(id, file) {
        fetch(file)
                .then(response => response.text())
                .then(data => {
                        document.getElementById(id).innerHTML = data;
                        initNavbar();
                });
}

document.addEventListener("DOMContentLoaded", () => {
        loadHTML("header", "home-nav.html");
        loadHTML("footer", "home-footer.html");
});

function initNavbar() {
        const navToggleBtn = document.getElementById('navToggleBtn');
        const navToggleLinks = document.querySelector('.nav-link-outer');

        if (navToggleBtn && navToggleLinks) {
                navToggleBtn.addEventListener('click', () => {
                        navToggleLinks.classList.toggle('active');
                });
        }
}