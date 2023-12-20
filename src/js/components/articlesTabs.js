const articleTabs = () => {

const buttonsWrap = document.querySelector('.articles__filter-box')
const buttons = document.querySelectorAll('.articles__filter-btn')
const firstBlock = document.querySelector('.articles__list-first-box')
buttonsWrap.addEventListener('click', (e) => {
    let target = e.target;
    if (target.classList.contains('articles__filter-btn') &&  !target.classList.contains('articles__filter-btn--first') ) {
        buttons.forEach(item => item.classList.remove('isActive'))
        target.classList.add('isActive')
        firstBlock.style.transform = 'scale(0)'
        firstBlock.style.maxHeight = '0'
        firstBlock.style.marginBottom = '0'
        
        setTimeout(()=> {
            firstBlock.style.display = 'none'
            
        },500)

    }
    if (target.classList.contains('articles__filter-btn--first') ) {
        buttons.forEach(item => item.classList.remove('isActive'))
        target.classList.add('isActive')
        firstBlock.style.display = 'grid'
        
        setTimeout(()=> {
            firstBlock.style.transform = 'scale(1)'
            firstBlock.style.marginBottom = window.innerWidth>768?'6rem': '4.8rem'
            firstBlock.style.maxHeight = window.innerWidth>768? '146rem' :'222rem'
        },0)

    }
})

window.addEventListener('resize', () => {
    firstBlock.style.marginBottom = window.innerWidth>768?'6rem': '4.8rem'
    firstBlock.style.maxHeight = window.innerWidth>768? '146rem' :'222rem'
})
}

export default articleTabs