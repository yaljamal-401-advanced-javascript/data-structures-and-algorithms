const Node=require('../lib/linked-list.js');
describe('Insert Node Module',()=>{
const value='some text';
const node=new Node();
it('Insert()',()=>{
const add= node.insert(value);
expect(add.head.value).toEqual(value);
});
});
// describe('includes Node Module',()=>{
//     const value='some text';
//     const node=new Node();
//     it('includes()',()=>{
//     const add= node.insert(value);
//     expect(node.includes(add)).toBeTruthy();
//     });
//     });
    
