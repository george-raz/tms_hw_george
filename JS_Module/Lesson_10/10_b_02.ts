const humanA = {
  firstName: "Greg"
}

const humanB = {
  firstName: "Mike"
}

function sayHi () {
  console.log(`My name is ${this.firstName}`)
}

sayHi.call(humanA)