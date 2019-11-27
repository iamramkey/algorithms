/*
1. Minimum Amount

 

Alex is shopping at a flea market and has some items he would like to purchase.  Noticing Alex's interest, the stand owner makes the following offer.  If Alex agrees to buy everything he has selected, the owner will discount each item after the first by the lesser of the item's cost or the minimum non-discounted price of any earlier item in the list. 

 

For example, if he has items priced [2, 5, 1], he pays 2 for the first item, 5-2=3 for the second item, and gets the third item for free: max(1 - min(2, 5), 0) = max(1 - 2,0) = max(-1, 0) = 0.  The first item is never discounted and the minimum cost of any item is 0. His total cost to purchase all items is 2 + 3 + 0 = 5.

 

Function Description 

Complete the function calculateAmount in the editor below. The function must return Alex's total cost to purchase all the items.

 

calculateAmount has the following parameter(s):

 

    prices[prices[0],...prices[n-1]]:  an array of integers representing the original prices of each of the items Alex has selected

 

Constraints

1 ≤ n ≤ 105
1 ≤ prices[i] ≤ 107, where 0 ≤ i < n
 

Input Format for Custom Testing
Sample Case 0
 

Sample Input 0

4
4
9
2
3
 

Sample Output 0

10
 

Explanation 0

n = 4, prices = [4, 9, 2, 3]

prices[0] = 4; d[0] = 0; cost[0] = 4 because the first item is never discounted.

prices[1] = 9; d[1] = 4; cost[1] = 9 − 4 = 5

prices[2] = 2; d[2] = min(4, 9) = 4; cost[2] = 0 because d[2] > prices[2].

prices[3] = 3; d[3] = min(4, 9, 2) = 2; cost[3] = 3 − 2 = 1

 

The total cost returned by our calculateAmount function is 4 + 5 + 0 + 1 = 10.

 

Sample Case 1

*/

/*
 * Complete the 'calculateAmount' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY prices as parameter.
 */

 
function calculateAmount(p) {
  // Write your code here
var d = [0];
var c = [p[0]];
var sum = p[0];
var min = p[0];
for(var i = 1; i < p.length ; i++){
  // console.log('i',i, 'p.slice(0, i)', p.slice(0, i))
  // d[i] = Math.min(...p.slice(0, i));
  if(min > p[i]){
    min = p[i];
  }
  d[i] = min;
  // console.log('d[i]', d[i]);
  // c[i] = p[i] > d[i] ? p[i] - d[i] : 0;
  sum += p[i] > d[i] ? p[i] - d[i] : 0;
}
// console.log(d);
// return c.reduce((a,b) => a+b);
return sum;
}

calculateAmount([4,9,2,3])
calculateAmount([10,18,1,1,16,12,10,18,19,6,6]);
calculateAmount([4,1,2,3,4]);
calculateAmount([4,4,9,2,3]);