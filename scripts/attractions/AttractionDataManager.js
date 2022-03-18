export const bizarreData= () =>{
    return fetch("http://holidayroad.nss.team/bizarreries")
    .then(response=>response.json())
    .then(obj=>{return obj})
}