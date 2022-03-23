import { bizarreData } from "./attractions/AttractionDataManager.js";
import { eatData } from "./eateries/EateryDataManager.js";
import { stateNames } from "./StateNames/stateNames.js";

export const eatDropRender = () => {
  eatData().then((obj) => {
    for (const i of obj) {
      document.querySelector("#eat-dropdown").innerHTML += `
<option class="eatListen--${i.id}" value="eatName">${i.businessName}</option>
    `;
    }
  });
};

export const bizarreDropRender = () => {
  bizarreData().then((obj) => {
    for (const i of obj) {
      document.querySelector("#bizarre-dropdown").innerHTML += `
      <option class="bizarreListen--${i.id} value="bizarreName">${i.name}</option>
      `;
    }
  });
};
