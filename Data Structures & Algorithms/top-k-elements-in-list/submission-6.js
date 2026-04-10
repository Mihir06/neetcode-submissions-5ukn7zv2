class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        /**
        Step 1 : Create a hashmap of frequencies of each element
            Time complexity: O(n)
            Space complexity: O(n)
        Step 2 : Create a count array of length n. Each index will be count and value will be elements having that count
            Time complexity: O(n)
            Space complexity: O(n)
        Step 3: Loop over array from end to start, if key has value, pop that to final array, reduce k by 1
        Step 4: Unshift the value to the final result array
        Step 5: Loop will exit when k = 0, we have our answer
         */
        // STEP 1: Creating the HashMap
        let valMap = {};
        for(let elm of nums){
            if(valMap[elm]){
                valMap[elm]++
            } else {
                valMap[elm] = 1;
            }
        }
        // STEP 2: Creating the Count Array
        // console.log('valMap', valMap);
        let indexArr = new Array(nums.length).fill(false);
        console.log('indexArr', indexArr)
        for(let key in valMap){
            key = Number(key)
            // console.log('key', key)
            // console.log('value', valMap[key])
            // console.log('value', valMap[key])
            if(!indexArr[valMap[key]]){
                indexArr[valMap[key]] = [key]
            } else {
                indexArr[valMap[key]].push(key)
            }
            
        }
        // console.log('indexArr', indexArr)

        // STEP 3: Getting the top k freq values from count array
        let res = []
        for(let i = indexArr.length -1; i >= 0; i--){
            if(k <= 0){
                return res;
            }
            if(indexArr[i]){
                for(let j = indexArr[i].length - 1; j >=0; j--){
                    res.push(indexArr[i][j]);
                    k--; 
                }
            }
        }
    }
}
