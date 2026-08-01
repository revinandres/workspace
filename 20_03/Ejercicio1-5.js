let x = 10;
{
  let y = 20;
  console.log("x dentro:");
  console.log(x);
  console.log("y dentro:");
  console.log(y);
}
console.log("x fuera:");
console.log(x);
console.log("y fuera:");
console.log(y);
//"y" no se puede imprimir fuera del bloque porque let tiene alcance de bloque (scope), así que solo existe dentro de {}.