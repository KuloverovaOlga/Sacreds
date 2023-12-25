const makingOrderTabs = () => {
    // Get the radio buttons and content sections
    const deliveryOptions = document.querySelectorAll('.making-order__option-input');

    // Function to handle the tab switching
    function handleTabSwitch(event) {
        const target = event.target.dataset.target;
        const content = document.querySelector(`[data-content="${target}"]`);

        if (content) {
            document.querySelectorAll('[data-content]').forEach((el) => {
                el.style.display = 'none';
                console.log(1);
            });
            content.style.display = 'block';
            console.log(2);
        }
    }

    // Add event listeners to the radio buttons
    deliveryOptions.forEach((option) => {
        option.addEventListener('change', handleTabSwitch);
    });

    // Initially hide all content except the first one on page load
    document.querySelector('[data-content="first"]').style.display = 'block';
};

export default makingOrderTabs;
