class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;
        let max = 0;
        while( l < r && r < heights.length){
            let water = Math.min(heights[l], heights[r]) * (r - l);
            max = Math.max(max, water)
            // It means the left container is smaller, we should move left to right
            if(heights[l] < heights[r]){
                l++;
            } else {
                // Right container is smaller, we should move right to left
                r--;
            }
        }  
        return max;
    }
}
