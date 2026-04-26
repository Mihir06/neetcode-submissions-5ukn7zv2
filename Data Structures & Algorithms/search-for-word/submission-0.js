class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        function dfs(row, col,currIndex){
            let coord = `${row},${col}`;
            if(
                row < 0 || 
                row >= ROWS ||
                col < 0 || 
                col >= COLS ||
                visited.has(coord) ||
                board[row][col] !== word[currIndex]
            ){
                // means invalid path, we can return
                return false;
            }
            visited.add(coord);
            if(currIndex === word.length - 1){    
                return true;
            }
            // console.log('board', board[row][col])
            // console.log('currIndex', currIndex)
            // console.log('word', word[currIndex])
            let res =  dfs(row + 1, col, currIndex + 1) ||
            dfs(row, col + 1, currIndex + 1) ||
            dfs(row - 1, col, currIndex + 1) ||
            dfs(row, col - 1, currIndex + 1)
            visited.delete(coord)
            return res;
        } 

        const ROWS = board.length
        const COLS = board[0].length
        let visited = new Set();

        for(let row = 0; row < ROWS; row++){
            for(let col = 0; col < COLS; col++){
                let coord = `${row},${col}`
                // Possible path, let's explore
                if(!visited.has(coord) && board[row][col] === word[0]){
                    if(dfs(row,col,0)){
                        return true;
                    }
                }
            }
        }
        return false;
    }
}
