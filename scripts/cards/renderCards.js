import { getCards } from "./formatCards.js"
import {parkData} from "../parks/ParkDataManager.js"
import { renderWeather } from "../weather/WeatherDataManager.js"
import { settings } from "../Settings.js"

export const ParkCard = () =>{
    let dataToRender = ""
    //pulls in data from park api and formats/renders it into HTML
    parkData(settings.npsKey, "stateCode=tn" )
        .then(dataFromPark =>{
                dataToRender += `<div class="panel" id="panel" style="background-image: url('${dataFromPark.data[0].images[0].url}');">
                <h2 class="panel-title">${dataFromPark.data[0].fullName}</h2>
                <div class="text-box">
                <p>Five day forecast:</p>
                <div class="weather-data-el">
                <p>Monday: ${renderWeather(dataFromPark.data[0].latitude, dataFromPark.data[0].longitude, settings.weatherKey, 0)}</p>

                </div>
                <h3>${dataFromPark.data[0].fullName}</h3>
                <p>${dataFromPark.data[0].description}</p>
                <button class="_Save Trip_">Save</button>
                </div>
                </div>`
            
            document.querySelector(".card-container-el").innerHTML += dataToRender            
        })      
}

export const EateryCard = () =>{

}
export const BizCard = () =>{
    
}


// <p>Tuesday:${renderWeather(dataFromPark.data[i].latitude, dataFromPark.data[i].longitude, settings.weatherKey, 1)}</p>
// <p>Wednesday:${renderWeather(dataFromPark.data[i].latitude, dataFromPark.data[i].longitude, settings.weatherKey, 2)}</p>
// <p>Thursday:${renderWeather(dataFromPark.data[i].latitude, dataFromPark.data[i].longitude, settings.weatherKey, 3)}</p>
// <p>Friday:${renderWeather(dataFromPark.data[i].latitude, dataFromPark.data[i].longitude, settings.weatherKey, 4)}</p>