let timer = document.querySelector('.time');
let time = questions.length * 10;
let questions = document.querySelector('#questions');
let questionCount = 0;
let timerUpdate;
let startButton = document.getElementById('start');
let startScreen = document.getElementById('start-screen');
let quizContainer = document.getElementById('questions');
var endScreen = document.getElementById('end-screen');
var submitButton = document.getElementById('submit');
var initials = document.getElementById('initials');
var feedback = document.querySelector('.feedback');
let score = document.getElementById('final-score');
var goBack;

//Start timer, hide start screen and countdown
function startQuiz() {
  timerUpdate = setInterval(
    countdown,
    1000
  );
  timer.textContent = time;
  let startScreen = document.getElementById('start-screen');
  startScreen.setAttribute(
    'class',
    'hide'
  );
  questions.removeAttribute('class');
  createQuestions();
};

function countdown() {
  time--;
  timer.textContent = time;
  if (time <= 0) {
    finishQuiz();
  }
}


//Create questions function
function createQuestions() {
  let questionShowed = questions[questionCount];
  let questionTitle = document.getElementById('question-title');
  questionTitle.textContent = questionShowed.prompt;
  choices.innerHTML = '';
  questionShowed.choices.forEach(
    function (choice, i) {
      let choiceButton = document.createElement('button');
      choiceButton.setAttribute(
        'value',
        choice
      );
      choiceButton.textContent = i + 1 + '. ' + choice;
      choiceButton.onclick = questionClick;
      choices.appendChild(choiceButton);
    }
  );
}


//Function to check answers and deduct 10 seconds if incorrect
function checkQuestion() {
  if (this.value !== questions[questionCount].correctAnswer) {
    time -= 10;
    if (time < 0) {
      time = 0
    } timer.textContent = time;
    feedback.textContent = 'Wrong!';
  } else { feedback.textContent = 'Correct!'; }
  feedback.setAttribute('class', 'feedback');
  timeout(function () {
    feedback.setAttribute('class', 'feedback hide');
  }, 2000);
  questionCount++;
  if (questionCount === questions.length) {
    finishQuiz();
  } else {
    createQuestions();
  }
}

//Finish quiz function
function finishQuiz() {
  clearInterval(timerUpdate);
  endScreen.removeAttribute('class'
  );
  score.textContent = time;
  questions.setAttribute(
    'class',
    'hide'
  );
}

//Submit score function
function submitScore(event) {
  if (event.key === 'Enter') {
    saveScore();
    alert(
      'Your Score has been Submitted'
    );
  }
}
function saveScore() {
  let name = initials.value.trim();
  if (name !== '') {
    let highscores =
      JSON.parse(
        window.localStorage.getItem(
          'highscores'
        )
      ) || [];
    let newScore = {
      score: time,
      name: name,
    };
    highscores.push(newScore);
    window.localStorage.setItem(
      'highscores',
      JSON.stringify(highscores)
    );
    alert(
      'Your Score has been Submitted'
    );
  }
}

initials.onkeyup = submitScore;
submitButton.onclick = saveScore;

// Start quiz
startButton.onclick = startQuiz;