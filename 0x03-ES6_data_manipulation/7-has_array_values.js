export default function hasValuesFromArray(set, array) {
  if (!array || array.length === 0) return false;

  for (const v of array) {
    if (!set.has(v)) return false;
  }

  return true;
}
