const numbers2 = [5, 9, 13, 24, 54, 15, 10, 13, 99, 1, 5];

console.log(numbers2.some((x) => x % 3 === 0 && x % 5 === 0));
