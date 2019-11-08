'use strict';

var mainNav = document.querySelector('.main-nav__list');
var mainNavLinks = document.querySelectorAll('.main-nav__link');

mainNav.addEventListener('click', function(evt) {
  evt.preventDefault();
  var target = evt.target;
  for (var i = 0; i < mainNavLinks.length; i++) {
    mainNavLinks[i].classList.remove('main-nav__link--active');
  };
  target.classList.add('main-nav__link--active');
});
