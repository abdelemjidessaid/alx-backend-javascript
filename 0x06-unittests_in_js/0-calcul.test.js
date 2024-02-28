const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('round(1.2 + 4.0) is equal to 5', function () {
    assert.equal(calculateNumber(1.2, 4.0), 5);
  });

  it('round(1.5 + 4.0) is equal to 6', function () {
    assert.equal(calculateNumber(1.5, 4.0), 6);
  });

  it('round(1.6 + 3.4) is equal to 5', function () {
    assert.equal(calculateNumber(1.6, 3.4), 5);
  });

  it('calculateNumber returns a number', function () {
    const res = calculateNumber(1, 3);
    assert.equal(typeof res, 'number');
  });
});
