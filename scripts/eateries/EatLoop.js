import { eatData } from "./EateryDataManager.js";
import { eatHtmlRender } from "./EatHTML.js";

export const eatInnerHTML = (butt) => {
    
    document.querySelector("#panel--eat").innerHTML = eatHtmlRender(butt);
};
