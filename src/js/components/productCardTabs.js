const productCardTabs = () => {
    function showTabContent(tabIndex) {
        const tabs = document.querySelectorAll('.product-content__tab');
        const tabContents = document.querySelectorAll('.product-content__tab-content');

        for (let i = 0; i < tabs.length; i++) {
            const index = tabs.length - i;
            tabs[i].style.zIndex = index;
        }

        tabs.forEach((tab) => tab.classList.remove('active'));
        tabContents.forEach((content) => {
            content.style.opacity = 0;
            content.style.display = 'none';
        });

        const activeTab = document.querySelector(`.product-content__tab[data-tab="${tabIndex}"]`);
        const activeTabContent = document.querySelector(`.product-content__tab-content[data-tab="${tabIndex}"]`);

        if (activeTab && activeTabContent) {
            activeTab.classList.add('active');
            activeTabContent.style.display = '-webkit-box';

            // Задержка перед показом для применения стилей
            setTimeout(() => {
                activeTabContent.style.opacity = 1;
            }, 100);
        }
    }

    // Обработчик клика по вкладке
    function handleTabClick(event) {
        const tabIndex = event.currentTarget.getAttribute('data-tab');
        if (!event.currentTarget.classList.contains('active')) {
            showTabContent(tabIndex);
        }
    }

    // Добавление обработчика клика ко всем вкладкам
    const tabs = document.querySelectorAll('.product-content__tab');
    tabs.forEach((tab) => tab.addEventListener('click', handleTabClick));

    // Показать содержимое первой вкладки при загрузке страницы
    showTabContent(1);
};

export default productCardTabs;
