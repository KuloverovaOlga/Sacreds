const productCardMin = () => {
    document.querySelectorAll(".product-card__swiper").forEach(item => {
      item.addEventListener("click", (e) => {
        let target = e.target;
    
        if (target.classList.contains("product-card__like-box")) {
          e.preventDefault();
          target.closest(".product-card").classList.toggle("isActive");
        }
        if (target.classList.contains("product-card__basket")) {
          e.preventDefault();
        }
      });
    })
}

export default productCardMin ()
