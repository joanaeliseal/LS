export class Exame {
    constructor(peso, gabarito) {
        this.peso = peso; 
        this.gabarito = gabarito 
        this.exames = [] 
    }

    add(exame) { //adiciona o exame/prova
        let nota = 0

        Object.keys(exame.respostas).forEach(questao => {
        // Contém a resposta do aluno, a resposta do gabarito e o peso da questão
            if (exame.respostas[questao] === this.gabarito[questao]){
                    nota += this.peso[questao] 
                }
            })

            exame.nota = nota
            this.exames.push(exame)  // Cria um array com objetos de alunos
    }

    avg() { //média
        let soma = 0
        this.exames.forEach(exame => {
            // contador para qtde de exames
            soma += exame.nota
            
        })

        return Math.round(soma / this.exames.length)
    }

    lt(limite) {
        // Retorna um array das notas menores 
        const notas = this.exames.map(exame => {
            return exame.nota
        })

        return Math.round(notas.filter(nota => nota < limite)) //filtra as notas e as retorna
    }

    gt(limite) {
        // Retorna um array das notas maiores 
        const notas = this.exames.map(exame => {
            return exame.nota
        })
        
        return (notas.filter(nota => nota > limite)) //filtra as notas e as retorna
    }

    min(cont = 1) { 
        // Retorna a menor nota
        let notas = this.exames.map((resposta) => resposta.nota);
    
        notas.sort((a, b) => a - b);
    
        return notas.slice(0, cont);
    }

    // Retorna a maior nota
    max(cont = 1) { 
        let notas = this.exames.map((resposta) => resposta.nota);
    
        notas.sort((x, y) => x - y);
    
        return notas.slice(-cont);
    }
}