// 1. Convierte minutos a horas redondeando hacia arriba
function horasACobrar(minutos) {
    if (minutos <= 0) return 0;
    // Dividimos para 60 y redondeamos hacia arriba (ej: 75/60 = 1.25 -> 2 horas)
    return Math.ceil(minutos / 60);
}

// 2. Calcula la tarifa usando horasACobrar()
function calcularTarifa(minutos) {
    // Llamada a la primera función
    let horas = horasACobrar(minutos);

    if (horas === 0) {
        return "$0.00";
    }

    // $1.00 la primera hora
    let tarifa = 1.00;

    // $0.50 por cada hora adicional
    if (horas > 1) {
        tarifa += (horas - 1) * 0.50;
    }

    // Límite máximo de $5.00 por día
    if (tarifa > 5.00) {
        tarifa = 5.00;
    }

    // Retorna la tarifa formateada a 2 decimales
    return `$${tarifa.toFixed(2)}`;
}