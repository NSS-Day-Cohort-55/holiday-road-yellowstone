export const eatHtmlRender= (obj)=>{
    return `
<div class="panel" id="panel--eat" style="background:linear-gradient(#adc698, white);">
<div class="title-div">
  <h2 class="panel-title">${obj.businessName}</h2>
</div>
<div class="text-box">
<p>Wifi access? ${obj.ameneties.wifi ? "Yes" : "No" }</p>
    <h3>${obj.city}, ${obj.state}</h3>
    <p>${obj.description}</p>
  <button class="save-el">Save</button>
</div>
</div>
    `
}




