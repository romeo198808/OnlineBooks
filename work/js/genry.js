'use strict';

var genryList = document.querySelector('.genry__list');
var genryItems = document.querySelectorAll('.genry__item');
console.log(genryList);
genryList.addEventListener('click', function(evt) {
  evt.preventDefault();
  for (var i = 0; i < genryItems.length; i++) {
    genryItems[i].classList.remove('genry__item--active');
  }
  var target = evt.target;

  target.parentElement.classList.add('genry__item--active');
});
