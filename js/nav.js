const searchOpen = document.querySelector('.nav__search');
const searchBox = document.querySelector('.nav__search-box');
const searchClose = document.querySelector('.nav__search-close');
const blure = document.querySelector('.blure');

searchOpen.addEventListener('click', () => {
    searchBox.classList.add('nav__search-box--active');
})

searchClose.addEventListener('click', () => {
    searchBox.classList.remove('nav__search-box--active');
})

const burger = document.querySelector('.nav__burger');
const menu = document.querySelector('.nav__menu');
const close = document.querySelector('.nav__close i');

burger.addEventListener('click', () => {
    menu.classList.add('nav__menu--active');
    blure.classList.add('blure--active');
})

close.addEventListener('click', () => {
    menu.classList.remove('nav__menu--active');
    blure.classList.remove('blure--active');
})

blure.addEventListener('click', () => {
    blure.classList.remove('blure--active');
    menu.classList.remove('nav__menu--active');
})

const expanders = document.querySelectorAll('.nav__expander');
const expandIcons = document.querySelectorAll('.nav__expand');
const lists = document.querySelectorAll('.nav__list');

expanders.forEach((expander, index) => {
    expander.addEventListener('click', () => {
        lists[index].classList.toggle('nav__list--active');
        expandIcons[index].classList.toggle('nav__expand--active');
    })
})