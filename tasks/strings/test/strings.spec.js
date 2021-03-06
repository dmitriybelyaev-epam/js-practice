const expect = require('chai').expect;
const {
  centuryFromYear, 
  strCount,
  truncateString
} = require('../strings');

describe('Calculate a century by year', () => {

  const expectedResults = [
    [1705, 18], [1900, 19], [1601, 17], [2000,20]
  ];

  expectedResults.forEach(result => {
    it(`should return ${result[1]} for ${result[0]} year`, () => {
        return expect(centuryFromYear(result[0])).to.equal(result[1]);
    });
  });

});

describe('Calculate count of the provided char in the string', () => {

  it('should 1 for string Hello for O letter', () => {
    expect(strCount('Hello', 'o')).to.equal(1);
  });

  it('should 2 for string Hello for l letter', () => {
    expect(strCount('Hello', 'l')).to.equal(2);
  });

  it('should return 0 if there is no such letter', () => {
    expect(strCount('Hello', 'z')).to.equal(0);
  });

});

describe('Truncate a string', () => {

  it('should truncate a string', () => {
    const actualStr = 'The longest string';
    const expectedStr = 'The lo...';

    expect(truncateString(actualStr, 6)).to.equal(expectedStr);
  });

  it('should return an initial string if the length is less than truncated number', () => {

    const actualStr = 'eye';

    expect(truncateString(actualStr, 3)).to.equal(actualStr);
  });

});