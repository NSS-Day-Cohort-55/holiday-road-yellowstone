//fd25ef97a7a14118bfa554d198bba7f1

getWeatherData = (lat, long) =>{
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=fd25ef97a7a14118bfa554d198bba7f1`)
    .then(response => response.json())
    .then(result => {return result})
}

getGeoCode = (city, state) =>{
    return fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},+1&limit=5&appid=f660d54afdf04b8a4b8020cd8e357035`)
        .then(response => response.json())
        .then(things => {
            return things
        })
}

export const renderLatLong = () =>{
    const weatherActual = getGeoCode("nashville", "tn")
        .then(coords =>getWeatherData(coords[0].lat, coords[0].lon)
        .then(result => {
            document.querySelector(".body").innerHTML += `The temperature feels like: ${parseInt(1.8*(result.list[0].main.feels_like - 273) +32)} degrees.<br>
             The temperature is actually: ${parseInt(1.8*(result.list[0].main.temp - 273) +32)} degrees.<br>
             Conditions are currently: ${result.list[0].weather.id}.<br>
             Clouds are currently: ${result.list[0].clouds.all}.<br><br>`

        })) 
    return weatherActual
}
