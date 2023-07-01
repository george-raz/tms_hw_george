const numbers4 = [1, 6, 3, 2, 7, 325, 234, 54, 586, 23, 24, 64, 56, 3, 5, 7, 8, 1, 6, 8, 9, 4, 5, 61, 2, 4, 5, 6, 3, 5]

const uniqueNum = new Set(numbers4)

const uniqueNumArr: number[]= [];

for (let x of uniqueNum) {
  uniqueNumArr.push(x);
}

console.log(uniqueNumArr)