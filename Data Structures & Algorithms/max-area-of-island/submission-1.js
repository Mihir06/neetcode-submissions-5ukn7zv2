class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        
        function dfs(row, col) {
            let coord = `${row},${col}`;
            if(
                row < 0 ||
                row >= ROWS ||
                col < 0 ||
                col >= COLS ||
                visited.has(coord) ||
                grid[row][col] === 0
            ){
                return 0;
            }
            visited.add(coord);

            return 1 + dfs(row + 1, col) + 
            dfs(row - 1, col) + 
            dfs(row, col + 1) + 
            dfs(row, col - 1);
        }

        const ROWS = grid.length;
        const COLS = grid[0].length;
        let visited = new Set();
        let max = 0;

        for(let row = 0; row < ROWS; row++){
            for(let col = 0; col < COLS; col++){
                let coord = `${row},${col}`;
                if(!visited.has(coord) && grid[row][col] === 1){
                    max = Math.max(max, dfs(row, col))
                }
            }
        }
        return max;
    }
}
