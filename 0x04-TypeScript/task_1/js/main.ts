export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
}

export interface StudentClassInterface {
  new (firstName: string, lastName: string): StudentClass;
}

export interface StudentClass {
  workHomework(): string;
  displayName(): string;
}

export class StudentClass implements StudentClass {
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this._firstName;
  }
}
