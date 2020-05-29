'use strict';

function reverseArray(arr) {
  let temparr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    temparr.push(arr[i]);
  }
  return temparr;
}
// eslint-disable-next-line no-undef
module.exports = reverseArray;
