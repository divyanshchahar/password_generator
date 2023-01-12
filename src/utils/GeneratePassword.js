import GenerateRandonNum from "./GenerateRandonNum";

function GeneratePassword(charCount, exceptChar, stateFunc) {
  const password = [];
  let i = 1;
  let excludeArray = [];

  if (exceptChar) {
    excludeArray = Array.from(exceptChar.replace(/ +/g, ""));
  }

  let currentChar = "";
  while (i <= parseInt(charCount)) {
    currentChar = String.fromCharCode(GenerateRandonNum());
    if (excludeArray.includes(currentChar)) {
      console.log("trigerred");
    } else {
      password.push(currentChar);
      i++;
    }
  }
  stateFunc(password.join(""));
}

export default GeneratePassword;
