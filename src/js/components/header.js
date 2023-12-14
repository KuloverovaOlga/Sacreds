// const header = () => {
// 	const nav = document.querySelector('.header');
// 	const navOffsetTop = nav.offsetTop;
  
// 	function handleScroll() {
// 	  if (window.innerWidth > 768) {
// 		if (window.scrollY > navOffsetTop) {
// 		  nav.classList.add('fixed-nav');
// 		} else {
// 		  nav.classList.remove('fixed-nav');
// 		}
// 	  }
// 	}
  
// 	window.addEventListener('scroll', handleScroll);
// 	window.addEventListener('resize', handleScroll);
//   };
//   export default header;


  const header = () => {
	const nav = document.querySelector('.header');
	const navOffsetTop = nav.offsetTop;
  
	function handleScroll() {
	  if (window.innerWidth > 768) {
		if (window.scrollY > navOffsetTop) {
		  nav.classList.add('fixed-nav');
		} else {
		  nav.classList.remove('fixed-nav');
		}
	  }
	}
  
	function handleResize() {
	  // Выключаем обработчик скролла, если ширина экрана меньше 768
	  if (window.innerWidth <= 768) {
		window.removeEventListener('scroll', handleScroll);
	  } else {
		window.addEventListener('scroll', handleScroll);
	  }
	}
  
	// Добавляем обработчик события resize
	window.addEventListener('resize', handleResize);
  
	// Инициализируем обработчик скролла при загрузке страницы
	handleResize();
  };
  
  export default header;