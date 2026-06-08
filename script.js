const textSettings = document.getElementById(`text-settings`);
const textPositionSlider = document.getElementById(`text-position-slider`);
const textSettingsSliders = document.querySelectorAll(`.text-settings-slider`);
const textWidthSlider = document.getElementById(`text-width-slider`);
const changeFontSize = document.getElementById(`change-font-size`);
const fontSizeIncrease = document.getElementById(`font-size-increase`);
const fontSizeDecrease = document.getElementById(`font-size-decrease`);
const content = document.getElementById(`content`);
const main = document.querySelector(`main`);

let textSettingsExpanded = false;
textSettings.addEventListener(`click`, () =>
    {
        if (!textSettingsExpanded) {
            textSettingsExpanded = true;

            textSettings.style.background = `lightgray`;
            
            textSettingsSliders[0].style.display = `none`;
            textSettingsSliders[1].style.display = `none`;
            changeFontSize.style.display = `none`;
        } else {
            textSettings.style.background = `darkgrey`;
            
            textSettingsSliders[0].style.display = `flex`;
            textSettingsSliders[1].style.display = `flex`;
            changeFontSize.style.display = `flex`;

            textSettingsExpanded = false;
        }
    }
);

textSettings.dispatchEvent(new Event(`click`));

textPositionSlider.addEventListener(`input`, e =>
    {
        const value = Number(e.target.value);

        const max = 100;
        const t = (value - 1) / (max - 1);

        const leftGrow = t;
        const rightGrow = 1 - t;

        content.style.setProperty(`--left-grow`, leftGrow);
        content.style.setProperty(`--right-grow`, rightGrow);
    }
);

textPositionSlider.dispatchEvent(new Event(`input`));

textWidthSlider.addEventListener(`input`, e =>
    {
        main.style.width = e.target.value + `%`;
    }
);

const startingFontSize = parseFloat(window.getComputedStyle(main).fontSize);
let currentFontSize;

fontSizeIncrease.addEventListener(`click`, () =>
    {
        currentFontSize = parseFloat(window.getComputedStyle(main).fontSize);
        if (currentFontSize >= (startingFontSize * 4)) {
            return;
        }
        main.style.fontSize = `${currentFontSize + 4}px`;
    }
);

fontSizeDecrease.addEventListener(`click`, () =>
    {
        currentFontSize = parseFloat(window.getComputedStyle(main).fontSize);
        if (currentFontSize <= (startingFontSize * 0.25)) {
            return;
        }
        main.style.fontSize = `${currentFontSize - 4}px`;
    }
);