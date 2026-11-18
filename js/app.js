const themeToggle = document.getElementById("theme-toggle");
const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");

themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");

    moonIcon.hidden = isDark;
    sunIcon.hidden = !isDark;

    themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
});

const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

// Close menu after selecting a navigation link
mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        mainNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
});