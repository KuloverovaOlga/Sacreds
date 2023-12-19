const animNumbers = () => {

    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start).toLocaleString(); // Добавляем форматирование числа
            obj.innerHTML = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '); // Добавляем пробелы
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
    
    // Получаем все элементы, которые будем анимировать
    const animatedElements = document.querySelectorAll('.animated-value');
    
    // Функция для проверки видимости элемента на экране
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Обработчик события прокрутки страницы
    function handleScroll() {
        animatedElements.forEach((el) => {
            if (isElementInViewport(el) && !el.classList.contains('animated')) {
                el.classList.add('animated');
                animateValue(el, 0, parseInt(el.innerText.replace(/\s/g, '')), 1500); // Убираем пробелы перед парсингом
            }
        });
    }
    
    // Добавляем обработчик события прокрутки
    window.addEventListener('scroll', handleScroll);
    handleScroll();
}

export default animNumbers
