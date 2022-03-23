import {stateNames} from "../StateNames/stateNames.js"



export const bizarreInnerHTML = () => {
    stateNames()
        .then( obj =>{
            bizarreData().then((obj) => {
                document.querySelector("#panel--att").innerHTML = bizarreHtmlRender(obj);
              });
        })

  };