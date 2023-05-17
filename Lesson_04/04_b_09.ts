let number1:number = 8.829734872948;

function isInt(x:number) {
  if(Number.isInteger(x)) {
    console.log(x);
  } else {
    x = Math.floor(x);
  }
}

isInt(number1);