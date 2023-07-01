let number2:number = 8.829734872948;

function toFloor(x:number) {
  x = Math.floor(x);
  console.log(x);
};

function toCeil(x:number) {
  x = Math.ceil(x);
  console.log(x);
};

function toRound(x:number) {
  x= Math.round(x);
  console.log(x);
};

toFloor(number2);
toCeil(number2);
toRound(number2);