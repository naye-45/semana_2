function clasificarNota(nota) {
    // Validar si está fuera del rango 0 - 10
    if (nota < 0 || nota > 10) {
        return "Nota no válida";
    } 
    // 9 a 10
    else if (nota >= 9) {
        return "Excelente";
    } 
    // 7 a 8.99
    else if (nota >= 7) {
        return "Aprobado";
    } 
    // 5 a 6.99
    else if (nota >= 5) {
        return "En recuperación";
    } 
    // 0 a 4.99
    else {
        return "Reprobado";
    }
  
}
