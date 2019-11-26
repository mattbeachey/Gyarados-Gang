function initProgram() {
    let dogBreed;
    let informationGathered;
    let trait = "Adventurous";

    //Buttons on the document.
    const testingSelectEl = document.getElementById("testingSelect");
    const testingButtonEl = document.getElementById("testingButton");
    const startPersQuizEl = document.getElementById("startQuiz");
    const mainflexEl = document.getElementById("mainflex");
    const moveForwardButtonEl = document.getElementById("moveForward");
    const appNameEl = document.getElementById("appName")
    const spacerEl = document.getElementById("spacer")
    const dogImageEl = document.getElementById("dogImage")
    const startOverEl = document.getElementById("startOver")

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
    function applyTraitToDog() {
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
        const dogPicEl = document.createElement("img")
        dogPicEl.setAttribute("src", informationGathered.data.message);
        document.body.append(dogPicEl);
    }

    function startQuiz(){
            const quizQuestions = "https://app.crystalknows.com/register?api_customer_id=522e853a-8315-4f83-a59c-99fdade8341b&api_company_name=I%20Used%20To%20Be%20A%20Bear&api_user_email=%5BUSER_EMAIL_HERE%5D"
            
    }



} initProgram();





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