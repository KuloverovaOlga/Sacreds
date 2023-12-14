import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { rem } from "../../utils/constants";

const reviewsPageSwiper = new Swiper(".satisfied__swiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  effect: "coverflow",
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: false,
    scale: 1.12,
  },

  navigation: {
    nextEl: ".satisfied__swiper-button-next",
    prevEl: ".satisfied__swiper-button-prev",
  },
});

export default reviewsPageSwiper;
