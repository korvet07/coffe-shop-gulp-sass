const buttonMenu = document.querySelector('.page-header__toggle');
const controllerMenu = document.querySelector('.page-header__container');
const formFilter = document.querySelector('.formFilter');
const resetButton = document.querySelector('.button[type="reset"]');
const submitButton = document.querySelector('.form-filter__submit');
const controlSubmit = document.querySelector('.catalog__wrapper');

controlSubmit.addEventListener('change', (evt) => {
  if (evt.target.nodeName === 'INPUT' || evt.target.nodeName === 'SELECT') {
    submitButton.click();
  }
});
controllerMenu.classList.remove('page-header__container--nojs');
controllerMenu.classList.remove('page-header__container--opened');
controllerMenu.classList.add('page-header__container--closed');
buttonMenu.onclick = function () {
  controllerMenu.classList.toggle('page-header__container--closed');
  controllerMenu.classList.toggle('page-header__container--opened');
};
// добавляет cursor: 'pointer' для не отключённых радиоинпутов
// const labelRadioInputs = document.querySelectorAll('.filter-milk__control-input');
// labelRadioInputs.forEach((elem) => {
//   let inputRadio = elem.querySelector('.filter-milk__input');
//   if (!inputRadio.disabled) {
//     elem.onmouseover = function (evt) {
//       evt.target.style.cursor = 'pointer';
//     };
//   }
// });

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
  autoplay: {
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

// настройки noUiSlider
const sliderElement = document.querySelector('.range__scale');
const valueElementMin = document.querySelector('.range__input-min');
const valueElementMax = document.querySelector('.range__input-max');
valueElementMin.value = 0;
valueElementMax.value = 900;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1100,
  },
  start: [0, 900],
  step: 1,
  connect: true,
  margin: 100,
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});
sliderElement.noUiSlider.on('update', (values, handle) => {
  (handle ? valueElementMax : valueElementMin).value = values[handle];
});
resetButton.addEventListener('click', () => {
  valueElementMin.value = 0;
  valueElementMax.value = 900;
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1100,
    },
    start: [0, 900]
  });
});
