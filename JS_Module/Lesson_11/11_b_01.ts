const urlik = "https://jsonplaceholder.typicode.com/posts";

async function getPosts(x:number) {
  const response = await fetch(urlik);
  const json = await response.json();
  console.log(json[x].title)
  return json
}

const showPosts = async () => {
  await getPosts(16)
  .catch(() => {console.log(new Error("Error"))})
  await getPosts(24)
  .catch(() => {console.log(new Error("Error"))})
  await getPosts(8)
  .catch(() => {console.log(new Error("Error"))})
  await getPosts(3)
  .catch(() => {console.log(new Error("Error"))})
}

showPosts()

const showPostsChain = () => {
  getPosts(16)
  .catch(() => {console.log(new Error("Error"))})
  .then(() => getPosts(24))
  .catch(() => {console.log(new Error("Error"))})
  .then(() => getPosts(8))
  .catch(() => {console.log(new Error("Error"))})
  .then(() => getPosts(3))
  .catch(() => {console.log(new Error("Error"))})
}

showPostsChain()