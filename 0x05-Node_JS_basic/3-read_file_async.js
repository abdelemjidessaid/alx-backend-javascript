const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (error, data) => {
      if (error) reject(Error('Cannot load the database'));

      const lines = data.split('\n').slice(1, -1);
      const header = data.split('\n').slice(0, 1)[0].split(',');
      const idxFn = header.findIndex((ele) => ele === 'firstname');
      const idxFd = header.findIndex((ele) => ele === 'field');
      const fields = {};
      const students = {};

      lines.forEach((line) => {
        const list = line.split(',');
        if (!fields[list[idxFd]]) fields[list[idxFd]] = 0;
        fields[list[idxFd]] += 1;
        if (!students[list[idxFd]]) students[list[idxFd]] = '';
        students[list[idxFd]] += students[list[idxFd]]
          ? `, ${list[idxFn]}`
          : list[idxFn];
      });

      console.log(`Number of students: ${lines.length}`);
      for (const k in fields) {
        if (Object.hasOwnProperty.call(fields, k)) {
          const e = fields[k];
          console.log(`Number of students in ${k}: ${e}. List: ${students[k]}`);
        }
      }

      return resolve();
    });
  });
}

module.exports = countStudents;