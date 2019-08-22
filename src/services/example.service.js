export async function example (provider, token) {
  const response = await window.fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json()).catch(error => console.log(error))

  return response
}
