function factorial(x: number): void {
  let result = 1;
  for (let i = 1; i <= x; i++) {
    result *= i;
  }
  console.log(result)
}

factorial(5)