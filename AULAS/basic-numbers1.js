// solução 1

let sequence = ''

for (let flag = 0; flag <=99; flag +=1) {
    if (flag < 10) {
        sequence += '0' + flag
    } else {
        sequence += flag
    }
    if (flag % 10 ===9) {
        sequence += '\n'
    } else {
        sequence += ' '
    }
}

console.log(sequence)

// solução 2
// for for

for (let decimal = 0; decimal <=9; decimal++) { //++ é semelhante ao +=
    for (let unit =0; unit <=9; unit++) {
        sequence += decimal + $tring(unit) + (unit ===9 ? '\n' : ' ')  // $tring(unit)=força a variável a ser string
    }
}
// ?  : é um operador ternário