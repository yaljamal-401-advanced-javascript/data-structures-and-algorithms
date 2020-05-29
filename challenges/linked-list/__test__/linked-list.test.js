const LinkedListclass = require('../lib/linked-list.js');
const Node = require('../lib/node.js');

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

});

