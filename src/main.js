const menu = document.querySelector('.mobile-menu');
const backdrop = document.querySelector('.mobile-menu-backdrop');
const openBtn = document.querySelector('.btn-nav'); // КНОПКА ОТКРЫТИЯ!
const closeBtn = document.querySelector('.btn-mobile-close');

openBtn.addEventListener('click', () => {
  menu.classList.add('is-open');
  backdrop.classList.add('is-open');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('is-open');
  backdrop.classList.remove('is-open');
});
