function changeVocals(str) {
    //code di sini
    var newStr = ''
    for (var i = 0; i < str.length; i++) {
        if (str[i] == 'a') {
            newStr += 'b'
        } else if (str[i] == 'i') {
            newStr += 'j'
        } else if (str[i] == 'u') {
            newStr += 'v'
        } else if (str[i] == 'e') {
            newStr += 'f'
        } else if (str[i] == 'o') {
            newStr += 'p'
        } else if (str[i] == 'A') {
            newStr += 'B'
        } else if (str[i] == 'I') {
            newStr += 'J'
        } else if (str[i] == 'U') {
            newStr += 'V'
        } else if (str[i] == 'E') {
            newStr += 'F'
        } else if (str[i] == 'O') {
            newStr += 'P'
        } else {
            newStr += str[i]
        }
    }
    return newStr
}

function reverseWord(str) {
    //code di sini
    var newStr = ''
    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    return newStr
}

function setLowerUpperCase(str) {
    //code di sini
    var newStr = ''
    for (var i = 0; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase()) {
            newStr += str[i].toLowerCase()
        } else if (str[i] == str[i].toLowerCase()) {
            newStr += str[i].toUpperCase()
        }
    }
    return newStr
}

function removeSpaces(str) {
    //code di sini
    var newStr = ''
    for (var i = 0; i < str.length; i++) {
        if (str[i] == ' ') {
            i++
        }
        if (str[i] != ' ') {
            newStr += str[i]
        }
    }
    return newStr
}

function passwordGenerator(name) {
    //code di sini
    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    var gantiVokal = changeVocals(name)
    var dibalik = reverseWord(gantiVokal)
    var alay = setLowerUpperCase(dibalik)
    var spasi = removeSpaces(alay)

    return spasi
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'