export default function cleanSet(set, startString) {
  if (
    !startString || startString.length === 0 || !set
    || !(set instanceof Set) || typeof startString !== 'string'
  ) return '';

  const result = [];

  for (const value of set.values()) {
    if (value.startsWith(startString)) {
      result.push(value.replace(startString, ''));
    }
  }

  return result.join('-');
}
