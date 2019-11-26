function initProgram() {
    let dogBreed = "retriever/golden"
    let informationGathered;
    let trait = "Adventurous";
    const testingSelectEl = document.getElementById("testingSelect");
    const testingButtonEl = document.getElementById("testingButton");
    const startPersQuiz = document.getElementById("startQuiz");

    testingButtonEl.addEventListener("click", function () {
        applyTraitToDog();
    }
    )

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

        startPersQuiz.addEventListener("click", function(){
            const quizQuestions = "https://app.crystalknows.com/register?api_customer_id=522e853a-8315-4f83-a59c-99fdade8341b&api_company_name=I%20Used%20To%20Be%20A%20Bear&api_user_email=%5BUSER_EMAIL_HERE%5D"

            event.preventDefault();

            
        })

        
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