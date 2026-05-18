export { verifyEmail };
  import { highlightEmailError} from "./registration.js";
function verifyEmail(email) {
  let atCount = 0;
  let dotCount = 0;
  let hasSpace = false;
  let atPostion = false;
  let dotPosition = false;
  let text;
  let ch;
  function updateOccurence(email) {
    for (text of email) {
      if (text === "@") {
        atCount++
      }
      else if (text === ".") {
        dotCount++;
      
      }
      else if (text === " ") {
        hasSpace = true;
      }
    }
  }


  function updatePosition(email) {
    for (ch of email) {
      if (ch === "@") {
        atPostion = email.indexOf(ch);
      }
      else if (ch === ".") {
        dotPosition = email.indexOf(ch);
      }
    }
    //console.log(dotPosition, atPostion);
  }


  function validateCount() {
    if (atCount === 1 && dotCount > 0) {
      return true;
    }
    else {
      return false;
    }
  }
  function relateBoundary() {
    if (atPostion < dotPosition ) {
      return true;
    }
    else {
      return false;
    }
  }
  function setAtBoundary(email) {
    if (atPostion === 0 || (atPostion === (email.length - 1))) {
      return false;
    }
    else {
      return true;
    }
  }
  function setDotBoundary(email) {
    if (dotPosition === 0 || (dotPosition === (email.length - 1))) {
      return false;
    }
    else {
      return true;
    }
  };
   updateOccurence(email);
  let count = validateCount();
  updatePosition(email);
  //console.log(atPostion,dotPosition);
  let relatedpos = relateBoundary();
  let atbound = setAtBoundary(email);
  let dotbound = setDotBoundary(email); 
  //console.log(dotbound);
  highlightEmailError(count,relatedpos,atbound,dotbound);
  if (!hasSpace&&  count && relatedpos && atbound && dotbound) {
    return true;
  }
  else {
    return false;
  }
}