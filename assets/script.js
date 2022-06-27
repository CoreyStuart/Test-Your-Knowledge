let BegB = document.querySelector('#goOval')
let timeEl = document.querySelector('#time')
let timerSeconds = 35;
let start = document.querySelector('#start')
let question1 = document.querySelector('#question1')
let question2 = document.querySelector('#question2')
let question3 = document.querySelector('#question3')
let question4 = document.querySelector('#question4')
let question5 = document.querySelector('#question5')
let right = 0;
let gameOver = document.querySelector('#gameOver')
let endingP = document.querySelector('.endingP1')
let timerVar;
let score = document.querySelector('#score')
let nameInput = document.querySelector('#name')
let submitBtn = document.querySelector('#submit')

function setTime() {
   timerSeconds --;
   timeEl.textContent = timerSeconds + " seconds left"

if(timerSeconds === 1) {
    timeEl.textContent = timerSeconds + " second left"
}

   if(timerSeconds <= 0) {
       endGame();
   }
    };



function startQuiz() {
    timerVar = setInterval(setTime, 1000);
    start.classList.add("hidden");
    question1.classList.remove("hidden");
}


BegB.addEventListener('click', startQuiz);

function questionCheck1(correct) {
    if (correct) {
        alert("Correct!");
        right++;
        question1.classList.add("hidden");
        question2.classList.remove("hidden");
    }
    else {
        alert("Incorrect")
        timerSeconds--;
        timerSeconds--;
        timerSeconds--;
        timerSeconds--;
        timerSeconds--;
        question1.classList.add("hidden");
        question2.classList.remove("hidden");
    }
}


function questionCheck2(correct) {
    if (correct) {
        alert("Correct!");
        right++;
        question2.classList.add("hidden")
        question3.classList.remove("hidden");
}
else {
    alert("Incorrect")
    timerSeconds--;
    timerSeconds--;
    timerSeconds--;
    timerSeconds--;
    timerSeconds--;
    question2.classList.add("hidden");
    question3.classList.remove("hidden");
}
}

function questionCheck3(correct) {
    if (correct) {
        alert("Correct!");
        right++;
        question3.classList.add("hidden")
        question4.classList.remove("hidden");
}
else {
    alert("Incorrect")
    timerSeconds--;
    timerSeconds--;
    timerSeconds--;
    timerSeconds--;
    timerSeconds--;
    question3.classList.add("hidden");
    question4.classList.remove("hidden");
}
}

function questionCheck4(correct) {
    if (correct) {
        alert("Correct!");
        right++;
        question4.classList.add("hidden")
        question5.classList.remove("hidden");
}
else {
    alert("Incorrect")
    timerSeconds--;
    timerSeconds--;
    timerSeconds--;
    timerSeconds--;
    timerSeconds--;
    question4.classList.add("hidden");
    question5.classList.remove("hidden");
}
}

function questionCheck5(correct) {
    if (correct) {
        alert("Correct!");
        right++;
        endGame();
        
}
else {
    alert("Incorrect")
    timerSeconds--;
    timerSeconds--;
    timerSeconds--;
    timerSeconds--;
    timerSeconds--;
    endGame();
}
}
function endGame() {
    question1.classList.add("hidden");
    question2.classList.add("hidden");
    question3.classList.add("hidden");
    question4.classList.add("hidden");
    question5.classList.add("hidden");
    gameOver.classList.remove("hidden");

    clearInterval(timerVar);
}
   
function renderName() {
    let name = localStorage.getItem("name");
    localStorage.getItem("score");

    nameInput.textContent = name;
    // right.textContent
}

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();

    let name = nameInput.value;
    
    if(name === "") {
       alert("Please enter your name")
    } else {
        localStorage.setItem("name", name);
        localStorage.setItem("score", right);
        
        renderName();
    }

})























// let nameInput = getElementById('#name').value;

    // if(!name) {
    //     preventDefault();
    //     alert("Please enter your name");
    // } else {
    //     preventDefault();
    //     (localStorage.setItem("name", ))
    // }










    // gameOver.classList.add('end')

    // if(gameOver.classList === "end") {
    //     let initialsEntry = prompt('Declare your name');
    //    let entry = document.createElement('p');
    //     entry.innerHTML = initialsEntry
    //     endingP1.appendChild(entry);
    // }









//highscores and initials into local storage 
//high score is variable "right"
//addEventListener to submit button that leads to local storage of init and score 
//seperate html for highscores page 
