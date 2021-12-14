#!/usr/bin/node
const ARG_LENGTH = process.argv[2];

if (isNaN(ARG_LENGTH)) {
    console.log('Not a number');
} else {
    console.log('My number: ' + parseInt(ARG_LENGTH));
}
