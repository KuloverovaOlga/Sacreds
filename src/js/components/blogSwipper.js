import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { rem } from "../utils/constants";


const blogSwipper = () => {

	const swiperOne = new Swiper('.blog__swiper', {
        slidesPerView: 'auto',
        spaceBetween:rem(1.2),
        grabCursor: true,
        updateOnWindowResize: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: '.blog__swiper-button-next',
            prevEl: '.blog__swiper-button-prev',
        },



   
    });
}

export default blogSwipper

