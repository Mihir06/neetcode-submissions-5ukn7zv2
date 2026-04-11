class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        
        const mergeSort = (nums) => {

            if(nums.length <= 1) return nums;

            const merge = (left, right) => {
                let arr = [];
                let l = 0;
                let r = 0;

                while(l < left.length && r < right.length){
                    if(left[l] < right[r]){
                        arr.push(left[l]);
                        l++
                    } else {
                        arr.push(right[r]);
                        r++
                    }
                }
                while(l < left.length){
                    arr.push(left[l])
                    l++;
                }
                while(r < right.length){
                    arr.push(right[r])
                    r++;
                }
                return arr;
            }

            let mid = Math.floor(nums.length / 2);
            // Slice from 0 to mid
            let left = mergeSort(nums.slice(0,mid))
            // Slice from mid to end
            let right = mergeSort(nums.slice(mid))
            let sorted = merge(left, right);
            // console.log('sorted', sorted)
            return sorted;
        }   
        
        // logN
        let sorted = mergeSort(nums);
        // [ -4, -1, -1, 0, 1, 2 ]
        let ans = [];
        for(let i = 0; i < sorted.length; i++){
            if (i > 0 && sorted[i] === sorted[i - 1]) continue; 
            let l = i+1;
            let r = sorted.length - 1;

            while (l < r) {

                let sum = sorted[i] + sorted[l] + sorted[r];
                if (sum === 0) {
                    ans.push([sorted[i], sorted[l], sorted[r]]);
                    // Skipping duplicates
                    while (l < r && sorted[l] === sorted[l + 1]) l++;
                    while (l < r && sorted[r] === sorted[r - 1]) r--;
                    l++;
                    r--;
                } else if (sum > 0) {
                    r--;
                } else {
                    l++;
                }
            }
        }
        // console.log('ans', ans);
        return ans;

    }
}
