const buttonMenu = document.querySelector('.page-header__toggle');
const controllerMenu = document.querySelector('.page-header__container');
controllerMenu.classList.remove('page-header__container--nojs');
buttonMenu.onclick = function () {
  controllerMenu.classList.toggle('page-header__container--closed');
  controllerMenu.classList.toggle('page-header__container--opened');
};
new Swiper ('.slider');
