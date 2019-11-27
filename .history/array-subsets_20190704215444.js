/*


Given an integer array arr with n elements, the values of the array need to be separated into two subsets A and B (whose intersection is null and whose union is the entire array) such that the sum of values in set A is strictly greater than the sum of values in set B, keeping in mind that the number of elements in set A is minimum. Return the values in set A in increasing order. If there are multiple sets that are possible solutions, return that set that has maximum total sum of all its elements.

 

Function Description

 

Complete the subsetA function in the editor below. The function must return an integer array denoting the set A.

 

subsetA has the following parameter(s):

    arr: The input integer array which has n elements.

 

Constraints

1 ≤ n ≤ 105 
1 ≤ arri ≤ 105 (where 0 ≤ i < n)
 

Input Format For Custom Testing
The first line contains an integer, n, denoting the number of elements in the array.

Each line i of the n subsequent lines contains an integer, which is an element of arr.

Sample Case 0
Sample Input For Custom Testing

6
5
3
2
4
1
2
Sample Output

4
5
Explanation

if subset A is [4,5], the sum of values, 9, is greater than the sum of the rest of the values.

Sample Case 1
Sample Input For Custom Testing

5
4
2
5
1
6
Sample Output

5
6
Explanation

If subset A is [5,6], the sum of values, 11, is greater than the sum of the rest of the values.

*/