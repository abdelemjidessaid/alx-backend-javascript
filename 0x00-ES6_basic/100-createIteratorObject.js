export default function createIteratorObject(report) {
  const all = [];
  for (const depEmp of Object.values(report.allEmployees)) {
    all.push(...depEmp);
  }

  return all;
}
