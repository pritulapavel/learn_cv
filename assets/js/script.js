(function () {
    'use strict';
    function applyTheme(theme) {
        const themes = {
            light: { css: '../assets/css/style-white.css', logo: '../assets/img/logo_dark.svg' },
            dark: { css: '../assets/css/style.css', logo: '../assets/img/logo.svg' }
        };
        const themeLink = document.getElementById('theme-style');
        const logoLink = document.getElementById('logotype');
        if (themeLink && logoLink && themes[theme]) {
            themeLink.href = themes[theme].css;
            logoLink.src = themes[theme].logo;
            localStorage.setItem('theme', theme);
        }
    }
    document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('.circle-progress').forEach(c => {
            const fill = c.querySelector('.circle-fill');
            if (!fill) return;
            const radius = 36;
            const circumference = 2 * Math.PI * radius;
            const percent = parseInt(c.dataset.percentage, 10) || 0;
            const direction = c.dataset.direction === 'ccw' ? -1 : 1;
            fill.style.strokeDasharray = circumference;
            fill.style.strokeDashoffset = direction * circumference;
            setTimeout(() => {
                fill.style.strokeDashoffset = direction * circumference * (1 - percent / 100);
            }, 50);
        });
        let currentTheme = localStorage.getItem('theme') || 'light';
        applyTheme(currentTheme);
        const button = document.getElementById('switch-theme');
        if (button) {
            button.addEventListener('click', () => {
                currentTheme = currentTheme === 'light' ? 'dark' : 'light';
                applyTheme(currentTheme);
            });
        }
    });
})();