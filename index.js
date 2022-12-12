
setTimeout(() => {
    const main = document.querySelector('.main')
    main.style.opacity = 1
    main.style.transition = '1s ease'
}, 500)

setTimeout(() => {
const container = document.querySelector('.container')
container.style.opacity = 1
container.style.filter = 'blur(0px)'
}, 1000)
