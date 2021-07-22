function sentenceManipulation(sentence) {
    let a = sentence.split(' ')
    let result = []
    for (let i = 0; i < a.length; i++) {
        if (a[i].charAt(0) == 'a' || a[i].charAt(0) == 'i' || a[i].charAt(0) == 'u' || a[i].charAt(0) == 'e' || a[i].charAt(0) == 'o') {
            result.push(a[i])
        } else {
            result.push(a[i].slice(1) + a[i].slice(0,1) + 'nyo')
        }
    }
    console.log(result.join(' '))
}

sentenceManipulation('ibu pergi ke pasar bersama aku')