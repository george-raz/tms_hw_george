let salaries = {
  andreys: 500,
  sveta: 413,
  anton: 987,
  andrey: 664,
  alexandra: 199
}

let sum = 0;
let employeesCount = 0;

for(key in salaries) {
  employeesCount++
  sum += salaries[key];
}

let averageSalary = sum / employeesCount;

console.log(averageSalary)