'use strict';

function reverseArray(arr) {
    let temparr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        temparr.push(arr[i]);
    }
    return temparr;


}
// test function
let arr = [1, 2, 3, 4, 5];
let rearry = reverseArray(arr);
console.log('the arr before reversiing ', arr);
console.log('the arr after reversiing ', rearry);