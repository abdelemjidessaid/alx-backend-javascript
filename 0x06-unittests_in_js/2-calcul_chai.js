const round = Math.round;

module.exports = function calculateNumber(type, a, b) {
  if (type === 'SUM') {
    return round(a) + round(b);
  }
  if (type === 'SUBTRACT') {
    return round(a) - round(b);
  }
  if (type === 'DIVIDE') {
    round(b) === 0 ? 'Error' : round(a) / round(b);
  }
};
