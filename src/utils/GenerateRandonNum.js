function GenerateRandonNum() {
  return Math.floor(Math.random() * (126 - 33 + 1)) + 33;
}

// 33 is the first ASCII code that represents the first charcter that could be in a password
// 126 is the first ASCII code that represents the last charcter that could be in a password

export default GenerateRandonNum;
