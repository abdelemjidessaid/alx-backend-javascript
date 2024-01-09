export default function setFromArray(array) {
  if (!array) return new Set();
  return new Set(array);
}
