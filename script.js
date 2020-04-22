let questionEl = document.getElementById("question");
let choiceEl = document.getElementById("choices");
let points = 0;
let currentQuestion = 0;

// make a list of objects representing the quiz data
// remember that when we want to organize data in JS we typically use objects

//  Quiz questions that will be asked.
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

//   1. Need to use the DOM to navigate the HTML document and create buttons and divs for text content.
 //   2. Need to write a function to populate the buttons and divs with the quiz object values.
 //   3. Need to add event listeners for each button in this function.
 //   4. Need to evaluate if the button matches the correct or incorrect object value.
 //   5. If false, need to deduct time from the counter.
 //   6. If true, need to add to the score.
 //   7. Final score is score + time remaining.
 //   8. Need to write a function to take an input values with a prompt and convert this to local storage.
 //   9. Need to create a list on the highscores page to track best performance.  
      
    function quizButtons () {
      //<button type="button" class="btn btn-outline-success">Success</button>
      // <li class="btn btn-primary btn-sm" id="zero">Choice 0</li>
      //                   <li class="btn btn-primary btn-sm" id="one">Choice 1</li>
      //                   <li class="btn btn-primary btn-sm" id="two">Choice 2</li>
      //                   <li class="btn btn-primary btn-sm" id="three">Choice 3</li>
    }
    
    function askQuestion(arrayOfQuestions, questionIndex) {
      let question = arrayOfQuestions[questionIndex].question
      let answer = arrayOfQuestions[questionIndex].answer
    
      let userInput = prompt(question)
      //for (i = 0 ; i < quizQuestions.length; i++) { 
      //     console.log(quizQuestions[i].question);
          
      //     choice0Div.addEventListener("click", quizToDisplay);
      //   }
      // }

      if (userInput != answer) {
        secondSelect -= 10
        alert("Wrong answer." + secondSelect + " seconds remaining.")
      } else {
        alert("Correct!")
        currentQuestion++
        points ++
      }
    
    }
    
    
// while(currentQuestion < questions.length) {
//   askQuestion(questions, currentQuestion)
// }
    // function quizToDisplay(){
    //   
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
        
        let timerInterval = setInterval(function() {
        secondSelect--;
        

        timerEl.textContent = secondSelect + " seconds";
  
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


 
    

    