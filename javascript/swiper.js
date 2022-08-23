var swiper = new Swiper(".mySwiper", {
    slidesperview:1,
    lazy: true,
    keyboard: {
        enabled: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


let imageCards = document.querySelectorAll('.image-card')
let mySwiperElement = document.querySelector('.swiper-overlay')
let swiperCloseBtn = document.querySelector('.swiper-close-button')
let swiperWrapper = document.querySelector('.swiper-wrapper')

imageCards.forEach( (el, ind) => {
    el.addEventListener('click', (e) => {
        swiper.activeIndex = ind
        swiper.update()
        mySwiperElement.style.display = 'block'
    })
  
})

mySwiperElement.addEventListener('keydown', (e) => {
    mySwiperElement.style.display = 'none'
})
swiperCloseBtn.addEventListener('click', (e) => {
    mySwiperElement.style.display = 'none'
})
swiperWrapper.addEventListener('click', (e) => {
    mySwiperElement.style.display = 'none'
})