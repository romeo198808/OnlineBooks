'use strict';
(function () {
  var genryList = document.querySelector('.genry__list');
  var genryItems = document.querySelectorAll('.genry__item');


  genryList.addEventListener('click', function(evt) {
    evt.preventDefault();
    for (var i = 0; i < genryItems.length; i++) {
      genryItems[i].classList.remove('genry__item--active');
    }
    var target = evt.target;

    target.parentElement.classList.add('genry__item--active');
  });

  genryList.addEventListener('click', function(evt) {
    window.main.removeBooks();
    var target = evt.target;
    var parent = target.parentElement;
    var classList = parent.classList;
    switch (classList[1]) {
      case 'best-sellers':
        window.main.getBooks(0, 20);
        break;
        case 'new-arrivals':
          window.main.getBooks(20, 40);
          break;
          case 'used-books':
            window.main.getBooks(40, 60)
            break;
            case 'special-offers':
              window.main.getBooks(60, 80)
              break;
      default:

    }
  });
})();
