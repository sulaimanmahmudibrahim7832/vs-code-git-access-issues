
import { displayAnswer } from './tracker.js';
import { showQuestion } from './CBT-UI.js';
import {submitRequest } from './result.js';
import { Autosave } from './auto-save.js';
import { questions } from './questions.js';
export { index, options, answers, notificationContainer, questionSpan, buttonsArray };
/* HTML element to start changing the System (defined engines) */
const body = document.querySelector("body");
const previosButton = document.querySelector(".previous-button");
const nextButton = document.querySelector(".next-button");
const submitButton = document.querySelector(".submit-button");
const gotoButton = document.querySelector('.goto-button');
const questionSpan = document.querySelector('.question-progress');
const totalQuestions = document.querySelector('.total-questions');
const notificationContainer = document.querySelector(".submit-notification");
const QoptionA = document.querySelector(".optionA");
const QoptionB = document.querySelector(".optionB");
const QoptionC = document.querySelector(".optionC");
const QoptionD = document.querySelector(".optionD");
const lastIndex = questions.length - 1;
const options = document.querySelectorAll("input[name='a']");
/* Hide notification div  */
notificationContainer.style.display = "none";
 
/* aslo hide goto div  */
document.querySelector(".goto-container").style.display = "none";

/* initialise button html  */
let GotoButtonsHtml = '';
/** default index for present question highlighting  */
let index = 0;
 

/* state manager array for user action about answer  */
let answers = Array(questions.length).fill(null);

/* display Totol Question */
totalQuestions.innerHTML = `${questions.length}`;

/* display first question and its options  */
showQuestion();

/* care about key downs operations */
body.addEventListener('keydown', () => {
  if (event.key.toUpperCase() === "n".toUpperCase()) {
    nextAction();
  }
  else if (event.key.toUpperCase() === 'p'.toUpperCase()) {
    previousAction();
  }
  else if (event.key.toUpperCase() === 'g'.toUpperCase()) {
    document.querySelector(".goto-container").style.display = "flex";
  }
  else if (event.key.toUpperCase() === 's'.toUpperCase()) {
    submitRequest()
  }
 
  else if (event.key.toUpperCase() === 'a'.toUpperCase()) {
    options[0].checked = true;
    answers[index] = options[0].value;
    displayAnswer(index);
  }
  else if (event.key.toUpperCase() === 'b'.toUpperCase()) {
    options[1].checked = true;
    answers[index] = options[1].value;
    displayAnswer(index);
  }
  else if (event.key.toUpperCase() === "c".toUpperCase()) {
    
    
    options[2].checked = true;
    answers[index] = options[2].value;
    displayAnswer(index);
  }
  else if (event.key.toUpperCase() === "d".toUpperCase()) {
    options[3].checked = true;
    answers[index] = options[3].value;
    displayAnswer(index);
  }
});




/* update buttons once next and previuos actions function activate  */
  function updateButtons(index) {
    for (let i = 0; i < buttonsArray.length; i++) {
      if (index === index) {
        buttonsArray.forEach(
          btn => {
            btn.classList.remove("current-index");
          }
        )
        buttonsArray[index].classList.add("current-index");
      }
      break
    }
};
/* take user to next question */
function nextAction() {
      if (index < lastIndex) {
   index++;
   showQuestion();
        updateButtons(index);
        previosButton.classList.remove("last-index");
        
  }
  if (index === lastIndex) {
    nextButton.classList.add("last-index");
     previosButton.classList.remove("last-index");
  }
  
};

/* Take user to the previuos question  */
function previousAction() {
  if (index > 0) {
  index--;
  showQuestion();
  updateButtons(index);
    previosButton.classList.remove("last-index");
    nextButton.classList.remove('last-index');
  }
  if (index === 0) {
    previosButton.classList.add("last-index");
    nextButton.classList.remove('last-index');
  }
}
  
/* activate next action on click next button */
nextButton.addEventListener('click', () => {
  nextAction();
});
  
/* activate previous action on click previous button */
  previosButton.addEventListener("click", () => {
    previousAction();
  });

  /*Generate goto buttons from array of questions */
let buttons = "";
questions.forEach((question,index) => {
  buttons += `<button  id="current-index${index}" class="question-button">${index + 1} </button>`;
});
GotoButtonsHtml = `<span>${buttons}</span>`;
document.querySelector(".goto-container").innerHTML = `<div>${GotoButtonsHtml}</div>
 <div class="closed-button-container">
<span class="closed-button">X</span>
   </div>`;

const closedButton = document.querySelector(".closed-button");
closedButton.addEventListener("click",button=> {
  document.querySelector(".goto-container").style.display = "none";
});
gotoButton.addEventListener('click', () => {
  document.querySelector(".goto-container").style.display = "flex";
});
const buttonsArray = document.querySelectorAll(".goto-container button");


/** update goto buttons on user jump to any questions */
buttonsArray[0].classList.add("current-index");
buttonsArray.forEach((button, position) => {              
  button.addEventListener("click", () => {
    index = position;
    nextButton.classList.remove("last-index");
    previosButton.classList.remove("last-index");
    showQuestion();
        if (handleButtonRenderation(index, position)) {
          buttonsArray.forEach(btn => {
            btn.classList.remove("current-index");
          });
          button.classList.add("current-index");
        };
        }
  );
      
});

/* submit the entire exam once user click submit and confirm it by clicking yes j */
submitButton.addEventListener("click", () => {

  submitRequest();
});
/** Automatically submit the CBT  */
Autosave();
/* handle button renderation  */
function handleButtonRenderation(currentIndex,position) {

  let index = 0;
  if (position === currentIndex) {
    
    return true;
  }
  else {
    return false 
  }
}
function checkAnswer(index) {
if (answers[index] !== null)
{
  return true;
  }
else {
  return false 
  }
}

