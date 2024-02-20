/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
     let oput = '';
    for(let i=0; i<s.length; i++) {
        if(parseInt(s[i]) != NaN) {
            oput += s[i]
        }
    }
    let res = parseInt(oput) ? parseInt(oput) : 0
    
    if(res > Math.pow(2, 31)-1) {
        return Math.pow(2, 31)-1;
    } else if(res < -1*Math.pow(2, 31)) {
        return -1*Math.pow(2, 31);
    } else {
        return res;
    }
};