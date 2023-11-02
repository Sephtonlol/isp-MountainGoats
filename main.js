// als de zoekbalk leeg is zal de Iframe automatisch sluiten
document.getElementById("searchBox").addEventListener("input", function() {
    var query = document.getElementById("searchBox").value;
    var searchUrl1 = "https://support.microsoft.com/search/results?query=" + encodeURIComponent(query);
    var searchFrame = document.getElementById("searchFrame");
    if (query.trim() === "") {
        // "if" zal die sluiten
        document.getElementById("searchFrame").src = "";
    } else {
        // "else" zal die open blijven
        document.getElementById("searchFrame").src = searchUrl1;
        // dit zorgt ervoor dazt scrollen werkt met gebruik van deze source in de Iframe
        searchFrame.removeAttribute("scrolling");
        searchFrame.setAttribute("scrolling", "yes");
    }
});

var button4 = document.getElementById("button4");
var searchUrl2 = "https://www.bing.com/translator";
button4.addEventListener("click", function() {
// Wanneer de knop wordt ingedrukt zal de zoekbalk automatisch leeg gemaakt worden
document.getElementById("searchBox").value = "";
    // opent een website in de Iframe
document.getElementById("searchFrame").src = searchUrl2;
});
var button7 = document.getElementById("button7");
var searchUrl3 = "https://www.bing.com/search?q=Bing+AI&showconv=1&FORM=hpcodx&itrid=654275aed15a494093ecbc9394a1f932";
var searchFrame = document.getElementById("searchFrame");
// Voeg een event listener toe aan de knop
button7.addEventListener("click", function() {
// Wanneer de knop wordt ingedrukt zal de zoekbalk automatisch leeg gemaakt worden
document.getElementById("searchBox").value = "";
    // opent een website in de Iframe
document.getElementById("searchFrame").src = searchUrl3;
searchFrame.removeAttribute("scrolling");
searchFrame.setAttribute("scrolling", "no");
});

var icon = document.getElementById("icon");

icon.onclick= function(){
    document.body.classList.toggle("dark-theme");
};

const button = document.getElementById('mountainGoats');
const mountainGoatsByClass = document.getElementsByClassName("play");
const audio = new Audio("./Assets/goatScream.mp3");

let clickCount = 0;
let lastClickTime = 0;
button.addEventListener('click', () => {
  const currentTime = new Date().getTime();
//   telt alleen clicks binnen de 2 seconden time frame
  if (currentTime - lastClickTime > 2000) {
    clickCount = 0;
  }
  clickCount++;
  lastClickTime = currentTime;
  if (clickCount === 7) {
    audio.play();
    // reset de click counter na het bereiken van de 7 clicks
    clickCount = 0; 
  }
});