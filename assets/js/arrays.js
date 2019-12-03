let personalityScore = [
    {
        trait: "adventurous",
        score: 0,
    },
    {
        trait: "mellow",
        score: 0,
    },
    {
        trait: "rational",
        score: 0,
    },
    {
        trait: "social",
        score: 0,
    },
]

const dogQuestions = [`	Have you ever used the snapchat dog filter and thought 'man, I wish I really did look this cute?'`,
    `Have you ever looked at a can of Alpo and thought, 'These savory chunks? This is better than what I normally eat!'`,
    `Has your wife ever kicked you to the 'dog house' and you were kind of okay with it?`,
    `Ever see a dog in public and think, 'Hey, that kind of looks like me!'?`,
    `Are you a furry? Do you want to be?`,
    `Do you ever get so distracted and others around you have to yell 'squirrel' to remind you to get you back on track?`,
    `Ever watch a dog show and think to yourself, 'I could do that!'`,
    `Have you been called a Golden Retriever because of your personality? Me neither…`,
    `Is your nose wet? `,
    `Does your hair get shiny after you eat scrambled eggs?`,
    `Is your shampoo oatmeal-based?`,
    `Does the sound of 'treat' or 'snack' get you excited?`,
    `Does a red fire hydrant fill you with feels?`,
    `Do you experience intense, heart-wrenching, uncontrollable feelings of abandonment whenever anyone leaves the room?`,
    `Do you sit in a kennel when you’re at home by yourself?`,
    `Is your favorite movie Holes (2003) starring Shia LaBeouf?`,
    `Do you have the TV on when you’re home alone, just so it kind of feels like you’re with people because you’d get too sad otherwise?`,
    `Do you gain an irresistible feeling to scratch the back of your ear with your foot?`,
    `Are you a good boy?`]

function shuffle(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
} shuffle(dogQuestions)

const vacayQuestions = [
    `Do rainy days and Mondays always get you down?`,
    `Do you feel the need to go off leash?`,
    `Are you sick of working group projects?`,
    `Do you get too many notifications on your phone? Maybe not enough..?`,
    `Do you ever feel like a plastic bag?`
]


let allQuestions = [];
allQuestions = _.concat(vacayQuestions[Math.floor(Math.random() * vacayQuestions.length)], dogQuestions[0], dogQuestions[1], dogQuestions[2]);
console.log(allQuestions);
function shuffle(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
} shuffle(allQuestions);



const arrayQuestions = [{
    questionNumber: 1,
    question: "You’re driving on the highway heading home to feed your dog. You’re about to miss your exit because your fave song came on the radio. What do you do next?",
    answerA: ["Seize the opportunity to cross over by cutting off a few cars, all while screaming the chorus to the song because you’re definitely not missing this exit. ",
        function () {
            personalityScore[0].score = personalityScore[0].score + 1;
        }],
    answerB: ["Wait for the next exit and reroute from there.",
        function () {
            personalityScore[2].score = personalityScore[2].score + 1;

        }],
    answerC: ["Just keep driving because this song is fire. You’ll get home when you get home.",
        function () {
            personalityScore[1].score = personalityScore[1].score + 1;
        }],
    answerD: ["Turn on your blinker, wave to the car next to you to let you in, and do that head nod/ wave thing like you’re best friends now.",
        function () {
            personalityScore[3].score = personalityScore[3].score + 1;
        }],
},





{
    questionNumber: 2,
    question: "Your best friend’s mom made you some gross holiday cookies and wants to know how they were. What do you tell her?",
    answerA: ["Tell her they were great and thank her for the cookies.",
        function () {
            personalityScore[2].score = personalityScore[2].score + 1;

        }],
    answerB: ["Roast her. She deserves it.",
        function () {
            personalityScore[0].score = personalityScore[0].score + 1;
        }],
    answerC: ["Thank her for the cookies and exchange recipes. Also use lots of baking terms to distract from the fact that you haven’t mentioned how they tasted.",
        function () {
            personalityScore[3].score = personalityScore[3].score + 1;
        }],
    answerD: ["Give her a head nod and a thumbs up. Throw in a wink if they were especially awful.",
        function () {
            personalityScore[1].score = personalityScore[1].score + 1;
        }],
},





{
    questionNumber: 3,
    question: "You’re eating a giant bowl of spaghetti in bed because you’re an adult and no one can tell you how to live your life. As you bring a huge bite up to your face you miss your mouth, spilling it all over your white comforter. What do you do now?",
    answerA: ["Instagram it, because “story of your life,” amirite?",
        function () {
            personalityScore[3].score = personalityScore[3].score + 1;
        }],
    answerB: ["Break out the Oxi-Clean and curse yourself out the entire time you clean up your mess.",
        function () {
            personalityScore[2].score = personalityScore[2].score + 1;

        }],
    answerC: ["Scoop the bite up and keep eating.",
        function () {
            personalityScore[1].score = personalityScore[1].score + 1;

        }], answerD: ["Spread more sauce over your white comforter to create a tie dye effect. Add some sauce to your pillows too to create a cohesive bedding line.",
            function () {
                personalityScore[0].score = personalityScore[0].score + 1;
            }],
},





{
    questionNumber: 4,
    question: "Your friend is being dumb and wants to watch Bachelor In Paradise while you want to watch The Office for the 7 millionth time. How do you resolve this conflict?",
    answerA: ["Drink enough wine until you don’t care that you’re watching Bachelor In Paradise.",
        function () {
            personalityScore[1].score = personalityScore[1].score + 1;

        }],
    answerB: ["Decide on a different show you both can enjoy together.", function () {
        personalityScore[2].score = personalityScore[2].score + 1;

    }],
    answerC: ["Smash the TV. Now no one gets to watch anything.",
        function () {
            personalityScore[0].score = personalityScore[0].score + 1;
        }],
    answerD: ["Smash the TV together, as friends. And talk to each other about the aggressive decision you both made over a cup of tea.",
        function () {
            personalityScore[3].score = personalityScore[3].score + 1;
        }],
},





{
    questionNumber: 5,
    question: "It’s a hot and sweaty summer day and you decide to head over to the local public pool to cool off. The entire town is there and all of the lounge chairs are taken. What’s your sweaty body doing next?",
    answerA: ["Find a nice group and ask if you can share some space with them. You end up finding out you went to high school with one of them and now you’re feeling awkward and sweaty.",
        function () {
            personalityScore[3].score = personalityScore[3].score + 1;
        }],
    answerB: ["Find a corner to set up camp and pop your headphones in. Enjoy the mist of pool water being splashed on you by the rowdy children.",
        function () {
            personalityScore[1].score = personalityScore[1].score + 1;

        }],
    answerC: ["Go back to your car and sit in the air conditioning.",
        function () {
            personalityScore[2].score = personalityScore[2].score + 1;

        }],
    answerD: ["Throw a Snickers bar into the pool and wait for everyone to leave.",
        function () {
            personalityScore[0].score = personalityScore[0].score + 1;
        }],

    questionNumber: 6,
    question: "It’s a cold winter’s night and the wind howls through the open window like a pack of hungry wolves circling their prey. How do you keep warm?",
    answerA: ["Go deeper under the covers.",
        function () {
            personalityScore[1].score = personalityScore[1].score + 1;
        }],
    answerB: ["Get the book of matches from your bedside table and start a small fire with your pillows to keep warm.",
        function () {
            personalityScore[0].score = personalityScore[0].score + 1;
        }],
    answerC: ["Get up and close the window.",
        function () {
            personalityScore[2].score = personalityScore[2].score + 1;

        }],
    answerD: ["Go to a friend’s house that has shut windows.",
        function () {
            personalityScore[3].score = personalityScore[3].score + 1;
        }],
},





{
    questionNumber: 7,
    question: "You've been tasked with digging a hole in the backyard. Do you:",
    answerA: ["Casually dig with a small spade.",
        function () {
            personalityScore[1].score = personalityScore[1].score + 1;
        }],
    answerB: ["Get a real shovel from the shed and start digging quickly and efficiently.",
        function () {
            personalityScore[2].score = personalityScore[2].score + 1;
        }],
    answerC: ["Call up some friends and have them dig with you",
        function () {
            personalityScore[3].score = personalityScore[3].score + 1;
        }],
    answerD: ["Get your face and paws....hands down by the ground and start making that hole any way you can.",
        function () {
            personalityScore[0].score = personalityScore[0].score + 1;
        }],
},





{
    questionNumber: 8,
    question: "You have a million dollars to spend. What do you do?",
    answerA: ["Donate it all to charity.",
        function () {
            personalityScore[1].score = personalityScore[1].score + 1;

        }],
    answerB: ["Invest the money into the stock market.",
        function () {
            personalityScore[2].score = personalityScore[2].score + 1;

        }], answerC: ["Spend it all on adult beverages and snacks for your friends at the bar.",
            function () {
                personalityScore[3].score = personalityScore[3].score + 1;
            }],
    answerD: ["Carefully spend it to travel across the world.",
        function () {
            personalityScore[0].score = personalityScore[0].score + 1;
        }],
},





{
    questionNumber: 9,
    question: "Your best friend has a poltergeist haunting her new place. She’s very scared. What do you do?",
    answerA: ["Whip out the ouija board.",
        function () {
            personalityScore[0].score = personalityScore[0].score + 1;
        }],
    answerB: ["Let them crash at your place.",
        function () {
            personalityScore[3].score = personalityScore[3].score + 1;
        }],
    answerC: ["Hire a priest to perform an exorcism.",
        function () {
            personalityScore[2].score = personalityScore[2].score + 1;
        }],
    answerD: ["Swap places because ghosts aren’t real.",
        function () {
            personalityScore[1].score = personalityScore[1].score + 1;
        }],
},





{
    questionNumber: 10,
    question: "A former high school classmate invites you to join their pyramid scheme. Do you:",
    answerA: ["Say nothing.",
        function () {
            personalityScore[1].score = personalityScore[1].score + 1;
        }],
    answerB: ["Decline and explain why not.",
        function () {
            personalityScore[2].score = personalityScore[2].score + 1;
        }],
    answerC: ["Agree and get more people to join the pyramid scheme.",
        function () {
            personalityScore[3].score = personalityScore[3].score + 1;
        }],
    answerD: ["Decline and start your own pyramid scheme, making you millions.",
        function () {
            personalityScore[0].score = personalityScore[0].score + 1;
        }],

}]

