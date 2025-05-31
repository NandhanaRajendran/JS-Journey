/* LEVEL : Easy
Given an integer x, return true if x is a palindrome, and false otherwise.


Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

 

Constraints:

    -231 <= x <= 231 - 1
*/

SOLUTION-1: Without converting into string

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) {
        return false;
    } else if (x>=0 && x<=9) {
        return true;
    }
    var rev = 0;
    var orgNum = x;
    while(x > 0) {
        rev = (rev*10)+(x%10);
        x = Math.floor(x/10);
    }

    if(orgNum === rev) {
        return true;
    } else {
        return false;
    }
    
};


SOLUTION-2: By converting into string

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    var isNegative = x<0;

    if( isNegative === true ) {
        return false;
    } 

    var reversedNum = parseInt(x.toString().split('').reverse().join(''));

    if(x===reversedNum) {
        return true;
    } else {
        return false;
    }
};