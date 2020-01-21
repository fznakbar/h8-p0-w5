function sorting(arrNumber) {
    // code di sini
    if (arrNumber == false) {
        return ' '
    }
    var swap = true
    do {
        swap = false
        for (var i = 0; i < arrNumber.length - 1; i++) {
            if (arrNumber[i] > arrNumber[i + 1]) {
                var tmp = arrNumber[i + 1]
                arrNumber[i + 1] = arrNumber[i]
                arrNumber[i] = tmp
                swap = true
            }
        }
    } while (swap)
    return arrNumber
}

function getTotal(arrNumber) {
    // code di sini
    if (arrNumber == false) {
        return "''"
    }
    var terbesar = arrNumber[arrNumber.length - 1]
    var angka = 0
    for (var i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] == terbesar) {
            angka++
        }
    }
    var result = 'angka paling besar adalah ' + terbesar + ' dan jumlah kemunculan sebanyak ' + angka + ' kali'
    return result
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''