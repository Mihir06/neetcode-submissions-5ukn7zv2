class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {

        let ans = new Array(temperatures.length).fill(0);
        let monoStack = [];
        for(let i = 0; i < temperatures.length; i++){
            while(monoStack.length > 0 && temperatures[i] > monoStack[monoStack.length - 1][0]){
                const [t, index] = monoStack.pop();
                ans[index] = i - index;
            }
            monoStack.push([temperatures[i], i])
            console.log('val', [temperatures[i], i]);
            console.log('monoStack', monoStack);
        }
        return ans;
    }
}
