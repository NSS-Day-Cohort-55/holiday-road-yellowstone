 export const parkData= () => {
     return fetch("https://developer.nps.gov/api/v1/parks?api_key=GfUbZEw0idJu6Pte5NNF1gRY7c6WRgUFhIEeczSM")
     .then(response=> response.json())
 }