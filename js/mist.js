/* Top Slide */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("aslide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/* Bottom mouseoverEvent */
var divIndex = 1;
showDiv(divIndex);
function currentDiv(n) {
  showDiv(divIndex = n);
}
function showDiv(n) {
  var i;
  var slides = document.getElementsByClassName("b-right");
  if (n > slides.length) {divIndex = 1}
  if (n < 1) {divIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[divIndex-1].style.display = "block";
}
