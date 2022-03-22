import {parkData} from "../parks/ParkDataManager.js"
import { getBasicWeather } from "../weather/WeatherDataManager.js"

export const getCards = (parkObj, weatherObj) =>{
    return 
    `
        <div class="panel"> 
            <h2 class="panel-title">${parkObj.fullName}</h2>
            <div class="text-box">
            <p>Five day forecast:</p>
            <p>futureObj</p>
            <p>futureObj</p>
            <p>futureObj</p>
            <p>futureObj</p>
            <p>futureObj</p>
            <h3>${parkObj.fullName}</h3>
            <p>${parkObj.description}</p>
            <button class="save-el">Save</button>
            </div>
        </div>
    `
}


// const renderCards = () =>{
//     let contentTarget = ""
// //     parkData()
// //         .then(parkArr =>{
// //             for(let i = 0; i<parkArr.data.length; i++){

// //             }
// //         })

// // }

// style="background-image: url('${parkObj.fullName}');