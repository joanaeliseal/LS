// Area do circulo
export function areaCirculo(r) {
    const pi = 3.141592653589793
    return pi * (r**2)
}

// Calculadora

export function calculadora(number1, number2, operator) {
    switch (operator) {
        case '+':
          return number1 + number2;
          break;
        case '-':
          return number1 - number2;
          break;
        case '*':
            return number1 * number2;
            break
        case '/':
            return number1/number2;
        default:
          result = 'Operador inválido';
      }
}

// Verificação de Triângulo

export function verifica_triangulo(a,b,c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return 'Não é um triângulo válido';
  }

  if (a + b <= c || a + c <= b || b + c <= a) {
    return 'Não é um triângulo válido';
  }

  if (a === b && b === c) {
    return 'Triângulo Equilátero';
  } else if (a === b || a === c || b === c) {
    return 'Triângulo Isósceles';
  } else {
    return 'Triângulo Escaleno';
  }
}