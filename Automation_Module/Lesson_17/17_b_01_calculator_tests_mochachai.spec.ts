import { expect } from "chai";
import Calculator from "../Lesson_16/16_b_01_Calculator";

describe("Calc methods suite", () => {
    it("Check int sum", () => {
    let expected = 15;
    let calc = new Calculator(7, 8)
    expect(calc.sum(), "Not 15").to.equal(expected)
  })
  it("Check decimal sum", () => {
    let expected = 3.34;
    let calc = new Calculator(2.22, 1.12)
    expect(calc.sum(), "JS math...").to.equal(expected)
  })
  it("Check int and non-numerical sum", () => {
    let calc = new Calculator(-5, Number("fdf"))
    expect(calc.sum(), "Failed").be.deep.equal(NaN)
  })
  it("Check division by 0", () => {
    let expected = /Нельзя разделить на ноль./;
    let calc = new Calculator(7, 0)
    expect(calc.divide(), "Failed").to.match(expected)
  })
  it("Check int sum (positive)", () => {
    let expected = 15;
    let calc = new Calculator(7, 8)
    expect(calc.sum(), "Failed").to.equal(expected)
  })
  it("Check int subtracting", () => {
    let expected = 1;
    let calc = new Calculator(-7, -8)
    expect(calc.subtract(), "Failed").to.equal(expected)
  })
})