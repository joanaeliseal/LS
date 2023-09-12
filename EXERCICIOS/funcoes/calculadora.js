/*
Monte uma calculadora por meio de dois valores numéricos e um operador aritmético. Dentre as opções de operadores pode-se utilizar os listados na Tabela 1:
s
Operação
soma	+
subtração	-
multiplicação	*
divisão	/

*/

import { calculadora } from "./lib.js";

let n1 = 10
let n2 = 20
const op = '+'
console.log(`Resultado: ${calculadora(n1,n2,op)}`)