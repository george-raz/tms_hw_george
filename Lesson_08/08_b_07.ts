const numbers3 = [8, 13, 19];

console.log(numbers3.every((x) => {
  let powered = Math.pow(x, 2).toString();
  let sum = 0;
  for (let i = 0; i < powered.length; i++) {
    sum += Number(powered[i]);
  };
  if (sum % 2 === 0) {
    return true;
  } else return false;
}));
