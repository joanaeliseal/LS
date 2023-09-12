sequence = ''

for (let flag = 99; flag >=0; flag -=1) {
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
