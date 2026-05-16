class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let items = new Map();
        for(let i = 0; i < nums.length; i++){
            if(items.has(nums[i])){
                let count =  items.get(nums[i])
                items.set(nums[i], count+1)
            } else {
                items.set(nums[i], 1)
            }
        }
        // Frequency map is ready, now will map that to an array and track by index
        let indexArr = new Array(nums.length).fill(false)
        // console.log('indexArr', indexArr)
        // console.log('items', items.entries())
        items.entries().forEach((vl, idx) => {
            // No value exists on that index yet
            let val = vl[0]
            let key = vl[1]
            // console.log('val', val)
            // console.log('key', key)
            if(indexArr[key - 1] === false){
                indexArr[key - 1] = [val]
            } else {
                let value = indexArr[key - 1];
                value.push(val)
                indexArr[key - 1] = value;
            }
        })
        // console.log('indexArr', indexArr);
        let count = 0;
        let ans = []
        for(let i = indexArr.length - 1; i >= 0; i--){
            if(indexArr[i] === false){
                continue;
            }
            while(indexArr[i].length > 0){
                if(count === k){
                    return ans;
                }
                let digit = indexArr[i].pop();
                // console.log('this is the digit', digit)
                ans.push(digit);
                count++;
            }
        }
        return ans;
    }
}
