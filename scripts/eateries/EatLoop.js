import { eatData } from "./EateryDataManager.js";
import { eatHtmlRender } from "./EatHTML.js";

export const eatInnerHTML = () => {
  eatData().then((obj) => {
    document.querySelector("#panel--eat").innerHTML = eatHtmlRender(obj);
  });
};
