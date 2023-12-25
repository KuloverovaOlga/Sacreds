const makingOrderDelivery = () => {
    const deliveryTypes = document.querySelectorAll('.making-order__delivery-types-element');

    deliveryTypes.forEach(function (element) {
        element.addEventListener('click', function () {
            deliveryTypes.forEach(function (el) {
                el.classList.remove('_active');
            });
            element.classList.add('_active');
        });
    });
};

export default makingOrderDelivery;
