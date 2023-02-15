const menuBtn = document.getElementById('menu');
const closeBtn = document.getElementById('close-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hamburger');
  mobileMenu.classList.toggle('hamburgerShow');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hamburger');
  mobileMenu.classList.toggle('hamburgerShow');
});