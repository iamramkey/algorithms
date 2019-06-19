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

 


function is_Palindrome(str1) {
	var rev = str1
		.split('')
		.reverse()
		.join('');
	return str1 == rev;
}

function longest_palindrome(str1) {
	var max_length = 0,
		maxp = '';

	for (var i = 0; i < str1.length; i++) {
		var subs = str1.substr(i, str1.length);

		for (var j = subs.length; j >= 0; j--) {
			var sub_subs_str = subs.substr(0, j);
			if (sub_subs_str.length <= 1) continue;

			if (is_Palindrome(sub_subs_str)) {
				if (sub_subs_str.length > max_length) {
					max_length = sub_subs_str.length;
					maxp = sub_subs_str;
				}
			}
		}
	}

	return maxp;
}
console.log(longest_palindrome('abracadabra'));
console.time('rama');
console.log(
	longest_palindrome(
		'HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE'
	)
);
console.timeEnd('rama');


*/

/*

function isPrimeNumber(n) {
	for (var i = 2; i < n; i++) {
		if (n % i === 0) return false;
	}
	return n > 1;
}

function reverse(s) {
	var o = [];
	for (var i = 0, len = s.length; i <= len; i++) {
		o.push(s.charAt(len - i));
	}
	return o.join('');
}

function isPalindrome1(word) {
	return word === reverse(word);
}

function isPalindrome(word) {
	return (
		word ===
		word
			.split('')
			.reverse()
			.join('')
	);
}

function solution(S) {
	let maxSubString = '';
	for (let i = 0; i < S.length; i++) {
		for (let j = 0; j < S.length - i; j++) {
			let subString = S.substring(j, j + i + 1);
			if (isPalindrome(subString)) {
				maxSubString =
					subString.length > maxSubString.length ? subString : maxSubString;
			}
		}
	}
	return isPrimeNumber(maxSubString.length) ? 'YES' : 'NO';
}
console.log(solution('abracadabra'));
console.log(solution('HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE'));


*/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
	// write your code in JavaScript (Node.js 8.9.4)
	if (typeof S === 'string' && S.length < 1) return 'NO';
	let maxSubString = '';
	for (let i = 0; i < S.length; i++) {
		for (let j = 0; j < S.length - i; j++) {
			let subString = S.substring(j, j + i + 1);
			if (isPalindrome(subString)) {
				maxSubString =
					subString.length > maxSubString.length ? subString : maxSubString;
			}
		}
	}
	return isPrimeNumber(maxSubString.length) ? 'YES' : 'NO';
}

function isPrimeNumber(n) {
	for (var i = 2; i < n; i++) {
		if (n % i === 0) return false;
	}
	return n > 1;
}

function isPalindrome(word) {
	return (
		word ===
		word
			.split('')
			.reverse()
			.join('')
	);
}
// console.log(solution('122243323341'));

function sliding(str) {
	var left = 0;
	var right = 0;
	var max = '';
	while (left <= right) {
		var subStr = str.substring(left, right);
		console.log(left, right, subStr);
		if (
			subStr ===
				subStr
					.split('')
					.reverse()
					.join('') &&
			max.length < subStr.length
		) {
			max = subStr;
		} else {
			right++;
			if (right === str.length) {
				right = ++left;
			}
		}
	}
	return max;
}
console.log(sliding('ramadamma'));
