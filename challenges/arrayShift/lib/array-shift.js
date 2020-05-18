'use strict';
function insertShiftArray (arr , num){
let meddle1=[];
for(let i = 0 ; i <=Math.ceil(arr.length/2);i++){
    meddle1.push(arr.shift())
}
meddle1.push(num);
let newarr= meddle1.concat(arr)

return newarr;

}
console.log(insertShiftArray([1,2,3,4,5],7)); 
console.log(insertShiftArray([2,4,6,8],5)); 
console.log(insertShiftArray([4,8,15,23,42],16)); 
module.exports = insertShiftArray;