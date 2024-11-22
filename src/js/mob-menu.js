const mobileMenu = document.querySelector('.mob-menu');
const openMenuBtn = document.querySelector('#header .js-open-menu');
const arrCloseBtn = document.querySelectorAll('.mob-menu [data-close="true"]');

function openMenu() {
  openMenuBtn.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-open');
  if (mobileMenu.classList.contains('is-open')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

function closeMenu() {
  document.body.style.overflow = '';
  openMenuBtn.classList.remove('is-active');
  mobileMenu.classList.remove('is-open');
}

openMenuBtn.addEventListener('click', openMenu);
arrCloseBtn.forEach(e => {
  e.addEventListener('click', closeMenu);
});
