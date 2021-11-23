function uppersums(dice, number) {
    let sum = 0;
    dice.forEach((die) => {
        if (die.value === number) {
            sum += number;
        }
    });
    return sum;
}

export { uppersums };