export { showQuestion };
import { displayAnswer,saveAction } from "./tracker.js";
import { answers,index,questionSpan,options } from "./CBT.js";
import { questions } from "./questions.js";
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


