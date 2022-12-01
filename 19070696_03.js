/*
Escribir un programa en NodeJS en el cual escriba una frase de al menos 12 palabras y 
terminando cada palabra debe contener una coma ",".
Después separar la frase por las comas e imprimir cada palabra, así como la longitud de la cadena final.
*/
let palabra = 'Hola,mundo,desde,NodeJs,realizado,en,la,fecha,30,11,2022,♥';
let palabra2 = palabra.split(",");
console.log("Palabra sin split:", palabra)
console.log("Palabra con split:", palabra2);
console.log("La longitud de la palabra es:", palabra2.length)