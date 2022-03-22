import { getCards } from "./formatCards.js"
import {parkData} from "../parks/ParkDataManager.js"
import { getBasicWeather } from "../weather/WeatherDataManager.js"
import { settings } from "../Settings.js"

export const displayCards = () =>{
    let dataToRender = ""
    //pulls in data from park api and formats/renders it into HTML
    parkData(settings.npsKey, "stateCode=tn" )
        .then(dataFromPark =>{
            const dataArr = dataFromPark.data
            for(let i = 0; i < 4; i++){
                dataToRender += `<div class="panel" id="panel" style="background-image: url('${dataFromPark.data[i].images[0].url}');">`
                dataToRender += `<h2 class="panel-title">${dataFromPark.data[i].fullName}</h2>`
                dataToRender += '<div class="text-box">'
                dataToRender += '<p>Five day forecast:</p>'
                dataToRender += '<p>Monday:</p>'
                dataToRender += '<p>Tuesday:</p>'
                dataToRender += '<p>Wednesday:</p>'
                dataToRender += '<p>Thursday:</p>'
                dataToRender += '<p>Friday:</p>'
                dataToRender += `<h3>${dataFromPark.data[i].fullName}</h3>`
                dataToRender += `<p>${dataFromPark.data[i].description}</p>`
                dataToRender += '<button class="save-el">Save</button>'
                dataToRender += '</div>'
                dataToRender += '</div>'  
            }
            document.querySelector(".card-container-el").innerHTML += dataToRender            
        })      
}