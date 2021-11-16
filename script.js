let timerEl = document.querySelector(".timer");
let secondsLeft = 60;
const btn = document.getElementsByClassName("button");
btn.addEventListener('click', timerEl);



function setTime(){

let countdownTimer = setInterval(function() {
 
   secondsLeft--;
    timerEl.textContent = "Timer: " + secondsLeft;

 

    if(secondsLeft ===0) {
        clearInterval(countdownTimer);
    }

    }, 1000);

    console.log(secondsLeft);
}

setTime();

// let questions = [
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

// console.log(questions)


// ];

// let startingQuestion = 0;





// for (let i = 0; i < questions.length; i++) {
//     const element = questions[i];
    
//     questions[i].answers

//     for (let i = 0; i < questions[i].answers.length; i++){
//         const element = questions[i].answers[i];    
//     }
// }