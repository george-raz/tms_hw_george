import Car from "./12_b_01_a"

export default class SportCar extends Car {
  maxSpeed: number;

  constructor(carName: string, engineType: string, maxSpeed: number) {
    super (carName, engineType)
    this.maxSpeed = maxSpeed;
  }
}