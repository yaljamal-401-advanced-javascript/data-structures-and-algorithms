/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const mutiBracketFunction=require('../lib/multi-bracket-validation.js');
describe('mutiBracketFunction()',()=>{
  let value='{}(){}';
  let value2='[({}]';
  it('true input ',()=>{
    expect( mutiBracketFunction(value)).toBeTruthy();
  });
  it('false input ',()=>{
    expect(mutiBracketFunction(value2)).toBeFalsy();
  });
});
