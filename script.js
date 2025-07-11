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

// Mostrar/Ocultar header al hacer scroll con umbral y comportamiento suave
let lastScrollY = window.scrollY;
const header = document.querySelector("header");
const threshold = 100; // px que hay que scrollear antes de ocultar header

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll <= 0) {
    // Si estamos en la parte superior, siempre mostrar header
    header.style.transform = "translateY(0)";
  } else if (currentScroll > lastScrollY && currentScroll > threshold) {
    // Si scrollea hacia abajo y pasó el umbral, ocultar header
    header.style.transform = "translateY(-100%)";
  } else if (currentScroll < lastScrollY) {
    // Si scrollea hacia arriba, mostrar header
    header.style.transform = "translateY(0)";
  }
  
  lastScrollY = currentScroll;
});
