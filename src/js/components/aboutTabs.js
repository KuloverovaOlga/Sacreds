// const aboutVertTabs = () => {
//     const accordionItemHeaders = document.querySelectorAll('.about-vert-accordeon__accordion-item-header');

//     accordionItemHeaders.forEach((accordionItemHeader) => {
//     accordionItemHeader.addEventListener('click', () => {
//         const currentlyActiveAccordionItemHeader = document.querySelector('.about-vert-accordeon__accordion-item-header.active');
//         if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
//             currentlyActiveAccordionItemHeader.classList.toggle('active');
//             currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
//         }
//         accordionItemHeader.classList.toggle('active');
//         const accordionItemBody = accordionItemHeader.nextElementSibling;
//         if (accordionItemHeader.classList.contains('active')) {
//             accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
//         } else {
//             accordionItemBody.style.maxHeight = 0;
//         }
//     });

// });
 
// };

// export default aboutVertTabs;



const aboutTabs = () => {
    const accordionItemHeaders = document.querySelectorAll('.about-accordeon__accordion-item-header');
    function accordionAbout () {
    accordionItemHeaders.forEach((accordionItemHeader) => {
        if(window.innerWidth < 768) {
            accordionItemHeader.classList.remove('isActive')
            accordionItemHeader.nextElementSibling.style.maxHeight = '0';
          
            accordionItemHeader.onclick = () => {
                const currentlyActiveAccordionItemHeader = document.querySelector('.about-accordeon__accordion-item-header.active');
    
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
            };
        } else {
            accordionItemHeader.classList.remove('active')
            accordionItemHeader.nextElementSibling.style.maxHeight = '';
            document.querySelector('.about-accordeon__accordion-item-header--first').classList.add('isActive')
           
            accordionItemHeader.onclick = () => {
                accordionItemHeaders.forEach(item => {
                    item.classList.remove('isActive')
                })
                accordionItemHeader.classList.add('isActive')
            }
        }
    });

}

     accordionAbout()     
   
    window.addEventListener('resize', () => {
        accordionItemHeaders.forEach((accordionItemHeader) => {
            if(window.innerWidth < 768) {
                accordionItemHeader.classList.remove('isActive')
                accordionItemHeader.nextElementSibling.style.maxHeight = '0';
              
                accordionItemHeader.onclick = () => {
                    const currentlyActiveAccordionItemHeader = document.querySelector('.about-accordeon__accordion-item-header.active');
        
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
                };
            } else {
                if( accordionItemHeader.nextElementSibling.style.maxHeight != '') {
                    document.querySelector('.about-accordeon__accordion-item-header--first').classList.add('isActive')
                    accordionItemHeader.classList.remove('active')
                    accordionItemHeader.nextElementSibling.style.maxHeight = '';
                }
            
                accordionItemHeader.onclick = () => {
                    accordionItemHeaders.forEach(item => {
                        item.classList.remove('isActive')
                    })
                    accordionItemHeader.classList.add('isActive')
                }
            }
           
        });;
    })
};

export default aboutTabs;
