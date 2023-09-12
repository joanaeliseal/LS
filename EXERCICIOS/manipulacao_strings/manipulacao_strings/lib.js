// Gerador de lista
export function createList(num, text="Text"){
    let result = "<ul>\n"
    for (let flag=1; flag <=num; flag++){
        result += `    <li> ${text} ${flag} <li>\n`
    }
    result += '</ul>\n'
    return result
}

// Utilitários de String

export function utilitario(text, action){
    switch (action) {
        case 'uppercase':
            return text.toUpperCase()
        case 'lowercase':
            return text.toLowerCase()
        case 'camelcase':
            return text.toCamelcase()
        case 'snakecase':
            return text.toSnakecase()
        case 'reverse':
            return text.split('').reverse().join('')
        case 'countchar':
            return text.split('').length
        case 'countword':
            return text.split(/\s/g).length
        default:
            return 'Ação inválida'
    }
}