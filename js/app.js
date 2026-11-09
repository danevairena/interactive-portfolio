const themeToggle = document.getElementById("theme-toggle");
const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");

themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");

    moonIcon.hidden = isDark;
    sunIcon.hidden = !isDark;

    themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
});