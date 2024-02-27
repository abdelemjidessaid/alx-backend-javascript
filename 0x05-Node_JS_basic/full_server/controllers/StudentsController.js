import readDatabase from '../utils';

module.exports = class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((data) => {
        let result = 'This is the list of our students';
        for (const field in data) {
          if (Object.hasOwnProperty.call(data, field)) {
            const s = data[field];
            result += `\nNumber of students in ${field}: ${s.length}. List: ${s}`;
          }
        }
        response.send(result);
      })
      .catch((error) => {
        response.send(error.message);
      });
  }

  static getAllStudentsByMajor(request, response) {
    if (!['SWE', 'CS'].includes(request.params.major)) {
      response.status(500).send('Major parameter must be CS or SWE');
    }
    readDatabase(process.argv[2])
      .then((data) => {
        const printData = data[request.params.major].students;
        if (printData) response.send(printData);
        response.status(500).send('Major parameter must be CS or SWE');
      })
      .catch((err) => {
        response.send(err.message);
      });
  }
};
