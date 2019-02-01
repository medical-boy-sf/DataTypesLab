function triplesOfLatinLetters(n) {
    n = Number(n);
    for (var i = 97; i < 97 + n; i++) {
        for (var j = 97; j < 97 + n; j++) {
            for (var k = 97; k < 97 + n; k++) {
                let result = String.fromCharCode(i) + String.fromCharCode(j) + String.fromCharCode(k);
                console.log(result);
            }
        }
    }
}