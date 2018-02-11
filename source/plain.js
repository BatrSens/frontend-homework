'use strict';

function plain(array) {
	if (!Array.isArray(array)) {
		return array;
	}
	let newArray = [];
	array.forEach(element => {
		newArray = newArray.concat(plain(element));
	})
	return newArray;
}