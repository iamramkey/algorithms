/*
2. Print words that have 't' in them by swapping 1st letter with 2nd, 3rd letter with 4th etc.

Accept the input string from the user. Print all the words that have letter 't' in them by swapping 1st letter with 2nd letter, 3rd letter with 4th letter etc.

 

If there is only one letter in the word, leave it as it is.

If there are odd number of letters in the word, leave the last letter as it is (no swapping needed).

If there is no letter 't' in the input string, print "None".

 

Assume there will be maximum of 10 words of 20 characters maximum length in the input.

 

Note: Do not use standard library functions

 

Follow the examples below:

 

Sample Input 1:

opentext internship program

 

Sample Output 1:

poneettx

nietnrhspi

 

Sample Input 2:

letter t interests me

 

Sample Output 2:

elttre

t

nietertss

 

Sample Input 3:

How are you?

 

Sample Output 3:

None

 

Sample Input 4:

get it right first time

 

Sample Output 4:

egt

ti

irhgt

ifsrt

item

 
*/
function swapT(str, arr) {
	arr = arr || [];
	if (str.indexOf(' ') > -1) {
		str
			.split(' ')
			.forEach(i => (i.indexOf('t') > -1 ? arr.push(swap0110(i, arr)) : null));
	} else if (str.indexOf('t') > -1) {
		arr.push(swap0110(str));
	} else {
		arr.push('None');
	}
	return arr.length === 0 ? 'None' : arr.join('\n');
}

function swap0110(str) {
	if (str.length === 1) return str;
	var out = '';
	for (var i = 0; i < str.length; i += 2) {
		if (str[i + 1] !== undefined) {
			out += str[i + 1];
		}
		out += str[i];
	}
	return out;
}

swapT('opentext internship program');
swapT('letter t interests in me');
swapT('How are you?');
swapT('get it right first time');


