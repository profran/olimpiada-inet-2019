export async function getWindData () {
  const response = await window.fetch('http://localhost:3002/wind_data')
    .then(response => response.json()).catch(error => console.log(error))

  return response
}
