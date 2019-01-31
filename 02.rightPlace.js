function rightPlace(str1, char, str2) {
    str1 = str1.split('');
    for (let i = 0; i <= str1.length; i++) {
        if (str1[i] === "_") {
            str1[i] = char;
            break;
        }
    }
    
    str1 = str1.join('');
    
    if (str1 === str2) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}

