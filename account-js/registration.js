import { verifyEmail } from './regestration_email.js';
import { renderDefault, GotonextStep,nullErrMsgSession,errmsgsession } from './registration-ui.js';
import { verifyPassword} from './registration-password.js';
export {  backButton, passwordContainer, registerButton, identityContainer, nextButton, notification, userInfo, identify, userName, userEmail,errormsg};
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
const errormsg = document.querySelector(".E-message");
//console.log(userName, userEmail, createPassword, confirmPassword);

// buttons data 
const registerButton = document.querySelector(".register-button");
const nextButton = document.querySelector('.next-button');
const backButton = document.querySelector(".back-button");

let identify = "isNotIdentify";
let create = "isNotCreated";
renderDefault();
nextButton.addEventListener("click", () => {
  let verifiedEmail = verifyEmail(userEmail.value);
  if (verifiedEmail) {
    errormsg.innerText = "successfully validated";
    errmsgsession();
  }
  else {
    errormsg.innerText = "please validate your email ";
    errmsgsession();

  }
  if (userName.value != '' && verifiedEmail) {
    identify = "identified";
  }
  else {
    identify = "isNotIdentify";
  }
   errormsg.style.display = "inline-block";
  GotonextStep();
});
backButton.addEventListener("click",()=> {
  renderDefault();
});
let isInputEmpty = false;
registerButton.addEventListener("click", () => {
  let verifiedPassword = verifyPassword(createPassword.value);
  if (verifiedPassword) {
    errormsg.innerText = "you create a strong password";
  }
  isInputEmpty = !createPassword.value || !confirmPassword.value;
  if (isInputEmpty) {
    //console.log("input must not be empty ");
    notification.innerText = "input must not be empty";
    nullErrMsgSession();
  }
  else {
    console.log(verifiedPassword);
    if (verifiedPassword) {
      if ((createPassword.value === confirmPassword.value)) {
        userInfo.password = confirmPassword.value;
        document.body.innerHTML = " account was succesfully created loading to dashboard ";
      }
      else {
        notification.innerHTML = "create and confirm must be the same try again";
          nullErrMsgSession();
      }
    }
    else {
      errormsg.innerText = "you must make password strong to continue ";
      errmsgsession();
      //console.log("you must make password strong to continue ");
    }
  }
});
