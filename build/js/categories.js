'use strict';
(function () {
  var categoryList = document.querySelector('.category__list');
  var categoryItems = document.querySelectorAll('.category__item');
  var categoryLinks = document.querySelectorAll('.category__link');
  var categoryInnerLists = document.querySelectorAll('.category__inner-list');

  function categoryHandler(evt) {
    var listItem = event.target;
    if (listItem.getAttribute('href')==='index.html') {

    }
    else {
      evt.preventDefault();
      var booksTitle= document.querySelector('.books__title');
      booksTitle.classList.remove('visually-hidden');
      var genryList = document.querySelector('.genry__list');
      genryList.style.display="none";
      var category = listItem.textContent;
      booksTitle.textContent = category;
      window.main.booksList.style.borderTop="none";
      window.main.removeBooks();
      window.main.createBooks(80);
      window.main.getBooks(0, 20);
      var element = document.querySelector('.category__item--active');
      element.classList.remove('category__item--active');
      listItem.classList.add('category__item--active');
      for (var i = 0; i < categoryLinks.length; i++) {
        if (categoryLinks[i]==listItem) {
          categoryItems[i].classList.toggle('category__item--close');
        }
      };
    }



  };
  categoryList.addEventListener('click', categoryHandler);

})();
