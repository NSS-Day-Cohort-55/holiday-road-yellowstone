import { bizarreData } from "./attractions/AttractionDataManager.js";
import { eatData } from "./eateries/EateryDataManager.js";
import { parkData } from "./parks/ParkDataManager.js";
import { defaultCards } from "./cards/defaultCards.js";
import { footerHTML } from "./footer/Footer.js";
import { ParkCard } from "./cards/parkCard.js";
// import { displayCards } from "./cards/renderCards.js"
import { eatDropRender, bizarreDropRender, stateDropRender, parkDropRender } from "./dropdown.js";
import { eatInnerHTML } from "./eateries/EatLoop.js";

// //selects elements needed for rendering of cards

const weatherFunc = (obj) => {
  obj.then((i) => {
    document.querySelector(".test").innerHTML = `${i.list.map(
      (butt) => butt.main.temp
    )}`;
  });
};
//  weatherFunc(getWeatherData())

// // for parkData
// const renderNestedHtml = (allInfo) => {
//   let html = "";
//   for (const i of allInfo.data) {
//     html += `${i.fullName}`;
//   }
//   return html;
// };

// const renderNested = () => {
//   parkData().then((obj) => {
//     document.querySelector(".test").innerHTML = renderNestedHtml(obj);
//   });
// };

// // renderNested()

// // for BizzareData and eatData
// const renderHtml = (allInfo) => {
//   let html = "";
//   for (const i of allInfo) {
//     html += `${i.fullName}`;
//   }
//   return html;
// };
const panels = document.querySelectorAll(".panel");
const text = document.querySelectorAll(".text-box");
const titles = document.querySelectorAll(".panel-title");

const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
  text.forEach((text) => {
    text.style.display = "none";
  });
};

//work in progress to remove display of vertical titles when card expands
const displayTitles = () => {
  titles.forEach((title) => {
    title.classList.display = "block";
  });
};
const stateSelector = document.querySelector("#state-dropdown")
const parkSelector = document.querySelector("#park-dropdown")
const eatSelector = document.querySelector("#eat-dropdown")
let stateCode = ""

stateSelector.addEventListener("change", changeEvent =>{
  stateCode = stateSelector.value
  parkDropRender(stateCode)
})

parkSelector.addEventListener("change", changeEvent =>{
  const index = parseInt(parkSelector.value)
  ParkCard(stateCode, index)
})

eatSelector.addEventListener("change", changeEvent =>{
  eatData().then(obj=>{
    for (const i of obj){
    if (eatSelector.value===i.businessName)
{
  eatInnerHTML(i)
}    }
  })


  //const index = parseInt(eatSelector.value)
  // eatCard( index)
})

//assigns a listener to the card container, and performs actions based on the target
document
  .querySelector(".card-container-el")
  .addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id.startsWith("panel")) {
      removeActiveClasses();
      displayTitles();
      clickEvent.target.classList.add("active");
      const displayText = clickEvent.target.querySelector(".text-box");
      const removeTitle = clickEvent.target.querySelector(".panel-title");
      setTimeout((func) => {
        displayText.style.cssText = "display: block;";
      }, 700),
        (removeTitle.style.cssText = "opacity:0;");
    }
  });

// const render = () => {
//   parkData().then((obj) => {
//     document.querySelector(".test").innerHTML = renderHtml(obj);
//   });
// };

// render()
defaultCards();
// ParkCard("tn", 3);
eatDropRender();
// displayCards()
footerHTML();
bizarreDropRender();
stateDropRender();

// event listeners

const dropdownElement = document.querySelector(".dropDowns");

dropdownElement.addEventListener("change", (event) => {});
