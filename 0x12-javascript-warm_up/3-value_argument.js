#!/usr/bin/node
const ARG_LENGTH = process.argv[2];

if (ARG_LENGTH === undefined) {
    console.log('No argument');
} else {
    console.log(ARG_LENGTH);
}
