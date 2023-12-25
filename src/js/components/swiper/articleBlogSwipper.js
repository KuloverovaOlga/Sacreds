import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { rem } from "../../utils/constants";


const articleBlogSwipper = () => {

	const swiperOne = new Swiper('.article-blog__swiper', {
        slidesPerView: 'auto',
        spaceBetween:rem(1.6),
        grabCursor: true,
        updateOnWindowResize: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: '.article-blog__swiper-button-next',
            prevEl: '.article-blog__swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: '3',
                spaceBetween:rem(0.8),
            },
        },


   
    });
}

export default articleBlogSwipper

