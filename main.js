// This function is automatically called whenever the content of the search box changes.
document.getElementById("searchBox").addEventListener("input", function() {
    var query = document.getElementById("searchBox").value;
    var searchUrl1 = "https://support.microsoft.com/search/results?query=" + encodeURIComponent(query);
    if (query.trim() === "") {
        // If the search input is empty, close the search container by setting iframe's src to an empty string.
        document.getElementById("searchFrame").src = "";
    } else {
        // If there's a search query, update the search container with the search results.
        document.getElementById("searchFrame").src = searchUrl1;
    }
});

var button2 = document.getElementById("button2");
var searchUrl2 = "https://outlook.office.com/mail/";
// Voeg een event listener toe aan de knop
button2.addEventListener("click", function() {
// Wanneer de knop wordt ingedrukt, maak de bron van het iframe leeg
document.getElementById("searchBox").value = "";

document.getElementById("searchFrame").src = searchUrl2;
});
var button3 = document.getElementById("button3");

// Voeg een event listener toe aan de knop
button3.addEventListener("click", function() {
// Wanneer de knop wordt ingedrukt, maak de bron van het iframe leeg
document.getElementById("searchBox").value = "";
    // Maak ook de bron van het iframe leeg
document.getElementById("searchFrame").src = "";
})
var button4 = document.getElementById("button4");

// Voeg een event listener toe aan de knop
button4.addEventListener("click", function() {
// Wanneer de knop wordt ingedrukt, maak de bron van het iframe leeg
document.getElementById("searchBox").value = "";
    // Maak ook de bron van het iframe leeg
document.getElementById("searchFrame").src = "";
})
var button5 = document.getElementById("button5");

// Voeg een event listener toe aan de knop
button5.addEventListener("click", function() {
// Wanneer de knop wordt ingedrukt, maak de bron van het iframe leeg
document.getElementById("searchBox").value = "";
    // Maak ook de bron van het iframe leeg
document.getElementById("searchFrame").src = "";
})
var button6 = document.getElementById("button6");

// Voeg een event listener toe aan de knop
button6.addEventListener("click", function() {
// Wanneer de knop wordt ingedrukt, maak de bron van het iframe leeg
document.getElementById("searchBox").value = "";
    // Maak ook de bron van het iframe leeg
document.getElementById("searchFrame").src = "";
})
var button7 = document.getElementById("button7");

// Voeg een event listener toe aan de knop
button7.addEventListener("click", function() {
// Wanneer de knop wordt ingedrukt, maak de bron van het iframe leeg
document.getElementById("searchBox").value = "";
    // Maak ook de bron van het iframe leeg
document.getElementById("searchFrame").src = "";
})
