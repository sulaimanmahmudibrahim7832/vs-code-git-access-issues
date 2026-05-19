import { verifyEmail } from './regestration_email.js';
import { renderDefault, GotonextStep } from './registration-ui.js';
import { verifyPassword} from './registration-password.js';
export { highlightEmailError, backButton, passwordContainer, registerButton, identityContainer, nextButton, notification, userInfo, identify, userName, userEmail };
  
verifyPassword("su1233sdfs");
const userInfo = {
  userName:'no_name',
  userEmail:"no_email",
  password:"no_password"
};
const identityContainer = document.querySelector(".identity-input");
const passwordContainer = document.querySelector(".password-input");
const transition = document.querySelector(".action-container");


// input data ;
const userName = document.querySelector('.user-name');
const userEmail = document.querySelector('.user-email');
const createPassword = document.querySelector(".create-password");
const confirmPassword = document.querySelector(".confirm-password");
const notification = document.querySelector(".notification-container");
const eErrormsg = document.querySelector(".E-message");
//console.log(userName, userEmail, createPassword, confirmPassword);

// buttons data 
const registerButton = document.querySelector(".register-button");
const nextButton = document.querySelector('.next-button');
const backButton = document.querySelector(".back-button");

let identify = "isNotIdentify";
let create = "isNotCreated";
renderDefault();
nextButton.addEventListener("click", () => {
  let verified = verifyEmail(userEmail.value);
  if (verified) {
    eErrormsg.innerText = "successfully validated";
  }
  if (userName.value != '' && verified) {
    identify = "identified";
  }
  else {
    identify = "isNotIdentify";
    setTimeout(() => {
  eErrormsg.style.display = "none";
}),
  3000
  }
   eErrormsg.style.display = "inline-block";
  GotonextStep();
});
backButton.addEventListener("click",()=> {
  renderDefault();
});
let isInputEmpty = false;
registerButton.addEventListener("click", () => {
  isInputEmpty = !createPassword.value || !confirmPassword.value;
  if (isInputEmpty) {
     notification.style.display = "flex";
 notification.innerHTML = "input must not be empty try again";
 setTimeout(() => {
   notification.style.display = "none";
 }, 3000);
  } else {
    if ((createPassword.value === confirmPassword.value)) {
      userInfo.password = confirmPassword.value;
      document.body.innerHTML = " account was succesfully created loading to dashboard ";
      
    }
    else {
      //alert("create and confirm must be the same try again");
      notification.style.display = "flex";
      notification.innerHTML = "create and confirm must be the same try again";
      setTimeout(() => {
        notification.style.display = "none";
      }, 3000);
    }
  };
});

function highlightEmailError(count,relatedpos,atbound,dotbound) {
  const errorLogs = {
    count,relatedpos,atbound,dotbound
  }
  let text = '';
  count === false? text += ` (${emailErrormsg.count})`: eErrormsg.innerText = "";
   relatedpos === false? text += ` ( ${ emailErrormsg.relatedpos })` : eErrormsg.innerText = "";
  atbound === false ? text += ` (${emailErrormsg.atbound})` : eErrormsg.innerText = "";
  dotbound === false ? text += `( ${emailErrormsg.dotbound})` : eErrormsg.innerText = "";
  eErrormsg.innerText = text;
}

const emailErrormsg = {
  count: "please remove extra @ and leave only one at",
  relatedpos: "@ must come first then . ",
  atbound: "make it in the format of 'text@text' ",
  dotbound:"the format of 'text.text'"
}
