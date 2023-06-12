import SportCar from "./12_b_01_b";
import luxuryCar from "./12_b_01_c"

let rangeSport = new SportCar("Range Sport", "Petrol", 101)
let rollsRoyce = new luxuryCar("Rolls Royce", "Petrol", 100 )

console.log(rangeSport.isFast("99 km/h"))
console.log(rollsRoyce.isCosty(100))