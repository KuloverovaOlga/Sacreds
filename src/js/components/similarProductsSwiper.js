import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { rem } from "../utils/constants";

const similarProductsSwiper = () => {
  
  const swiperInner = new Swiper(".similar-products__swiper", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 12,
    grabCursor: true,
    updateOnWindowResize: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".similar-products__swiper .swiper-button-next",
      prevEl: ".similar-products__swiper .swiper-button-prev",
    },
  });


  
};

export default similarProductsSwiper;
