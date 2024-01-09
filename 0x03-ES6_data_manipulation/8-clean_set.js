export default function cleanSet(set, startString) {
  if (
    !startString || startString.length === 0 || !set
    || !(set instanceof Set) || typeof startString !== 'string'
  ) return '';

  const result = [];

  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.substring(startString.length);

      if (valueSubStr && valueSubStr !== value) {
        result.push(valueSubStr);
      }
    }
  }

  return result.join('-');
}
