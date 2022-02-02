#!/usr/bin/node
const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const filename = process.argv[3];

request(url, function (error, response, body) {
  if (error) {
    console.error(error);
  } else if (response.statusCode === 200) {
    fs.writeFile(filename, body, 'utf8', (error) => {
      if (error) {
        console.error(error);
      }
    });
  }
});
