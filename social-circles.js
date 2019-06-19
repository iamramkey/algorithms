/*
https://app.codility.com/c/feedback/AUJWMR-HYR/
There are S students in a class. Some of them are friends, while some are not. Their friendship is transitive in nature. For example, if A is a direct friend of B, and B is a direct friend of C, then A is an indirect friend of C.

A "social circle" is a group of students who are direct or indirect friends.

You are given a S*S matrix M (S is the number of students) representing the friend relationship between students in the class. If M[i][j] = 1, then the ith and jth students are direct friends with each other, otherwise not.

Your task is to return the string, representing all the social circles separated by pipe(|) among all the students. Individual members within the circle should be separated by a comma(,)

Write a function:

function solution(S);
that, given a zero-indexed double-dimensional array A of dimensions S*S (in string format to be converted to a 2-dimensional array), returns a string representing pipe-separated (|) social circles of comma-separated friends.

So, if we have 2 circles - one comprising of 0 & 1 and another comprising of just 2 - then the output will be "0,1|2". Also, each circle should be sorted from lowest to highest and circles should be sorted by first element.

For example, given:

 M = "[

  [1, 1, 0],

  [1, 1, 0],

  [0, 0, 1]

]"

The function should return "0,1|2" (quotes for representation purposes only)

The 0th and 1st students are direct friends (M[0][1] = 1 and subsequently M[1][0] = 1), so they are in a social circle.

The 2nd student is in her/his own social circle. So return 2.

For another example, given:

M = "[

  [1, 1, 0],

  [1, 1, 1],

  [0, 1, 1]

]"

the function should return "0,1,2".

The 0th and 1st students are direct friends, the 1st and 2nd students are direct friends. Thus, the 0th and 2nd students are indirect friends. All of them are in the same social circle, so return 1.

You can assume that:

for every i within the range [0.. N - 1] M[i][i] = 1
In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.

*/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(M) {
	M = JSON.parse(M);

	// M is now your relationship matrix SxS

	if (M instanceof Array && (M.length === 0 || M[0].length !== M.length)) {
		return 0;
	}
	let friends = [];
	let noFriends = [];

	for (let i = 0; i < M.length; i++) {
		for (let j = 0; j < M.length; j++) {
			if (M[i][j] === 1) {
				findFriends(M, i, j, friends, noFriends);
			}
		}
	}

	var outputString = friends.toString();
	if (noFriends.length > 0) {
		outputString = outputString + '|' + noFriends.join('|');
	}
	return outputString;
}

function findFriends(M, i, j, friends, noFriends, recursion) {
	console.log('i', i, 'j', j, 'recursion', recursion, friends, noFriends);
	if (M[i][j] !== 1) {
		return;
	}
	if (i !== j && friends.indexOf(i) === -1) {
		friends.push(i);
	}
	if (
		i === j &&
		M[i][i] === 1 &&
		(M[i - 1] ? M[i - 1][i] : 0) === 0 &&
		M[i][i - 1] === 0
	) {
		noFriends.push(i);
	}
	M[i][j] = 'read';

	for (let k = 0; k < M.length; k++) {
		findFriends(M, j, k, friends, noFriends, true);
	}
}

console.log(solution(JSON.stringify([[1, 1, 0], [1, 1, 0], [0, 0, 1]])));
console.log(solution(JSON.stringify([[1, 1, 0], [1, 1, 1], [0, 1, 1]])));
