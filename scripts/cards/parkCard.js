import { getCards } from "./formatCards.js"
import {parkData} from "../parks/ParkDataManager.js"
import { getWeatherData } from "../weather/WeatherDataManager.js"
import { settings } from "../Settings.js"

//This functions injects weather data into the park card after it is rendered
const injectWeather = (lat, long, apikey) =>{
    const contentTarget = document.querySelector(".weather-data-el")
    
    //this loop cycles through the different days and returns their temperature and weather condition
    for(let i = 0; i<5; i++){
        getWeatherData(lat, long, apikey)
        .then(weatherData =>{
            //These three variables convert the epoc time in "dt" to a usable date
            let utc = weatherData.daily[i].dt
            let date = new Date(0)
            //usable date in CST
            date.setUTCSeconds(utc)
            const today = date. getDate();

             contentTarget.innerHTML += `<p>March ${today}: ${weatherData.daily[i].weather[0].description}, high of ${parseInt(1.8*(weatherData.daily[i].temp.max - 273) +32)}&deg</p> `
        })
    }

}

const injectActivities = (activities) =>{
    const contentTarget = document.querySelector(".activity-data-el")
    for(let i = 0; i<activities.length; i++){
        contentTarget.innerHTML += `<li>${activities[i].name}</li>`
    }
   
}

//This function modifies the default "panel--park" card on the HTML, replacing it with data generated via the park api 
export const ParkCard = (state, selectId) =>{
    let dataToRender = ""
    //pulls in data from park api and formats/renders it into HTML
    parkData(settings.npsKey, state )
        .then(dataFromPark =>{
                dataToRender += `<div class="panel" id="panel--park" style="background-image: url('${dataFromPark.data[selectId].images[0].url}');">
                <h2 class="panel-title">${dataFromPark.data[selectId].fullName}</h2>
                <div class="text-box">
                <h3>Things to do</h3>
                <ul class="activity-data-el"></ul>
                <h3>Five day forecast:</h3>
                <div class="weather-data-el">

                </div>
                <h3>${dataFromPark.data[selectId].fullName}</h3>
                <h4>About the park:</h4>
                <div class="park-data-el">
                <p>Admission: $${dataFromPark.data[selectId].entranceFees[0].cost}</p>
                <p>${dataFromPark.data[selectId].description}</p>
                <a href="${dataFromPark.data[selectId].url}" target="_blank">More info</a>
                </div>
                </div>
                </div>`
            document.querySelector("#panel--park").innerHTML = dataToRender
            injectActivities(dataFromPark.data[0].activities) 
            injectWeather(dataFromPark.data[selectId].latitude, dataFromPark.data[selectId].longitude, settings.weatherKey)           
        }) 
    
}

export const EateryCard = () =>{

}
export const BizCard = () =>{
    
}

{/* <p>Monday: ${renderWeather(dataFromPark.data[0].latitude, dataFromPark.data[0].longitude, settings.weatherKey, 0)}</p>
<p>Tuesday: ${renderWeather(dataFromPark.data[1].latitude, dataFromPark.data[1].longitude, settings.weatherKey, 1)}</p>
<p>Wednesday: ${renderWeather(dataFromPark.data[2].latitude, dataFromPark.data[2].longitude, settings.weatherKey, 2)}</p>
<p>Thursday: ${renderWeather(dataFromPark.data[3].latitude, dataFromPark.data[3].longitude, settings.weatherKey, 3)}</p>
<p>Friday: ${renderWeather(dataFromPark.data[4].latitude, dataFromPark.data[4].longitude, settings.weatherKey, 4)}</p> */}

