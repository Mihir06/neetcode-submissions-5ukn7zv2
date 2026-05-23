class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let islands = 0;
        const ROWS = grid.length
        const COLS = grid[0].length
        let visited = new Set();

        function dfs(row, col){
            // Base case
            let key = `${row},${col}`;
            if(
                row < 0 || row >= ROWS ||
                col < 0 || col >= COLS ||
                grid[row][col] === "0" ||
                visited.has(key)
            ){
                return false;
            }
            // Recrusive case
            visited.add(key);
            dfs(row + 1, col);
            dfs(row - 1, col);
            dfs(row, col + 1);
            dfs(row, col - 1);


        }
        for(let row = 0; row < ROWS; row++){
            for(let col = 0; col < COLS; col++){
                let key = `${row},${col}`;
                if(grid[row][col] === "1" && !visited.has(key)){
                    islands++;
                    dfs(row, col);
                }
            }
        }
        return islands;
    }
}
