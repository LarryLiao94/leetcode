/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
     const anagrams = new Map();

    // Iterate through each word in the input array
    for (const word of strs) {
        // Sort the characters of the word to form a key for the anagram Map
        const sortedWord = sortWord(word);

        // If the sorted word is not present in the Map, initialize an empty array for it
        if (!anagrams.has(sortedWord)) {
            anagrams.set(sortedWord, []);
        }

        // Push the original word to the array of anagrams corresponding to its sorted version
        anagrams.get(sortedWord).push(word);
    }

    // Return an array of arrays containing groups of anagrams
    return Array.from(anagrams.values());
};

// Helper function to sort characters of a string
const sortWord = (word) => {
    // Convert the string to an array of characters, sort them, and join back into a string
    return [...word].sort().join('');
};