#!/usr/bin/node
const request = require('request');
const url = process.argv[2];

request(url, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    const tacksDisct = {};
    const json = JSON.parse(body);

    for (let i = 0; i < json.length; i++) {
      const userId = json[i].userId;
      const completed = json[i].completed;

      if (completed) {
        if (tacksDisct[userId] === undefined) {
          tacksDisct[userId] = 1;
        } else {
          tacksDisct[userId] += 1;
        }
      }
    }
    console.log(tacksDisct);
  }
});
