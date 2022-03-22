import { getCards } from "./formatCards.js"
import {parkData} from "../parks/ParkDataManager.js"
import { renderWeather } from "../weather/WeatherDataManager.js"
import { settings } from "../Settings.js"

export const displayCards = () =>{
    let dataToRender = ""
    //pulls in data from park api and formats/renders it into HTML
    parkData(settings.npsKey, "stateCode=tn" )
        .then(dataFromPark =>{
            for(let i = 0; i < 4; i++){
                dataToRender += `<div class="panel" id="panel" style="background-image: url('${dataFromPark.data[i].images[0].url}');">`
                dataToRender += `<h2 class="panel-title">${dataFromPark.data[i].fullName}</h2>`
                dataToRender += '<div class="text-box">'
                dataToRender += '<p>Five day forecast:</p>'
                // dataToRender += `<p>Monday: ${renderWeather(dataFromPark.data[i].latitude, dataFromPark.data[i].longitude, settings.weatherKey, 0)}</p>`
                // dataToRender += `<p>Tuesday:${renderWeather(dataFromPark.data[i].latitude, dataFromPark.data[i].longitude, settings.weatherKey, 1)}</p>`
                dataToRender += `<p>Wednesday:${renderWeather(dataFromPark.data[i].latitude, dataFromPark.data[i].longitude, settings.weatherKey, 2)}</p>`
                // dataToRender += `<p>Thursday:${renderWeather(dataFromPark.data[i].latitude, dataFromPark.data[i].longitude, settings.weatherKey, 3)}</p>`
                // dataToRender += `<p>Friday:${renderWeather(dataFromPark.data[i].latitude, dataFromPark.data[i].longitude, settings.weatherKey, 4)}</p>`
                dataToRender += `<h3>${dataFromPark.data[i].fullName}</h3>`
                dataToRender += `<p>${dataFromPark.data[i].description}</p>`
                dataToRender += '<button class="_Save Trip_">Save</button>'
                dataToRender += '</div>'
                dataToRender += '</div>'  
            }
            document.querySelector(".card-container-el").innerHTML += dataToRender            
        })      
}