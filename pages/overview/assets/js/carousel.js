const imageCarousel = document.querySelector('.image-carousel')
const imageSlide = imageCarousel.querySelector('.carousel-slide')
const carouselImages = imageSlide.querySelectorAll('.carousel-img')

const prevButton = document.querySelector('.button.prev')
const nextButton = document.querySelector('.button.next')

const imageInfo = document.querySelector('.image-info')
const imageTitle = imageInfo.querySelector('.title')
const imageDesc = imageInfo.querySelector('.description')

const title = ["WD-ParuparoSW4", "WD-ParuparoSW2", "WD-ParuparoSW3", "WD-ParuparoHO2", "WD-ParuparoSW4", "WD-ParuparoSW2",]
const desc = ["Unique Feature Designs", "Paruparo's first ever website", "Header & Footer Designs", "Hero & Card Designs", "Unique Feature Designs", "Paruparo's first ever website"]

let count = 1
const size = carouselImages[0].clientWidth

imageSlide.style.transform = 'translateX(' + (-size * count) + 'px)'

nextButton.addEventListener('click', function () {
    if (count >= carouselImages.length - 1) return
    imageSlide.style.transition = 'transform 0.4s ease-in-out'
    nextButton.style.transform = 'translateX(6px)'
    imageTitle.style.opacity = '0'
    imageDesc.style.opacity = '0'
    count++
    imageSlide.style.transform = 'translateX(' + (-size * count) + 'px)'
    imageTitle.innerText = title[count]
    imageDesc.innerText = desc[count]
})

prevButton.addEventListener('click', function () {
    if (count <= 0) return
    imageSlide.style.transition = 'transform 0.4s ease-in-out'
    prevButton.style.transform = 'translateX(-6px)'
    imageTitle.style.opacity = '0'
    imageDesc.style.opacity = '0'
    count--
    imageSlide.style.transform = 'translateX(' + (-size * count) + 'px)'
    imageTitle.innerText = title[count]
    imageDesc.innerText = desc[count]
})

imageSlide.addEventListener('transitionend', function () {
    nextButton.style.transform = 'translateX(-6px)'
    prevButton.style.transform = 'translateX(6px)'
    imageTitle.style.opacity = '1'
    imageDesc.style.opacity = '1'
    if (carouselImages[count].className === 'carousel-img last') {
        imageSlide.style.transition = 'none'
        count = carouselImages.length - 2
        imageSlide.style.transform = 'translateX(' + (-size * count) + 'px)'
    }
    if (carouselImages[count].className === 'carousel-img first') {
        imageSlide.style.transition = 'none'
        count = 1
        imageSlide.style.transform = 'translateX(' + (-size * count) + 'px)'
    }
})