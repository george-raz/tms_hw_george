const arr: string[] = ["pop"
//, "pump"
//, "smoke"
];

let elem2 = "";
let elem3 = "";

arr.forEach((x, index, arr) => {
  if (index == 0) {
    elem2 = "bbb";
  } else if (index == 1) {
    elem3 = "eee";
    elem2 = x;
  } else if (index == 2) {
    elem3 = x;
    elem2 = arr[1]
  }
})

console.log(elem2, elem3)