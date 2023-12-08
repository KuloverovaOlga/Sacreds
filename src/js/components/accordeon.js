const accordeon = () => {
    const accordionItemHeaders = document.querySelectorAll('.questions__accordion-item-header');

    accordionItemHeaders.forEach((accordionItemHeader) => {

const button = accordionItemHeader.querySelector('.questions__accordion-svg-wrapper');

button.addEventListener('click', () => {
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


        // accordionItemHeader.addEventListener('click', () => {
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
    });
};

export default accordeon;