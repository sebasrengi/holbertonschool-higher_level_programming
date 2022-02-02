#!/usr/bin/node
const fs = require('fs');
const args = process.argv.slice(2);
const file = args[0];

fs.readFile(file, 'utf8', (error, data) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(data);
});
