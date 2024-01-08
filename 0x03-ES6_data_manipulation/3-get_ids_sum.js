export default function getStudentIdsSum(students) {
  if (!students) return 0;
  return students.reduce((accumulator, student) => student.id + accumulator, 0);
}
