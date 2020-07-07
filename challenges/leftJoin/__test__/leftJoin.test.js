/* eslint-disable no-undef */
const HashTable = require('../hash.js');
const leftJoin = require('../leftJoin.js');

const table1 = new HashTable();
table1.add('fond', 'enamoured');
table1.add('wrath', 'anger');
table1.add('diligent', 'employed');
table1.add('outfit', 'garb');
table1.add('guide', 'usher');

const table2 = new HashTable();
table2.add('fond', 'averse');
table2.add('wrath', 'delight');
table2.add('diligent', 'idle');
table2.add('guide', 'follow');
table2.add('flow', 'jam');

const table3 = new HashTable();
table3.add('fond', 'averse');
table3.add('diligent', 'idle');
table3.add('guide', 'follow');
table3.add('amazing', 'incredible');
table3.add('answer', 'reply');
table3.add('plan', 'plot');
table3.add('mark', 'label');
table3.add('fall', 'drop');
table3.add('keep', 'retain');
table3.add('destroy', 'demolish');
table3.add('decide', 'determine');
table3.add('hurry', 'rush');
table3.add('obtain', 'aquire');

describe('leftJoin', () => {
  it('when left hashtable is short and right hashtable is larg', () => {
    const outPut = leftJoin(table1, table3);
    expect(outPut.length).toBe(5);
  });
  it('when left hashtable is large and right hashtable is short', () => {
    const outPut = leftJoin(table1, table2);
    expect(outPut.length).toBe(5);
  });
  it('non matched elements and additional values for matched elements', () => {
    const outPut = leftJoin(table1, table2);
    expect(outPut).toStrictEqual([
      ['guide', 'usher', 'follow'],
      ['outfit', 'garb', null],
      ['diligent', 'employed', 'idle'],
      ['wrath', 'anger', 'delight'],
      ['fond', 'enamoured', 'averse'],
    ]);
  });
});
