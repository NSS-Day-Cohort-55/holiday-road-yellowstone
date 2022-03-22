import {bizarreData} from "./attractions/AttractionDataManager.js"
import { eatData } from "./eateries/EateryDataManager.js"
import { parkData } from "./parks/ParkDataManager.js"
import { footerHTML } from "./footer/Footer.js"
import { displayCards } from "./cards/renderCards.js"
import { eatDropRender } from "./dropdown.js"

//selects elements needed for rendering of cards


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
const panels = document.querySelectorAll(".panel");
const text = document.querySelectorAll(".text-box")
const titles = document.querySelectorAll(".panel-title")

const removeActiveClasses = () => {
    panels.forEach((panel) => {
      panel.classList.remove("active");
  
    });
    text.forEach(text =>{
      text.style.display = "none";
  })
  
  };
  
  //work in progress to remove display of vertical titles when card expands
  const displayTitles = () =>{
      titles.forEach(title =>{
          title.classList.display = "block";
      })
  }
//assigns a listener to the card container, and performs actions based on the target
document.querySelector(".card-container-el")
    .addEventListener("click", clickEvent =>{

        if(clickEvent.target.id === "panel"){
            removeActiveClasses()
            displayTitles()
            clickEvent.target.classList.add("active");
            const displayText = clickEvent.target.querySelector('.text-box');
            const removeTitle = clickEvent.target.querySelector('.panel-title');
            setTimeout(func =>{displayText.style.cssText = 'display: block;'}, 700),removeTitle.style.cssText = 'opacity:0;'
            
            
        }
    })


const render= ()=>{
    parkData().then((obj)=>{document.querySelector(".test").innerHTML=renderHtml(obj)})
}

// render()

eatDropRender()
displayCards()
footerHTML()