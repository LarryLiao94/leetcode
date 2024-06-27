/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
   var [a, b] = edges[0];
    var [c, d] = edges[1];
    return a === c || b === c ? c : d;
};