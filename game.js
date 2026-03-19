const question = document.getElementById('question');
const choices =Array.from( document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score')
const progressBarFull = document.getElementById("progressBarFull");
const loader = document.getElementById("loader");
const game = document.getElementById("game");

//////console.log(choices);

let currentQustion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Full form of IKS is",
        choice1: "India Knowledge System",
        choice2: "Iran Knowledge System",
        choice3: "Indic Knowledge System",
        choice4: "Intensive Knowledge System",
        answer: 3
    },
    {
        question: "Foundational building blocks of any civilizational knowledge system (CKS) are",
        choice1: "Truth ",
        choice2: "Goodness",
        choice3: "Beauty",
        choice4: "All of the above ",
        answer: 4
    },
    {
        question: "WKS stands for",
        choice1: "West Knowledge System",
        choice2: "Western Knowledge System",
        choice3: "World Knowledge System ",
        choice4: "Whole Knowledge System ",
        answer: 2
    },
    {
        question: "Limitations of western knowledge system are",
        choice1: "Diversity ",
        choice2: "Incomplete in its outlook and worldview",
        choice3: "Definitions are vague",
        choice4: "All of the above",
        answer: 4
    },
    {
        question: "Indic Knowledge System define Truth, Goodness and Beauty in one word that is",
        choice1: "SamChittaAnand",
        choice2: "SatChittaAnand",
        choice3: "SatChittaAhankar",
        choice4: "None of the above",
        answer: 2
    },
    {
        question: "According to IKS Anand is ______",
        choice1: "Experience Material World",
        choice2: "Experiencing Inner Bliss",
        choice3: "Experiencing Inner Bliss",
        choice4: "All of the above",
        answer: 2
    },
    {
        question: "According to IKS Chitta is ________",
        choice1: "Moving from Satva to tamas",
        choice2: "Moving from Rajas to Satva",
        choice3: "Moving from Tamas to Rajas to Satva",
        choice4: "None of the above",
        answer: 3
    },
    {
        question: "From the following ________is major text of sociology",
        choice1: "Natya Shashtra",
        choice2: "Arth Shashtra",
        choice3: "Dharm Shashtra",
        choice4: "None of the above",
        answer: 3
    },
    {
        question: "India is _________Centric Civilization.",
        choice1: "Knowledge",
        choice2: "Material",
        choice3: "Science",
        choice4: "None of the above",
        answer: 1
    },
    {
        question: "World’s largest collection of ancient Manuscripts is in ___________",
        choice1: "India",
        choice2: "USA",
        choice3: "Germany",
        choice4: "England",
        answer: 1
    },
    // {
    //     question: "",
    //     choice1: "",
    //     choice2: "",
    //     choice3: "",
    //     choice4: "",
    //     answer: 
    // },
    // {
    //     question: "",
    //     choice1: "",
    //     choice2: "",
    //     choice3: "",
    //     choice4: "",
    //     answer: 
    // },
];

// fetch("questions.json")
//     .then (res => {
//         return res.json();
//     })
//     .then(loadedQuestions => {
//         console.log(loadedQuestions);
//         questions = loadedQuestions;
//         startGame();
//     })
//     .catch( err => {
//         console.error(err);
//     });

//CONSTANTS

const CORRECT_BONUS = 1;
const MAX_QUSTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
    game.classList.remove("hiddden");
    loader.classList.add("hidden");
};

getNewQuestion = () => {

    if(availableQuestions.length== 0 || questionCounter >=  MAX_QUSTIONS){
        localStorage.setItem("mostRecentScore",score);
        //go to the end page
        return window.location.assign("end.html");
    }
    questionCounter++;
    progressText.innerText =  `Question${questionCounter}/${MAX_QUSTIONS}`;
    //Update the progress bar
    console.log();
    progressBarFull.style.width = `${(questionCounter / MAX_QUSTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
        currentQustion = availableQuestions[questionIndex];
        question.innerText = currentQustion.question;

choices.forEach( choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQustion["choice" + number];
    });
    availableQuestions.splice(questionIndex, 1);
    ////////console.log(availableQuestions)
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply = 
            selectedAnswer == currentQustion.answer ? "correct" : "incorrect";

            if(classToApply == "correct") {
                incermentScore(CORRECT_BONUS);
            }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000); 
    });
});
incermentScore =num => {
    score += num;
    scoreText.innerText = score;
}


startGame();


// var mins=.1;
//     var secs=mins*60;
//     function countdown() {
//         setTimeout('Decrement()',60);
//     }
//     function Decrement() {
//         if(document.getElementById) {
//             minutes=document.getElementById("minutes");
//             seconds=document.getElementById("seconds");
//             if(seconds<59) {
//                 seconds.value=secs;
//             }
//             else {
//                 minutes.value=getminutes();
//                 seconds.value=getseconds();
//             }
//             if(mins<1) {
//                 minutes.style.color="red";
//                 seconds.style.color="red";
//             }
//             if(mins<0) {
//                 alert('time up');
//                 minutes.value=0;
//                 seconds.value=0;
//             }
//             else {
//                 secs--;
//                 setTimeout('Decrement()',1000);
//             }
//         }
//     }
 
//     function getminutes() {
//         mins=Math.floor(secs/60);
//         return mins;
//     }
 
//     function getseconds() {
//         return secs-Math.round(mins*60);
//     }

 // Converting string to required date format 


///////////////////////right niche
//  let deadline = new Date("Jan 5, 2024 15:37:25")
//  .getTime();

// // To call defined fuction every second
// let x = setInterval(function () {

// // Getting current time in required format
// let now = new Date().getTime();

// // Calculating the difference
// let t = deadline - now;
///////////////////////right uper




// Getting value of days, hours, minutes, seconds
////let days = Math.floor(t / (1000 * 60 * 60 * 24));
////let hours = Math.floor(
/////(t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));


///////right niche
// let minutes = Math.floor(
// (t % (1000 * 60 * 60)) / (1000 * 60));
// let seconds = Math.floor(
// (t % (1000 * 60)) / 1000);

// // Output the remaining time
// document.getElementById("demo").innerHTML =
// // days + "d " + hours + "h " + 
// minutes + "m " + seconds + "s ";

// // Output for over time
// if (t < 0) {
// clearInterval(x);
// document.getElementById("demo")
//  .innerHTML = "EXPIRED";
// }
// }, 1000);