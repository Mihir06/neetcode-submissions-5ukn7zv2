class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // Value -> Index
        let freqSet = new Map();

        for(let i = 0; i < numbers.length; i++){
            let diff = target - numbers[i]
            if(freqSet.has(diff)){
                return [freqSet.get(diff) + 1, i + 1]
            }
            freqSet.set(numbers[i], i);
        }
    }
}
