import { index, answers, options,questionSpan,buttonsArray} from "/quiz-js/quiz.js";
import { quiz } from "./questions.js";
export { displayAnswer, showQuestion };
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
    document.querySelector(`input[value="${answers[index]}"]`).checked
      = true;
}
}
/* display questions and its options  */
function showQuestion() {
  const Qnumber = document.querySelector(".question-number");
  const Qtext = document.querySelector('.question-text');
  const QoptionA = document.querySelector(".optionA");
  const QoptionB = document.querySelector(".optionB");
  const QoptionC = document.querySelector(".optionC");
  const QoptionD = document.querySelector(".optionD");

  Qnumber.textContent = quiz[index].questionId;
  Qtext.textContent = quiz[index].questionText;
  QoptionA.textContent = quiz[index].optionA;
  QoptionB.textContent = quiz[index].optionB;
  QoptionC.textContent = quiz[index].optionC;
  QoptionD.textContent = quiz[index].optionD;

  questionSpan.innerHTML = `${index + 1}`;
  options.forEach(
    input => {
      input.checked = false;
    }
  );
  
    options.forEach(input => {
      input.addEventListener("change", () => {
        answers[index] = input.value;
        displayAnswer(index);
      });
      saveAction();
    });
  };
