function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}

const themeButtons = document.querySelectorAll('.theme');

themeButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    const themeText = document.querySelector('.theme-text');

    // Toggle emoji between 🌙 and 🔆
    if (themeText.textContent === '🌙') {
      themeText.textContent = '🔆';
    } else {
      themeText.textContent = '🌙';
    }
  });
});
