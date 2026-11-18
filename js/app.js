/* THEME TOGGLE */
const themeToggle = document.getElementById("theme-toggle");
const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");
const THEME_STORAGE_KEY = "theme";

if (document.documentElement.classList.contains("dark-theme")) {
    moonIcon.style.display = "none";
    sunIcon.style.display = "block";
    themeToggle.setAttribute("aria-label", "Switch to light mode");
}

themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark-theme");

    localStorage.setItem(
        THEME_STORAGE_KEY,
        isDark ? "dark" : "light"
    );

    moonIcon.style.display = isDark ? "none" : "block";
    sunIcon.style.display = isDark ? "block" : "none";

    themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
});

/* MOBILE NAVIGATION */
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