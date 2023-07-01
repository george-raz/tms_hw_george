function random(min:number, max:number) {
  let result = Math.floor(min + Math.random() * (max - min));
  return console.log(result);
}

random(2, 66)