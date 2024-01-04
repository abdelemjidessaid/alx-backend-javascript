export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') this._name = name;
    else throw TypeError('Name must be a string');

    if (typeof length === 'number') this._length = length;
    else throw TypeError('Length must be a number');

    if (Array.isArray(students) || students.every((item) => typeof item === 'string')) {
      this._students = students;
    } else throw TypeError('Students must be an array of strings');
  }

  get name() {
    return this._name;
  }

  set name(x) {
    this._name = x;
  }

  get length() {
    return this._length;
  }

  set length(x) {
    this._length = x;
  }

  get students() {
    return this._students;
  }

  set students(x) {
    this._students = x;
  }
}
