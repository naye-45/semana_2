# Reflexión del Proyecto

**Cuándo usar `switch`**:
Conviene emplearlo en lugar de múltiples `if / else if` cuando se evalúa una misma variable frente a valores exactos y discretos. Esto optimiza la legibilidad del código, evitando anidaciones excesivas y facilitando el mantenimiento visual de opciones fijas.

**Por qué dividir el código en funciones pequeñas**:
Es una de las mejores prácticas de programación por las siguientes razones:

- **Mayor legibilidad**: Un fragmento de código de 10 líneas con un nombre descriptivo (ej. `calcularImpuesto()`) es infinitamente más fácil de entender que un bloque gigante de 200 líneas de código mezclado.
- **Reutilización de código**: Si necesitas realizar la misma tarea en diferentes partes de tu programa, solo llamas a la función en lugar de copiar y pegar las mismas líneas. Si algo cambia, solo lo corriges en un solo lugar.
- **Facilidad para hacer pruebas**: Es mucho más sencillo probar y verificar que una función pequeña que hace una sola cosa funcione correctamente, en lugar de intentar probar un programa entero de golpe.
- **Depuración más rápida**: Cuando ocurre un error, el sistema te dirá exactamente en qué función falló. Rastrear un problema en una función de 5 líneas toma segundos; en una de 500 líneas puede tomar horas.
- **Facilidad de mantenimiento**: Permite que otros desarrolladores (o tú mismo en el futuro) modifiquen una parte específica del sistema sin temor a romper el resto del código por accidente.

**Declaración de uso de IA**:
Para el desarrollo de este proyecto se utilizó **Gemini (Google)** como asistente para guiar la maquetación de la interfaz HTML/CSS y estructurar la lógica modular de las funciones JS.