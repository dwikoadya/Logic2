function pola(str) {
    let result = []
    let spil = str.split(' ')
    let left = spil[0].indexOf('#')
    let left1 = spil[0].slice(0, left)
    let left2 = spil[0].slice(left + 1)
    let right = spil[4].indexOf('#')
    let right1 = spil[4].slice(0, right)
    let right2 = spil[4].slice(right + 1)
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (Number(left1 + i + left2) * Number(spil[2]) === Number(right1 + j + right2)) {
                result.push(i, j)
            }
        }
    }
    return result
}

console.log(pola('42#3 * 188 = 80#204'))
console.log(pola('8#61 * 895 = 78410#5'))