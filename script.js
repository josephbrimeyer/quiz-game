let questionEl = document.getElementById("question");
let choiceEl = document.getElementById("choices");
let points = 0;
let currentQuestion = 0;
let score = 0;
//let quizCountSpan;
//  Quiz questions that will be asked.
let quizQuestions = [
  {
    question: "Which of the following examples utilizes jQuery?",
    choices: [
      "addEventListener",
      "getElementByID",
      "$(#id)",
      "document.querySelectorAll",
    ],
    answer: "$(#id)",
  },

  {
    question: "Which of the following terms will assign data?",
    choices: ["Assign Text", "setItem", "getItem", "JSON.stringify"],
    answer: "setItem",
  },
  {
    question: "In JavaScript, an array is assigned by using?",
    choices: ["parenthesis", "curly brackets", "brackets", "quotations"],
    answer: "brackets",
  },
  {
    question: "What programming language adds animation to a web page?",
    choices: ["HTML", "JavaScript", "CSS", "Bootstrap"],
    answer: "JavaScript",
  },
];
// ...................................................................................
//   1. Need to use the DOM to navigate the HTML document and create buttons and divs for text content.
//   2. Need to write a function to populate the buttons and divs with the quiz object values.
//   3. Need to add event listeners for each button in this function.
//   4. Need to evaluate if the button matches the correct or incorrect object value.
//   5. If false, need to deduct time from the counter.
//   6. If true, need to add to the score.
//   7. Final score is score + time remaining.
//   8. Need to write a function to take an input values with a prompt and convert this to local storage.
//   9. Need to create a list on the highscores page to track best performance.
//  .............................................................................
let quizCountSpan = document.querySelector("#choices");
function quizButtons() {
  let quizBtn = document.createElement("BUTTON");
  quizBtn.innerHTML = "";
  //quizCountSpan.textContent = quizQuestion.choices.length;
  for (let i = 0; i < quizQuestions.choices.length; i++) {
    let btn = quizQuestions.choices[i];
    //  quizCountSpan.textContent = quizQuestions.choices[i];
  }
  let button = document.createElement("button");
  button.textContent = btn;
  quizBtn.appendChild(button);
  console.log(i);
}
//.............................................................
//      var todoInput = document.querySelector("#todo-text");
// var todoForm = document.querySelector("#todo-form");
// var todoList = document.querySelector("#todo-list");
// var todoCountSpan = document.querySelector("#todo-count");

// var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

// renderTodos();

// function renderTodos() {
//   // Clear todoList element and update todoCountSpan
//   todoList.innerHTML = "";
//   todoCountSpan.textContent = todos.length;

//   // Render a new li for each todo
//   for (var i = 0; i < todos.length; i++) {
//     var todo = todos[i];

//     var li = document.createElement("li");
//     li.textContent = todo;
//     todoList.appendChild(li);
//   }
// }
//...........................................................................
//<button type="button" class="btn btn-outline-success">Success</button>
// <li class="btn btn-primary btn-sm" id="zero">Choice 0</li>
// <li class="btn btn-primary btn-sm" id="one">Choice 1</li>
// <li class="btn btn-primary btn-sm" id="two">Choice 2</li>
// <li class="btn btn-primary btn-sm" id="three">Choice 3</li>
//}
// ..........................................................................
// Check to see if the user chooses the correct answer or not.
// choiceBtn.addEventListener("click", function() {
//   let userChoice = choiceBtn.value;
//   let choiceOption = document.getElementById("choices");
//   if (userChoice === quizQuestions.answer) {
//     choiceOption.textContent="You are Correct!";
//   } else {
//     choiceOption.textContent="Sorry, wrong answer."
//   }
//   });
//  ..............................................................................
// todo example from class......
//     function renderTodos() {
//   // Clear todoList element and update todoCountSpan
//   todoList.innerHTML = "";
//   todoCountSpan.textContent = todos.length;

//   // Render a new li for each todo
//   for (var i = 0; i < todos.length; i++) {
//     var todo = todos[i];

//     var li = document.createElement("li");
//     li.textContent = todo;
//     todoList.appendChild(li);
//   }
// }
// ............................................................................
function askQuestion(arrayOfQuestions, questionIndex) {
  let question = arrayOfQuestions[questionIndex].question;
  let answer = arrayOfQuestions[questionIndex].answer;

  let userInput = prompt(question);
  //for (i = 0 ; i < quizQuestions.length; i++) {
  //     console.log(quizQuestions[i].question);
  //     choice0Div.addEventListener("click", quizToDisplay);
  //   }
  // }
  if (userInput != answer) {
    secondSelect -= 10;
    alert("Wrong answer." + secondSelect + " seconds remaining.");
  } else {
    alert("Correct!");
    currentQuestion++;
    points++;
  }
}
// ............................................................................
// while(currentQuestion < questions.length) {
//   askQuestion(questions, currentQuestion)
// }
// function quizToDisplay(){
//   let currentQuestion = 0;
//   function render () {
//     let questionData = quizQuestions[currentQuestion];
//     questionAskedDiv.textContent = (questionData.question);
//     for (let choice of questionData.choices)
//     $("#options").empty();
//    for (let choice of questionData.choices) {
//    $("#options").append($("<li>").text(choice))
//    }
//    currentQuestion += 1;
//    if (currentQuestion === questionData.length) {
//    currentQuestion = 0;
//    }
//   }
//   $("#submit").click(render)
//  render()
//quizToDisplay()
var timerEl = document.getElementById("countdown");

let secondSelect = 60;
function startQuiz() {
  let secondSelect = 60;

  let timerInterval = setInterval(function () {
    secondSelect--;

    timerEl.textContent = secondSelect + " seconds";

    if (secondSelect === 0) {
      clearInterval(timerInterval);
      alert("Your time is up!");
      //here is where I reset the quiz.
    }
  }, 1000);
}
let startBtn = document.getElementById("start-button");
startBtn.addEventListener("click", startQuiz);
quizButtons();
// ...............................................................................
//     var listEl = document.querySelector("#grocery-list");
// var shoppingCartEl = document.querySelector("#shopping-cart");
// var groceries = ["Bananas", "Apples", "Oranges", "Grapes", "Blueberries"];

// listEl.addEventListener("click", function(event) {
//   event.preventDefault();
//   if(event.target.matches("button")) {
//     var item = document.createElement("div");
//     item.textContent = groceries[event.target.parentElement.id];
//     shoppingCartEl.append(item);
//   }
// });
//................................................................................
// function sendMessage() {
//   timeEl.textContent = " ";

//   var imgEl = document.createElement("img");

//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);
// }
