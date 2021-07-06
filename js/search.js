const searchOpen = document.querySelector('.nav__search');
const searchBox = document.querySelector('.nav__search-box');
const searchClose = document.querySelector('.nav__search-close');
const input = document.querySelector('.nav__input');
const result = document.querySelector('.nav__result-box');
const searchWrapper = document.querySelector('.nav__search-wrapper');

searchOpen.addEventListener('click', () => {
    searchBox.classList.add('nav__search-box--active');
})

searchClose.addEventListener('click', () => {
    searchBox.classList.remove('nav__search-box--active');
    result.classList.remove('nav__result-box--active');
    searchWrapper.classList.remove('nav__search-wrapper--active');
    input.value = '';
})


input.addEventListener('input', (e) => {
    result.classList.add('nav__result-box--active');
    searchWrapper.classList.add('nav__search-wrapper--active');

    if (e.target.value === '') {
        result.classList.remove('nav__result-box--active');
        searchWrapper.classList.remove('nav__search-wrapper--active');
    }
});