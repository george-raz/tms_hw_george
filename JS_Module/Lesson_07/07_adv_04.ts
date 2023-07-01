function randomArr(x:number) {
  let arr:number[] = [];
  for (let i = 0; i < x; i++) {
    arr.push(Math.floor(Math.random() * 100))
  }
  return arr
}

function cubeArr(arr:number[]):number[] {
  let resultArr:number[] = [];
  for (let key of arr) {
    resultArr.push(Math.pow(key, 3))        
  }
  return resultArr;
}

let randomNumbers = randomArr(5);

console.log(randomNumbers);
console.log(cubeArr(randomNumbers));


