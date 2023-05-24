type ICat = {
  name: String;
  age: Number;
}

const cat: ICat = {
  name: 'Енчик',
  age: 3,
}

let json = JSON.stringify(cat);
let catJson = JSON.parse(json);

let catAssigned = Object.assign({}, cat);

cat.name = "Barsik";

console.log(cat, catJson, catAssigned)

