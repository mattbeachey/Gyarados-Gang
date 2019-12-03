function initProgram() {

    let dogBreed;
    let dogInformationGathered;
    let cityName;
    let weatherInfo;
    let trait;
    let currentQuestion = 0;



    //Buttons on the document.
    const startEl = document.getElementById("start");
    const mainflexEl = document.getElementById("mainflex");
    const appNameEl = document.getElementById("appName");
    const spacerEl = document.getElementById("spacer");
    const dogImageEl = document.getElementById("dogImage");
    const dogImage2El = document.getElementById("dogImage2")
    const dogquestionsEl = document.getElementById("dogQuestions")
    const yesButtonEl = document.getElementById("yesButton")
    const chosenCityEl = document.getElementById("chosenCity");
    const todayWeatherEl = document.getElementById("todayWeather");
    const temperatureEl = document.getElementById("temperatureWeather");
    const quizQuestionEl = document.getElementById("quizQuestion");
    const answerAEl = document.getElementById("answerA");
    const answerBEl = document.getElementById("answerB");
    const answerCEl = document.getElementById("answerC");
    const answerDEl = document.getElementById("answerD");
    const quizBodyEl = document.getElementById("quizBody");
    const resultsHeaderEl = document.getElementById("resultsheader");
    const resultsHeaderTextEl = document.getElementById("resultsheadertext")


    //Gets the dog questions array from above
    //shuffles it. 
    //appends 4 of those dog questions onto the page.
    function renderDogQuestions() {
        dogquestionsEl.innerHTML = "";
        function shuffle(a) {
            let j, x, i;
            for (i = a.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = a[i];
                a[i] = a[j];
                a[j] = x;
            }
        } shuffle(dogQuestions)
        for (let i = 0; i < 4; i++) {
            $("#dogQuestions").append(
                `
                <div id="singleDogQ` + i + `" class="dogQ` + i + ` inherit">` + dogQuestions[i] + `<div id="dogQCorner" class="triangle"></div></div>
                
                `
            )
        }
    } renderDogQuestions();

    const individualDogQuestionEl0 = document.getElementById("singleDogQ0")
    const individualDogQuestionEl1 = document.getElementById("singleDogQ1")
    const individualDogQuestionEl2 = document.getElementById("singleDogQ2")
    const individualDogQuestionEl3 = document.getElementById("singleDogQ3")


    //Adds an event listener to the yes button
    //runs the moveForward function
    yesButton.addEventListener("click", function () {
        moveForward();
    })


    //moves the dogify logo and dog image around the screen
    //hides the opening text
    function moveForward() {
        spacerEl.setAttribute("class", "disappear");

        mainflexEl.removeAttribute("class", "mainflex");
        mainflexEl.setAttribute("class", "mainflexClick");

        appNameEl.removeAttribute("class", "header-big");
        appNameEl.setAttribute("class", "header-small");

        dogImageEl.removeAttribute("class", "dogimage");
        dogImageEl.setAttribute("class", "dogimageSmall");

        startEl.removeAttribute("class", "disappear");
        startEl.setAttribute("class", "start-instruction");

        dogquestionsEl.removeAttribute("class", "dogQ")
        dogquestionsEl.setAttribute("class", "disappear")

        individualDogQuestionEl0.innerHTML = ""
        individualDogQuestionEl1.innerHTML = ""
        individualDogQuestionEl2.innerHTML = ""
        individualDogQuestionEl3.innerHTML = ""

        setTimeout(function () {
            individualDogQuestionEl0.setAttribute("class", "disappear")
            individualDogQuestionEl1.setAttribute("class", "disappear")
            individualDogQuestionEl2.setAttribute("class", "disappear")
            individualDogQuestionEl3.setAttribute("class", "disappear")
        }, 750)



        yesButtonEl.removeAttribute("class", "yes-button")
        yesButtonEl.setAttribute("class", "disappear")
    }

    //Adds an event listener to the startquiz button
    //runs the startQuiz function
    startEl.addEventListener("click", function () {
        startQuiz();

    });

    //the white block that come after move forward disappears
    //then quiz appears
    function startQuiz() {
        startEl.setAttribute("class", "disappear");
        quizBodyEl.removeAttribute("class", "disapper");
        quizBodyEl.setAttribute("class", "quiz");

    }

    //Event listeners on the quiz answers that move through the quiz
    //When clicked runs the method that increases score
    //Runs the checkGameProgress function
    answerAEl.addEventListener("click", function () {
        arrayQuestions[currentQuestion].answerA[1]();
        checkGameProgress();
    })
    answerBEl.addEventListener("click", function () {
        arrayQuestions[currentQuestion].answerB[1]();
        checkGameProgress();
    })
    answerCEl.addEventListener("click", function () {
        arrayQuestions[currentQuestion].answerC[1]();
        checkGameProgress();

    })
    answerDEl.addEventListener("click", function () {
        arrayQuestions[currentQuestion].answerD[1]();
        checkGameProgress();
    })



    //Renders the quiz questions
    function renderQuizQuestions() {

        quizQuestionEl.innerText = arrayQuestions[currentQuestion].question;
        answerAEl.innerText = arrayQuestions[currentQuestion].answerA[0];
        answerBEl.innerText = arrayQuestions[currentQuestion].answerB[0];
        answerCEl.innerText = arrayQuestions[currentQuestion].answerC[0];
        answerDEl.innerText = arrayQuestions[currentQuestion].answerD[0];
    } renderQuizQuestions();


    //checks to see if there are more quiz questions
    //if there are more it runs the renderQuizQuestions function.
    //if not it runs the reviewTest function.
    function checkGameProgress() {
        currentQuestion = currentQuestion + 1;
        if (currentQuestion < arrayQuestions.length) {
            renderQuizQuestions();
        } else {
            reviewTest();
            renderResultsPage();
        }
    }




    //moves the dogify logo and dog image back to the start
    //brings back the the opening text
    function startOver() {
        spacerEl.setAttribute("class", "spacer");

        mainflexEl.removeAttribute("class", "mainflexClick");
        mainflexEl.removeAttribute("class", "mainflexResults");
        mainflexEl.setAttribute("class", "mainflex");

        appNameEl.removeAttribute("class", "header-small");
        appNameEl.removeAttribute("class", "header-big-results");
        appNameEl.setAttribute("class", "header-big");
        appNameEl.innerText = "Doggify";

        dogImageEl.removeAttribute("class", "dogimageSmall");
        dogImageEl.removeAttribute("dogimageResults");
        dogImageEl.setAttribute("class", "dogimage");
        dogImageEl.setAttribute(
            "src",
            "./assets/images/doggify-threshold-face-square.png"
        );

        startEl.removeAttribute("class", "start-instruction");
        startEl.setAttribute("class", "disappear");

        dogquestionsEl.removeAttribute("class", "disappear");
        dogquestionsEl.setAttribute("class", "dogQ");

        renderDogQuestions();
    }

    //sorts the personality score.
    //sets the trait to the highest score.
    //runs the applyTraitToDogAndCity function.
    function reviewTest() {
        personalityScore.sort(function (a, b) {
            return b.score - a.score;
        })
        trait = personalityScore[0].trait;
        applyTraitToDogAndCity();
    }



    // a series of if then statements to make sure the correct dog breed is given when a trait is received.
    //runs the getDogInfo function
    //runs the getWeatherInfo function
    //We will use this once the quiz is done
    function applyTraitToDogAndCity() {
        switch (trait) {
            case 'adventurous':
                dogBreed = "vizsla";
                cityName = "Longyearbyen";
                break;
            case 'mellow':
                dogBreed = "dane/great";
                cityName = "Kennebunkport";
                break;
            case 'rational':
                dogBreed = "collie/border"
                cityName = "new%20york";
                break;
            case 'social':
                dogBreed = "retriever/golden"
                cityName = "new%20orleans";
                break;
        }
        getWeatherInfo();
    }







    //Runs the weather API to get the longitude the cityName
    //Runs the renderWeather function
    function getWeatherInfo() {
        const apiKey = "201eb0ee5ccf4e9d19410ecb6a7d9eba"
        const queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=";

        axios.get(queryURL + cityName + '&appid=' + apiKey)
            .then(function (response) {
                weatherInfo = response.data
                renderWeather();
            }
            )
    }

    //takes the value of the temperature in kelvins and returns in Fahrenheit
    function getFahrenheit(k) {
        return Math.floor((k - 273.15) * 1.8000 + 32.00);
    }

    //renders the city name, current weather conditions, and current weather
    //runs the get dog info functions
    function renderWeather() {
        chosenCityEl.innerText = weatherInfo.city.name;
        todayWeatherEl.innerText = weatherInfo.list[0].weather[0].description;
        temperatureEl.innerText = getFahrenheit(weatherInfo.list[0].main.temp) + " ℉";
        getDogInfo();
    }

    //Generates the url of a dog image of selected dog breed
    //runs the renderDogPic function.
    function getDogInfo() {
        const queryURL = "https://dog.ceo/api/breed/" + dogBreed + "/images/random"
        axios.get(queryURL)
            .then(function (response) {
                dogInformationGathered = response;
                renderDogPic();
            }
            )
    }



    //takes the information held in the "dogInformationGathered" variable
    //creates an element with the image tag
    //appends that information to the body
    function renderDogPic() {
        const dogPicEl = document.createElement("img");
        dogPicEl.setAttribute("src", dogInformationGathered.data.message);
        resultsPageEl.append(dogPicEl);
        renderResultsPage();
    }



    //brings up other dog image
    //
    function renderResultsPage() {
        dogImageEl.removeAttribute("class", "dogimage");
        dogImageEl.setAttribute("class", "disappear");

        dogImage2El.removeAttribute("class", "disappear");
        dogImage2El.setAttribute("class", "dogimageResults");

        appNameEl.setAttribute("class", "header-big-results");
        appNameEl.innerText = `
        Your 
            Results
        `

        resultsPageEl.setAttribute("class", "results-page")

        mainflexEl.setAttribute("class", "mainflexResults");

        spacerEl.setAttribute("class", "spacer");

        dogquestionsEl.removeAttribute("class", "dogQ")
        dogquestionsEl.setAttribute("class", "disappear")

        quizBodyEl.setAttribute("class", "disappear");

        chosenCityEl.removeAttribute("class", "inherit")
        todayWeatherEl.removeAttribute("class", "inherit")
        temperatureEl.removeAttribute("class", "inherit")
    }

















} initProgram();
