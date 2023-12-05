var timer = document.querySelector('.time');
let startButton = document.getElementById('start');
let startScreen = document.getElementById('start-screen');
var quizContainer = document.getElementById('questions');
var quizContainer = document.getElementById('choices');
var endScreenContainerContainer = document.getElementById('end-screen');
var submitButton = document.getElementById('submit');

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

//Present questions function
/*
function presentQuestions
  (questions, quizContainer) {
  var questionTitle = [];
  var choices;

  for (var i = 0; i < questions.length; i++) {
    choices = [];

    for (number in questions[i].choices) {

      choices.push(
        '<choices button>'
        + '<input type="radio" name="question' + i + '" value="' + number + '">'
        + number + ': '
        + questions[i].choices[number]
        + '</choices button>'
      );
    }

    questionTitle.push(
      '<h2 id="question-title">' + questions[i].question + '</div>'
      + '<div id="choices">' + choices.join('') + '</div>'
    );
  }

  quizContainer.innerHTML = questionTitle.join('');
}

presentQuestions(questions, quizContainer);
*/

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
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
    //question number
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
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
