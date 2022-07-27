const active = document.querySelector('.ham-menu')
const close = document.querySelector('.link')
const menu = document.querySelector('.menu-cn')

active.addEventListener('click', () => {
    menu.style.display = 'flex';
    active.style.display = 'none';
})

close.addEventListener('click', () => {
    menu.style.display = 'none';
    active.style.display = 'block'
})


let thirdPage = document.getElementById('.thirdpage')
