
function sumar(a, b) {
    suma= a + b;
    return suma;
}

function restar(a, b) {
    resta = a - b;
    return resta;
}

function multiplicar(a, b) {
    multiplicacion= a * b;
    return multiplicacion;
}

function dividir(a, b) {

    if (b === 0){
        return "No se puede dividir por cero.";
    }

    division= a / b;
    return division;
}

function potencia(a, b) {
    potenciar=Math.pow(a, b);
    return potenciar;
}

function mayor(a, b) {
    return a > b ? a : b;
}
 

console.log("Resultado suma:");
console.log(sumar(10, 5));

console.log("----------------")

console.log("Resultado resta:");
console.log(restar(10, 5));

console.log("----------------");

console.log("Resultado multiplicación:");
console.log(multiplicar(10, 5));

console.log("----------------");

console.log("Resultado división:");
console.log(dividir(10, 5));

console.log("----------------");

console.log("resultado potencia:");
console.log(potencia(2, 3));

console.log("----------------");

console.log("Número mayor:");
console.log(mayor(10, 5));

console.log("----------------");

console.log("Division por cero:");
console.log(dividir(10, 0));


