const catalog = () => {
    // Получаем все элементы .catalog__types-box
    const typesBoxes = document.querySelectorAll('.catalog__types-box');
    // Получаем элемент .catalog__subcategories
    const subcategories = document.querySelector('.catalog__subcategories');

    // Перебираем все .catalog__types-box и назначаем обработчик события клика
    typesBoxes.forEach((box) => {
        box.addEventListener('click', () => {
            // Удаляем класс _isActive у всех элементов .catalog__types-box
            typesBoxes.forEach((item) => {
                item.classList.remove('_isActive');
            });

            // Добавляем класс _isActive только к текущему элементу
            box.classList.add('_isActive');

            // Отображаем catalog__subcategories
            subcategories.style.display = 'block';
        });
    });

    // Находим все элементы с классом catalog__tags-box
    const tagsBoxes = document.querySelectorAll('.catalog__tags-box');

    // Для каждого элемента добавляем обработчик события клика
    tagsBoxes.forEach((box) => {
        box.addEventListener('click', () => {
            // Переключаем класс _isActive при клике
            box.classList.toggle('_isActive');
        });
    });

    // Получаем ссылку на элемент catalog__filter-heading
    const filterHeading = document.querySelector('.catalog__filter-heading');
    // Получаем ссылку на элемент catalog__filter
    const filter = document.querySelector('.catalog__filter');

    // Добавляем обработчик события клика на catalog__filter-heading
    filterHeading.addEventListener('click', function () {
        // Добавляем класс _isActive к catalog__filter
        filter.classList.toggle('_isActive');
    });
};

export default catalog;
