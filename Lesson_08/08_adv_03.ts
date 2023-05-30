const word = 'moOse';

function isIsogram(string:string): boolean {
  let sito = new Set(string.toLowerCase().split(""));
  let proccessed = "";
  for (let letter of sito) {
    proccessed += letter;
  }
  return proccessed === string.toLowerCase()
}

console.log(isIsogram(word))