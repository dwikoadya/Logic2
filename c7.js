function weirdMultiply(sentence){
    let spil = sentence.toString()
    let result = 1
    if (sentence < 10) {
        return sentence
    } else {
        for (let i = 0; i < spil.length; i++) {
            result *= spil[i]
        }
    }
    return weirdMultiply(result)
}

console.log(weirdMultiply(39))
console.log(weirdMultiply(999))
console.log(weirdMultiply(3))