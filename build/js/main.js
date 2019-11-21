'use strict';

(function functionName() {
  window.main = {
    imgSrcArr: ["img/layer 56.jpg", "img/layer 58.jpg", "img/layer 59.jpg", "img/layer 60.jpg", "img/layer 61.jpg", "img/layer 106.jpg", "img/layer 107.jpg", "img/layer 108.jpg", "img/layer 109.jpg", "img/layer 110.jpg", "img/layer 133.jpg", "img/layer 134.jpg", "img/layer 135.jpg", "img/layer 136.jpg", "img/layer 137.jpg"],
    priceArr: ["$50", "$60", "$25", "$80", "$200", "$200", "$150", "$100", "$152", "$200", "$220", "$10", "$22", "$300", "$205"],
    nameArr: ["The Hare With Amber Eyes", "The war of Art", "The Hare With Amber Eyes", "The Immortals of Meluha", "Life is What You Make It"],
    books: [],
    booksList: document.querySelector('.books__list'),
    booksItem: document.querySelector('template')
    .content
    .querySelector('.books__item'),
    getElement: function (x) {
      var o = Math.floor(Math.random()*x.length);
      return o;
    },
    createBooks: function (x) {
      window.main.books.length = x;
      for (var i = 0; i < window.main.books.length; i++) {
        window.main.books[i] = {
          img: window.main.imgSrcArr[window.main.getElement(window.main.imgSrcArr)],
          price: window.main.priceArr[window.main.getElement(window.main.priceArr)],
          name: window.main.nameArr[window.main.getElement(window.main.nameArr)]
        }
      };
    },
    getBooks: function (x, y) {
      for (var i = x; i < y; i++) {
        var item = window.main.booksItem.cloneNode(true);
        var img = item.querySelector('img');
        var desc = item.querySelector('.books__desc');
        var price = item.querySelector('.books__price');
        img.setAttribute('src', window.main.books[i].img);
        img.setAttribute('alt', window.main.books[i].name);
        desc.textContent = window.main.books[i].name;
        price.textContent = window.main.books[i].price;
        window.main.booksList.appendChild(item);
      };
    },
    removeBooks: function () {
      var booksItems = window.main.booksList.querySelectorAll('.books__item');
      for (var i = 0; i < booksItems.length; i++) {
        booksItems[i].remove();
      };
    }
  };
})();
