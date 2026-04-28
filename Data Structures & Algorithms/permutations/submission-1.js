class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        // Need to be able to repeat 
        let ans = []
        
        let numArr = new Array(nums.length).fill(false);
        function backtrack(currIndex, curr){
            // Base case
            if(curr.length === nums.length){
                // If 3 chars have already been added, then we continue
                ans.push([...curr])
                return;
            }
            // Recursive case
            for(let i = 0; i < nums.length; i++){
                // i will be 1, 2 and 3
                // I need to not be able to repeat
                // I also need to track the current chars, so that others can be used       
                // Probably via a currentIndex
                if(numArr[i]){
                    // If the current index has already been considered, we can skip
                    continue;
                } else {
                    curr.push(nums[i])
                    numArr[i] = true;
                    backtrack(i, curr)
                    curr.pop()
                    numArr[i] = false;
                }
            }
        }
        backtrack(null, [], numArr)
        return ans;
    }
}
