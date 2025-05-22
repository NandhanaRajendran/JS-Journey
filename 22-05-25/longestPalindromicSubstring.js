/* LEVEL : MEDIUM

Given a string s, return the longest in s.

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:

Input: s = "cbbd"
Output: "bb"

Constraints:

    1 <= s.length <= 1000
    s consist of only digits and English letters.
*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let memo = {};
    function subPalindrome(left,right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if(left == right && !((right-left+1) in memo)) {
                memo[right-left+1] = s[left];
            } else if( left != right && !((right-left+1) in memo)) {
                memo[right-left+1] = s.substring(left,right+1); 
            }
            left--;
            right++;
        }
    }

    for(let i=0;i<s.length;i++) {
        subPalindrome(i,i);
        subPalindrome(i,i+1);
    }
    let keys = Object.keys(memo).map(Number);
    let maxLen = Math.max(...keys);
    return memo[maxLen];

};
