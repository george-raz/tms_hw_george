const cyberBulling: string = 'This website is for losers LOL!';

function deleteVowels(x: string): string {
  x = x.split("").filter((value) => {    
    if (value.toLowerCase() !== "a" && value.toLowerCase() !== "e" &&
        value.toLowerCase() !== "i" && value.toLowerCase() !== "o" &&
        value.toLowerCase() !== "u"
        ) {
          return value
        }
  }).join("")
  return x
}

console.log(deleteVowels(cyberBulling));