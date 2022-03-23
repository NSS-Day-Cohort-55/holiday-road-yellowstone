import { bizarreData } from "./AttractionDataManager.js";
import { bizarreHtmlRender } from "./BizarreHTML.js";

export const bizarreInnerHTML = () => {
  bizarreData().then((obj) => {
    document.querySelector("#panel--att").innerHTML = bizarreHtmlRender(obj);
  });
};
