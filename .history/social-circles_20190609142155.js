function friendsCircle(M) {
	if (M instanceof Array && (M.length === 0 || M[0].length !== M.length)) {
		return 0;
	}
	let friends = [];
	let noFriends = [];

	for (let i = 0; i < M.length; i++) {
		for (let j = 0; j < M.length; j++) {
			if (M[i][j] === 1) {
				/* if (i !== j) {
					friends.push([i, j]);
				} */
				findFriends(M, i, j, friends, noFriends);
			}
		}
	}

	return { friends, noFriends };
}

function findFriends(M, i, j, friends, noFriends) {
	if (M[i][j] !== 1) {
		return;
	}
	M[i][j] = 'read';
	if (i !== j) friends.push([i, j]);
	console.log(i, j, M[i][i], M[i - 1][i], M[i][i - 1]);
	if (i === j && M[i][i] === 1 && M[i - 1][i] === 0 && M[i][i - 1] === 0) {
		noFriends.push([i]);
	}

	for (let k = 0; k < M.length; k++) {
		findFriends(M, j, k, friends, noFriends);
	}
}

console.log(friendsCircle([[1, 1, 0], [1, 1, 0], [0, 0, 1]]));
console.log(friendsCircle([[1, 1, 0], [1, 1, 1], [0, 1, 1]]));
