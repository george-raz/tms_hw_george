const numString:string = "1 2 3 -200 6 5";

function highAndLow(string:string):string {
  let arr = string.split(" ");
  let numArr:number[] = [];
  arr.forEach((x) => numArr.push(Number(x)));
  const [min, max] = [String(Math.min(...numArr)), String(Math.max(...numArr))];
  string = String(max) + " " + String(min);
  return string
}

console.log(highAndLow(numString))