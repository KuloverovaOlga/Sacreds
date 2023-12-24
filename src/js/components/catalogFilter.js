const catalogFilter = () => {
    const bottomMenuFilter = document.querySelector('.bottom-menu__filter');
    const filterMobile = document.querySelector('.filter-mobile');
    const filterMobileOverlay = document.querySelector('.filter-mobile__overlay');
    const filterMobileContent = document.querySelector('.filter-mobile__content');

    const headerMobile = document.querySelector('.header__mob-nav');
    const footerMobile = document.querySelector('.bottom-menu');

    bottomMenuFilter.addEventListener('click', function () {
        headerMobile.classList.add('isActive');
        footerMobile.classList.add('isActive');
        filterMobile.classList.add('_show');
        filterMobileOverlay.classList.add('_show');
        setTimeout(function () {
            filterMobileContent.classList.add('_show');
        }, 200);
    });

    filterMobileOverlay.addEventListener('click', function () {
        filterMobile.classList.remove('_show');
        filterMobileOverlay.classList.remove('_show');
        filterMobileContent.classList.remove('_show');
    });
};

export default catalogFilter;
