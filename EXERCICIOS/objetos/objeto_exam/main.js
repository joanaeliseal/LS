import { Exame } from '../objeto_exam/exam.js'

const peso = {
  q1: 2,
  q2: 3,
  q3: 5
}

const gabarito = {
  q1: 'a',
  q2: 'b',
  q3: 'c'
}

const exame = new Exame(peso, gabarito)

const reposta1 = {
  estudante: 'Luiz',
  respostas: {
    q1: 'a',
    q2: 'b',
    q3: 'c'
  }
}

const reposta2 = {
  estudante: 'Francisco',
  respostas: {
    q1: 'a',
    q2: 'c',
    q3: 'b'
  }
}

const reposta3 = {
  estudante: 'Joana',
  respostas: {
    q1: 'a',
    q2: 'c',
    q3: 'c'
  }
}

// Chama o método "add" para adicionar as respostas dos estudantes (objetos)
exame.add(reposta1)
exame.add(reposta2)
exame.add(reposta3)

console.log(`Média = ${exame.avg()}`); 

console.log(`Notas menores que 7: ${exame.lt(7)}`)
console.log(`Notas maiores que 2: ${exame.gt(2)}`) 


console.log(`Menor nota: ${exame.min()}`); 
console.log(`Maior nota: ${exame.max()}`); 