const textSettingsToggle = document.querySelector(`#text-settings-widget > button`);
const textSettingsWidget = document.querySelector(`#text-settings-widget > menu`);

textSettingsToggle.addEventListener(`click`, () =>
{
    if (textSettingsToggle.getAttribute(`aria-pressed`) === `false`) {
        textSettingsToggle.setAttribute(`aria-pressed`, `true`);
        
        textSettingsWidget.style.display = `grid`;

        textSettingsToggle.style.background = `black`;
    } else {
        textSettingsToggle.setAttribute(`aria-pressed`, `false`);

        textSettingsWidget.style.display = `none`;

        textSettingsToggle.style.background = `rgb(75, 76, 83)`;
    }
}
);

const textPositionSlider = document.getElementById(`text-position-slider`);
const content = document.getElementById(`content`);

textPositionSlider.addEventListener(`input`, e =>
{
    const value = e.target.value;

    const max = 100;
    const t = (value - 1) / (max - 1);

    const leftGrow = t;
    const rightGrow = 1 - t;

    content.style.setProperty(`--left-grow`, leftGrow);
    content.style.setProperty(`--right-grow`, rightGrow);
}
);

textPositionSlider.dispatchEvent(new Event(`input`));

const textWidthSlider = document.getElementById(`text-width-slider`);
const main = document.querySelector(`main`);

textWidthSlider.addEventListener(`input`, e =>
{
    main.style.width = e.target.value + `%`;
}
);

const fontSizeIncrease = document.getElementById(`font-size-increase`);
const fontSizeDecrease = document.getElementById(`font-size-decrease`);

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