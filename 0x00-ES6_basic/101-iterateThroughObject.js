export default function iterateThroughObject(reportWithIterator) {
  let all = '';
  const iter = reportWithIterator[Symbol.iterator]();
  let current = iter.next();
  while (!current.done) {
    all += `${current.value}`;
    current = iter.next();
    if (!current.done) all += ' | ';
  }

  return all;
}
