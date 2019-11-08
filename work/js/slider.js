'use strict';

var slider = document.querySelector('.advertising__slider');
var sliderItems = document.querySelectorAll('.advertising__item');
var buttonNext = document.querySelector('.button-next');
var buttonPrevious = document.querySelector('.button-previous');

buttonNext.addEventListener('click', function(evt) {
  evt.preventDefault();
  for (var i = 0; i < sliderItems.length; i++) {
    if (sliderItems[i].classList.contains('advertising__item--active')) {
      sliderItems[i].classList.remove('advertising__item--active');
      if (sliderItems[i]===sliderItems[sliderItems.length-1]) {
        sliderItems[0].classList.add('advertising__item--active');
      }
      else {
        sliderItems[i+1].classList.add('advertising__item--active');
      }
      break;
    }
  };
});

buttonPrevious.addEventListener('click', function(evt) {
  evt.preventDefault();
  for (var i = 0; i < sliderItems.length; i++) {
    if (sliderItems[i].classList.contains('advertising__item--active')) {
      sliderItems[i].classList.remove('advertising__item--active');
      if (sliderItems[i]===sliderItems[0]) {
        sliderItems[sliderItems.length-1].classList.add('advertising__item--active');
      }
      else {
        sliderItems[i-1].classList.add('advertising__item--active');
      }
      break;
    }
  };
});
