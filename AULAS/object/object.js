// Representação de investimento


// JSON - JavaScript Object Notation
const investment = {
    name: "Tesouro Selic 2029",
    value: 10050,
    origin: "Tesouro Nacional",
    category: "Pos",
    date: "22/03/2023",
    interest: "100% Selic",
}
console.log(investment)
// Class Definition
class Investment {
    #name
    #value
    #origin
    #category
    #date
    #interest
    constructor(name, value, origin, category, date, interest) {
        this.name = this.name
        this.value = value
        this.origin = origin
        this.category = category
        this.date = date
        this.interest = interest
    }
}

const tesouroIpca2029 = new Investment(
    'Tesouro IPCA 2029',
    30990,
    'Tesouro Nacional',
    'IPCA',
    '11/09/2023',
    'IPCA + 5,26%'

)
console.log(tesouroIpca2029)

// Accessing properties
console.log(tesouroIpca2029.name)
// console.table
console.table(tesouroIpca2029)

const investments = [tesouroSelic2029, tesouroIpca2029]
console.table(investments)

// private property (#)
class InvestmentPrivate {
    #name
    #value
    #origin
    #category
    #date
    #interest
    constructor(name, value, origin, category, date, interest) {
        this.#name = this.name
        this.#value = value
        this.#origin = origin
        this.#category = category
        this.#date = date
        this.#interest = interest
    }
}

// Property Shorthand { value1, value2 }
const name = 'Tesouro IPCA 2029'
const value = 10050
const origin = 'Tesouro Nacional'
const category = 'Pos'
const date = '11/09/2023'
const interest = '100% Selic'

// class Investment {
//  name: name
//  value: value
//  origin: origin
//  category: category
//  date: date
//  interest: interest
//}

const investmentNovo = {name, value, origin, category, date, interest}

// Spread properties {...values, value}
const investmentBroker = {
    ...investment,
    broker: 'XP Investimentos'
}
const investmentNewValue = {
    ...investmentBroker,
    value: 11050,
}

// Property (variable) {[key]: value}
const type = 'broker'
const bank = 'Banco Inter'

const investmentNewBroker = {
    ...investmentBroker,
    [type]: bank,
}

// JSON.stringify
console.log(investmentBroker)

// JSON.parse
