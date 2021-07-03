const arrows = document.querySelectorAll('.slider__arrow');
const sliderElements = document.querySelectorAll('.slider__element');

let translateValue = 0;

arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
        slider(arrow.dataset.direction)
    })
});

const slider = (direction) => {
    const containerWidth = document.querySelector('.slider').offsetWidth;
    const elemWidth = sliderElements[0].offsetWidth;

    const maxTranslateValue = (sliderElements.length) * elemWidth - containerWidth;


    if (direction === 'right') {

        if (maxTranslateValue <= translateValue) return;

        translateValue += elemWidth;

        showAndHideArrows(maxTranslateValue);
        sliding(translateValue);
    } else {
        if (0 === translateValue) return;

        translateValue -= elemWidth;

        showAndHideArrows(maxTranslateValue);
        sliding(translateValue);
    }

}

const sliding = () => {
    sliderElements.forEach(elem => {
        elem.style.transform = `translateX(-${translateValue}px)`;
    });
}

const showAndHideArrows = (maxTranslateValue) => {
    if (translateValue === 0) arrows[0].style.display = 'none';
    else arrows[0].style.display = 'block';

    if (maxTranslateValue <= translateValue) arrows[1].style.display = 'none';
    else arrows[1].style.display = 'block';
};

showAndHideArrows();