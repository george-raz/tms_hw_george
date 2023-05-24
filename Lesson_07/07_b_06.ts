const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]
let  allNumbers:number[] = [];

for (let i = 0; i < evenNumbers.length; i++) {
  oddNumbers.push(evenNumbers[i])
}

allNumbers = oddNumbers.splice(0);

console.log(allNumbers.indexOf(8))

