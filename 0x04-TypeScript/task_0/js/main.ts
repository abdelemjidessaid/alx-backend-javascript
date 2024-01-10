interface Student {
  firstname: string;
  lastname: string;
  age: number;
  location: string;
};

const std1: Student = {
  firstname: "Abdo",
  lastname: "Hero",
  age: 25,
  location: "Morocco, Beni Mellal"
};

const std2: Student = {
  firstname: "Simo",
  lastname: "Hm",
  age: 26,
  location: "Morocco, Kasba Tadla"
};

const students: Student[] = [std1, std2];

const table = document.querySelector('#students-table tbody');

students.forEach(function (student: Student) {
  const tableRow = document.createElement('tr');
  tableRow.innerHTML = `
    <td>${student.firstname}</td>
    <td>${student.location}</td>
  `;
  table.appendChild(tableRow);
});
