const numbers = [5, 43, 63, 23, 90]

// --Variant 1--//
numbers.splice(0, (numbers.length));
console.log(numbers)

//--Variant 2--//

while (numbers.length) {
  numbers.pop()
}

console.log(numbers)

