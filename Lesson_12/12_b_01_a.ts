export default class Car {
  carName: string;
  protected engineType: string;

  constructor(carName: string, engineType: string) {
    this.carName = carName;
    this.engineType = engineType;
  }

  isFast (x:string) {
    if(parseInt(x) > 100) {
      return true

    } else if (parseInt(x) < 100) {
      return false
    } else {
      throw new Error("ERRORRR")
    }
  }
}