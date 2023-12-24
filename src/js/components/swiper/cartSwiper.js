import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { rem } from '../../utils/constants';

const cartSwiper = () => {
    const swiperInner = new Swiper('.cart__swiper', {
        slidesPerView: 'auto',

        grabCursor: true,
        navigation: {
            nextEl: '.cart__swiper .swiper-button-next',
            prevEl: '.cart__swiper .swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 1.5,
            },
        },
    });
};

export default cartSwiper;
