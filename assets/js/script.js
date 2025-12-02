!(function () {
    "use strict";
    document.addEventListener("DOMContentLoaded", () => {
        const config = {
            light: {css: "assets/css/style-white.css",logo: "assets/img/logo_dark.svg"},
            dark: {css: "assets/css/style.css",logo: "assets/img/logo.svg"}
        };
        const themeStyle = document.getElementById("theme-style");
        const logo = document.getElementById("logotype");
        const switcher = document.getElementById("switch-theme");
        function setTheme(mode) {
            if (!config[mode] || !themeStyle || !logo) return;
            themeStyle.href = config[mode].css;
            logo.src = config[mode].logo;
            localStorage.setItem("theme", mode);
        }
        document.querySelectorAll(".circle-progress").forEach((el) => {
            const fill = el.querySelector(".circle-fill");
            if (!fill) return;
            const r = 36;
            const len = 2 * Math.PI * r;
            const percent = parseInt(el.dataset.percentage, 10) || 0;
            const direction = el.dataset.direction === "ccw" ? -1 : 1;
            fill.style.strokeDasharray = len;
            fill.style.strokeDashoffset = direction * len;
            setTimeout(() => {
                fill.style.strokeDashoffset = direction * len * (1 - percent / 100);
            }, 50);
        });
        let currentTheme = localStorage.getItem("theme") || "dark";
        if (currentTheme === "light") {
            setTheme("light");
        }
        if (switcher) {
            switcher.addEventListener("click", () => {
                currentTheme = currentTheme === "light" ? "dark" : "light";
                setTheme(currentTheme);
            });
        }
    });
})();
