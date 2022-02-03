#!/usr/bin/node
const request = require('request');
const argv = process.argv.slice(2);
const url = 'https://swapi-api.hbtn.io/api/films/' + argv[0];
request(url, function (err, response, body) {
  if (!err) {
    const characters = JSON.parse(body).characters;
    helperChar(characters, 0);
  }
});

function helperChar (chars, i) {
  request(chars[i], function (err, response, body) {
    if (!err) {
      console.log(JSON.parse(body).name);
      if (i + 1 < chars.length) {
        helperChar(chars, i + 1);
      }
    }
  });
}
