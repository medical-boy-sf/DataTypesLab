function specialNumbers(n) {
    n = Number(n);
    
    for (let i = 1; i <= n; i++) {
        let nToStr = i.toString();
        let sum = 0;
        for (let j = 0; j < nToStr.length; j++) {
            sum += Number(nToStr[j]);
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`)
        } else {
            console.log(`${i} -> False`);
        }
    }
}