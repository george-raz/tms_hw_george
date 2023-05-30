class Animal {
  animalName: string;
  speed: number;
  color: string;
  static animalType:string = "Cat";

  constructor(animalName:string, speed: number, color: string) {
    this.animalName = animalName;
    this.speed = speed;
    this.color = color;

  }

  showSpeed() {
    return `I run with speed: ${this.speed} km/h`
  }

  who() {
    return `This is a ${Animal.animalType}. It's name is ${this.animalName}`;
  }

  get getColor() {
    return `Color is ${this.color}`
  }

  set setColor(color:string) {
    this.color = color;
  }
  
}

let cat1 = new Animal('Musya', 100, "grey");

console.log(cat1.who());

console.log(cat1.showSpeed());

cat1.setColor = "Black";

console.log(cat1.getColor)
