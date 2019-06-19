var findCircleNum = function(M) {
	if (M.length === 0) {
		return 0;
	}
	let friends = [];
	let noFriends = [];

	for (let i = 0; i < M.length; i++) {
		for (let j = 0; j < M.length; j++) {
			if (M[i][j] === 1) {
				if (i !== j) {
					friends.push([i, j]);
				}

				findFriends(M, i, j, friends);
			}
		}
	}

	return { friends, noFriends };
};

var findFriends = function(M, i, j, friends) {
	if (M[i][j] !== 1) {
		return;
	}
	M[i][j] = 'read';
	if (i !== j) friends.push([i, j]);

	for (let k = 0; k < M.length; k++) {
		findFriends(M, j, k, friends);
	}
};

console.log(findCircleNum([[1, 1, 0], [1, 1, 0], [0, 0, 1]]));
console.log(findCircleNum([[1, 1, 0], [1, 1, 1], [0, 1, 1]]));
