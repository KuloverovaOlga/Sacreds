import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { rem } from "../utils/constants";


const ribbonSwiper = () => {

	const swiperRibbon = new Swiper('.swiper-ribbon', {
		speed: 3000, //задаем скорость движения нашей бегущей строки
		spaceBetween: rem(6), // задаем отступы
		loop: true, //зацикливаем, что бы движание было бесконечным
		allowTouchMove: false, // можно ещё отключить свайп
		autoplay: { //задаем автоплей по умолчанию с нулевой задержкой
			 delay: 0,
			disableOnInteraction: false, // отключаем возможность отлючить анимацию при касании
		},
		breakpoints: { //стандартные настройки, котрые не так важны
			769: {
				slidesPerView: 'auto',
			},
			320: {
				slidesPerView: 2.25,
				spaceBetween: rem(2.4), 
			},
		},
	});



   

}

export default ribbonSwiper

