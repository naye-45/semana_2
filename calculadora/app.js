function operar(a, b, operador) {
    // Validamos según el operador seleccionado
    switch (operador) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            // Validar si se intenta dividir por 0
            if (b === 0) {
                return "No se puede dividir para 0";
            }
            return a / b;
        default:
            return "Operador no válido";
    }
}
