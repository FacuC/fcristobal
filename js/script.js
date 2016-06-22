"use strict";

function mostrar(numero){
  for (var i = 0; i < document.getElementsByClassName('prodfiltrado').length; i++){
     document.getElementsByClassName('prodfiltrado')[i].style.display= 'none';
  }
  document.getElementsByClassName('prodfiltrado')[numero].style.display= 'inline-block';
}



$("#barraNav li").click(function(){
  $(".active").toggleClass("active");
  $(this).toggleClass("active");
});
