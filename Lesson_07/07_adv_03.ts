const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]

let posNumbers:number[] = [];
let negNumbers:number[] = [];

for (let number of mixedNumbers) {
  if (number >= 0) {
    posNumbers.push(number)
  } else {
    negNumbers.push(number)
  }
}

console.log(posNumbers);
console.log(negNumbers);