import { bizarreData } from "./attractions/AttractionDataManager.js";
import { eatData } from "./eateries/EateryDataManager.js";
import { stateNames } from "./StateNames/stateNames.js";
import { parkData } from "./parks/ParkDataManager.js"
import { settings } from "./Settings.js"

export const eatDropRender = () => {
  eatData().then((obj) => {
    for (const i of obj) {
      document.querySelector("#eat-dropdown").innerHTML += `
<option class="eatListen--${i.id}" value="${i.businessName}">${i.businessName}</option>
    `;
    }
  });
};

export const bizarreDropRender = () => {
  bizarreData().then((obj) => {
    for (const i of obj) {
      document.querySelector("#bizarre-dropdown").innerHTML += `
      <option class="bizarreListen--${i.id}" value="bizarreName">${i.name}</option>
      `;
    }
  });
};

export const stateDropRender = () =>{
  stateNames().then((obj) =>{
      for(const thing of obj){
        document.querySelector("#state-dropdown").innerHTML += `<option class="state--${thing.id}" value="${thing.abbreviation}">${thing.name}</option>`;
      }
    })
}

export const parkDropRender = (stateCode) =>{
  parkData(settings.npsKey, stateCode)
    .then(dataFromPark =>{
      let i = 0;
      document.querySelector("#park-dropdown").innerHTML = ""
      for(const parkObj of dataFromPark.data){
          document.querySelector("#park-dropdown").innerHTML += `<option class="park--${parkObj.id}" value="${i}">${parkObj.fullName}</option>`
          i++

      }
    })   
}

// const weatherFunc = (obj) => {
//   obj.then((i) => {
//     document.querySelector(".test").innerHTML = `${i.list.map(
//       (butt) => butt.main.temp
//     )}`;
//   });
// };
