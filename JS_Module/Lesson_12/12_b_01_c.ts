import Car from "./12_b_01_a"

export default class luxuryCar extends Car {
  private carCost: number;

  constructor(carName: string, engineType: string, carCost:number) {
    super (carName, engineType)
    this.carCost = carCost;
  }

  isCosty (x:number) {
    if(x > 100) {
      return true

    } else if (x < 100) {
      return false
    } else {
      throw new Error("ALARM")
    }
  }


}