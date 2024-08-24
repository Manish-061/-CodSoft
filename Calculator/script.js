document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');

    function appendToDisplay(value) {
        display.value += value;
    }

    function clearDisplay() {
        display.value = '';
    }

    function calculate() {
        try {
            const result = eval(display.value);
            display.value = result;
        } catch (error) {
            display.value = 'Error';
        }
    }

    function handleButtonClick(e) {
        const button = e.target;
        const value = button.textContent;

        if (button.classList.contains('clear')) {
            clearDisplay();
        } else if (button.classList.contains('equals')) {
            calculate();
        } else {
            appendToDisplay(value);
        }
    }

    function handleKeyPress(e) {
        const key = e.key;
        const button = document.querySelector(`button[data-key="${key}"]`);

        if (button) {
            button.click();
            button.focus();
            setTimeout(() => button.blur(), 100);
        }
    }

    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });

    document.addEventListener('keydown', handleKeyPress);
});