export default function cleanSet(set, startString) {
  if (!startString || startString.length === 0) return '';
  const result = Array.from(set).reduce((acc, value) => {
    if (value.startsWith(startString)) {
      return acc + (acc.length === 0 ? '' : '-') + value.replace(startString, '');
    }
    return acc;
  }, '');

  return result;
}
