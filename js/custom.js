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

//mobile menu click
let mobileMenu = function(){
  $(".mIcon").click(function(){
    $(this).toggleClass("on");
    if($(this).hasClass("on")){
      $(this).find("i").attr("class", "fa fa-times");
      // $(".navigation").slideDown("fast");
    } else {
      $(this).find("i").attr("class", "fa fa-bars");
      // $(".navigation").slideup("fast");
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


