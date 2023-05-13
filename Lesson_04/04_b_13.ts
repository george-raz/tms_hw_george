function randomFloat(min:number, max:number) {
  let result = min + Math.random() * (max - min);
  return console.log(result);
}

randomFloat(46, 100)