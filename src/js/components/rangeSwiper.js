import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { rem } from "../utils/constants";



// const rangeSwiper = () => {
//       const swiper = new Swiper('.range__swiper', {
//         autoHeight: true,
//         slidesPerView: 1,
//         spaceBetween: 0,
//         direction: 'horizontal',
//         scrollbar: {
//           el: '.range__swiper-scrollbar',
//           dragSize: rem(11.3),
//           // draggable: true,
//         },
//       });

      

//       // Navigation Menu
//       const navItems = document.querySelectorAll('.range__swiper-nav-item');
//       const scrollbarDrag = document.querySelector('.range__swiper-scrollbar-drag');



//       navItems.forEach((item, index) => {

//         item.addEventListener('click', function () {
//           swiper.slideTo(index);

//           // Set width of the scrollbar drag to match the selected menu item

          
//           const width = item.offsetWidth;
//           const left = item.offsetLeft;
//           scrollbarDrag.style.width = `${width}px`;
//           scrollbarDrag.style.transform = `translateX(${left}px)`;

//           navItems.forEach(item => {
//             item.classList.remove('isActive')
//           })
//           item.classList.add('isActive')

//         });
//       });

//       // Sync Swiper with Scrollbar
//       swiper.on('scroll', function () {
//         const progress = swiper.progress;
//         const maxTranslate = scrollbarDrag.parentElement.offsetWidth - scrollbarDrag.offsetWidth;
//         const translateX = maxTranslate * progress;
//         scrollbarDrag.style.transform = `translateX(${translateX}px)`;
//       });


// }

// const rangeSwiper = () => {
//   const swiper = new Swiper('.range__swiper', {
//     autoHeight: true,
//     slidesPerView: 1,
//     spaceBetween: 0,
//     direction: 'horizontal',
//     scrollbar: {
//       el: '.range__swiper-scrollbar',
//       dragSize: rem(11.3),
//     },
//   });

//   // Navigation Menu
//   const navItems = document.querySelectorAll('.range__swiper-nav-item');
//   const scrollbarDrag = document.querySelector('.range__swiper-scrollbar-drag');

//   navItems.forEach((item, index) => {
//     item.addEventListener('click', function () {
//       swiper.slideTo(index);

//       // Set width of the scrollbar drag to match the selected menu item
//       const width = item.offsetWidth;
//       const left = item.offsetLeft;
//       scrollbarDrag.style.width = `${width}px`;
//       scrollbarDrag.style.transform = `translateX(${left}px)`;

//       navItems.forEach((item) => {
//         item.classList.remove('isActive');
//       });
//       item.classList.add('isActive');
//     });
//   });

//   // Sync Swiper with Scrollbar
//   swiper.on('slideChange', function () {
//     const activeNavItem = document.querySelector('.range__swiper-nav-item.isActive');
//     if (activeNavItem) {
//       activeNavItem.classList.remove('isActive');
//     }

//     const currentSlideIndex = swiper.activeIndex;
//     const newActiveNavItem = navItems[currentSlideIndex];
//     newActiveNavItem.classList.add('isActive');

//     // Set width of the scrollbar drag to match the selected menu item
//     const width = newActiveNavItem.offsetWidth;
//     const left = newActiveNavItem.offsetLeft;
//     scrollbarDrag.style.width = `${width}px`;
//     scrollbarDrag.style.transform = `translateX(${left}px)`;
//   });
// };


const rangeSwiper = () => {
  const swiper = new Swiper('.range__swiper', {
    // autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 0,
    direction: 'horizontal',
    scrollbar: {
      el: '.range__swiper-scrollbar',
      dragSize: rem(11.3),
    },
  });


  // Navigation Menu
  const navItems = document.querySelectorAll('.range__swiper-nav-item');
  const scrollbarDrag = document.querySelector('.range__swiper-scrollbar-drag');

  navItems.forEach((item, index) => {
    item.addEventListener('click', function () {
      swiper.slideTo(index);

      // Set width of the scrollbar drag to match the selected menu item
      const width = item.offsetWidth;
      const left = item.offsetLeft;
      scrollbarDrag.style.width = `${width}px`;
      scrollbarDrag.style.transform = `translateX(${left}px)`;

      navItems.forEach((item) => {
        item.classList.remove('isActive');
      });
      item.classList.add('isActive');
    });
  });

  // Sync Swiper with Scrollbar
  swiper.on('slideChange', function () {
    const activeNavItem = document.querySelector('.range__swiper-nav-item.isActive');
    if (activeNavItem) {
      activeNavItem.classList.remove('isActive');
    }


    const currentSlideIndex = swiper.activeIndex;
    const newActiveNavItem = navItems[currentSlideIndex];
    newActiveNavItem.classList.add('isActive');

    // Set width of the scrollbar drag to match the selected menu item
    const width = newActiveNavItem.offsetWidth;
    const left = newActiveNavItem.offsetLeft;
    scrollbarDrag.style.width = `${width}px`;

    // Calculate the maximum translateX to keep the scrollbarDrag within the scrollbar
    const maxTranslateX = scrollbarDrag.parentElement.offsetWidth - scrollbarDrag.offsetWidth;
    const translateX = Math.min(left, maxTranslateX);
    scrollbarDrag.style.transform = `translateX(${translateX}px)`;
  });
};








export default rangeSwiper