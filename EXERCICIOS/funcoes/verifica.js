/* 
a < b+c
b < a+c
c < a+b
*/

import { verifica_triangulo } from "./lib.js"

let lado1 = 10
let lado2 = 2
let lado3 = 5

console.log(verifica_triangulo(lado1,lado2,lado3))