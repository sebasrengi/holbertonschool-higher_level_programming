#!/usr/bin/node

exports.esrever = function (list) {
    const reverselist = [];

    for (let iter = list.length - 1; iter >= 0; iter--) {
	reverselist.push(list[iter]);
    }
    return reverselist;
};
