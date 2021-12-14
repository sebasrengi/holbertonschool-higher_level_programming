#!/usr/bin/node
const ARG = parseInt(process.argv[2]);

if (!ARG) {
    console.log('Missing number of occurrences');
} else {
    for (let iter = 0; ARG > iter; iter++) {
	console.log('C is fun');
    }
}
