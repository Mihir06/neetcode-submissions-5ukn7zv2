class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        // Monotinic stack
        // Will keep popping so that the higher days are stored 
        let dayStack = [];
        let ans = new Array(temperatures.length).fill(0);
        for(let i = 0; i < temperatures.length; i++){
              while(
                    dayStack.length > 0 && 
                    temperatures[i] > dayStack[dayStack.length - 1][0]
                    ){
                        const [ tmp, index] = dayStack.pop();
                        ans[index] = i - index;
              } 
              dayStack.push([temperatures[i], i])
        }
        return ans;
    }
}
