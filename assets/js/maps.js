
function mapAPIStuff() {
    //JS for longitude and latitude, taken from https://developer.mozilla.org/en-US/docs/Web/API/Coordinates/longitude
    //Will use this function to determine the user's location and take the longitude and latitude to apply to a certain dog breed

    let locationButtonEl = document.getElementById("get-location");
    let latText = document.getElementById("latitude");
    let longText = document.getElementById("longitude");

    locationButtonEl.addEventListener("click", function () {
        navigator.geolocation.getCurrentPosition(function (position) {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;

            latText.innerText = lat.toFixed(2);
            longText.innerText = long.toFixed(2);
        });
    });

    //Function that displays the map on the page, may ultimately delete this if we deem it unnecessary

    function initMap() {
        // The location of Saint Paul
        var stp = { lat: 44.954, lng: -93.091 };
        // The map, centered at Saint Paul
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 4,
            center: stp
        });
        // The marker, positioned at Saint Paul
        var marker = new google.maps.Marker({ position: stp, map: map });
    }

    function displayMaps() {
        // const hi = $("<div>");
        // hi.text("hello world");
        // // $("#map").append(hi);

        initMap();
    }
    displayMaps();

    //Google Maps API Variables
    //May need to delete if we will not use the map

    const apiKey = "AIzaSyCTeE4A-78FaUSVBlEKSvpdcDqTT8eFg3E";
    const src =
        "https://maps.googleapis.com/maps/api/js?key=" +
        apiKey +
        "&callback=initMap";
    var unirest = require("unirest");

    var req = unirest(
        "GET",
        "https://google-maps-geocoding.p.rapidapi.com/geocode/json"
    );

    //The information needed to display the map on the main page, can delete if not needed

    req.query({
        language: "en",
        address: "1420 Eckles Ave%2C St Paul%2C MN 55108"
    });

    req.headers({
        "x-rapidapi-host": "google-maps-geocoding.p.rapidapi.com",
        "x-rapidapi-key": "a0b0c604c7mshc44691fb6b879c8p15b44fjsn50b69bb48df4"
    });

    req.end(function (res) {
        if (res.error) throw new Error(res.error);

        console.log(res.body);
    });
}
