process.stdin.setEncoding("utf-8");
console.log("Welcome to Holberton School, what is your name?");

process.stdin.on("readable", () => {
  const input = process.stdin.read();
  if (input) {
    console.log("Your name is: " + input);
  }
});

process.stdin.on("end", () => {
  process.stdout.write("This important software is now closing");
});
