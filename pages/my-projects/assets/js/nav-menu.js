const burger = document.querySelector('.burger')
const sideNav = document.querySelector('.navigation ul')
const notNav = document.querySelector('.not-nav')

burger.addEventListener('click', function () {
    sideNav.style.transform = 'translateX(0)'
    sideNav.style.transition = 'transform 0.4s ease-in-out'
    notNav.style.display = 'block'
})

notNav.addEventListener('click', function () {
    sideNav.style.transform = 'translateX(-100%)'
    notNav.style.display = 'none'
})

window.addEventListener('resize', function () {
    if (this.innerWidth > 1080) {
        sideNav.style.transition = 'none'
        sideNav.style.transform = 'translateX(0)'
    }
    else sideNav.style.transform = 'translateX(-100%)'
})