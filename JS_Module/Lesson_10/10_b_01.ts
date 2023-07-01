class Car {
  carName: string;
  protected engineType: string;

  constructor(carName: string, engineType: string) {
    this.carName = carName;
    this.engineType = engineType;
  }
}

class SportCar extends Car {
  maxSpeed: number;
  carCost: number;

  constructor(carName: string, engineType: string, maxSpeed: number, carCost:number) {
    super (carName, engineType)
    this.maxSpeed = maxSpeed;
    this.carCost = carCost;
  }

  showStats() {
    console.log(`This is ${this.carName}. It has ${this.engineType} engine and max speed equal to ${this.maxSpeed}. Approximetly cost of the car is ${this.carCost}`)
  }
}

class luxuryCar extends Car {
  maxSpeed: number;
  private carCost: number;

  constructor(carName: string, engineType: string, maxSpeed: number, carCost:number) {
    super (carName, engineType)
    this.maxSpeed = maxSpeed;
    this.carCost = carCost;
  }

  showStats() {
    console.log(`This is ${this.carName}. It has ${this.engineType} engine and max speed equal to ${this.maxSpeed}. Approximetly cost of the car is ${this.carCost}`)
  }
}

const rangeSport = new SportCar("Range Sport", "Petrol", 300, 20000);
const rollsRoyce = new luxuryCar("Rolls-Royce Phantom", "Diesel", 250, 100000);

rangeSport.showStats();
rollsRoyce.showStats();