/* eslint-disable no-undef */
const repeatedWord = require('../repeatedWord.js').repeatedWord;
describe('String to array ', () => {
  it('find the first reapeted word', () => {
    const str = 'It was good,that was good';
    const reap = repeatedWord(str);
    expect(reap).toBe('was');
  });
  it('find reapeted word', () => {
    const str = 'apple was,Was';
    const reap = repeatedWord(str);
    expect(reap).toBe('was');

  });
});
