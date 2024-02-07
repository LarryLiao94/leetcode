/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const numIndices = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;
        if (complement in numIndices) {
            return [numIndices[complement], i];
        }
        numIndices[num] = i;
    }
    return null;  // No solution found
};