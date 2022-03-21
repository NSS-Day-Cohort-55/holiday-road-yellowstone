import { getCards } from "./formatCards.js"
import {parkData} from "../parks/ParkDataManager.js"
import { getBasicWeather } from "../weather/WeatherDataManager.js"
import { settings } from "../Settings.js"

export const displayCards = () =>{

    parkData(settings.npsKey, "stateCode=tn" )
        .then(dataFromPark =>{
            // console.log(typeof dataFromPark)
            document.querySelector(".test").innerHTML += dataFromPark.data.map(data => data.description)
            document.querySelector(".test").innerHTML += dataFromPark.data.map(data => data.fullName)
        })
        
}