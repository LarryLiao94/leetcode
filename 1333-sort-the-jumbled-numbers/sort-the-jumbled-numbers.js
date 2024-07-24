/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function(mapping, nums) {
     const obj = {};
    const jubmledValue = (val) => {
        if (obj[val]) return +obj[val];
        let res = '';
        let stVal = val + '';
        for (let v of stVal) {
            res += mapping[+v];
        }
        obj[val] = res;
        return +res;
    }
    return nums.sort((a, b) => jubmledValue(a) - jubmledValue(b));
};