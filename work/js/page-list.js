'use strict';

(function () {
  var pageList = document.querySelector('.page__list');
  var pageItems = pageList.querySelectorAll('.page__item');
  var pageLinks = pageList.querySelectorAll('a');

  for (var i = 0; i < pageItems.length; i++) {
    pageItems[i].addEventListener('click', function(evt) {
      evt.preventDefault();
      var target = evt.target;
      for (var i = 0; i < pageLinks.length; i++) {
        pageItems[i].classList.remove('page__item--active');
        if (target===pageLinks[i]) {
          pageItems[i].classList.add('page__item--active');
        }
      };
    });
  };
})();
