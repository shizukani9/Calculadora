export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}

export function power(a, b) {
    return Math.pow(a, b);
}

export function sqrt(a) {
    if (a < 0) {
        throw new Error("No se puede calcular la raíz de un número negativo");
    }
    return Math.sqrt(a);
}