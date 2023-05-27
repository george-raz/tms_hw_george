const student = {
  name: 'John',
  age: 19,
  isHappy: true
}

for (key in student) {
  console.log(key)
}

for (key in student) {
  console.log(student[key])
}