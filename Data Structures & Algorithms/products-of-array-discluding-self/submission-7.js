class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // Array of l to r products except self
        let lr = [];
        for(let i = 0; i <= nums.length -1; i++){
            if(i === 0){
                lr[i] = 1;
            } else {
                lr[i] = lr[i-1] * nums[i-1];
            }
        }
        // Array of r to l products except self
        let rl = [];
        for(let i = nums.length -1; i >= 0; i--){
            if(i === nums.length -1){
                rl[i] = 1;
            } else {
                rl[i] = rl[i+1] * nums[i+1];
            }
        }
        // console.log('lr', lr)
        // console.log('rl', rl)
        let ans = []
        for(let j = 0; j < lr.length; j++){
            ans[j] = lr[j] * rl[j];
        }
        return ans;
    }
}
