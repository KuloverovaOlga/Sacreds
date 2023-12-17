import IMask from 'imask';

const form = (selector) => {

    const form = document.querySelector(selector);
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = form.querySelector('.input--name').value;

        function validateName(name) {form
            return name.trim() !== '';
        }

        if (!validateName(name)) {
            alert('Введите корректное имя.');
            return;
        } else {
            form.submit() 
        }
    });


    const tel = form.querySelector('.input--tel')

    IMask(tel, {
        mask: '+{7}(000)000-00-00',
    });




}

export default form