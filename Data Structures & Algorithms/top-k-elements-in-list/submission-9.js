class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // Creating an array where we will map the index 
        let elements = new Map();
        for(let num of nums){
            elements.set(num, elements.get(num)?elements.get(num) + 1: 1)
        }
        let freqArr = new Array(nums.length).fill(0);
        elements.forEach((val, key) => {
            // console.log('val', val)
            // console.log('key', key)
            if(freqArr[val]){
                let curr = freqArr[val]
                curr.push(key);
                freqArr[val] = curr;
            } else {
                freqArr[val] = [key]
            }
        })
        // console.log('freqArr', freqArr);
        let ans = [];
        let count = k;
        for(let i = freqArr.length -1; i >= 0; i--){
            if(count === 0){
                return ans;
            }
            if(freqArr[i] !== 0){
                while(freqArr[i].length != 0){
                    ans.push(freqArr[i].pop());
                    count--;
                }
            }
        }
        return ans;
    }   
}
