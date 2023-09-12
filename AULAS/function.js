// function declaration
function sum(a,b) {
    return a + b
}

// call function
sum(1,2)
console.log(sum(1,2))
console.log(sum(1,2,3)) // o três foi desconsiderado
console.log(sum(1)) // 1 + undefined = NaN

// anonymous/lambda function
const addition = function(a,b) {
    return a+b
}

console.log(addition(1,2))


// arrow function
const minus = (a,b) => {
    return a-b
}

const subtracao = (a, b) => a - b  // usar quando tiver só um retorno


// rest param
const multiply = (...numbers) => {   // retincencias junta tudo num array 
    console.log(numbers)
}
multiply(1, 2)
multiply(1, 2, 3, 4, 5)

// default param
function divide(a, b=1) { // b=1 é um parâmetro
    return a / b
}
console.log(divide(2))
console.log(divide(2, 2))