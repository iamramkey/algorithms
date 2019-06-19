function optimizedSolution(a) {
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

function solution(A) {
	const array = [...new Set(A)].filter((v, i) => v > 0).sort((a, b) => a - b);
	let value = array.length + 1;
	for (i = 0; i < array.length; i++) {
		if (array[i] !== i + 1) {
			value = i + 1;
			break;
		}
	}
	return value;
}

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

console.log(solution([-1, -3]));
console.log(solution([1, 3, 6, 4, 1, 2]));
