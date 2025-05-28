/* LEVEL : Medium

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 
Example 1:

Input: x = 123
Output: 321

Example 2:

Input: x = -123
Output: -321

Example 3:

Input: x = 120
Output: 21

 
Constraints:

    -231 <= x <= 231 - 1

*/

SOLUTION :

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const INT_MIN = -(2 ** 31);         // -2147483648
    const INT_MAX = 2 ** 31 - 1;        // 2147483647

    let isNegative = x < 0;
    let absX = Math.abs(x);
    let reversed = 0;

    while (absX !== 0) {
        let digit = absX % 10;
        reversed = reversed * 10 + digit;
        absX = Math.floor(absX / 10);
    }

    if (isNegative) reversed = -reversed;

    if (reversed < INT_MIN || reversed > INT_MAX) return 0;

    return reversed;
};
