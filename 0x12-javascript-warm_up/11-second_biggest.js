#!/usr/bin/node
const LIST = process.argv.slice(2).map(Number);
if (LIST[0] === undefined) {
    console.log(0);
} else if (LIST.length === 1) {
    console.log(0);
} else {
    const second = LIST.sort(function (a, b) {
	return b - a;
    })[1];
    console.log(second);
}
