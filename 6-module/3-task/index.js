import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = createElement(`
     <!--Корневой элемент карусели-->
      <div class="carousel">
        <!--Кнопки переключения-->
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner">
          ${slides
            .map(
              (slide) => `<div class="carousel__slide" data-id="penang-shrimp">
          <img src="/assets/images/carousel/${
            slide.image
          }" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${slide.price.toFixed(2)}</span>
            <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button" data-id="${
              slide.id
            }">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>`
            )
            .join("")}
      </div>
      </div>`);

    this.initCarousel();

    let buttons = this.elem.querySelectorAll(".carousel__button");

    for (const button of buttons) {
      button.onclick = (event) => {
        const button = event.target;
        let customEvent = new CustomEvent("product-add", {
          detail: button.dataset.id,
          bubbles: true,
        });
        this.elem.dispatchEvent(customEvent);
      };
    }
  }

  initCarousel() {
    let buttonLeft = this.elem.querySelector(".carousel__arrow_left");
    let buttonRight = this.elem.querySelector(".carousel__arrow_right");

    let carouselInner = this.elem.querySelector(".carousel__inner");
    let images = this.elem.querySelectorAll(".carousel__slide");
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
      carouselInner.style.transform =
        "translateX(" + i * -carouselInner.offsetWidth + "px)";
      updateArrows();
    }
  }
}
