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



