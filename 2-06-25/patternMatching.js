/*LEVEL : Hard
Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

    '.' Matches any single character.​​​​
    '*' Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).

Example 1:

Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".

Example 2:

Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".

Example 3:

Input: s = "ab", p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".

 */

SOLUTION:

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const memo = {};

    function dp(i, j) {
        let key = `${i},${j}`;
        if (key in memo) return memo[key];

        if (j === p.length) return i === s.length;

        let firstMatch = (i < s.length && (p[j] === s[i] || p[j] === '.'));

        let result;
        if (j + 1 < p.length && p[j + 1] === '*') {
            result = dp(i, j + 2) || (firstMatch && dp(i + 1, j));
        } else {
            result = firstMatch && dp(i + 1, j + 1);
        }

        memo[key] = result;
        return result;
    }

    return dp(0, 0);
};
