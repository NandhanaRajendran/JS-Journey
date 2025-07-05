/* LEVEL : Easy
Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.

Return the largest lucky integer in the array. If there is no lucky integer return -1.

 

Example 1:

Input: arr = [2,2,3,4]
Output: 2
Explanation: The only lucky number in the array is 2 because frequency[2] == 2.

Example 2:

Input: arr = [1,2,2,3,3,3]
Output: 3
Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.

Example 3:

Input: arr = [2,2,2,3,3]
Output: -1
Explanation: There are no lucky numbers in the array.

*/

SOLUTION:

/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let map = new Map();

    function calcFrequency() {
        for(let i=0;i<arr.length;i++) {
            if( map.has(arr[i]) ) {
                let count = map.get(arr[i]);
                count++;
                map.set(arr[i],count);
            } else {
                map.set(arr[i],1);
            }
        }

    }

    function findLargestLucky() {
        let largest = -1;

        for(let key of map.keys()) {
            if(key === map.get(key) && largest < key ) {
                largest = key;
            }
        }

        return largest;
    }

    calcFrequency();
    let luckyInteger = findLargestLucky();
    if(luckyInteger != -1) {
        return luckyInteger;
    } else {
        return -1;
    }

};