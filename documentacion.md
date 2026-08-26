Documentación de código
1. Diferencias entre Back-end y Front-end
Front-end
El Front-end es la parte de una página o aplicación que el usuario puede ver y utilizar. Incluye los botones, menús, imágenes, textos y diseños.

Algunos lenguajes utilizados son:

HTML
CSS
JavaScript
Back-end
El Back-end es la parte que funciona detrás de la página y que el usuario normalmente no puede ver. Se encarga de procesar datos, conectar con bases de datos, iniciar sesión y realizar operaciones del sistema.

Algunos lenguajes utilizados son:

JavaScript
Python
Java
PHP
Diferencia principal: el Front-end se encarga de lo que ve e interactúa el usuario, mientras que el Back-end se encarga de la lógica y los datos que funcionan detrás.

2. ¿Cómo se documenta código en JavaScript?
En JavaScript se puede documentar el código utilizando comentarios. Los comentarios sirven para explicar qué hace una parte del programa y no afectan la ejecución del código.

Comentario de una línea
// Esta variable guarda el nombre del usuario
let nombre = "Yhonathan";
Comentario de varias líneas
/*
Esta función recibe dos números
y devuelve el resultado de sumarlos.
*/
function sumar(a, b) {
    return a + b;
}
También se puede utilizar JSDoc, que sirve para explicar funciones, parámetros y valores que devuelve una función.

/**
 * Suma dos números.
 * @param {number} a Primer número.
 * @param {number} b Segundo número.
 * @returns {number} Resultado de la suma.
 */
function sumar(a, b) {
    return a + b;
}
3. ¿Cómo se documenta código en React?
React también utiliza JavaScript, por lo que se pueden usar los mismos comentarios y JSDoc. Además, es importante explicar los componentes, sus propiedades (props) y los estados (state) cuando el código lo necesite.

Ejemplo:

// Componente que muestra un saludo
function Saludo({ nombre }) {
    return <h1>Hola {nombre}</h1>;
}
También se puede documentar con JSDoc:

/**
 * Componente que muestra un saludo.
 * @param {object} props Propiedades del componente.
 * @param {string} props.nombre Nombre que se mostrará.
 */
function Saludo({ nombre }) {
    return <h1>Hola {nombre}</h1>;
}
