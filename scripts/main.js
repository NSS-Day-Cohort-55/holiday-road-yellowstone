import {bizarreData} from "./attractions/AttractionDataManager.js"
import { eatData } from "./eateries/EateryDataManager.js"
import { parkData } from "./parks/ParkDataManager.js"
import { footerHTML } from "./footer/Footer.js"



const weatherFunc= (obj)=>{
    obj.then((i)=>{document.querySelector(".test").innerHTML=`${i.list.map(butt=>butt.main.temp)}`})
}
//  weatherFunc(getWeatherData())

// for parkData 
const renderNestedHtml= (allInfo)=>{
    let html=""
    for (const i of allInfo.data){
        html+=`${i.fullName}`
        
    }
    return html
}

const renderNested= ()=>{
    parkData().then((obj)=>{document.querySelector(".test").innerHTML=renderNestedHtml(obj)})
}

// renderNested()



// for BizzareData and eatData
const renderHtml= (allInfo)=>{
    let html=""
    for (const i of allInfo){
        html+=`${i.fullName}`
        
    }
    return html
}

const render= ()=>{
    parkData().then((obj)=>{document.querySelector(".test").innerHTML=renderHtml(obj)})
}

// render()



footerHTML()