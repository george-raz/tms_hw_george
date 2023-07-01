function getSum(x:number):number {
  let result = 0;
  for (let i = 0; i <= x; i++) {
    result += i;
  }
  return result
}

console.log(getSum(50))