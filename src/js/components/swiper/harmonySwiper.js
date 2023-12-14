import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { rem } from "../../utils/constants";

const harmonySwiper = () => {
  const swiperOne = new Swiper(".harmony-bottom__swiper", {
    slidesPerView: "auto",
    spaceBetween: rem(1.6),
    grabCursor: true,
    updateOnWindowResize: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".harmony-bottom__swiper-button-next",
      prevEl: ".harmony-bottom__swiper-button-prev",
    },

    breakpoints: {
      768: {
        slidesPerView: "5.8",
      },
    },
  });
};

export default harmonySwiper;
