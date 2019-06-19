function insertionSort(arr) {
	for (var i = 1; i < arr.length; i++) {
		var current = arr[i];
		for (var j = i - 1; j > -1 && current < arr[j]; j--) {
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = current;
	}
	return arr;
}

console.log(insertionSort([4, 3, 2, 1]));
