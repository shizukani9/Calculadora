import { add, subtract, multiply, divide } from './calculator.js';

document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', () => {
        const number1 = parseFloat(document.getElementById('number1').value);
        const number2 = parseFloat(document.getElementById('number2').value);
        const operation = button.getAttribute('data-operation');

        if (isNaN(number1) || isNaN(number2)) {
            alert("Por favor, introduce números válidos.");
            return;
        }

        try {
            let result;
            switch (operation) {
                case 'add':
                    result = add(number1, number2);
                    break;
                case 'subtract':
                    result = subtract(number1, number2);
                    break;
                case 'multiply':
                    result = multiply(number1, number2);
                    break;
                case 'divide':
                    result = divide(number1, number2);
                    break;
                default:
                    alert("Operación no válida.");
                    return;
            }
            document.getElementById('result').textContent = result;
        } catch (error) {
            alert(error.message);
        }
    });
});
