const cartCheckboxes = () => {
    // Находим элементы DOM
    const selectAllCheckbox = document.querySelector('.cart__heading-selectAll'); // Выбрать все
    const deleteSelectedButton = document.querySelector('.cart__heading-delete'); // Удалить выбранное
    const checkboxes = document.querySelectorAll('.cart__list .cart__checkbox-input'); // Все чекбоксы внутри cart__list

    // Функция для обработки события нажатия на "Выбрать все"
    function selectAllHandler() {
        checkboxes.forEach((checkbox) => {
            checkbox.checked = selectAllCheckbox.checked;
        });
    }

    // Функция для обработки события нажатия на "Удалить выбранное"
    function deleteSelectedHandler() {
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                const cartElement = checkbox.closest('.cart__element');
                if (cartElement) {
                    cartElement.remove();
                }
            }
        });
    }

    // Назначаем обработчики событий
    selectAllCheckbox.addEventListener('change', selectAllHandler);
    deleteSelectedButton.addEventListener('click', deleteSelectedHandler);
};

export default cartCheckboxes;
