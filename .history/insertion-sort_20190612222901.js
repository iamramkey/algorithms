function insertionSort(arr) {
	for (var i = 1; i < arr.length; i++) {
		var current = arr[i];
		console.log('current', current, 'i', i, 'arr', arr);
		for (var j = i - 1; j > -1 && current < arr[j]; j--) {
			console.log('current', current, 'i', i, 'j', j, 'arr[j]', arr[j]);
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = current;
		console.log('current', current, 'i', i, 'arr', arr);
	}
	return arr;
}

console.log(insertionSort([4, 3, 2, 1]));
