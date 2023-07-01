const taxRate: number = 0.067;
const phonePrice: number = 870;
const phoneAddons: number = 66;
let balance: number = 10000;

function sumPrice(phone: number, addon: number, balance: number): number {
  let set = phone + addon;
  let sum = 0;
  while (sum < balance - set) {
    sum += set;
  }
  return sum;
}

function getTaxed(sum: Function, taxRate: number): number {
  let phoneSum = sum(phonePrice, phoneAddons, balance);
  let tax = phoneSum * taxRate;
  let taxed = phoneSum + tax;

  return taxed;
}

function formatSum(sum: number): string {
  return sum.toFixed(2) + "$"
}

function canBuy(taxed: number, balance: number): boolean {
  if (taxed < balance) {
    console.log(`Your balance is ${balance}. You can afford ${formatSum(getTaxed(sumPrice, taxRate))} purchase`);
    return true;
  } else {
    console.log(`Your balance is ${balance}. You can't afford ${formatSum(getTaxed(sumPrice, taxRate))} purchase`);
    return false;
  }
}

canBuy(getTaxed(sumPrice, taxRate), balance)