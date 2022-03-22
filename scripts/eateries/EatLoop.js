import { eatData } from "./EateryDataManager.js";
import { eatHtmlRender } from "./EatHTML.js";

export const eatInnerHTML=()=>{
        eatData().then((obj)=>{document.querySelector(".test").innerHTML=eatHtmlRender(obj)})
}
