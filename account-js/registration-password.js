export { verifyPassword };
function verifyPassword(password) {
  //is 8 or more character;
  // is contain character and numbers;
  //has upperCase;
  let isLength = false;
  let isContainChar = false;
  let hasUpper = false;

  //isLength = verifyLength();
  isLength = verifyLength(password);
  console.log(isLength);
  //verifyIsContChar(password);
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
function verifyIsContChar(password) {
  
  
}