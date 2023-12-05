let timer = document.querySelector('.time');
let questions = document.querySelector('#questions');
let questionCount = 0;
let timerUpdate;
let startButton = document.getElementById('start');
let startScreen = document.getElementById('start-screen');
let quizContainer = document.getElementById('questions');
var endScreenContainerContainer = document.getElementById('end-screen');
var submitButton = document.getElementById('submit');
var initials = document.getElementById('initials');
var feedback = document.querySelector('.feedback');
var goBack;

// Function to run the quiz
function runQuiz(questions, quizContainer, endScreenContainer, submitButton) {

  function presentQuestions
    (questions, quizContainer) {

  }

  function showScore(questions, quizContainer, endScreenContainer) {

  }

  function submitScore(score, endScreenContainer) { }

  presentQuestions(questions, quizContainer);

  checkAnswers(questions, quizContainer, endScreenContainer);

  submitButton.onclick = function () {
    checkAnswers(score, quizContainer, endScreenContainer);
  }
}

//Change from the start screen to question on click of a start button and start the quiz
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  quizContainer.classList.remove("hide");
  runQuiz();
});

//Timer
var count = 60;
$("#time").text(count);
timer = setTimeout(update, 1000);
function update() {
  if (count > 0) {
    $("#time").text(--count);
    timer = setTimeout(update, 1000);
  }
  else {
    alert("Out of time!");
  }
}

// End quiz if timer reaches 0 

function clockTick() {
  time--;
  timerEl.textContent = time;
  if (time <= 0) {
    quizEnd();
  }
}

nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == quizArray.length) {
      //hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      //user score
      userScore.innerHTML =
        "Your score is " + scoreCount + " out of " + questionCount;
    } else {
      //display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Question";
      //display quiz
      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);
/*
//Display next 
displayNext = () => {
  if (questionCount == questions.length) {
    //hide question container and display score
    displayContainer.classList.add("hide");
    scoreContainer.classList.remove("hide");
    //user score
    userScore.innerHTML =
      "Your score is " + scoreCount + " out of " + questionCount;
  } else {
    //display quiz
    quizDisplay(questionCount);
    count = 11;
    clearInterval(countdown);
    timerDisplay();
  }
}
*/


//Display quiz
function quizDisplay() {

}
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

function quizCreator() {
  //generate quiz
  for (var i = 0; i < questions.length; i++) {
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.choices[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.choices[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.choices[2]}</button>
   
    `;
    quizContainer.appendChild(div);
  }
}


function checkAnswers(questions, quizContainer, endScreenContainer) {

  var choiceContainer = quizContainer.querySelectorAll('.choices');
  var feedbackContainer = quizContainer.querySelectorAll('.feedback');

  var userAnswer = '';
  var score = 0;

  for (var i = 0; i < questions.length; i++) {

    userAnswer = (choiceContainer[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

    if (userAnswer === questions[i].correctAnswer) {
      score++;

      feedbackContainer[i].innerHTML = 'Correct';
    }
    else {
      timerCount = -10;
      feedbackContainer[i].innerHTML = 'Wrong!';
    }
  }


}
