let url1 = `https://jsonplaceholder.typicode.com/todos`

async function getTodos() {
  const response = await fetch(url1);
  return await response.json();
}

async function printTodos() {
  let arr:object[] = [];
  await getTodos().then(
    (res) => {
      for (let i = 0; i < res.length; i++) {
        arr.push({
          id: res[i].id,
          title: res[i].title
        })
      }
    }
  )
  return arr
}

console.log(printTodos().then((arr) => console.log(arr)))
