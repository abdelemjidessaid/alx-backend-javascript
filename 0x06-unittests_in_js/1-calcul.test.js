const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('unittest for calculateNumber function', function () {
  // SUM tests
  describe('Testing SUM', function () {
    it('round(0)    + round(1.2)  is equal to 1', function () {
      assert.equal(calculateNumber('SUM', 0, 1.2), 1);
    });
    it('round(0.5)  + round(1.2)  is equal to 2', function () {
      assert.equal(calculateNumber('SUM', 0.5, 1.2), 2);
    });
    it('round(0.2)  + round(0.2)  is equal to 0', function () {
      assert.equal(calculateNumber('SUM', 0.2, 0.2), 0);
    });
    it('round(0.5)  + round(0.5)  is equal to 2', function () {
      assert.equal(calculateNumber('SUM', 0.5, 0.5), 2);
    });
    it('round(-10)  + round(0.5)  is equal to -9', function () {
      assert.equal(calculateNumber('SUM', -10, 0.5), -9);
    });
    it('round(-0.1) + round(-0.5) is equal to 0', function () {
      assert.equal(calculateNumber('SUM', -0.1, -0.5), 0);
    });
  });
  // SUBTRACT tests
  describe('Testing SUBTRACT', function () {
    it('round(1) - round(1.2) is equal to 0', function () {
      assert.equal(calculateNumber('SUBTRACT', 1, 1.2), 0);
    });
    it('round(0.1) - round(1) is equal to -1', function () {
      assert.equal(calculateNumber('SUBTRACT', 0.1, 1), -1);
    });
    it('round(0.5) - round(-1.5) is equal to 2', function () {
      assert.equal(calculateNumber('SUBTRACT', 0.5, -1.5), 2);
    });
    it('round(0) - round(0) is equal to 0', function () {
      assert.equal(calculateNumber('SUBTRACT', 0, 0), 0);
    });
    it('round(0.6) - round(-0.6) is equal to 2', function () {
      assert.equal(calculateNumber('SUBTRACT', 0.6, -0.6), 2);
    });
  });
  // DIVIDE tests
  describe('Testing DIVIDE', function () {
    it('round(1) / round(1) is equal to 1', function () {
      assert.equal(calculateNumber('DIVIDE', 1, 1), 1);
    });
    it('round(1) / round(2) is equal to 0.5', function () {
      assert.equal(calculateNumber('DIVIDE', 1, 2), 0.5);
    });
    it('round(2.5) / round(-3.5) is equal to -1', function () {
      assert.equal(calculateNumber('DIVIDE', 2.5, -3.5), -1);
    });
    it('round(-6.5) / round(-3.5) is equal to 2', function () {
      assert.equal(calculateNumber('DIVIDE', -6.5, -3.5), 2);
    });
    it('round(-6.5) / round(-3.5) is equal to 2', function () {
      assert.equal(calculateNumber('DIVIDE', -6.5, -3.5), 2);
    });
    it('round(1.2) / round(0) is equal to Error', function () {
      assert.equal(calculateNumber('DIVIDE', 1.2, 0), 'Error');
    });
    it('round(0) / round(0) is equal to Error', function () {
      assert.equal(calculateNumber('DIVIDE', 0, 0), 'Error');
    });
  });
});
