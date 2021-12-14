#!/usr/bin/node

function add (a, b) {
    return a + b;
}

const NUMBER1 = parseInt(process.argv[2]);
const NUMBER2 = parseInt(process.argv[3]);

console.log(add(NUMBER1, NUMBER2));
