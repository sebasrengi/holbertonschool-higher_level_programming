#!/usr/bin/node
const path= process.argv[2];

if (path === undefined) {
    console.log('No argument');
} else {
    console.log(path);
}
