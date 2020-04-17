let questionsDiv = document.getElementById("quiz-questions");
let questionAskedDiv = document.getElementById("question-asked");
let choice0Div = document.getElementById("0");
let choice1Div = document.getElementById("1");
let choice2Div = document.getElementById("2");
let choice3Div = document.getElementById("3");

// make a list of objects representing the quiz data
// remember that when we want to organize data in JS we typically use objects

let quizQuestions = [
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
    quizToDisplay()

    var timerEl = document.getElementById("countdown");

    function startQuiz() {
        let secondSelect = 60;
        
        let timerInterval = setInterval(function() {
        secondSelect--;
        

        timerEl.textContent = secondSelect + " ...";
  
          if(secondSelect === 0) {
            clearInterval(timerInterval);
            //here is where I reset the quiz.  
      }
  
    }, 1000);
      

    }
    let startBtn = document.getElementById("start-button");
    startBtn.addEventListener("click", startQuiz);

// function sendMessage() {
//   timeEl.textContent = " ";

//   var imgEl = document.createElement("img");

//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);

// }



    // keep track of the question we are currently on
    // let currentQuestion = 0;
    // function render() {
      // let questionData = quizQuestions[currentQuestion];
      // $("#question").text(questionData.question);
      // $("#options").empty();
      // for (let choice of questionData.choices) {
        // $("#options").append($("<li>").text(choice))
      // }
      // currentQuestion += 1;
      // if (currentQuestion === questionData.length) {
         //  currentQuestion = 0;
      // }
    // }
    // $("#submit").click(render)
  // render()
    

    