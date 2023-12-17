const productCardTabs = () => {
    function showTabContent(tabIndex) {
        const tabs = document.querySelectorAll('.product-content__tab');
        const tabContents = document.querySelectorAll('.product-content__tab-content-inner');

        for (let i = 0; i < tabs.length; i++) {
            const index = tabs.length - i;
            tabs[i].style.zIndex = index;
        }

        tabs.forEach((tab) => tab.classList.remove('active'));
        tabContents.forEach((content) => {
            content.classList.remove('active');
        });

        const activeTab = document.querySelector(`.product-content__tab[data-tab="${tabIndex}"]`);
        const activeTabContent = document.querySelector(`.product-content__tab-content-inner[data-tab="${tabIndex}"]`);
        const activeContent = activeTabContent.querySelector(`.product-content__tab-content`);
        const btn = activeTabContent.querySelector(`.product-content__tab-content-button`);

        if (activeTab && activeTabContent) {
            activeTab.classList.add('active');
            activeTabContent.classList.add('active');

            // // Задержка перед показом для применения стилей
            // setTimeout(() => {
            //     activeTabContent.style.opacity = 1;
            // }, 100);
        }


          const isOverflowed = activeContent.scrollHeight > activeContent.clientHeight;

          if (isOverflowed) {
            btn.style.opacity = 1
            btn.style.visibility = 'visible'
          } else {
            btn.style.opacity = 0
            btn.style.visibility = 'hidden'
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




    const productContentWrapper = document.querySelectorAll(
        ".product-content__tab-content-inner"
      );
    
      productContentWrapper.forEach(item => {
        item.addEventListener("click", (e) => {
            let target = e.target;
        
            if (target.classList.contains("product-content__tab-content-button")) {
            //   let parent = target.parentElement.parentElement;
              let content = target.parentElement.querySelector('.product-content__tab-content');
            //   parent.classList.toggle("isActive");
    
              if ( item.classList.contains("isActive")){
                content.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                setTimeout(()=> {item.classList.remove("isActive")},500)
              ;
              } else {
                item.classList.add("isActive");
              }
    
            }
          });
      })

      









};

export default productCardTabs;
