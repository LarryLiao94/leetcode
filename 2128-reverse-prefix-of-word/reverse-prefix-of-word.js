/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
  for (let i = 0; i < word.length; i++) {
        if (word[i] === ch) {
            let point = i;
            return word.substring(0, point + 1).split('').reverse().join('') + word.substring(point + 1);
        }
    }
    return word;
}