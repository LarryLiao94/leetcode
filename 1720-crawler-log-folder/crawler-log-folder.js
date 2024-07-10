/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let paths_stack = [];

    for (let log of logs) {
        if (log === "../") {
            if (paths_stack.length > 0) {
                paths_stack.pop();
            }
        } else if (log !== "./") {
            paths_stack.push(log);
        }
    }

    return paths_stack.length;
};