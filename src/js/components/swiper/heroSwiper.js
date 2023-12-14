import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const heroSwiper = () => {
    const swiperContainer = document.querySelector('.hero__swiper');
    const paginationContainer = document.querySelector('.swiper-pagination');
    
    const swiperOne = new Swiper(swiperContainer, {
        slidesPerView: 1,
        effect: "fade",
        allowTouchMove: false,
        fadeEffect: {
            crossFade: true
             },
             speed: 1000,
        pagination: {
            el: paginationContainer,
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },
    });

}

export default heroSwiper;





















