const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']

const usersExt = users.map((value, index) => {
  return value = `member ${index + 1}: ${value}`;
})

console.log(usersExt);