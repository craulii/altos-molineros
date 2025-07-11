// script.js
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const menuIcon = document.getElementById('menu-icon');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  const expanded = navMenu.classList.contains('active');

  menuToggle.setAttribute('aria-expanded', expanded.toString());
  menuToggle.setAttribute('aria-label', expanded ? 'Cerrar menú' : 'Abrir menú');
  menuIcon.textContent = expanded ? '▲' : '▼';
});

// Mostrar/Ocultar header al hacer scroll
let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    header.style.transform = "translateY(-100%)";
  } else {
    header.style.transform = "translateY(0)";
  }
  lastScrollY = window.scrollY;
});
