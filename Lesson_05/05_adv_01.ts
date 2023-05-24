function isTriangle(a:number, b:number, c:number):boolean {
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  } else {
    return false
  }
}

console.log(isTriangle(3, 2, 2))