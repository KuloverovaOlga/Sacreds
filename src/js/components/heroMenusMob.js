const heroMenuMob = () => {
  let lastScrollPosition = 0;
  const menus = document.querySelectorAll('.scrollingMeny');

  const updateMenuVisibility = () => {
      const currentScrollPosition = window.scrollY;

      if (window.innerWidth <= 768) {
          if (currentScrollPosition > lastScrollPosition) {
              // Scrolling down
              menus.forEach(item => {
                  item.classList.add('isActive');
              });
          } else {
              // Scrolling up
              menus.forEach(item => {
                  item.classList.remove('isActive');
              });
          }
      } else {
          // Если ширина экрана больше 768, удаляем класс 'isActive'
          menus.forEach(item => {
              item.classList.remove('isActive');
          });
      }

      lastScrollPosition = currentScrollPosition;
  };

  window.addEventListener('scroll', updateMenuVisibility);
  window.addEventListener('resize', updateMenuVisibility);

  // Вызываем функцию обновления видимости меню при загрузке страницы
  updateMenuVisibility();
};

export default heroMenuMob;




