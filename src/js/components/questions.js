
import paginationBlock from "./paginationBlock";
import mixitup from 'mixitup'; // loaded from node_modules
import  mixitupPagination  from "../utils/mixitup-pagination";




const questions = () => {
    const accordionItemHeaders = document.querySelectorAll('.questions__accordion-item-header');

    accordionItemHeaders.forEach((accordionItemHeader) => {
    accordionItemHeader.addEventListener('click', () => {
        const currentlyActiveAccordionItemHeader = document.querySelector('.questions__accordion-item-header.active');
        if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
            currentlyActiveAccordionItemHeader.classList.toggle('active');
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }
        accordionItemHeader.classList.toggle('active');
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains('active')) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
        } else {
            accordionItemBody.style.maxHeight = 0;
        }
    });

});





        // const button = accordionItemHeader.querySelector('.questions__accordion-svg-wrapper');

// button.addEventListener('click', () => {
//     const currentlyActiveAccordionItemHeader = document.querySelector('.questions__accordion-item-header.active');
//     if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
//         currentlyActiveAccordionItemHeader.classList.toggle('active');
//         currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
//     }
//     accordionItemHeader.classList.toggle('active');
//     const accordionItemBody = accordionItemHeader.nextElementSibling;
//     if (accordionItemHeader.classList.contains('active')) {
//         accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
//     } else {
//         accordionItemBody.style.maxHeight = 0;
//     }
// });



// const btns = document.querySelectorAll('.articles__filter-btn')
// btns.forEach(item => {
//     item.addEventListener('click', () => {
     
//         btns.forEach(btn => {
//             btn.classList.remove('isActive')})
//         })
//         item.classList.add('isActive')
//         if(item.dataset.filter != 'all') {
//             // document.querySelectorAll(item.dataset.filter).forEach(item => item.style.display = 'block')
//             // mixer = mixitup('.articles__list');
//             // mixer.changeLayout();
//             // paginationBlock(item.dataset.filter, 12, '.articles__pagination-wpapper');
//             console.log(item.dataset.filter)
//         } else {
//             // paginationBlock('.articles__list-item', 12, '.articles__pagination-wpapper');
//         }
   
// })

// paginationBlock('.articles__list-item', 12, '.articles__pagination-wpapper');

// $('.articles__filter-btn').on('click', function () {
//     $('.articles__filter-btn').removeClass('articles__filter-btn--active')
//     $(this).addClass('articles__filter-btn--active')
//     console.log($(this))
//     if ($(this).dataset.filter != 'all') {
//         // paginationBlock($(this).dataset.filter, 1, '.articles__pagination-wpapper');
//         console.log($(this))
//     } else {
//         paginationBlock('.articles__list-item', 12, '.articles__pagination-wpapper');
//     }

//   })




















var $ = require('jquery');


mixitup.use(mixitupPagination);


var mixer = mixitup('.articles__list', {
    // controls: {
    //     enable: true,
    // },
    animation: {
        duration: 500, // Отключение анимации
    },
    pagination: {
        limit: 12, // impose a limit of 8 targets per page
        hidePageStatsIfSinglePage: true,
        hidePageListIfSinglePage: true,
        maintainActivePage: false,
    
        // pagerClass: 'content__pagination-btn', // Класс для элементов пагинации
        // prevButtonClass: 'content__pagination-btn-prev', // Класс для кнопки "Назад"
        // nextButtonClass: 'content__pagination-btn-next', // Класс для кнопки "Вперед"
        // activeClass: 'active', // Класс активной страницы
    },
    templates: {
        pagerPrev: `<button type="button" class="articles__pagination-btn-prev content__pagination-btn-prev" data-page="prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24" fill="none" stroke="none">
        <path
            d="M23.8136 13.0011L24.8136 13.0011L24.8136 11.0011L23.8136 11.0011L23.8136 13.0011ZM2.60043 11.0011C2.04815 11.0011 1.60043 11.4488 1.60043 12.0011C1.60043 12.5534 2.04814 13.0011 2.60043 13.0011L2.60043 11.0011ZM23.8136 11.0011H2.60043L2.60043 13.0011H23.8136L23.8136 11.0011Z"
            stroke="none"
        />
        <path
            d="M10.3789 21.1934L1.18652 12.001L10.3789 2.80859"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg></button>`,

pager: '<button type="button" class="${classNames} content__pagination-btn" data-page="${pageNumber}">${pageNumber}</button>',

pagerNext: `<button type="button" class="articles__pagination-btn-next content__pagination-btn-next" data-page="next">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24" fill="none" stroke="none">
    <path
        d="M1.18832 10.9989L0.188321 10.9989L0.18832 12.9989L1.18832 12.9989L1.18832 10.9989ZM22.4015 12.9989C22.9538 12.9989 23.4015 12.5512 23.4015 11.9989C23.4015 11.4466 22.9538 10.9989 22.4015 10.9989L22.4015 12.9989ZM1.18832 12.9989H22.4015L22.4015 10.9989H1.18832L1.18832 12.9989Z"
        stroke="none"
    />
    <path
        d="M14.623 2.80663L23.8154 11.999L14.623 21.1914"
        fill="none"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
</svg>

</button>`,
    },
});


// const btns = document.querySelectorAll('.articles__filter-btn');

// // Функция для обновления пагинации
// function updatePagination(filter) {
//     const items = document.querySelectorAll(filter);
//     const paginationWrapper = document.querySelector('.articles__pagination-wpapper');
    
//     if (items.length > 12) {
//         document.querySelectorAll('.content__pagination-btn').forEach(item => item.remove())
//         paginationBlock(filter, 12, '.articles__pagination-wpapper');
//         paginationWrapper.style.display = 'flex';
//     } else {
//         paginationWrapper.style.display = 'none';
//     }
// }

// btns.forEach(item => {
//     item.addEventListener('click', () => {
//         btns.forEach(btn => {
//             btn.classList.remove('isActive');
//         });

//         item.classList.add('isActive');

//         if (item.dataset.filter!= 'all') {
//             // document.querySelectorAll(item.dataset.filter).forEach(item => {
//             //     item.style.display = 'block'
//             //     item.style.opacity = '0'
//             // });
//             // mixer = mixitup('.articles__list');
//             // mixer.changeLayout();
//             // updatePagination(item.dataset.filter);
//         } else {
//             // document.querySelector('.articles__list').style.height = ''
//             // document.querySelectorAll('.articles__list-item').forEach(item => {
//             //     item.style.display = ''
//             // });
//             // updatePagination('.articles__list-item')
//         }
//     });
// });
// // updatePagination('.articles__list-item')
// // paginationBlock('.articles__list-item', 12, '.articles__pagination-wpapper');

 






















};





export default questions;






