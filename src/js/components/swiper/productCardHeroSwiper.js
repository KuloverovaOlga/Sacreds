import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { rem } from "../../utils/constants";

const productCardHeroSwiper = () => {
  // Инициализация Swiper с автоматической высотой, горизонтальным направлением и одним видимым слайдом за раз
  const swiper = new Swiper(".product-hero__swiper", {
    slidesPerView: 1,
    effect: "fade",
    allowTouchMove: true,
    grabCursor: true,
      fadeEffect: {
      crossFade: true,
    },
    speed: 2000,
    spaceBetween: 0,
    direction: "horizontal",

    navigation: {
      nextEl: ".product-hero__swiper-button-next",
      prevEl: ".product-hero__swiper-button-prev",
    },
    pagination: {
      el: '.product-hero__swiper-pagination',
    }, 
    breakpoints: {
            768: {
              grabCursor: false,
              allowTouchMove: false,
            },
          },
    
  });
  
  }



// export default productCardHeroSwiper;


// import Swiper from "swiper/bundle";
// import "swiper/css/bundle";
// import { rem } from "../../utils/constants";

// const productCardHeroSwiper = () => {
//   // Инициализация Swiper с автоматической высотой, горизонтальным направлением и одним видимым слайдом за раз
//   const swiper = new Swiper(".product-hero__swiper", {
//     slidesPerView: 1,
//     grabCursor: true,
//     spaceBetween: 0,
//     direction: "horizontal",
//     navigation: {
//       nextEl: ".product-hero__swiper-button-next",
//       prevEl: ".product-hero__swiper-button-prev",
//     },
//     pagination: {
//       el: '.product-hero__swiper-pagination',
//     },

//     breakpoints: {
//       768: {
//         effect: "fade",
//         grabCursor: false,
//         fadeEffect: {
//           crossFade: true,
//         },
//         speed: 2000,
//         allowTouchMove: true,
//       },
//     },
//   });
  
//   }



// export default productCardHeroSwiper;

// import Swiper from "swiper/bundle";
// import "swiper/css/bundle";
// import { rem } from "../../utils/constants";

// const productCardHeroSwiper = () => {
//   // Инициализация Swiper с автоматической высотой, горизонтальным направлением и одним видимым слайдом за раз
//   const swiper = new Swiper(".product-hero__swiper", {
//     slidesPerView: 1,
//     grabCursor: true,
//     spaceBetween: 0,
//     direction: "horizontal",
//     navigation: {
//       nextEl: ".product-hero__swiper-button-next",
//       prevEl: ".product-hero__swiper-button-prev",
//     },
//     pagination: {
//       el: '.product-hero__swiper-pagination',
//     },

//     breakpoints: {
//       768: {
//         effect: "fade",
//         grabCursor: false,
//         fadeEffect: {
//           crossFade: true,
//         },
//         speed: 2000,
//       },
//     },
//   });
// };

export default productCardHeroSwiper;