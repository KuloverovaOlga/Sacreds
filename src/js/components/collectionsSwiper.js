import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { rem } from "../utils/constants";


const collectionsSwiper = () => {

	const swiperOne = new Swiper('.collections__swiper', {
        slidesPerView: 'auto',
        spaceBetween:rem(1.6),
        grabCursor: true,
        updateOnWindowResize: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: '.collections__swiper-button-next',
            prevEl: '.collections__swiper-button-prev',
        },

        breakpoints: {
            768: {
                slidesPerView: '3.4',
                spaceBetween:rem(4),
             
            },   
        },

   
    });
}

export default collectionsSwiper

