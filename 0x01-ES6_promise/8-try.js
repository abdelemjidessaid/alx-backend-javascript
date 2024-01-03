export default function divideFunction(numerator, denominator) {
  if (denominator === 0) throw new Error('annot divide by 0');

  return numerator / denominator;
}
