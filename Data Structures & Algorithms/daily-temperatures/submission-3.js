class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let l = 0;
        let r = 1;
        let res = []
        while ( l < r && r <= temperatures.length){
            if(temperatures[r] > temperatures[l]){
                res[l] = r - l;
                l++;
                r =l+1;
            } else {
                // When no higher temp is found
               if(r >= temperatures.length - 1){
                    res[l] = 0;
                    l++;
                    r = l+1;
               } else {
                    r++;
               }
            }
        }
        return res;
    }
}
