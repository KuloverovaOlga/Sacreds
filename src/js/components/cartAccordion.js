const cartAccordion = () => {
    const accordionItemHeaders = document.querySelectorAll('.cart__other-accordion-heading');

    accordionItemHeaders.forEach((accordionItemHeader) => {
        accordionItemHeader.addEventListener('click', () => {
            const isActive = accordionItemHeader.classList.contains('active');
            const accordionItemBody = accordionItemHeader.nextElementSibling;

            if (!isActive) {
                accordionItemHeader.classList.add('active');
                accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
                accordionItemBody.style.marginTop = '2.4rem';
            } else {
                accordionItemHeader.classList.remove('active');
                accordionItemBody.style.maxHeight = 0;
                accordionItemBody.style.marginTop = '0';
            }
        });
    });
};

export default cartAccordion();
