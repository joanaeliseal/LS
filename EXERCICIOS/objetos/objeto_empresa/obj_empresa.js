// criar objeto empresa dentro do list
const empresa = [
    {
        nome: 'Amazon',
        fundado: 1994,
        industria: ['E-Commerce', 'Cloud'],
    },
    {
        nome: 'Facebook',
        fundado: 2004,
        industria: ['Social'],
    },
    {
        nome: 'Alphabet Inc.',
        fundado: 2015,
        industria: ['Search', 'Cloud', 'Advertising'],
    }
]

// O método sort() permite classificar (ordenar) elementos de um array local
// O localeCompare() método compara duas strings na localidade atual.
empresa.sort((a, b) => a.nome.localeCompare(b.nome))

// O método forEach() executa uma dada função em cada elemento de um array.
empresa.forEach((empresas) => {     // => arrow function
    empresa.kind = 'Empresa de Internet'
})

// map() cria um novo array chamando uma função para cada elemento do array.
const MAX_NOME_LENGHT = Math.max(  //O Math.max() método retorna o número com o valor mais alto.
    ...companies.map((company) => company.name.length) //...spread operator:permite que um iterável, como um array ou string, seja expandido.
);

function mostrar(empresa) {
    return empresa
    .map(
        (empresa) =>
            empresa.nome.padEnd(MAX_NOME_LENGHT+3, '.')+ empresa.fundado
    )
    .join('\n')
}

// console.table(empresa)
console.log(mostrar(empresa))