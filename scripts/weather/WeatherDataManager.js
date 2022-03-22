//

export const getWeatherData = (lat, long, apikey) =>{
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely&appid=${apikey}&timezone=America/Chicago`)
    .then(response => response.json())
}

const getGeoCode = (city, state, apikey) =>{
    return fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},+1&limit=5&appid=${apikey}`)
        .then(response => response.json())
        .then(things => {
            return things
        })
}

export const renderLatLong = (city, state, apikey) =>{
    const weatherActual = getGeoCode(city, state, apikey)
        .then(coords =>getWeatherData(coords[0].lat, coords[0].lon, apikey)
        .then(result => {
            document.querySelector(".body").innerHTML += `The temperature feels like: ${parseInt(1.8*(result.list[0].main.feels_like - 273) +32)} degrees.<br>
             The temperature is actually: ${parseInt(1.8*(result.list[0].main.temp - 273) +32)} degrees.<br>
             Conditions are currently: ${result.list[0].weather.id}.<br>
             Clouds are currently: ${result.list[0].clouds.all}.<br><br>`

        })) 
    return weatherActual
}
export const renderWeather = (lat, long, apikey, index) =>{
    getWeatherData(lat, long, apikey)
        .then(weatherData =>{
            console.log(weatherData)
            return parseInt(1.8*(weatherData.daily[index].temp.day - 273) +32)
        })
}
