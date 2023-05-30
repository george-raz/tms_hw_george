type Iuser = {
  firstName?: string,
  surname?: string,
  age?: string
}

let user: Iuser = {
  firstName: 'Петр',
  'surname': 'Петров',
  //'age': '20 лет',
}

let {firstName = "Анон", surname = "Анонимович", age = "? лет"} = user;

console.log(firstName)
console.log(surname)
console.log(age)