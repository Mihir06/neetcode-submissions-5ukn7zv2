/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        // New hashmap
        let newToOldMap = new Map()

        function dfs(nd){
            if(nd === null){
                return null;
            }
            // If we have the node already, get that node from the map and use it.
            if(newToOldMap.has(nd)){
                return newToOldMap.get(nd);
            }
            // Else create a new node copy
            const copy = new Node(nd.val);
            // Set the new node copy in the map
            newToOldMap.set(nd, copy);

            // Push all the neighbours of the current node in the copy node
            for(let neighbor of nd.neighbors){
                copy.neighbors.push(dfs(neighbor))
            }
            return copy;
        }
        return dfs(node)
        
    }
}
