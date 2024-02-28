const round = Math.round;

module.exports = function calculateNumber(type, a, b) {
  if (type === 'DIVIDE') {
    if (round(b) === 0) {
      return 'Error';
    }
    return round(a) / round(b);
  }
  if (type === 'SUBTRACT') {
    return round(a) - round(b);
  }
  return round(a) + round(b);
};
