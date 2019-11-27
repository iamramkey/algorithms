/*


We define the following operations on a string:

Left Shift: A single circular rotation of the string in which the first character becomes the last character and all other characters are shifted one index to the left. For example, abcde becomes bcdea after one left shift and cdeab after two left shifts.
Right Shift: A single circular rotation of the string in which the last character becomes the first character and all other characters are shifted one index to the right. For example, abcde becomes eabcd after one right shift and deabc after two right shifts.
 

Function Description

Complete the function getShiftedString in the editor below. The function must return the string s after performing the stated shifts.

 

getShiftedString has the following parameter(s):

    s:  the string to shift

    leftShifts:  integer

    rightShifts:  integer

 

Constraints

1 ≤ |s| ≤ 105
0 ≤ leftShifts, rightShifts ≤ 109
String s consists of lowercase English alphabetic letters only, ascii[a-z].
 

Input Format for Custom Testing
Sample Case 0
Sample Input 0

abcd
1
2
 

Sample Output 0

dabc
 

Explanation 0

Initially, s is abcd. We perform:

  leftShifts = 1 : abcd → bcda
rightShifts = 2 : bcda → abcd → dabc
The function then returns dabc.

 

Sample Case 1
Sample Input 1

a
0
1
 

Sample Output 1

a
 

Explanation 1

A one character string is unchanged regardless of the number of shifts performed.

 
 



*/

/*
 * Complete the 'getShiftedString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER leftShifts
 *  3. INTEGER rightShifts
 */

function getShiftedString1(s, leftShifts, rightShifts) {
	// Write your code here
	var first = leftRotate(s, leftShifts);
	var second = rightRotate(first, rightShifts);
	return second;
}

function leftRotate(str, m) {
	return str.substring(m) + str.substring(0, m);
}

function rightRotate(str, n) {
	return leftRotate(str, str.length - n);
}

function getShiftedString(s, leftShifts, rightShifts) {
	const arr = Array.from(s);
	const netLeftShifts = (leftShifts - rightShifts) % arr.length;
	return [...arr.slice(netLeftShifts), ...arr.slice(0, netLeftShifts)].join('');
}

// getShiftedString('abcd', 1, 2); //dabc
