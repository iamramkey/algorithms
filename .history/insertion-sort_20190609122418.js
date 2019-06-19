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

console.log(solution([-1, -3]));
console.log(solution([1, 3, 6, 4, 1, 2]));
