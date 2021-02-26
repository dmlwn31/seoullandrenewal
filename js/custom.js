//banner img slider
var slideIndex = 0;
carousel();
function carousel() {
    var i;
    var x = document.getElementsByClassName("bannerImg");

    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

// 메인 메뉴 네비게이션 마우스 호버 슬라이드
// $(document).ready(function() {
//   $("#gnb").mouseover(function() {
//     $("#gnb").stop().slidedown("fast");
//   });
//   $("#gnb").mouseout(function() {
//     $("#gnb").slideup("fast");
//   });
// });

// mobile메뉴  slide
$(document).ready(function(){
  $(".mIcon").click(function(){
    $(".mNavSlider").slideToggle();
  });
});


//mobile menu click
let mobileMenu = function(){
  $(".mIcon").click(function(){
    $(this).toggleClass("on");
    if($(this).hasClass("on")){
      $(this).find("i").attr("class", "fa fa-times");
    } else {
      $(this).find("i").attr("class", "fa fa-bars");
    }
  });
}

mobileMenu();

  

// 페이스북/블로그 탭 설정, active클래스 
$(function () {

$("button").click(function(){
  let index = $(this).index();

  $(".panels p").hide();
  $(".panels p").eq(index).show();

  $(this).removeClass("active");
  $(this).eq(index).addClass("active");
});

$("button").eq(0).trigger("click");
});


