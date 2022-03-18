export const weatherData= ()=> {
    return fetch("http://api.openweathermap.org/data/2.5/forecast?lon=36.1627&lat=86.7816&appid=fd25ef97a7a14118bfa554d198bba7f1")
    .then(response=>response.json())
}