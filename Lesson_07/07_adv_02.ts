const matrix = [
  [12, 98, 78, 65, 23],
  [54, 76, 98, 43, 65],
  [13, 324, 65, 312],
  [9092, 22, 45, 90000],
]

let numberCount = 0;
let numberSum = 0;
for (let key of matrix) {
  numberCount += key.length;
  for (let i = 0; i < key.length; i++) [
    numberSum += key[i]
  ]
}

let result = numberSum / numberCount;

console.log(result)