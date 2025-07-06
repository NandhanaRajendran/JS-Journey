/* LEVEL : Medium

You are given two integer arrays nums1 and nums2. You are tasked to implement a data structure that supports queries of two types:

    Add a positive integer to an element of a given index in the array nums2.
    Count the number of pairs (i, j) such that nums1[i] + nums2[j] equals a given value (0 <= i < nums1.length and 0 <= j < nums2.length).

Implement the FindSumPairs class:

    FindSumPairs(int[] nums1, int[] nums2) Initializes the FindSumPairs object with two integer arrays nums1 and nums2.
    void add(int index, int val) Adds val to nums2[index], i.e., apply nums2[index] += val.
    int count(int tot) Returns the number of pairs (i, j) such that nums1[i] + nums2[j] == tot.

 

Example 1:

Input
["FindSumPairs", "count", "add", "count", "count", "add", "add", "count"]
[[[1, 1, 2, 2, 2, 3], [1, 4, 5, 2, 5, 4]], [7], [3, 2], [8], [4], [0, 1], [1, 1], [7]]
Output
[null, 8, null, 2, 1, null, null, 11]

Explanation
FindSumPairs findSumPairs = new FindSumPairs([1, 1, 2, 2, 2, 3], [1, 4, 5, 2, 5, 4]);
findSumPairs.count(7);  // return 8; pairs (2,2), (3,2), (4,2), (2,4), (3,4), (4,4) make 2 + 5 and pairs (5,1), (5,5) make 3 + 4
findSumPairs.add(3, 2); // now nums2 = [1,4,5,4,5,4]
findSumPairs.count(8);  // return 2; pairs (5,2), (5,4) make 3 + 5
findSumPairs.count(4);  // return 1; pair (5,0) makes 3 + 1
findSumPairs.add(0, 1); // now nums2 = [2,4,5,4,5,4]
findSumPairs.add(1, 1); // now nums2 = [2,5,5,4,5,4]
findSumPairs.count(7);  // return 11; pairs (2,1), (2,2), (2,4), (3,1), (3,2), (3,4), (4,1), (4,2), (4,4) make 2 + 5 and pairs (5,3), (5,5) make 3 + 4

*/

SOLUTION:

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var FindSumPairs = function(nums1, nums2) {
    this.nums1 = nums1;
    this.nums2 = nums2;
    this.map =new Map();

    for (let i = 0; i < this.nums2.length; i++) {
        if(this.map.has(this.nums2[i])) {
            let temp = this.map.get(this.nums2[i]);
            temp++;
            this.map.set(this.nums2[i],temp);
        } else {
            this.map.set(this.nums2[i],1);
        }
    }

    

};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function(index, val) {
    if(this.map.get(this.nums2[index]) == 1) {
        this.map.delete(this.nums2[index]);
    } else if(this.map.get(this.nums2[index]) > 1) {
        let temp = this.map.get(this.nums2[index]);
        temp--;
        this.map.set(this.nums2[index],temp);
    }
    this.nums2[index] += val;

    if(this.map.has(this.nums2[index])) {
        
        let temp = this.map.get(this.nums2[index]);
        temp++;
        this.map.set(this.nums2[index],temp);
    } else {
        this.map.set(this.nums2[index],1);
    }
    
};

/** 
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function(tot) {
    
    let counter = 0;
    for(let i=0; i<this.nums1.length; i++) {
       
        if(this.map.has(tot-this.nums1[i])) {
            let temp = this.map.get(tot-this.nums1[i]);
            counter += temp;
        }
    }
    return counter;
};

/** 
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */

