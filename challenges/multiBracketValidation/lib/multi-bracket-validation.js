function multiBracketValidation(input){
  let round=0;
  let square=0;
  let curly=0;
  let arrayString=[];
  arrayString= input.split('');
  console.log(arrayString);
  arrayString.forEach((val)=>{
    if(val==='('){
      console.log('(');
      round++;
    }else if(val==='{'){
      console.log('{');
      curly++;
    }else if(val==='['){
      console.log('[');
      square++;
    }
    // counter++;
  });
  if(round %2===0||curly%2===0||square%2===0){
    console.log('teeeeest');
    return true;
  } else {
    if(round%2===1){
      console.log('error unmatched opening ( remaining.');
      return false;
    }else if(curly%2===1){
      console.log('error unmatched opening { remaining.');
      return false;
    }else if(square%2===1){
      console.log('error unmatched opening [ remaining.');
      return false;
    }
  }
}
// eslint-disable-next-line no-undef
module.exports=multiBracketValidation;
