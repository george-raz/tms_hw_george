function random(min:number, max:number) {
  let result = min + Math.random() * (max - min);
  return console.log(result);
}

random(2, 66)