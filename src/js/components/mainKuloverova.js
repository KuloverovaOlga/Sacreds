import ribbonSwiper from "./ribbonSwiper";
import form from "./form";
import collectionsSwiper from "./collectionsSwiper";
import harmonySwiper from "./harmonySwiper";
import reviewsSwiper from "./reviewsSwiper";
import questions from "./questions";
import rangeSwiper from "./rangeSwiper";
import heroSwiper from "./heroSwiper";
import header from "./header";
import blogSwipper from "./blogSwipper";
import reviewsPageReviews from "./reviewsPageReviews";
import reviewsPageSwiper from "./reviewsPageSwiper";
import productCardMin from "./productCardMin";
import similarProductsSwiper from "./similarProductsSwiper";
import deliverySwiper from "./deliverySwiper";

document.addEventListener('DOMContentLoaded', () => {

    try{
        ribbonSwiper()
    } catch {}
    try{
        form()
    } catch {}
    try{
        collectionsSwiper()
    } catch {}
    try{
        harmonySwiper()
    } catch {}
    try{
        reviewsSwiper()
    } catch {}
    try{
        questions()
    } catch {}
    try{
        rangeSwiper()
    } catch {}
    try{
        heroSwiper()
    } catch {}
    try{
        header()
    } catch {}
    try{
        blogSwipper()
    } catch {}
    try{
        reviewsPageReviews()
    } catch {}
    try{
        reviewsPageSwiper()
    } catch {}
    try {
        productCardMin()
    } catch {}
    try{
        similarProductsSwiper()
    } catch {}
    try{
        deliverySwiper()
    } catch {}
    
})


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


