const headerModal = () => {
    const triger = document.querySelector('.header__btn-modal-click');
    const modal = document.querySelector('.header__btn-modal');
    const modalInner = document.querySelector('.header__btn-modal-inner');
    const modalPrev = document.querySelector('.header__btn-modal-prev');

    triger.addEventListener('click', () => {
        modal.classList.toggle('active');
    });

    modal.addEventListener('click', (e) => {
        if ( e.target !== modalInner && e.target !== modalPrev) {
            modal.classList.remove('active');
        }
    });

    if (window.innerWidth < 768) {
        triger.dataset.popup="#popup__entrys"
        modal.style.display = 'none';
        modal.classList.remove('active');
    } 
    else {
        triger.dataset.popup=""
        modal.style.display = 'block';
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth < 768) {
            triger.dataset.popup="#popup__entrys"
            modal.style.display = 'none';
        } 
        else {
            triger.dataset.popup=""
            modal.style.display = 'block';
        }
    })
};
export default headerModal;