
    const showMore = (button, selector) => {
        const btn = document.querySelector(button)
        const deskBox = document.querySelector(selector)
        
        btn.addEventListener('click', () => {
            deskBox.classList.add('isActive')
        
        })




    }

export default showMore

