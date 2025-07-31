import Calculator from "../calculator.js";

// Addition
test("should add two numbers correctly", () => {
    expect(Calculator.add(1, 2)).toBe(3);
    expect(Calculator.add(-1, 1)).toBe(0);
    expect(Calculator.add(0, 0)).toBe(0);
});

// Subtraction
test("should subtract two numbers correctly", () => {
    expect(Calculator.subtract(5, 3)).toBe(2);
});

test("should handle negative results", () => {
    expect(Calculator.subtract(3, 5)).toBe(-2);
});

// Multiplication
test("should multiply two numbers correctly", () => {
    expect(Calculator.multiply(2, 3)).toBe(6);
    expect(Calculator.multiply(-1, 1)).toBe(-1);
    expect(Calculator.multiply(0, 5)).toBe(0);
});

// Division
test("should divide two numbers correctly", () => {
    expect(Calculator.divide(6, 3)).toBe(2);
    expect(Calculator.divide(-6, 3)).toBe(-2);
    expect(Calculator.divide(0, 1)).toBe(0);
});

test("should throw an error when dividing by zero", () => {
    expect(() => Calculator.divide(5, 0)).toThrow("La division par zéro n'est pas possible");
});