const modalRange = () => {
    const container = document.querySelector('.popup__body-range-slider');
    const slider = container.querySelector('.popup__body-slider');
    const thumb = container.querySelector('.popup__body-slider-thumb');
    const tooltip = container.querySelector('.popup__body-tooltip');
    const progress = container.querySelector('.popup__body-progress');
    const textMin = container.querySelector('.popup__body-slider-text-min');
    const textMax = container.querySelector('.popup__body-slider-text-max');

    function customSwiper() {
        const maxVal = slider.getAttribute('max');
        const val = `${(slider.value / maxVal) * 98}%`;
        tooltip.textContent = slider.value;
        progress.style.width = val;
        thumb.style.left = val;

        if (slider.value >= maxVal - 15) {
            tooltip.style.left = 'auto';
            tooltip.style.right = '0';
            tooltip.style.transform = 'translate(0%, 100%)';
            textMax.style.opacity = '0';
        } else if (slider.value <= 15) {
            textMin.style.opacity = '0';

        } else {
            tooltip.style.left = '50%';
            tooltip.style.right = 'auto';
            tooltip.style.transform = 'translate(-50%, 100%)';
            textMax.style.opacity = '1';
            textMin.style.opacity = '1';
        }
    }
    customSwiper();
    slider.addEventListener('input', customSwiper);
};

export default modalRange;
