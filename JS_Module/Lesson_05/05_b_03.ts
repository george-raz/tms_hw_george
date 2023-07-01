function trimString(string:string, from:number, to:number):string {
  return string.slice(from, to);
}

console.log(trimString("What are you buying?", 8, 15))

