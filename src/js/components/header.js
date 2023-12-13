const header = () => {
    
		const nav = document.querySelector('.header');
		const navOffsetTop = nav.offsetTop;

	
		function handleScroll() {
			if (window.scrollY > navOffsetTop) {
				nav.classList.add('fixed-nav');
			} else {
				nav.classList.remove('fixed-nav');
			}
		}
	
		window.addEventListener('scroll', handleScroll);
}

export default header