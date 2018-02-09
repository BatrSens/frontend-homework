'use strict';

function plain(array) {
	if (!Array.isArray(array))
		return array;
	var newArray = [];
	for (var i = 0; i < array.length; i++)
		newArray = newArray.concat(plain(array[i]));
	return newArray;
}