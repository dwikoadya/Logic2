function indexPrime(param1) {
    let result = []
    let pow = Math.pow(param1, 2)
    for(let i = 2; i <= pow; i++) {
        for (let j = 2; j <= i; j++) {
            if (i == j) {
                result.push(i)
            }
            if (i % j == 0) break
        }
    }
    return result[param1 - 1]
}

console.log(indexPrime(4));
console.log(indexPrime(500));
console.log(indexPrime(37786));