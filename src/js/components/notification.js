const notification = () => {
    const productCardBasket = document.querySelectorAll('.product-card__basket');
    const notification = document.querySelector('.notification');

    productCardBasket.forEach((item) => {
        item.addEventListener('click', function () {
            console.log(1);
            notification.classList.add('_show');

            setTimeout(function () {
                notification.classList.remove('_show');
            }, 4000);
        });
    });
};
export default notification;
