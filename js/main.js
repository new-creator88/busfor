function changeText() {
    var maxlength = 480; //количество символов, которое должно отображаться
    var strNum = document.getElementsByClassName("reviews-card__text").length; //количество блоков с классом text
    for ( var i = 0; i < strNum ; i++ ) {
      var str = document.getElementsByClassName("reviews-card__text")[i].innerHTML; //текст
      document.getElementsByClassName("reviews-card__text")[i].innerHTML = str.slice( 0, maxlength ) + '...';
    }
  }
  
  changeText();


const openModalButton = document.getElementById('openModal');
const modal = document.getElementById('myModal');
const closeButton = modal.querySelector('.modal__close');
const btnClose = modal.querySelector('.btn-close');

// Открытие модального окна
openModalButton.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Закрытие модального окна при клике на крестик
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закрытие модального окна при клике на кнопку "Закрыть"
btnClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закрытие модального окна при клике вне окна
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});