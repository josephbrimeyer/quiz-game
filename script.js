let questionsDiv = document.getElementById("quiz-questions");
let questionAskedDiv = document.getElementById("question-asked");
let choice0Div = document.getElementById("zero");
let choice1Div = document.getElementById("one");
let choice2Div = document.getElementById("two");
let choice3Div = document.getElementById("three");
let points = 0;

// make a list of objects representing the quiz data
// remember that when we want to organize data in JS we typically use objects

let quizQuestions =[
    {
        question: "Which of the following examples utilizes jQuery?",
        choices: ["addEventListener", "getElementByID", "$(#id)", "document.querySelectorAll"],
        answer: "$(#id)",
      },
      
      { 
        question: "Which of the following terms will assign data?",
        choices: ["Assign Text", "setItem", "getItem", "JSON.stringify"],
        answer: "setItem"
      },
      {
        question: "In JavaScript, an array is assigned by using?",
        choices: ["parenthesis", "curly brackets", "brackets", "quotations"],
        answer: "brackets"
      },
      {
        question: "What programming language adds animation to a web page?",
        choices: ["HTML", "JavaScript", "CSS", "Bootstrap"],
        answer: "JavaScript"
      }
    ];
    
    
    function quizToDisplay(){
      for (i = 0 ; i < quizQuestions.length; i++) { 
        console.log(quizQuestions[i].question);
        
        choice0Div.addEventListener("click", quizToDisplay);
      }
    }
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
   quizToDisplay()

    var timerEl = document.getElementById("countdown");

    let secondSelect = 60;
    function startQuiz() {
        let secondSelect = 60;
        
        let timerInterval = setInterval(function() {
        secondSelect--;
        

        timerEl.textContent = secondSelect + " seconds remaining.";
  
          if(secondSelect === 0) {
            clearInterval(timerInterval);
            alert("Your time is up!");
            //here is where I reset the quiz.  
      }
  
    }, 1000);
      

    }
    let startBtn = document.getElementById("start-button");
    startBtn.addEventListener("click", startQuiz);
 
        
   // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
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
    

// function sendMessage() {
//   timeEl.textContent = " ";

//   var imgEl = document.createElement("img");

//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);

// }

// example from Marlon to iterate through the array  //////

// let globalTimer = 100
// let currentQuestion = 0;

// let questions = [
//   {
//     question: '1 + 1 = _',
//     answer: '2'
//   },
//   {
//     question: '2 + 1 = _',
//     answer: '3'
//   }, 
//   {
//     question: '2 + 4 = _',
//     answer: '6'
//   }
// ]

// function askQuestion(arrayOfQuestions, questionIndex) {
//   let question = arrayOfQuestions[questionIndex].question
//   let answer = arrayOfQuestions[questionIndex].answer

//   let userInput = prompt(question)

//   if (userInput != answer) {
//     globalTimer -= 10
//     alert("Wrong answer." + globalTimer + " seconds remaining.")
//   } else {
//     alert("Correct!")
//     currentQuestion++
//   }

// }


// while(currentQuestion < questions.length) {
//   askQuestion(questions, currentQuestion)
// }
 
    

    