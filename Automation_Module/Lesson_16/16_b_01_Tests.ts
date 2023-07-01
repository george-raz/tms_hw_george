import Calculator from "./16_b_01_Calculator";

export default class Tests {
  static posCheckSum () {
    const num1 = 6;
    const num2 = 3;
    const expected = 9;

    let actual = new Calculator(num1, num2).sum();

    return actual === expected ? "Passed" : "Failed"
  }

  static negCheckSum () {
    const num1 = 4;
    const num2 = 5;
    const expected = 9;

    let actual = new Calculator(num1, num2).sum();

    return actual !== expected ? "Passed" : "Failed"
  }

  static posCheckSubtract () {
    const num1 = 6;
    const num2 = 3;
    const expected = 3;

    let actual = new Calculator(num1, num2).subtract();

    return actual === expected ? "Passed" : "Failed"
  }

  static negCheckSubtract () {
    const num1 = 7;
    const num2 = 5;
    const expected = 1;

    let actual = new Calculator(num1, num2).subtract();

    return actual !== expected ? "Passed" : "Failed"
  }

  static posCheckMultiply () {
    const num1 = 6;
    const num2 = 3;
    const expected = 18;

    let actual = new Calculator(num1, num2).multiply();

    return actual === expected ? "Passed" : "Failed"
  }

  static negCheckMultiply () {
    const num1 = 7;
    const num2 = 5;
    const expected = 48;

    let actual = new Calculator(num1, num2).multiply();

    return actual !== expected ? "Passed" : "Failed"
  }

  static posCheckDivide () {
    const num1 = 6;
    const num2 = 3;
    const expected = 2;

    let actual = new Calculator(num1, num2).divide();

    return actual === expected ? "Passed" : "Failed"
  }

  static negCheckDivide () {
    const num1 = 7;
    const num2 = 1;
    const expected = 6;

    let actual = new Calculator(num1, num2).divide();

    return actual !== expected ? "Passed" : "Failed"
  }

  static posCheckPow () {
    const num1 = 2;
    const num2 = 3;
    const expected = 8;

    let actual = new Calculator(num1, num2).pow(num1, num2);

    return actual === expected ? "Passed" : "Failed"
  }

  static negCheckPow () {
    const num1 = 7;
    const num2 = 1;
    const expected = 7;

    let actual = new Calculator(num1, num2).pow(num1, num2);

    return actual !== expected ? "Passed" : "Failed"
  }
}