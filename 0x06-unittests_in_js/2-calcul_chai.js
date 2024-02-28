const round = Math.round;

module.exports = function calculateNumber(type, a, b) {
  if (type === 'SUM') {
    return round(a) + round(b);
  } else if (type === 'SUBTRACT') {
    return round(a) - round(b);
  } else if (type === 'DIVIDE') {
    return round(b) === 0 ? 'Error' : round(a) / round(b);
  }
  return 0;
};
