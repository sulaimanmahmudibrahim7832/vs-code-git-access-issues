export { renderDefault ,GotonextStep,nullErrMsgSession,errmsgsession};
  import { backButton,passwordContainer,registerButton,identityContainer,nextButton,notification,userInfo,identify ,userName,userEmail,errormsg} from "./registration.js";
function renderDefault() {
  backButton.style.display = "none";
passwordContainer.style.display = "none";
registerButton.style.display = "none";  
identityContainer.style.display = "flex";
nextButton.style.display = "inline-block";
notification.style.display = "none";
}
function GotonextStep() {
  if (identify === "identified") {
    nextButton.style.display = "none";
    backButton.style.display = "inline-block";
    identityContainer.style.display = "none";
    passwordContainer.style.display = "flex";
    registerButton.style.display = "inline-block";
    userInfo.userName = userName.value;
    userInfo.userEmail = userEmail.value;
  }
  else {
    notification.innerHTML = "please enter your name and email address";
    nullErrMsgSession();
  }
}
function nullErrMsgSession() {
   notification.style.display = "flex";
 setTimeout(() => {
   notification.style.display = "none";
 }, 3000);
}
function errmsgsession() {
  errormsg.style.display = "inline-block";
  setTimeout(() => {
    errormsg.style.display = "none";
  },
    1500);
}

