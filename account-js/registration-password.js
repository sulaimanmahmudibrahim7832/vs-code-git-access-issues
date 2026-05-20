export { verifyPassword };
function verifyPassword(password) {
  //is 8 or more character;
  // is contain character and numbers;
  //has upperCase;
  let isLength = false;
  let hasDigit = false;
  let hasUpper = false;

  isLength = verifyLength(password); 
  hasUpper = verifyUpper(password);
  hasDigit = verifyDigitFound(password);
  if(isLength && hasUpper && hasDigit){
    return true;
  }
  else {
    return false;
  }
}
function verifyLength(password,isLength) {
  if (password.length >= 8) {
    isLength = true;
  }
  else {
    isLength = false;
  }
  return isLength;
}
function verifyUpper(password) {
   let hasUpper;
  let ch;
  for (ch of password) {
    if ((ch === ch.toUpperCase()) && !(ch >= 0 && ch <= 9)) {
      hasUpper = true;
      break;
    }
    else {
      hasUpper = false;
    }
  }
  return hasUpper;
}
function verifyDigitFound(password) {
  let hasDigit;
  let ch;
  for (ch of password) {
    if (ch >= 0 && ch <= 9) {
      hasDigit = true;
      break;
    }
    else {
      hasDigit = false;
    }
  }
  return hasDigit;
}