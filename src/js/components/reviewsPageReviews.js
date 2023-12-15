const reviewsPageReviews = () => {
    


    const itemsPerPage = 6;
    const items = document.querySelectorAll('.review-wrapper__item');
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const paginationContainer = document.querySelector('.review-content__pagination');
    const prevButton = document.querySelector('.review-content__pagination-btn-prev');
    const nextButton = document.querySelector('.review-content__pagination-btn-next');
    let currentPage = 1;
    
    function showPage(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
    
        items.forEach((item, index) => {
            if (index >= startIndex && index < endIndex) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    
        // Удалить класс активности со всех кнопок
        const buttons = paginationContainer.querySelectorAll('button');
        buttons.forEach((button) => {
            button.classList.remove('active');
        });
    
        // Добавить класс активности активной кнопке
        const activeButton = paginationContainer.querySelector(`button[data-page="${page}"]`);
        activeButton.classList.add('active');
    
        currentPage = page;
    
        // Отключить кнопку "Назад", если мы на первой странице
        prevButton.disabled = currentPage === 1;
    
        // Отключить кнопку "Вперед", если мы на последней странице
        nextButton.disabled = currentPage === totalPages;
    }
    
    function createPaginationButtons() {
        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            button.classList.add('content__pagination-btn');
            button.setAttribute('data-page', i);
            button.addEventListener('click', () => showPage(i));
            paginationContainer.appendChild(button);
        }
    
        // Отключить кнопку "Назад" на первой странице
        prevButton.disabled = true;
    }
    
    function prevPage() {
        if (currentPage > 1) {
            showPage(currentPage - 1);
        }
    }
    
    function nextPage() {
        if (currentPage < totalPages) {
            showPage(currentPage + 1);
        }
    }
    
    // Скрыть пагинацию, если элементов меньше 8
    if (items.length <= itemsPerPage) {
        paginationContainer.style.display = 'none';
        prevButton.style.display = 'none';
        nextButton.style.display = 'none';
    } else {
        createPaginationButtons();
    }
    
    // Добавить слушатели событий для кнопок "Назад" и "Вперед"
    prevButton.addEventListener('click', prevPage);
    nextButton.addEventListener('click', nextPage);
    
    // Показать первую страницу при загрузке страницы
    showPage(1);
}

export default reviewsPageReviews