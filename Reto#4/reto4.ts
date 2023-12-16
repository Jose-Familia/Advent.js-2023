function decode(message: string): string {
    // Inicializamos una pila vacía
    let stack = [];

    // Recorremos cada carácter del mensaje
    for (let char of message) {

        // Si el carácter es un paréntesis de cierre
        if (char === ')') {

            // Inicializamos una cadena vacía para almacenar los caracteres invertidos
            let reversed = '';

            // Mientras la pila no esté vacía y el último carácter no sea un paréntesis de apertura
            while (stack.length && stack[stack.length - 1] !== '(') {

                // Sacamos el último carácter de la pila y lo añadimos al principio de la cadena invertida
                reversed += stack.pop();
            }

            // Eliminamos el paréntesis de apertura de la pila
            stack.pop();

            // Añadimos los caracteres invertidos a la pila
            for (let c of reversed) {
                stack.push(c);
            }
        } else {
            // Si el carácter no es un paréntesis de cierre, lo añadimos a la pila
            stack.push(char);
        }
    }

    // Unimos todos los caracteres de la pila en una cadena y la devolvemos
    return stack.join('');
}