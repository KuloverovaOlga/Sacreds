import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { rem } from "../utils/constants";


const collectionsSwiper = () => {

	const swiperOne = new Swiper('.collections__swiper', {
        slidesPerView: '3.4',
        spaceBetween:rem(4),
        grabCursor: true,
        updateOnWindowResize: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: '.collections__swiper-button-next',
            prevEl: '.collections__swiper-button-prev',
        },



   
    });
}

export default collectionsSwiper

