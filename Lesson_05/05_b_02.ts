function getCreditOverPay(credit:number) {
  const interestRate = 0.17;
  const years = 5;
  let overPay = credit * interestRate * years;
  return overPay;
}

console.log(getCreditOverPay(300));

