"use strict";

$("#barraNav li").click(function(){
  $(".active").toggleClass("active");
  $(this).toggleClass("active");
});
