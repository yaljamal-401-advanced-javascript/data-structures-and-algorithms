/* eslint-disable no-undef */
function repeatedWord(string) {
  let word = stringToWordArray(string);
  let copy = [];
  for (let i = 0; i < word.length; i++) {
    for (let k = 0; k < copy.length; k++) {
      if (word[i] === copy[k]) return word[i];
    }
    copy[copy.length] = word[i];
  }
  return null;
}
function stringToWordArray(string) {
  let words = [];
  let word = '';
  for (let index = 0; index < string.length; index++) {
    let character = string[index];
    let charCode = string.charCodeAt(index);
    if (
      (charCode >= 65 && charCode <= 90)
      || (charCode === 39) ||
      (charCode >= 97 && charCode <= 122)) {
      word += character;
    } else {
      if (word.length > 0) words[words.length] = word.toLowerCase();
      word = '';
    }
  }
  if (word.length > 0) words[words.length] = word.toLowerCase();
  return words;
}
module.exports = { stringToWordArray, repeatedWord };

