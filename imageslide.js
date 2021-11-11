// javascript to rotate images in the image slider
var slideIndex = 0;
imageSlide();
function imageSlide() {
  var i;
  var slides = document.getElementsByClassName("imgslides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(imageSlide, 4000); // Change image every 4 seconds
}
