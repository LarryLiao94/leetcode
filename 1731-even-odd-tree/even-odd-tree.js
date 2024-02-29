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
 * @return {boolean}
 */
var isEvenOddTree = function(r) {
     if (!r) return true;

  let q = [r]; // bfs
  let f = true; // oddAndIncreasing
  while (q.length) {
    let q2 = [];
    for (let i = 0; i < q.length; i++) {
      let { val: v, left: l, right: r } = q[i];
      if (f) {
        if (!(v % 2 !== 0) || (i > 0 && !(q[i - 1].val < v)))
          return false;
      } else {
        if (!(v % 2 === 0) || (i > 0 && !(q[i - 1].val > v)))
          return false;
      }
      if (l) q2.push(l);
      if (r) q2.push(r);
    }
    q = q2;
    f = !f;
  }
  return true;
};