const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');
const themeButtons = document.querySelectorAll('.theme');
const themeStorageKey = 'neeraj-portfolio-theme';

function setMenuOpen(isOpen) {
  if (!menuToggle || !mobileMenu) return;

  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  mobileMenu.hidden = !isOpen;
}

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 901px)').matches) setMenuOpen(false);
  });
}

function setTheme(isDark) {
  document.body.classList.toggle('dark-mode', isDark);
  themeButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(isDark));
    button.setAttribute('aria-label', 'Dark theme');
    const icon = button.querySelector('.theme-text');
    if (icon) icon.textContent = isDark ? '☀️' : '🌙';
  });
}

let savedTheme = null;
try {
  savedTheme = window.localStorage.getItem(themeStorageKey);
} catch {
  // The page still works when browser storage is unavailable.
}

setTheme(savedTheme === 'dark');

themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark-mode');
    setTheme(isDark);
    try {
      window.localStorage.setItem(themeStorageKey, isDark ? 'dark' : 'light');
    } catch {
      // Theme changes remain active for this page view without storage.
    }
  });
});
