export default class Calculator {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  sum() {
    return this.x + this.y;
  }

  subtract() {
    return this.x - this.y;
  }

  multiply() {
    return this.x * this.y;
  }

  divide() {
    if (this.y !== 0) {
      return this.x / this.y;
    } else throw new Error ("Нельзя разделить на ноль.")
    
  }

  pow(x:number, y:number): number {
    if (y === 0) return 1;
    let result = x;

    result = result * this.pow(x, y - 1)
    return result;
  }
}