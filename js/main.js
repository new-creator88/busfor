function changeText() {
    var maxlength = 480; //количество символов, которое должно отображаться
    var strNum = document.getElementsByClassName("reviews-card__text").length; //количество блоков с классом text
    for ( var i = 0; i < strNum ; i++ ) {
      var str = document.getElementsByClassName("reviews-card__text")[i].innerHTML; //текст
      document.getElementsByClassName("reviews-card__text")[i].innerHTML = str.slice( 0, maxlength ) + '...';
    }
  }
  
  changeText();