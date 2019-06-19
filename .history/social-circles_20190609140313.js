var findCircleNum = function(M) {
	if (M.length === 0) {
		return 0;
	}
	let arr = [];
	let len = M.length;
	let result = 0;

	for (let i = 0; i < len; i++) {
		for (let j = 0; j < M[0].length; j++) {
			if (M[i][j] === 1) {
				result++;
				arr.push([i, j]);
				findFriends(M, i, j, arr);
			}
		}
	}

	return arr;
};

var findFriends = function(M, i, j, arr) {
	if (M[i][j] !== 1) {
		return;
	}
	//mark it visited
	M[i][j] = '#';
	arr.push([i, j]);

	for (let k = 0; k < M.length; k++) {
		findFriends(M, j, k, arr);
	}
};

console.log(findCircleNum([[1, 1, 0], [1, 1, 0], [0, 0, 1]]));
console.log(findCircleNum([[1, 1, 0], [1, 1, 1], [0, 1, 1]]));
