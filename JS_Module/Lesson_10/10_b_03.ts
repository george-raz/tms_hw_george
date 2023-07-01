const carA = {
  doorsAmount: 3,
  wheelSide: "left-hand"
}

const carB = {
  doorsAmount: 4,
  wheelSide: "right-hand"
}

function carInfo() {
  console.log(`This car has ${this.doorsAmount} doors and this is ${this.wheelSide} drive car`)
}

let carContextA = carInfo.bind(carA);
let carContextB = carInfo.bind(carB);

carContextA();
carContextB();