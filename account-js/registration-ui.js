export { renderDefault ,GotonextStep};
  import { backButton,passwordContainer,registerButton,identityContainer,nextButton,notification,userInfo,identify ,userName,userEmail} from "./registration.js";
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
    notification.style.display = "flex";
    notification.innerHTML = "please enter your name and email address";
    setTimeout(() => {
      notification.style.display = "none";
    }, 3000);
  }
}

