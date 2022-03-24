import { bizarreData } from "./AttractionDataManager.js";
import { bizarreHtmlRender } from "./BizarreHTML.js";

export const bizarreInnerHTML = (butt) => {
  document.querySelector("#panel--att").innerHTML = bizarreHtmlRender(butt);
};
