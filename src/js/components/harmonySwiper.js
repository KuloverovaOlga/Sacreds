import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { rem } from "../utils/constants";


const harmonySwiper = () => {

	const swiperOne = new Swiper('.harmony-bottom__swiper', {
        slidesPerView: '5.8',
        grabCursor: true,
        updateOnWindowResize: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: '.harmony-bottom__swiper-button-next',
            prevEl: '.harmony-bottom__swiper-button-prev',
        },
    });
}





  



export default harmonySwiper

