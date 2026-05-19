class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        // Will need to implement flood fill algorithm
        // At each iteration, I need to mark rotten the oranges that have spoiled
        // Algorithm ends when all nodes are visited.
        // The number of iterations of the algorithm (ticks) denotes how many seconds have passed.
        // How do I keep track of reminaing fresh fruits? 
        const ROWS = grid.length;
        const COLS = grid[0].length;
        let fresh = 0;
        let time = 0;
        let q = [];

        // Count Fresh and Initialize queue with rotten fruits
        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                if (grid[row][col] === 1) {
                    fresh++;
                }
                if (grid[row][col] === 2) {
                    q.push([row,col])
                }
            }
        }
        const directions = [
            [0,1],
            [0,-1],
            [1,0],
            [-1,0]
        ];
        while(fresh > 0 && q.length > 0){
            let qLen = q.length;
            for(let i = 0; i < qLen; i++){
                const [currRow, currCol] = q.shift();
                
                for(const [dRow, dCol] of directions){
                    const row = currRow + dRow;
                    const col = currCol + dCol;
                    if(
                        row >= 0 &&
                        col >= 0 &&
                        row < ROWS &&
                        col < COLS &&
                        grid[row][col] === 1
                    ){
                        grid[row][col] = 2
                        q.push([row, col])
                        fresh--;
                    }
                }
            }
            time++;
        }
        return fresh === 0 ? time : -1;
    }
}
