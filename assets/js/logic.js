var timer;
var timerCount;
var initials;
let startButton = document.querySelector('.start');
let startScreen = document.getElementById('start-screen');
var quizContainer = document.getElementById('questions');
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
  runQuiz()
});

//Present questions function
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
* /