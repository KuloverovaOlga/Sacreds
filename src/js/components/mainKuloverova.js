import ribbonSwiper from './swiper/ribbonSwiper';
import collectionsSwiper from './swiper/collectionsSwiper';
import harmonySwiper from './swiper/harmonySwiper';
import reviewsSwiper from './swiper/reviewsSwiper';
import rangeSwiper from './swiper/rangeSwiper';
import heroSwiper from './swiper/heroSwiper';
import blogSwipper from './swiper/blogSwipper';
import reviewsPageSwiper from './swiper/reviewsPageSwiper';
import deliverySwiper from './swiper/deliverySwiper';
import similarProductsSwiper from './swiper/similarProductsSwiper';
import articleProductsSwiper from './swiper/articleProductsSwiper';
import productCardHeroSwiper from './swiper/productCardHeroSwiper';
import articleBlogSwipper from './swiper/articleBlogSwipper';
import articleInfoSwipper from './swiper/articleInfoSwipper';

import header from './header';
import form from './form';
import questions from './questions';
import paginationBlock from './paginationBlock';
import productCardMin from './productCardMin';
import heroMenuMob from './heroMenusMob';
import showMore from './showMore';
import burgerMenu from './burger';
import productCardHero from './productCardHero';
import productCardTabs from './productCardTabs';
import map from './map';
import popup from './popup';
import aboutTabs from './aboutTabs';
import animNumbers from './animNumbers';
import headerModal from './headerModal';
import articleTabs from './articlesTabs';

document.addEventListener('DOMContentLoaded', () => {
    try {
        ribbonSwiper();
    } catch {}
    try {
        collectionsSwiper();
    } catch {}
    try {
        harmonySwiper();
    } catch {}
    try {
        reviewsSwiper();
    } catch {}
    try {
        rangeSwiper();
    } catch {}
    try {
        heroSwiper();
    } catch {}
    try {
        blogSwipper();
    } catch {}
    try {
        similarProductsSwiper();
    } catch {}
    try {
        articleProductsSwiper();
    } catch {}
    try {
        deliverySwiper();
    } catch {}
    try {
        productCardHeroSwiper();
    } catch {}
    try {
        articleBlogSwipper();
    } catch {}
    try {
        articleInfoSwipper();
    } catch {}

    try {
        form();
    } catch {}

    try {
        questions();
    } catch {}
    try {
        header();
    } catch {}
    try {
        paginationBlock('.review-wrapper__item', 6, '.review-content__pagination-wpapper');
    } catch {}

    try {
        reviewsPageSwiper();
    } catch {}
    try {
        productCardMin();
    } catch {}
    try {
        heroMenuMob();
    } catch {}
    try {
        showMore('.harmony-top__desk-btn', '.harmony-top__desk-box');
    } catch {}
    try {
        showMore('.about-content__desk-btn', '.about-content__desk-text');
    } catch {}
    try {
        burgerMenu();
    } catch {}
    try {
        productCardHero();
    } catch {}
    try {
        productCardTabs();
    } catch {}
    try {
        map();
    } catch {}
    try {
        popup();
    } catch {}

    try {
        animNumbers();
    } catch {}
    try {
        aboutTabs();
    } catch {}
    try {
        headerModal();
    } catch {}
    try {
        articleTabs();
    } catch {}

    // document.querySelectorAll('[data-fancybox]').forEach(item => {

    //   item.addEventListener('click', () => {
    //       const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;
    //       let scrollWith = getScrollbarWidth();
    //       document.querySelector('header').style.paddingRight = `${scrollWith}px`
    //   })

    // })

    // document.querySelector('.fancybox__container.is-idle').addEventListener('click', () => {
    //   document.querySelector('header').style.paddingRight = ``
    //   console.log('sefefzes')
    // })



    const body = document.querySelector('body');
    const header = document.querySelector('.header'); // Замените селектор на ваш
    const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;
      let scrollWith = getScrollbarWidth();
    const addPaddingToHeader = () => {

        header.style.paddingRight = `${scrollWith}px`;
    };
    
    const removePaddingFromHeader = () => {
        header.style.paddingRight = '';
    };
    
    let mutationCallback = (mutationsList, observer) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const isScrollbarHidden = body.classList.contains('hide-scrollbar') && window.innerWidth > 768;
                if (isScrollbarHidden) {
                    addPaddingToHeader();
                } else {
                    removePaddingFromHeader();
                }
            }
        }
    };
    
    const observer = new MutationObserver(mutationCallback);
    const observerConfig = { attributes: true, attributeFilter: ['class'] };
    observer.observe(body, observerConfig);
    

});

