const http = require('http');
const fs = require('fs');

const args = process.argv;
const app = http.createServer((req, res) => {
  const route = req.url;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (route === '/') res.end('Hello Holberton School!');
  else if (route === '/students') {
    // file path
    const path = args[2];
    // read from file
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) res.end('');

      res.write('This is the list of our students\n');
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
        students[list[idxFd]] += students[list[idxFd]] ? `, ${list[idxFn]}` : list[idxFn];
      });

      res.write(`Number of students: ${lines.length}`);
      for (const key in fields) {
        if (Object.hasOwnProperty.call(fields, key)) {
          const element = fields[key];
          res.write(`\nNumber of students in ${key}: ${element}. List: ${students[key]}`);
        }
      }
      res.end('');
    });
  }
});

app.listen('1245', 'localhost');

module.exports = app;
