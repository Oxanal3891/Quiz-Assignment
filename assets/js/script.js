var timer;
var timerCount;
var initials;
var quizContainer = document.getElementById('questions');
var endScreenContainerContainer = document.getElementById('end-screen');
var submitButton = document.getElementById('submit');

// Array of questions and answer choices

var questions = [
  {
    question: "To know the type of a JavaScript variable, we can use the _______ operator",
    choices: {
      1: 'typeof',
      2: 'Boolean',
      3: 'whattype'
    },
    correctAnswer: '1'
  },
  {
    question: "Hoisting is the default behaviour of javascript where all declarations are moved _____ before code is executed",
    choices: {
      1: 'bottom',
      2: 'middle',
      3: 'top'
    },
    correctAnswer: '3'
  },
  {
    question: "A callback is a function that will be executed _____ another function gets executed",
    choices: {
      1: 'after',
      2: 'before',
      3: 'when'
    },
    correctAnswer: 'a1'
  },
  {
    question: "What is NaN property in JavaScript",
    choices: {
      1: 'Not-a-Number',
      2: 'Not-a-Null',
      3: 'Not-a-Node'
    },
    correctAnswer: '1'
  },
  {
    question: "In Javascript, what would be the result of 3+2+”7″?",
    choices: {
      1: '12',
      2: '57',
      3: '5'
    },
    correctAnswer: '2'
  },
  {
    question: "Global variables are the variables that are defined _______ functions.",
    choices: {
      1: 'inside of',
      2: 'outside of',
      3: 'with the'
    },
    correctAnswer: '2'
  },
  {
    question: "Which company developed JavaScript?",
    choices: {
      1: 'Netscape',
      2: 'Microsoft',
      3: 'Apple'
    },
    correctAnswer: '1'
  },
];

/*
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
*/
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

