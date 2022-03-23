//This function fetches weather data from the weather api and returns a json object
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

