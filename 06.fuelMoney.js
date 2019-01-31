function fuelMoney(distance, passengers, pricePerLitre) {
    distance = Number(distance);
    passengers = Number(passengers);
    pricePerLitre = Number(pricePerLitre);
    let neededFuel = ((distance / 100) * 7) + passengers * 0.1;
    let money = neededFuel * pricePerLitre;
    console.log(`Needed money for that trip is ${money}lv.`);
}
