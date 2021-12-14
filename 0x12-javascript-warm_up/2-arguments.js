#!/usr/bin/node
const ARGS_LENGTH = process.argv.length;

if (ARGS_LENGTH === 2) {
    console.log('No argument');
} else if (ARGS_LENGTH === 3) {
    console.log('Argument found');
} else {
    console.log('Arguments found');
}
