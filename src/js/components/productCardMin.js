const productCardMin= ( ) => {
    document.querySelector(".product-card__swiper").addEventListener("click", (e) => {
        let target = e.target;
    
        if (target.classList.contains("product-card__like-box")) {
          e.preventDefault();
          target.closest(".product-card").classList.toggle("isActive");
        }
        if (target.classList.contains("product-card__slide-basket")) {
          e.preventDefault();
        }
      });
}

export default productCardMin ()
