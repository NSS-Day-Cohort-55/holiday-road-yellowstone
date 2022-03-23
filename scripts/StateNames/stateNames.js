export const stateNames=()=>{
    return fetch("http://localhost:8088/states")
    .then(response=>response.json())
}