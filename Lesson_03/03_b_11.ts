let int:number = 15;

if (int % 5 == 0 && int % 3 != 0 ) {
  console.log("Fiz");
} else if (int % 3 == 0 && int % 5 != 0) {
  console.log("Buz");
} else if (int % 3 == 0 && int % 5 == 0) {
  console.log("FizBuz");
}