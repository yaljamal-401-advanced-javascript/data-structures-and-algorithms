/* eslint-disable no-undef */
let HashTable = require('../hashtable.js');
const hashTable = new HashTable();
describe('testing hashTable', () => {
  it('add()', () => {
    hashTable.add(15, 19);
    let contained = hashTable.contain(15);
    expect(contained).toBeTruthy();
  });
  it('contain()', () => {
    let contained = hashTable.get(20);
    expect(contained).toBeNull();
  });
  it('contain()', () => {
    let contained = hashTable.contain(15);
    expect(contained).toBeTruthy();
  });
});
