const cartAccordion = () => {
    const accordionItemHeaders = document.querySelectorAll('.cart__other-accordion-heading');

    accordionItemHeaders.forEach((accordionItemHeader) => {
        accordionItemHeader.addEventListener('click', () => {
            const currentlyActiveAccordionItemHeader = document.querySelector('.cart__other-accordion-heading.active');
            if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
                currentlyActiveAccordionItemHeader.classList.toggle('active');
                currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
            }
            accordionItemHeader.classList.toggle('active');
            const accordionItemBody = accordionItemHeader.nextElementSibling;
            if (accordionItemHeader.classList.contains('active')) {
                accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
                accordionItemBody.style.marginTop = '2.4rem';
            } else {
                accordionItemBody.style.maxHeight = 0;
                accordionItemBody.style.marginTop = '0';
            }
        });
    });
};

export default cartAccordion();
