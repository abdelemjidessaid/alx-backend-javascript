export default function getStudentsByLocation(students, city) {
  if (!students) return [];
  return students.filter((value) => value.location === city);
}
