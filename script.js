// script.js
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const menuIcon = document.getElementById('menu-icon');

menuToggle.addEventListener('click', () => {
  const isHidden = navMenu.hasAttribute('hidden');

  if (isHidden) {
    navMenu.removeAttribute('hidden');
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Cerrar menú');
    menuIcon.textContent = '▲';
  } else {
    navMenu.setAttribute('hidden', '');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menú');
    menuIcon.textContent = '▼';
  }
});
