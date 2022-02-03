#!/usr/bin/node
const request = require('request');
const url = 'https://swapi-api.hbtn.io/api/films/' + process.argv[2];

request(url, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    const json = JSON.parse(body).characters;

    for (let i = 0; i < json.length; i++) {
      request(json[i], function (error, response, bodyjson) {
        if (error) {
          console.error(error);
        }
        console.log(JSON.parse(bodyjson).name);
      });
    }
  }
});
