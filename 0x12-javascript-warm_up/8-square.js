#!/usr/bin/node
const ARG = parseInt(process.argv[2]);

if (!ARG) {
    console.log('Missing size');
} else if (ARG > 0) {
    const SIZE = 'X'.repeat(ARG);

    for (let iterY = 0; iterY < ARG; iterY++) {
	console.log(SIZE);
    }
}
