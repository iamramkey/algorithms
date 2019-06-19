/*
https://app.codility.com/c/feedback/AUJWMR-HYR/
A string is called a palindrome if it can be read the same way in either direction. For example, “malayalam” is a palindrome, but “tamil” is not.

A "lucky palindrome" is a palindrome of prime length,

 


Now, your task is to find out the length (denoted by L) of the longest palindrome sub-string (maximum-length contiguous substring of a given string that is also a palindrome) and print "YES" if it is a prime number, otherwise print "NO". 

 

Write a function:

function solution(S);
that, given an string S, returns "YES"/"NO") based on whether the input string's longest palindrome substring is a prime number.

 

For example, given a string

S =”122243323341”

the function should return "YES" (quotes only for clarity) because the longest palindrome substring in S is "4332334", the length is 7 and 7 is a prime number.

 

Assumptions:

The string only consists of english alphabets A-Z (uppercase or lowercase) and digits 0-9.

 

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

function findFriends(M, i, j, friends, noFriends) {
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
		findFriends(M, j, k, friends, noFriends);
	}
}

console.log(solution([[1, 1, 0], [1, 1, 0], [0, 0, 1]].toString()));
console.log(solution([[1, 1, 0], [1, 1, 1], [0, 1, 1]].toString()));
