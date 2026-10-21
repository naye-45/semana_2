function generarTabla(numero, hasta) {
    // Validar si el límite supera el máximo permitido (máximo 20)
    if (hasta > 20) {
        return "<p class='error'>El límite máximo permitido es 20.</p>";
    }

    if (hasta < 1) {
        return "<p class='error'>El límite debe ser al menos 1.</p>";
    }

    // Construimos el encabezado de la tabla en HTML
    let htmlTabla = `
        <table class="tabla-multiplicar">
            <thead>
                <tr>
                    <th>Operación</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody>
    `;

    // Bucle for desde 1 hasta el límite ingresado por el usuario
    for (let i = 1; i <= hasta; i++) {
        let resultado = numero * i;
        htmlTabla += `
            <tr>
                <td>${numero} × ${i}</td>
                <td>${resultado}</td>
            </tr>
        `;
    }

    // Cerramos la etiqueta de la tabla
    htmlTabla += `
            </tbody>
        </table>
    `;

    // Retornamos el string HTML generado
    return htmlTabla;
}