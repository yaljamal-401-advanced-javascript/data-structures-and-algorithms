const Node=require('../lib/node.js');
describe('Insert Node Module',()=>{
it('Insert()',()=>{
const value='some text';
const node=new Node();
const add= node.insert(value);
expect(add).toEqual(value);
});
it('includes()',()=>{
    const value='some text';
    const node=new Node(value);
    expect(node.value).toEqual(true);

    });
    



});