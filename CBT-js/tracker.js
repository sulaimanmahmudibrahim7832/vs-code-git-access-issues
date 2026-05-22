import { index, options, questionSpan, buttonsArray, answers } from "./CBT.js";
import { questions } from "./questions.js";
export { displayAnswer,saveAction};
  /* show that question has answered  */
function displayAnswer(index) {
    for (let i = 0; i < buttonsArray.length; i++) {
      buttonsArray[index].classList.add("is_answered");
      break
    }
  
}
/*hold the answered question  */
function saveAction() {
  if (answers[index] !== null) {
    document.querySelector(`input[value="${answers[index]}"]`).checked = true;
}
}