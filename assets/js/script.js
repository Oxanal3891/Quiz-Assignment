var timer;
var timerCount;

// Array of questions and answers

var questions = [
  {
    question: "To know the type of a JavaScript variable, we can use the _______ operator",
    answers: {
      1: 'typeof',
      2: 'Boolean',
      3: 'whattype'
    },
    correctAnswer: '1'
  },
  {
    question: "Hoisting is the default behaviour of javascript where all declarations are moved _____ before code is executed",
    answers: {
      1: 'bottom',
      2: 'middle',
      3: 'top'
    },
    correctAnswer: '3'
  },
  {
    question: "A callback is a function that will be executed _____ another function gets executed",
    answers: {
      1: 'after',
      2: 'before',
      3: 'when'
    },
    correctAnswer: 'a1'
  },
  {
    question: "What is NaN property in JavaScript",
    answers: {
      1: 'Not-a-Number',
      2: 'Not-a-Null',
      3: 'Not-a-Node'
    },
    correctAnswer: '1'
  },
  {
    question: "In Javascript, what would be the result of 3+2+”7″?",
    answers: {
      1: '12',
      2: '57',
      3: '5'
    },
    correctAnswer: '2'
  },
  {
    question: "Global variables are the variables that are defined _______ functions.",
    answers: {
      1: 'inside of',
      2: 'outside of',
      3: 'with the'
    },
    correctAnswer: '2'
  },
  {
    question: "Which company developed JavaScript?",
    answers: {
      1: 'Netscape',
      2: 'Microsoft',
      3: 'Apple'
    },
    correctAnswer: '1'
  },
];
