const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const close = document.querySelector('.menu__close');
const menu_link = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', () => {
    menu.classList.add ('active');
});

close.addEventListener('click', () => {
    menu.classList.remove ('active');
});

menu_link.forEach(menu_link => menu_link.addEventListener('click', () => {
    menu.classList.remove ('active');
}));



const counters = document.querySelectorAll('.skills__percentage-value');
const lines = document.querySelectorAll('.skills__percentage-filledBar');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML
});
