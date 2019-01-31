function amazingNumbers(number) {
    let num = Number(number);
    let sum = 0;
    
    while(num > 0) {
        sum += num % 10;
        num = parseInt((num / 10));
    }
    
    let isAmazing = false;
    while(sum > 0) {
        if (sum % 10 === 9) {
            isAmazing = true;
            break;
        } 
        
        sum = parseInt(sum / 10);
    }
    
    if (isAmazing) {
        console.log(`${number} Amazing? True`);
    } else {
        console.log(`${number} Amazing? False`);
    }
}
