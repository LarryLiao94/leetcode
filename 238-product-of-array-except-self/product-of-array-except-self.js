/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
      const n = nums.length;
    
    // Initialize an array to store prefix products.
    const prefix = new Array(n).fill(1);
    // Initialize an array to store suffix products.
    const suffix = new Array(n).fill(1);
    
    // Calculate prefix products.
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }
    
    // Calculate suffix products.
    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1];
    }
    
    // Calculate the answer array by multiplying prefix and suffix products.
    const answer = [];
    for (let i = 0; i < n; i++) {
        answer[i] = prefix[i] * suffix[i];
    }
    
    return answer;
};