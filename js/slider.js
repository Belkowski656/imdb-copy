const sliders = [...document.querySelectorAll('.slider')];

const renderSlider = (arrows, sliderElements, sliderContainer) => {

    let translateValue = 0;

    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            slider(arrow.dataset.direction)
        })
    });

    const slider = (direction) => {
        const containerWidth = sliderContainer.offsetWidth;
        const elemWidth = sliderElements[0].offsetWidth + 10;

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
};

sliders.forEach(slider => {
    const childrens = [...slider.children];
    const arrows = [...childrens.filter(children => children.classList.value.includes('slider__arrow'))];
    const sliderElements = [...childrens.filter(children => children.classList.value.includes('slider__element'))];
    console.log(childrens, arrows, sliderElements);
    renderSlider(arrows, sliderElements, slider);
});

// const renderSlider = (arrows, sliderElements, slider) => {
//     const arrows = document.querySelectorAll('.slider__arrow');
//     const sliderElements = document.querySelectorAll('.slider__element');

//     let translateValue = 0;

//     arrows.forEach(arrow => {
//         arrow.addEventListener('click', () => {
//             slider(arrow.dataset.direction)
//         })
//     });

//     const slider = (direction) => {
//         const containerWidth = document.querySelector('.slider').offsetWidth;
//         const elemWidth = sliderElements[0].offsetWidth + 10;

//         const maxTranslateValue = (sliderElements.length) * elemWidth - containerWidth;


//         if (direction === 'right') {

//             if (maxTranslateValue <= translateValue) return;

//             translateValue += elemWidth;

//             showAndHideArrows(maxTranslateValue);
//             sliding(translateValue);
//         } else {
//             if (0 === translateValue) return;

//             translateValue -= elemWidth;

//             showAndHideArrows(maxTranslateValue);
//             sliding(translateValue);
//         }

//     }

//     const sliding = () => {
//         sliderElements.forEach(elem => {
//             elem.style.transform = `translateX(-${translateValue}px)`;
//         });
//     }

//     const showAndHideArrows = (maxTranslateValue) => {
//         if (translateValue === 0) arrows[0].style.display = 'none';
//         else arrows[0].style.display = 'block';

//         if (maxTranslateValue <= translateValue) arrows[1].style.display = 'none';
//         else arrows[1].style.display = 'block';
//     };

//     showAndHideArrows();
// };