1. HTML
Etiquetas de estructura
<html>: documento HTML.
<head>: configuración y metadatos.
<title>: título de la pestaña.
<body>: contenido visible.
<header>: encabezado.
<nav>: navegación.
<main>: contenido principal.
<section>: sección.
<footer>: pie de página.
Para agregar código
<link rel="stylesheet" href="style.css">
<script src="script.js"></script>
5 etiquetas de texto
<h1>: título principal.
<h2>: subtítulo.
<p>: párrafo.
<strong>: texto importante/negrita.
<em>: énfasis/cursiva.
2. JavaScript
Variables

Guardan datos que podemos utilizar.

let nombre = "Ana";
let edad = 20;
let: puede cambiar.
const: no se puede reasignar.
var: forma antigua de declarar variables.
Tipos de datos
String: "Hola"
Number: 20
Boolean: true / false
Array: [1, 2, 3]
Object: {nombre: "Ana"}
null y undefined: ausencia de valor.
Variables globales

Son variables declaradas fuera de funciones y pueden ser accesibles desde diferentes partes del programa. Se recomienda no abusar de ellas.

Estructuras de flujo

Permiten controlar qué código se ejecuta.

if (edad >= 18) {
    console.log("Mayor");
} else {
    console.log("Menor");
}

También existen:

switch: varias opciones.
for: repite una cantidad determinada.
while: repite mientras una condición sea verdadera.
3. CSS

Los selectores indican qué elementos HTML queremos modificar.

p {
    color: blue;
}
Principales selectores
p {}          /* etiqueta */
.clase {}     /* clase */
#titulo {}    /* ID */
* {}          /* todos */
div p {}      /* p dentro de div */

Después del selector se colocan las propiedades:

.boton {
    color: white;
    background-color: blue;
}

El selector elige el elemento y las propiedades modifican su apariencia.

4. React
Componentes

Un componente es como una pieza reutilizable de una página.

HTML:

<button>Comprar</button>

React:

function Boton() {
    return <button>Comprar</button>;
}

Y se puede reutilizar:

<Boton />
Props

Son datos que un componente recibe de otro:

function Usuario({ nombre }) {
    return <h2>Hola {nombre}</h2>;
}


<Usuario nombre="Ana" />

Props = información que recibe el componente.

useState

Sirve para guardar datos que pueden cambiar:

const [contador, setContador] = useState(0);
contador: valor actual.
setContador: cambia el valor.
0: valor inicial.
setContador(contador + 1);

Cuando cambia el estado, React actualiza la interfaz.

useEffect

Sirve para ejecutar acciones relacionadas con elementos externos al renderizado, como APIs, temporizadores o eventos.

useEffect(() => {
    console.log("Componente cargado");
}, []);
