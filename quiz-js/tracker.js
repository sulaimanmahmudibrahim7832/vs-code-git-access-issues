import { index, options, questionSpan, buttonsArray, answers } from "./CBT.js";
import { questions } from "./questions.js";
export { displayAnswer, showQuestion};
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

  Qnumber.textContent = questions[index].questionId;
  Qtext.textContent = questions[index].questionText;
  QoptionA.textContent = questions[index].optionA;
  QoptionB.textContent = questions[index].optionB;
  QoptionC.textContent = questions[index].optionC;
  QoptionD.textContent = questions[index].optionD;

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
