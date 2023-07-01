function getSumNumbers(int:any):number {
  let i = 0;
  let sum = 0;
  int = String(int);
  while(int[i]) {
    sum += +int[i];
    i++
  }
  return sum;
}

console.log(getSumNumbers(2023))
