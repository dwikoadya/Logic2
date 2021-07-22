function stringManipulation(word) {
    let firstChar = word.charAt(0)
    if (firstChar == 'a' || firstChar =='i' || firstChar == 'u' || firstChar == 'o' || firstChar == 'e') {
        console.log(word)
    } else {
        console.log(word.slice(1) + word.slice(0, 1) + 'nyo')
    }
}

stringManipulation('ayam')
stringManipulation('bebek')