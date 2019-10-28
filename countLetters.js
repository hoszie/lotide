const countLetters = function (str) {
  let result = {};
  let noSpace = str.split(' ').join("");
  
  for (const letter of noSpace) {
    
    if(result[letter] === " ") {
      result ++;
    } else if(result[letter]) {
      result[letter] = result[letter] + 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
}

module.exports = countLetters;


