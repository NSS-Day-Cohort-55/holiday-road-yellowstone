export const stateNames=()=>{
    return fetch("http://localhost:8088")
    .then(response=>response.json())
}