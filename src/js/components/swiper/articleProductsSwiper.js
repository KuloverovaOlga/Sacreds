import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { rem } from "../../utils/constants";

const articleProductsSwiper = () => {
  const swiperInner = new Swiper(".article-products__swiper", {
    slidesPerView: 2,
    grid: {
      rows: 2,
    },

    grabCursor: true,
    navigation: {
      nextEl: ".article-products__swiper .swiper-button-next",
      prevEl: ".article-products__swiper .swiper-button-prev",
    },
    pagination: {
      el: '.article-products__swiper .swiper-pagination',
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 12,
        grid: {
          rows: 1,
        },
      },
    },
  });
};

export default articleProductsSwiper;
