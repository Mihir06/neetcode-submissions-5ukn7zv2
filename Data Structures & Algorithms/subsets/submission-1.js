class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
     // Backtracking solution
     /*
        Steps:
        1. We need an empty array which will store the result
        2. For each element in the input, we include that in the subset
        3. Then call the recursive backtracking function on this element
        4. Then remove the element from the currentSubset
        5. Backtracking function will do the follwiing:
            A. Add the current subset to the result (as this will be called recursively)
            B. Loop throught the elements to figure out the next subset to track
            C. Remove the element from the subset
     */   
        let result = []
        const backtrack = (start, currentSubset) => {
            result.push([...currentSubset]);
            
            for( let i = start; i < nums.length; i++){
                // Push the current num into the currentSubset
                currentSubset.push(nums[i]);
                // Call backtracking algo on currentSubset
                backtrack(i + 1, currentSubset);
                // console.log("currentSubset before popping", currentSubset);
                currentSubset.pop();
            }
        }
        // start the loop at 0 with an empty subset
        backtrack(0, []);
        return result;
    }
}
