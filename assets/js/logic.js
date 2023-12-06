let timer = document.querySelector('.timer');
let time = questions.length * 20;
let questionsEl = document.getElementById('questions');
let choicesEl = document.getElementById('choices');
let questionCount = 0;
let timerUpdate;
let startButton = document.getElementById('start');
let startScreen = document.getElementById('start-screen');
let quizContainer = document.getElementById('questions');
var endScreen = document.getElementById('end-screen');
let submitButton = document.getElementById('submit');
let initials = document.getElementById('initials');
var feedback = document.getElementById('feedback');
let score = document.getElementById('final-score');
let highScores = document.querySelector('#view-high-scores');

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
  questionsEl.removeAttribute('class');
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
  questionTitle.textContent = questionShowed.question;
  choicesEl.innerHTML = ' ';
  questionShowed.choices.forEach(function (choice, i) {
    let choiceButton = document.createElement('button');
    choiceButton.setAttribute('value', choice);
    choiceButton.textContent = i + 1 + '. ' + choice;
    choiceButton.onclick = checkQuestion;
    choicesEl.appendChild(choiceButton);
  }
  );
}


//Function to check answers and deduct 10 seconds if incorrect
function checkQuestion() {
  if (questionCount == questions.length) {
    finishQuiz();
  }
  else {
    if (this.value == questions[questionCount].correctAnswer) {
      feedback.textContent = 'Correct 👍😁😁😁👍!';
      feedback.setAttribute('class', 'feedback');
    }
    else {
      time -= 10;
      if (time < 0) {
        time = 0
      }
      timer.textContent = time;
      feedback.textContent = 'Wrong!';
      feedback.setAttribute('class', 'feedback');
    }
  }
  questionCount++;
  setTimeout(function () {
    feedback.setAttribute(
      'class',
      'feedback hide'
    );
    createQuestions();
  }, 1000);
}




//Finish quiz function
function finishQuiz() {
  questionsEl.setAttribute(
    'class',
    'hide'
  );
  clearInterval(timerUpdate);
  endScreen.removeAttribute('class'
  );
  score.textContent = time;
}

//Submit score function
function submitScore(event) {
  if (event.key === 'Submit') {
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