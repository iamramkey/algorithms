function insertionSort(arr) {
	for (var i = 1; i < arr.length; i++) {
		var current = arr[i];
		for (var j = 0; j < i && current > arr[j]; j++) {
			arr[i] = arr[j];
			console.log(i, j, arr[i], arr[j]);
		}
		if (arr[j] < current) {
			arr[j] = current;
		}
	}
	return arr;
}

insertionSort([4, 3, 2, 1]);
