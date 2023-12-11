import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { rem } from "../utils/constants";


const reviewsSwiper = () => {

	const swiperOne = new Swiper('.reviews__swiper', {
        slidesPerView: '4.8',
        grabCursor: true,
        updateOnWindowResize: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: '.reviews__swiper-button-next',
            prevEl: '.reviews__swiper-button-prev',
        },
    });


    const sliders = document.querySelectorAll('.reviews__swiper-slide.swiper-slide') 

    for (let i = 0; i < sliders.length; i++) {
        const index = sliders.length - i;
        sliders[i].style.zIndex = index
    }
}





  



export default reviewsSwiper

