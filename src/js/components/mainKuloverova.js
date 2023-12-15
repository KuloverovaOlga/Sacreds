import ribbonSwiper from "./swiper/ribbonSwiper";
import collectionsSwiper from "./swiper/collectionsSwiper";
import harmonySwiper from "./swiper/harmonySwiper";
import reviewsSwiper from "./swiper/reviewsSwiper";
import rangeSwiper from "./swiper/rangeSwiper";
import heroSwiper from "./swiper/heroSwiper";
import blogSwipper from "./swiper/blogSwipper";
import reviewsPageSwiper from "./swiper/reviewsPageSwiper";
import deliverySwiper from "./swiper/deliverySwiper";
import similarProductsSwiper from "./swiper/similarProductsSwiper";
import articleProductsSwiper from "./swiper/articleProductsSwiper";
import productCardHeroSwiper from "./swiper/productCardHeroSwiper";




import header from "./header";
import form from "./form";
import questions from "./questions";
import reviewsPageReviews from "./reviewsPageReviews";
import productCardMin from "./productCardMin";
import heroMenuMob from "./heroMenusMob";
import harmonyBtnShowMore from "./harmonyBtnShowMore";
import burgerMenu from "./burger";
import productCardHero from "./productCardHero";
import productCardTabs from "./productCardTabs";
import map from "./map";
import popup from "./popup";


document.addEventListener("DOMContentLoaded", () => {
  try {
    ribbonSwiper();
  } catch {}
  try {
    collectionsSwiper();
  } catch {}
  try {
    harmonySwiper();
  } catch {}
  try {
    reviewsSwiper();
  } catch {}
  try {
    rangeSwiper();
  } catch {}
  try {
    heroSwiper();
  } catch {}
  try {
    blogSwipper();
  } catch {}
  try {
    similarProductsSwiper();
  } catch {}
  try {
    articleProductsSwiper();
  } catch {}
  try {
    deliverySwiper();
  } catch {}
  try {
    productCardHeroSwiper();
  } catch {}
 







  try {
    form('.sign-up__form');
  } catch {}
  try {
    form('.record__form');
  } catch {}



  try {
    questions();
  } catch {}
  try {
    header();
  } catch {}
  try {
    reviewsPageReviews();
  } catch {}
  try {
    reviewsPageSwiper();
  } catch {}
  try {
    productCardMin();
  } catch {}
  try {
    heroMenuMob();
  } catch {}
  try {
    harmonyBtnShowMore();
  } catch {}
  try {
    burgerMenu();
  } catch {}
  try {
    productCardHero();
  } catch {}
  try {
    productCardTabs();
  } catch {}
  try {
    map();
  } catch {}
  try {
    popup();
  } catch {}

});

// document.querySelector('#review_modal').addEventListener('click', () => {
//     document.querySelector('.modal.form-bill').classList.add("active")
// const closeBtn = document.querySelectorAll('.modal__close')

// })

// // $('#review_modal').on('click', function () {
// //     $(".modal.form-bill").addClass("active");
// //     openModal();
// //   })

// //   if ($(".modal__close").length) {
// //     $(".modal__close").on("click", function () {
// //       if ($(this).closest(".modal").hasClass("active")) {
// //         $(this).closest(".modal").removeClass('active');
// //         closeModal();
// //       }
// //     });
// //   }
