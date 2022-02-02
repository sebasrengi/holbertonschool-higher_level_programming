#!/usr/bin/node
const request = require('request');
const args = process.argv.slice(2);
const userid = args[0];
const url = 'https://swapi-api.hbtn.io/api/films/' + userid;

request(url, function (error, response, body) {
  if (error) {
    console.error(error);
  } else if (response.statusCode === 200) {
    const json = JSON.parse(body);
    console.log(json.title);
  }
});
