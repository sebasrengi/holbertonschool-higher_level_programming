#!/usr/bin/node
exports.callMeMoby = function (number, thefunction) {
    for (let iter = 0; iter < number; iter++) {
	thefunction();
    }
};
