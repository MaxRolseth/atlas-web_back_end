export default class HolbertonCourse {
  constructor(name, length, students) {
    // verify type
    if (typeof name !== 'string') { throw TypeError('Name must be String'); }
    if (typeof length !== 'number') { throw TypeError('Length must be Number'); }
    if (!Array.isArray(students)) { throw TypeError('Students must be Array'); }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  // getters
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // setters
  set name(name) {
    if (typeof name !== 'string') { throw TypeError('Name must be String'); }

    this._name = name;
  }

  set length(length) {
    if (typeof length !== 'number') { throw TypeError('Length must be Number'); }

    this._length = length;
  }

  set students(students) {
    if (!Array.isArray(students)) { throw TypeError('Students must be Array'); }

    this._students = students;
  }
}
