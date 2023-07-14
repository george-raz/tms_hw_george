import Calculator from "../Lesson_16/16_b_01_Calculator";

describe("Calc methods suite", () => {
    it("Check int sum", () => {
    let expected = 15;
    let calc = new Calculator(7, 8)
    expect(calc.sum()).toBe(expected)
  })
  it("Check decimal sum", () => {
    let expected = 3.34;
    let calc = new Calculator(2.22, 1.12)
    expect(calc.sum()).toBe(expected)
  })
  it("Check int and non-numerical sum", () => {
    let calc = new Calculator(-5, Number("fdf"))
    expect(calc.sum()).toBeNaN()
  })
  it("Check division by 0", () => {
    let expected = /Нельзя разделить на ноль./;
    let calc = new Calculator(7, 0)
    expect(calc.divide()).toMatch(expected)
  })
  it("Check int sum (positive)", () => {
    let expected = 15;
    let calc = new Calculator(7, 8)
    expect(calc.sum()).toBe(expected)
  })
  it("Check int subtracting", () => {
    let expected = 1;
    let calc = new Calculator(-7, -8)
    expect(calc.subtract()).toBe(expected)
  })
})