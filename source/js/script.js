const buttonMenu = document.querySelector('.page-header__toggle');
const controllerMenu = document.querySelector('.page-header__container');
controllerMenu.classList.remove('page-header__container--nojs');
buttonMenu.onclick = function () {
  controllerMenu.classList.toggle('page-header__container--closed');
  controllerMenu.classList.toggle('page-header__container--opened');
};
// настройки swiper
new Swiper('.slider', {
  navigation: {
    nextEl: '.slider__button-next',
    prevEl: '.slider__button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slideToClickedSlide: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    sensitivity: 2,
  },
  spaceBetween: 400,
  autoplay:{
    delay: 1000,
    stopOnLastSlide: true,
    disableOnInteraction: true,
  },
});

// настройки leaflet
const map = L.map('map')
  .setView({
    lat: 59.96831,
    lng: 30.31748,
  }, 16);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const mainPinMarker = L.marker(
  {
    lat: 59.96831,
    lng: 30.31748,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);
