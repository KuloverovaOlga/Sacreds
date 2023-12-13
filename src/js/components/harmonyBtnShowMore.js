const harmonyBtnShowMore = () => {
const btn = document.querySelector('.harmony-top__desk-btn')
const deskBox = document.querySelector('.harmony-top__desk-box')

btn.addEventListener('click', () => {
    deskBox.classList.add('isActive')

})

}

export default harmonyBtnShowMore