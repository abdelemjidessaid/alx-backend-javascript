const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;
const host = 'localhost';

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) return reject(Error('Cannot load the database'));
      const lines = data.split('\n').slice(1, -1);
      const header = data.split('\n').slice(0, 1)[0].split(',');
      const idxFn = header.findIndex((ele) => ele === 'firstname');
      const idxFd = header.findIndex((ele) => ele === 'field');
      const fields = {};
      const students = {};
      const all = {};

      lines.forEach((line) => {
        const list = line.split(',');
        if (!fields[list[idxFd]]) fields[list[idxFd]] = 0;
        fields[list[idxFd]] += 1;
        if (!students[list[idxFd]]) students[list[idxFd]] = '';
        students[list[idxFd]] += students[list[idxFd]] ? `, ${list[idxFn]}` : list[idxFn];
      });

      all.numberStudents = `Number of students: ${lines.length}\n`;
      all.listStudents = [];
      for (const key in fields) {
        if (Object.hasOwnProperty.call(fields, key)) {
          const element = fields[key];
          all.listStudents.push(`Number of students in ${key}: ${element}. List: ${students[key]}`);
        }
      }
      return resolve(all);
    });
  });
}

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');
  countStudents(process.argv[2])
    .then((data) => {
      res.write(`Number of students: ${data.numberStudents}\n`);
      res.write(data.listStudents.join('\n'));
      res.end('\n');
    })
    .catch((error) => {
      res.end(error.message);
    });
});

app.listen(port, host);

module.exports = app;
