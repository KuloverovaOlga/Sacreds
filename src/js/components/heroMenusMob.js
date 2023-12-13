const heroMenuMob = () => {
    let lastScrollPosition = 0;

const menus = document.querySelectorAll('.scrollingMeny');


    window.addEventListener('scroll', () => {
      const currentScrollPosition = window.scrollY;
    
      if (currentScrollPosition >= lastScrollPosition  ) {
        // Scrolling down

        menus.forEach(item => {
          item.classList.add('isActive');
        })

       
      } else {
        // Scrolling up

        menus.forEach(item => {
          item.classList.remove('isActive');
        })

      }
    
      lastScrollPosition = currentScrollPosition;
    });
}

 export default heroMenuMob

