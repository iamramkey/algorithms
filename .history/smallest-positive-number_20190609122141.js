/*
This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
Copyright 2009–2019 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

*/

function solution(A) {
	// write your code in JavaScript (Node.js 8.9.4)
	if (!(A instanceof Array) && A.length < 1) {
		return null;
	}
	//     A = A.filter((e,i) => A.indexOf(e) === i);
	A.sort((a, b) => a - b);
	var min = Math.min.apply(null, A);
	var max = Math.max.apply(null, A);
	if (max < 1) {
		max = 1;
	}
	for (var i = min; i <= max + 1; i++) {
		if (A.indexOf(i) === -1 && i > 0) {
			return i;
		}
	}
	return max;
}

function solution(a) {
	const length = a.length;
	const map = Array(length).fill(false);
	for (let i = 0; i < length; i++) {
		const item = a[i];
		if (item < 1 || item > length) {
			continue;
		}
		map[item - 1] = true;
	}
	for (let i = 0; i < length; i++) {
		if (!map[i]) {
			return i + 1;
		}
	}
	return length + 1;
}
