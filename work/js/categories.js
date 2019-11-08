'use strict';
var categoryList = document.querySelector('.category__list');
var categoryItems = document.querySelectorAll('.category__item');
var categoryLinks = document.querySelectorAll('.category__link');
var categoryInnerLists = document.querySelectorAll('.category__inner-list');

function categoryHandler(evt) {
  event.preventDefault();
  var listItem = event.target;
  var elements = document.querySelectorAll('.category__item--active');
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove('category__item--active');
  };
  listItem.classList.add('category__item--active');
  for (var i = 0; i < categoryLinks.length; i++) {
    if (categoryLinks[i]==listItem) {
      categoryItems[i].classList.toggle('category__item--close');
    }
  };
};
categoryList.addEventListener('click', categoryHandler);
