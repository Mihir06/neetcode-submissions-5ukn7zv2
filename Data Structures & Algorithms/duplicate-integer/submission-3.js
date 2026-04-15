class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let elms = new Set();
        for(let num of nums){
            if(elms.has(num)){
                return true;
            }
            elms.add(num);
        }
        return false;
    }
}
