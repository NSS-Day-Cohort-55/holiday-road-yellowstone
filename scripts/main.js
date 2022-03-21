import {bizarreData} from "./attractions/AttractionDataManager.js"
import { eatData } from "./eateries/EateryDataManager.js"
import { parkData } from "./parks/ParkDataManager.js"
import { footerHTML } from "./footer/Footer.js"
import { displayCards } from "./cards/renderCards.js"

//selects elements needed for rendering of cards
const panels = document.querySelectorAll(".panel");
const text = document.querySelectorAll(".text-box")
const titles = document.querySelectorAll(".panel-title")

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

//assigns an event listener to each card that resets all panels to inactive, then sets the clicked panel to active
panels.forEach((panel) => {
    panel.addEventListener("click", () => {
      removeActiveClasses();
      displayTitles();
      // clearDisplay();
      panel.classList.add("active");
      const displayText = panel.querySelector('.text-box');
      const removeTitle = panel.querySelector('.panel-title');
  
      setTimeout(func =>{
          displayText.style.cssText = 'display: block;';
      }, 700),
      removeTitle.style.cssText = 'opacity:0;';
      
    });
  });

//removes active from the class name of all panels
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
const render= ()=>{
    parkData().then((obj)=>{document.querySelector(".test").innerHTML=renderHtml(obj)})
}

// render()


displayCards()
footerHTML()