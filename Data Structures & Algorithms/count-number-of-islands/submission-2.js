class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        // Can use a hashset, as I only want the coordinates of the nodes
        let visited = new Set();
        let islands = 0;
        function bfs(row, col){
            let key = `${row},${col}`
            if(
                visited.has(key) ||
                row < 0 ||
                row >= ROWS || 
                col < 0 ||
                col >= COLS ||
                grid[row][col] === "0"
            ){
                return false;
            }
            
            visited.add(key)
            bfs(row + 1, col)
            bfs(row - 1, col)
            bfs(row, col + 1)
            bfs(row, col - 1)
        }
        for(let row = 0 ; row < ROWS; row++){
            for(let col = 0; col < COLS; col++){
                let key = `${row},${col}`
                if(!visited.has(key) && grid[row][col] === "1"){
                    islands++;
                    bfs(row,col);
                }
            }
        }
        return islands;
    }
}
