function floatOrInteger(num1, num2, num3) {
    let sum = Number(num1) + Number(num2) + Number(num3);
    if (Math.ceil(sum) === Math.floor(sum)) {
       console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }
}