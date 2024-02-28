const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./1-calcul');

describe('* Unittest for calculateNumber function', function () {
  // SUM tests
  describe('Testing 0.2 + 0.2', function () {
    it('should return 0', function () {
      const result = calculateNumber('SUM', 0.2, 0.2);
      expect(result).to.equal(0);
    });
  });
  describe('Testing 0.5 + 1.2', function () {
    it('should return 2', function () {
      const result = calculateNumber('SUM', 0.5, 1.2);
      expect(result).to.equal(2);
    });
  });
  describe('Testing 0 + 1.2', function () {
    it('should return 1', function () {
      const result = calculateNumber('SUM', 0, 1.2);
      expect(result).to.equal(1);
    });
  });
  describe('Testing 0.5 + 0.5', function () {
    it('should return 2', function () {
      const result = calculateNumber('SUM', 0.5, 0.5);
      expect(result).to.equal(2);
    });
  });
  describe('Testing -10 + 0.5', function () {
    it('should return -9', function () {
      const result = calculateNumber('SUM', -10, 0.5);
      expect(result).to.equal(-9);
    });
  });
  describe('Testing -0.1 + -0.5', function () {
    it('should return 0', function () {
      const result = calculateNumber('SUM', -0.1, -0.5);
      expect(result).to.equal(0);
    });
  });

  // SUBTRACT tests
  describe('Testing SUBTRACT', function () {
    it('should return 0', function () {
      const result = calculateNumber('SUBTRACT', 1, 1.2);
      expect(result).to.equal(0);
    });
    it('should return -1', function () {
      const result = calculateNumber('SUBTRACT', 0.1, 1);
      expect(result).to.equal(-1);
    });
    it('should return 2', function () {
      const result = calculateNumber('SUBTRACT', 0.5, -1.5);
      expect(result).to.equal(2);
    });
    it('should return 0', function () {
      const result = calculateNumber('SUBTRACT', 0, 0);
      expect(result).to.equal(0);
    });
    it('should return 2', function () {
      const result = calculateNumber('SUBTRACT', 0.6, -0.6);
      expect(result).to.equal(2);
    });
  });
  // DIVIDE tests
  describe('Testing DIVIDE', function () {
    it('round(1) / round(1) is equal to 1', function () {
      const result = calculateNumber('DIVIDE', 1, 1);
      expect(result).to.equal(1);
    });
    it('round(1) / round(2) is equal to 0.5', function () {
      const result = calculateNumber('DIVIDE', 1, 2);
      expect(result).to.equal(0.5);
    });
    it('round(2.5) / round(-3.5) is equal to -1', function () {
      const result = calculateNumber('DIVIDE', 2.5, -3.5);
      expect(result).to.equal(-1);
    });
    it('round(-6.5) / round(-3.5) is equal to 2', function () {
      const result = calculateNumber('DIVIDE', -6.5, -3.5);
      expect(result).to.equal(2);
    });
    it('round(-6.5) / round(-3.5) is equal to 2', function () {
      const result = calculateNumber('DIVIDE', -6.5, -3.5);
      expect(result).to.equal(2);
    });
    it('round(1.2) / round(0) is equal to Error', function () {
      const result = calculateNumber('DIVIDE', 1.2, 0);
      expect(result).to.equal('Error');
    });
    it('round(0) / round(0) is equal to Error', function () {
      const result = calculateNumber('DIVIDE', 0, 0);
      expect(result).to.equal('Error');
    });
  });
});
