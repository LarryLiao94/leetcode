/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let left = 0; // Initialize left pointer
    let right = s.length - 1; // Initialize right pointer

    // Iterate while left pointer is less than right pointer and characters at both pointers are the same
    while (left < right && s[left] === s[right]) {
        let char = s[left]; // Store the common character to both ends
        
        // Move left pointer to the right until a different character is encountered
        while (left <= right && s[left] === char) {
            left++;
        }
        
        // Move right pointer to the left until a different character is encountered
        while (right >= left && s[right] === char) {
            right--;
        }
    }

    // Return the length of the remaining substring after trimming similar ends
    return right - left + 1;
};