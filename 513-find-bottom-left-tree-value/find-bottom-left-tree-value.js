/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
     // Variable to store the bottom-left value
    let leftmostValue;
    // Variable to track the maximum depth
    let maxDepth = -1;

    // DFS function to traverse the tree
    const dfs = (node, depth) => {
        // If current node is null, return
        if (!node) return;

        // If current depth is greater than maxDepth,
        // update leftmostValue and maxDepth
        if (depth > maxDepth) {
            leftmostValue = node.val;
            maxDepth = depth;
        }

        // Recur for left and right children with increased depth
        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    };

    // Start DFS from root with depth 0
    dfs(root, 0);

    // Return the leftmostValue found during DFS
    return leftmostValue;
};