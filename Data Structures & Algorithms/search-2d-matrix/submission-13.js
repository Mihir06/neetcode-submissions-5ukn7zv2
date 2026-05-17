class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

        const ROWS = matrix.length;
        const COLS = matrix[0].length;

        function binarySearch(gridX){
            let start = 0;
            let end = COLS - 1;
            while(start <= end){
                let pivot = Math.floor((start + end) / 2);
                if(
                    gridX[pivot] === target ||
                    gridX[start] === target || 
                    gridX[end] === target
                    ){
                    return true;
                }
                if(target > gridX[pivot]){
                    start = pivot + 1;
                } else {
                    end = pivot - 1;
                }
            }
            return false;
        }
        for(let i = 0; i < ROWS; i++){
            // IF element is the first element
            if(matrix[i][0] === target){
                return true;  
            }
            // If last element is the target
            if(matrix[i][COLS - 1] === target){
                return true;  
            }
            // We found the correct row, now let's binary search the row
            if(target > matrix[i][0] && target < matrix[i][COLS - 1]){
                return binarySearch(matrix[i]);
            }
        }
        return false;
    }

}
