// Haetaan tiedot
fetch('https://api.chucknorris.io/jokes/random?category=movie')

    // Muunnetaan vastaus JSON-muotoon
    .then(function (response) {
        return response.json();
    })

    // Käsitellään muunnettu (eli JSON-muotoinen) vastaus
    .then(function (responseJson) {
        tapahtumat(responseJson);
    })

    // Jos tuli jokin virhe
    .catch(function (error) {
        document.getElementById("vastaus").innerHTML = "<p> The joke flew over my head... <br> Try again in 15 minutes.</p>" + error;
    });

function tapahtumat(data) {
    var teksti = "<h3>Here’s a Chuck Norris joke for you!</h3>";
    teksti += "<p><strong>" + data.value + "</strong></p>";

    teksti += "<p>Refresh the page to generate a new joke</p>";

    document.getElementById("vastaus").innerHTML = teksti;
}
