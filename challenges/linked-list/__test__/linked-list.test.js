/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const LinkedListclass = require('../lib/linked-list.js');
const merge=require('../lib/llmerge.js');
// const mergeLists=require('../../IIMerge/ll-merge.js');
describe('Insert LinkedList Module', () => {
  const value = 'some text';
  const LinkedList = new LinkedListclass();
  it('Insert()', () => {
    const add = LinkedList.insert(value);
    expect(add.head.value).toEqual(value);
  });
  it('Include()', () => {
    expect(LinkedList.includes(value)).toBeTruthy();
  });
  it('includes() in valed data', () => {
    expect(LinkedList.includes('invaled')).toBeFalsy();
  });
  it('toString()',()=>{
    expect(LinkedList.toString()).toEqual('{some text}->NULL');
  });
  it('append()',()=>{
    let list=new LinkedListclass();
    list.append('test 1');
    expect(list.head).toEqual({value:'test 1',next:null});
    list.append('test 2');
    list.append('test 3');
    expect(list.head).toEqual({value:'test 1',next:{value:'test 2',next:{value:'test 3',next:null}}});
  });
  it('insertBefore() when the linked list empety',()=>{
    let list=new LinkedListclass();
    list.insertBefore('test3','test2');
    expect(list).toEqual({head:null});
  });
  it('insertBefore() when the value not in the linked list ',()=>{
    let list=new LinkedListclass();
    list.append('test 2');
    list.insertBefore('test 3','empty');
    expect(list).toEqual({head:{value:'test 2',next:null}});
  });
  it('insertBefore() insert in the linked list ',()=>{
    let list2=new LinkedListclass();
    list2.append('test 1');
    list2.insertBefore('test 1','test 2');
    expect(list2).toEqual({head:{value:'test 1',next:{value:'test 2',next:null}}});
  });
  it('insertAfter() when the linked list empety',()=>{
    let list=new LinkedListclass();
    list.insertAfter('test3','test2');
    expect(list).toEqual({head:null});
  });
  it('insertAfter() when the value not in the linked list ',()=>{
    let list=new LinkedListclass();
    list.append('test 2');
    list.insertAfter('test 3','empty');
    expect(list).toEqual({head:{value:'test 2',next:null}});
  });
  it('insertAfter() insert in the linked list ',()=>{
    let list2=new LinkedListclass();
    list2.append('test 1');
    list2.insertAfter('test 1','test 2');
    expect(list2).toEqual({head:{value:'test 1',next:{value:'test 2',next:null}}});
  });

  it('K test',()=>{
    let list3 =new LinkedListclass();
    list3.insert('test 1');
    expect(list3.kthFromEnd(0)).toEqual('test 1');
    expect(list3.kthFromEnd(1)).toEqual('Exception');
    expect(list3.kthFromEnd(2)).toEqual('Exception');
    list3.insert('test 2');
    list3.insert('test 3');
    list3.insert('test 4');
    list3.insert('test 5');
    expect(list3.kthFromEnd(-2)).toEqual('Exception');
    expect(list3.kthFromEnd(1)).toEqual('test 4');
    expect(list3.kthFromEnd(2)).toEqual('test 3');
    expect(list3.kthFromEnd(3)).toEqual('test 2');
  });
  describe('merge()', () => {
    let list4 = new LinkedListclass();
    let list5 = new LinkedListclass();
    list4.append(4);
    list4.append(5);
    list5.append('x');
    list5.append('y');
    it('if the merge pass',()=>{
      expect(merge(list4,list5)).toEqual({ head:  { value: 4, next: { value: 'x', next: { value: 5, next: { value: 'y', next: null } } } } });
    });

  });
});

