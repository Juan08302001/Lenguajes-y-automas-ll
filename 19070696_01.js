/*
Generar un programa en NodeJS, en el cual le asigne a la variable name su nombre, en el cual se le den 10 espacios 
al principio y 15 espacios al final de su nombre.

1-Imprima por consola la variable 
2-Se le quieten los espacios del lado derecho
  2.1-Imprima por consola la variable
3-Se le quieten los espacios del lado izquierdo
  3.1Imprima por consola la variable
*/
const name = '          Juan Martin Amparo Vazquez               ';

const ins = name.trim();
console.log("Trim start")
console.log(name.trimStart())
console.log("Trim end")
console.log(name.trimEnd())