#!/usr/bin/node
const path= process.argv;

if (path[2] === undefined) {
    console.log('No argument');
} else {
    console.log(path[2]);
}
