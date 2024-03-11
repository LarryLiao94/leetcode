/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
     const map = Array(26).fill(0);
        for (let c of s) {
            map[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        let result = '';

        for (let c of order) {
            result += c.repeat(map[c.charCodeAt(0) - 'a'.charCodeAt(0)]);
            map[c.charCodeAt(0) - 'a'.charCodeAt(0)] = 0;
        }

        for (let i = 0; i < 26; i++) {
            result += String.fromCharCode('a'.charCodeAt(0) + i).repeat(map[i]);
        }
        // UPVOTE :)
        return result;
    
};