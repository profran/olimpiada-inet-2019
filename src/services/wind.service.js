export async function getWindData () {
  const response = await window.fetch('http://192.168.30.203:3002/wind_data')
    .then(response => response.json()).catch(error => console.log(error))

  return response
}
