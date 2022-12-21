function initCarousel() {
  let buttonLeft = document.querySelector(".carousel__arrow_left");
  let buttonRight = document.querySelector(".carousel__arrow_right");

  let carouselInner = document.querySelector(".carousel__inner");
  let images = document.querySelectorAll(".carousel__slide");
  let i = 0;

  function updateArrows() {
    buttonRight.style.display = "";
    buttonLeft.style.display = "";

    if (images.length - 1 === i) {
      buttonRight.style.display = "none";
    } else if (i === 0) {
      buttonLeft.style.display = "none";
    }
  }
  updateArrows();
  buttonLeft.onclick = function () {
    i -= 1;
    updateSlider();
  };
  buttonRight.onclick = function () {
    i += 1;
    updateSlider();
  };
  function updateSlider() {
    carouselInner.style.transform = "translateX(" + i * -carouselInner.offsetWidth + "px)";
    updateArrows();
  }
}
