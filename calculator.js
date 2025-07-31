const Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
        if (b === 0) {
            throw new Error("La division par zéro n'est pas possible");
        }
        return a / b;
    }
};

export default Calculator;