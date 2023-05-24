function getSum1(a:number, b:number):number {
  if (a === b) {
    return a;
  } else if (a < b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
      sum += i;
    }
    return sum;
  } else {
    let sum = 0;
    for (let i = a; i >= b; i--) {
      sum += i;
    }
    return sum;
  }
}

console.log(getSum1(3, 1));