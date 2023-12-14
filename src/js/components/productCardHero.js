const productCardHero = () => {
const button = document.querySelector('.product-hero__info-basket-favorite')

button.addEventListener('click', () => {
    button.classList.toggle('isActive') 
})
}

export default productCardHero