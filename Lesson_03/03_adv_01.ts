let aa:any = 4;
let bb:any = 3;

aa += "" + bb;

bb = +aa[0];

aa = +aa[1];

console.log(`aa = ${aa}`, `bb = ${bb}`)