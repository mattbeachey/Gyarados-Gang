function initProgram() {
    let dogBreed;
    let informationGathered;
    let trait = "Adventurous";

    //Google Maps API Variables

   

    // const apiKey = "AIzaSyCTeE4A-78FaUSVBlEKSvpdcDqTT8eFg3E";
    // src="https://maps.googleapis.com/maps/api/js?key=" + apiKey + "&callback=initMap"
    var unirest = require("unirest");

    var req = unirest("GET", "https://google-maps-geocoding.p.rapidapi.com/geocode/json");
    
    

    req.query({
	"language": "en",
	"address": "1420 Eckles Ave%2C St Paul%2C MN 55108"
    });

    req.headers({
	"x-rapidapi-host": "google-maps-geocoding.p.rapidapi.com",
	"x-rapidapi-key": "a0b0c604c7mshc44691fb6b879c8p15b44fjsn50b69bb48df4"
    });

    req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
    });

    






    //Buttons on the document.
    const testingSelectEl = document.getElementById("testingSelect");
    const testingButtonEl = document.getElementById("testingButton");
    const startPersQuizEl = document.getElementById("startQuiz");
    const mainflexEl = document.getElementById("mainflex");
    const moveForwardButtonEl = document.getElementById("moveForward");
    const appNameEl = document.getElementById("appName");
    const spacerEl = document.getElementById("spacer");
    const dogImageEl = document.getElementById("dogImage");
    const startOverEl = document.getElementById("startOver");
    const dogQuestions = [`	Have you ever used the snapchat dog filter and thought 'man, I wish I really did look this cute?'	`,
        `	Have you ever looked at a can of Alpo and thought, 'These savory chunks? This is better than what I normally eat!'	`,
        `	Has your wife ever kicked you to the 'dog house' and you were kind of okay with it?	`,
        `	Ever see a dog in public and think, 'Hey, that kind of looks like me!'?	`,
        `	Are you a furry? Do you want to be?	`,
        `	Do you ever get so distracted and others around you have to yell 'squirrel' to remind you to get you back on track?	`,
        `	Ever watch a dog show and think to yourself, 'I could do that!'	`,
        `	Have you been called a Golden Retriever because of your personality? Me neither…	`,
        `	Is your nose wet? 	`,
        `	Does your hair get shiny after you eat scrambled eggs?	`,
        `	Is your shampoo oatmeal-based?	`,
        `	Does the sound of 'treat' or 'snack' get you excited?	`,
        `	Does a red fire hydrant fill you with feels?	`,
        `	Do you experience intense, heart-wrenching, uncontrollable feelings of abandonment whenever anyone leaves the room?	`,
        `	Do you sit in a kennel when you’re at home by yourself?	`,
        `	Is your favorite movie Holes (2003) starring Shia LaBeouf?	`,
        `	Do you have the TV on when you’re home alone, just so it kind of feels like you’re with people because you’d get too sad otherwise?	`,
        `	Do you gain an irresistible feeling to scratch the back of your ear with your foot?	`,
        `   Are you a good boy?`,
        `   `]



    //Adds an event listener to the button for testing
    //runs the applyTraitToDog function
    testingButtonEl.addEventListener("click", function () {
        applyTraitToDog();
    }
    )

    //Adds an event listener to the move forward button
    //runs the moveForward function
    moveForwardButtonEl.addEventListener("click", function () {
        moveForward();
    })

    //Adds an event listener to the move forward button
    //runs the startOver function
    startOverEl.addEventListener("click", function () {
        startOver();
    })

    startPersQuizEl.addEventListener("click", function(){
        startQuiz();
    })


    //moves the dogify logo and dog image around the screen
    function moveForward() {
        spacerEl.setAttribute("class", "disappear");
        mainflexEl.removeAttribute("class", "mainflex");
        mainflexEl.setAttribute("class", "mainflexClick");
        appNameEl.removeAttribute("class", "header-big");
        appNameEl.setAttribute("class", "header-small");
        dogImageEl.removeAttribute("class", "dogimage");
        dogImageEl.setAttribute("class", "dogimageSmall");
    }

    //moves the dogify logo and dog image back to the start
    function startOver() {
        spacerEl.setAttribute("class", "spacer");
        mainflexEl.removeAttribute("class", "mainflexClick");
        mainflexEl.setAttribute("class", "mainflex");
        appNameEl.removeAttribute("class", "header-small");
        appNameEl.setAttribute("class", "header-big");
        dogImageEl.removeAttribute("class", "dogimageSmall");
        dogImageEl.setAttribute("class", "dogimage");
    }

    // a series of if then statements to make sure the correct dog breed is given when a trait is received.
    //runs the get info function
    // function applyTraitToDog() {
    //     trait = testingSelectEl.value;
    //     switch (trait) {
    //         case 'Adventurous':
    //             dogBreed = "ridgeback/rhodesian"
    //             break;
    //         case 'Charismatic':
    //             dogBreed = "retriever/golden"
    //             break;
    //         case 'Mellow':
    //             dogBreed = "dane/great"
    //             break;
    //         case 'Rational':
    //             dogBreed = "collie/border"
    //             break;
    //         case 'Social':
    //             dogBreed = "husky"
    //             break;
    //         case 'Thoughtful':
    //             dogBreed = "boxer"
    //             break;
    //     }
    //     getInfo();
    // }

        function applyBeerToDog() {
        trait = testingSelectEl.value;
        switch (trait) {
            case 'Adventurous':
                dogBreed = "ridgeback/rhodesian"
                break;
            case 'Charismatic':
                dogBreed = "retriever/golden"
                break;
            case 'Mellow':
                dogBreed = "dane/great"
                break;
            case 'Rational':
                dogBreed = "collie/border"
                break;
            case 'Social':
                dogBreed = "husky"
                break;
            case 'Thoughtful':
                dogBreed = "boxer"
                break;
        }
        getInfo();
    }

    //references dog API 
    //saves that information to the informationGathered variable
    //runs the renderDogPic function
    function getInfo() {
        const queryURL = "https://dog.ceo/api/breed/" + dogBreed + "/images/random"
        axios.get(queryURL)
            .then(function (response) {
                informationGathered = response;
                renderDogPic();
            }
            )
    }

    //takes the information held in the "informationGathered" variable
    //creates an element with the image tag
    //appends that information to the body
    function renderDogPic() {
        const dogPicEl = document.createElement("img");
        dogPicEl.setAttribute("src", informationGathered.data.message);
        document.body.append(dogPicEl);
    }

    function renderDogQuestions() {
        function shuffle(a) {
            let j, x, i;
            for (i = a.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = a[i];
                a[i] = a[j];
                a[j] = x;
            }
        } shuffle(dogQuestions)
        console.log(dogQuestions);
        
        for (let i = 0; i < 4; i++) {
            $("#dogQuestions").append(
                
                
                `
            <p class="dogQ`+i+`">` + dogQuestions[i] +`</p>
            `
        
        
            )
        }
    } renderDogQuestions();
    



} 
// initProgram();

//JS for longitude and latitude, taken from https://developer.mozilla.org/en-US/docs/Web/API/Coordinates/longitude

let button = document.getElementById("get-location");
let latText = document.getElementById("latitude");
let longText = document.getElementById("longitude");

button.addEventListener("click", function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    latText.innerText = lat.toFixed(2);
    longText.innerText = long.toFixed(2);
  });
});



function initMap() {

    
  // The location of Saint Paul
  var stp = {lat: 44.954, lng: -93.091};
  // The map, centered at Saint Paul
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: stp});
  // The marker, positioned at Saint Paul
  var marker = new google.maps.Marker({position: stp, map: map});


}

function displayMaps (){


    // const hi = $("<div>");
    // hi.text("hello world");
    // // $("#map").append(hi);

    initMap();

}
displayMaps();





//Done
//Import Dog Api
//Get random dog image based on breed







// Necessary
//Import traitify API
//Assign personality type to dog breed
//Hide start screen/unhide quiz screen
//Hide quiz screen/unhide results screen
//Relate quiz results to dog types
//Push results of dog quiz to results page inner.text/html or createElement 


// Would be nice
//Save results to local storage
//Set up username so you can have a name assigned to breed
//Refresh 
//Share with others
//"Create pack"
    //if local data only
//smooth transition effects
//hover dog image


// Dog breed personality matches
// Adventurous: Rhodesian Ridgeback
// Charismatic: Golden Retriever
// Mellow: Great Dane
// Rational: Border Collie
// Reliable: Labrador
// Social: Husky
// Thoughtful: boxer 


// Adventurous: Rhodesian Ridgeback
// Charismatic: Golden Retriever
// Mellow: Great Dane
// Rational: Border Collie
// Reliable: Labrador
// Social: Husky
// Thoughtful: Boxer