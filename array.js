function rotateArray(arr, k) {
	k = k % arr.length;
	return arr.slice(k).concat(arr.slice(0, k));
}
const arr = [1, 2, 3, 4, 5];

const k = parseInt(prompt('Enter k value to rotate array:'), 10);
if (!isNaN(k)) {
	alert('Rotated array: ' + rotateArray(arr, k).join(','));
} else {
	alert('Invalid k value entered.');
}

