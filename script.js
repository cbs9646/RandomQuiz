let secondsLeft = 60;
let button = document.getElementById("#startButton"); 
// Timer functionality

function setTime(){
 
 let countdownTimer = setInterval(function() {
    secondsLeft--;
    button.addEventListener("click", setTime);
    timerEl.textContent = "Timer: " + secondsLeft;
    if(secondsLeft === 0) {
        clearInterval(countdownTimer);
    }

    }, 1000)

    
       
};

setTime();

// document.getElementById("questions").innerHTML = questionList[0]

// Quiz Question and Answer array 

// (function quizArray(){
//     for(i=0; i<quizArray.questions.length; i++)
//     this[i+1] = quizArray.questions[i];
//    let questionList = [

// {   question: "What element is denoted by the chemical symbol Sn in the periodic table?",
//     answers: ["Tin", "Gold", "Silver", "Platinum"],
//     correctAnswer: 0
// },
// {   question: "Which rock band was founded by Trent Reznor in 1988?",
//     answers: ["Korn", "Pink Floyd", "Radiohead", "Nine Inch Nails"],
//     correctAnswer: 3 
// },
// {   question: "What is the smallest planet in our solar system?",
//     answers: ["Pluto", "Earth", "Mercury", "Saturn"],
//     correctAnswer: 2
// },
// {   question: "What was the Turkish city of Istanbul called before 1930?",
//     answers: ["Dallas", "Constantinople", "Turkey", "St. Petersburg"],
//     correctAnswer: 1
// },

// ]});

// let startingQuestion = [0];
// let answers = [];
// let questionGrid = getElementById("questionContainer");




// Populate Answers List
// function answersList(index) {
//     let

// }








// function nextQuestion(i) {

// }



// for (let i = 0; i < questions.length; i++) {
//     const element = questions[i];
    
//     questions[i].answers

//     for (let i = 0; i < questions[i].answers.length; i++){
//         const element = questions[i].answers[i];    
//     }
// }
// Question 0 answers
// } else if (
//     (userChoice === "0" )     
//   ) {
//     wins++;
    
//   // If above conditions failed, assume player lost
//   } else {
//     losses++;
    
// }
