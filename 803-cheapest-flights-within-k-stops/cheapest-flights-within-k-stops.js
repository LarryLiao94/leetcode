/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    // Initialize adjacency list to store flights information
    const adj = new Map();
    // Initialize an array to track minimum cost to reach each node
    const visited = new Array(n).fill(Number.MAX_VALUE);
    // Cost to reach source node is 0
    visited[src] = 0;

    // Populate adjacency list
    for (const [from, to, price] of flights) {
        if (!adj.has(from)) {
            adj.set(from, []);
        }
        adj.get(from).push([to, price]);
    }

    // Initialize a queue for BFS traversal
    const queue = [[src, 0]];
    // Increment k to account for the extra stop at destination
    k++;

    while (k-- > 0 && queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const [currNode, currPrice] = queue.shift();
            if (adj.has(currNode)) {
                for (const [nextNode, nextPrice] of adj.get(currNode)) {
                    // Calculate the new price to reach nextNode
                    const newPrice = currPrice + nextPrice;
                    // Update if the new price is lower than previously known
                    if (newPrice < visited[nextNode]) {
                        visited[nextNode] = newPrice;
                        queue.push([nextNode, newPrice]);
                    }
                }
            }
        }
    }

    // Return the minimum cost to reach destination or -1 if unreachable
    return visited[dst] === Number.MAX_VALUE ? -1 : visited[dst];
};