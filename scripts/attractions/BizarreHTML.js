export const bizarreHtmlRender = (obj) => {
  return `
  <div class="panel" id="panel--att" style="background:linear-gradient(#adc698, white);">
  <div class="title-div">
    <h2 class="panel-title">${obj.name}</h2>
  </div>
  <div class="text-box">
  <p>Restrooms? ${obj.ameneties.restrooms ? "Yes" : "No"}</p>
      <h3>${obj.city}, ${obj.state}</h3>
      <p>${obj.description}</p>
    <button class="save-el">Save</button>
  </div>
  </div>
    `;
};
