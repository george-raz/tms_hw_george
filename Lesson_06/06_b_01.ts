type IObject = {
  name?: string,
  age?: number,
}

const object: IObject = {
  name: "Jojo",
  age: 20,
}

delete object.name;
delete object.age;