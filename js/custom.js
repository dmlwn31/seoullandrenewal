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
    setTimeout(carousel, 1000); // Change image every 2 seconds
}