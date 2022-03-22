export const eatHtmlRender= (obj)=>{
    return `
    <div class="panel " id="id--${obj.id}" style="background-color:#EEEEAA;">
    <div class="title-div">
    <h2 class="panel-title>${obj.businessName}</h2>
    </div>
    <div class="text-box">
    <h3>${obj.city}, ${obj.state}</h3>
    <p>${obj.description}</p>
    <p>Wifi access? ${obj.ameneties.wifi ? "Yes" : "No" }</p>
<button class="save-el">Save</button>
</div>
</div>
    `
}



<div class="panel" style="background-image: url('./nashville.jpg');">
<div class="title-div">
  <h2 class="panel-title">Nashville, TN</h2>
</div>
<div class="text-box">
  <p>Five day forecast:</p>
  <p>Monday: Sunny, 60 degrees</p>
  <p>Tuesday: Sunny, 60 degrees</p>
  <p>Wednesday: Sunny, 60 degrees</p>
  <p>Thursday: Sunny, 60 degrees</p>
  <p>Friday: Sunny, 60 degrees</p>
  <h3>Nashville, TN</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vitae quibusdam id incidunt ratione veniam saepe dolor natus quidem optio aliquam quos veritatis quisquam, placeat debitis corporis ut neque cumque.</p>
  <button class="save-el">Save</button>
</div>
</div>