export const footerHTML= ()=>{
    document.querySelector(".footer").innerHTML= `<div id="button"></div>
    <div id="container">
    <div id="cont">
    <div class="footer_center">
      <H3>&copy; ${new Date().getFullYear()}</H3>
  <H6>You won't need a golden calculator to navigate this website.</H6>
  <H3>Yellow-Stone Travel</H3>  
    </div>
    </div>
    </div>
     `
    
}