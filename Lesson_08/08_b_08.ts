const saladRecipe = new Map <string, number>([
  ["Cucumbers", 300],
  ["Tomatoes", 200],
  ["Salt", 10],
  ["SourCream", 110]
])

for (let ing of saladRecipe.keys()) {
  if (saladRecipe.get(ing)! > 100) {
    console.log(ing)
  }
}