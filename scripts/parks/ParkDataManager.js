 export const parkData= (apikey, call) => {
     return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${apikey}&stateCode=${call}`)
     .then(response=> response.json())
 }