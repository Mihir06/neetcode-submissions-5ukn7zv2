class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a,b) => a[0] - b[0]);
        let ans = []
        let prevEnd = null;
        let prevStart = null;
        for(let i = 0; i < intervals.length; i++){
            let [start, end] = intervals[i]
            if(prevEnd === null){
                prevStart = start
                prevEnd = end
            } else {
                if(start <= prevEnd){
                    // Interval is overlapping
                    prevStart = Math.min(prevStart, start);
                    prevEnd = Math.max(prevEnd, end);
                } else {
                    // This is new interval, need to push earlier one to answer
                    ans.push([prevStart, prevEnd]);
                    prevStart = start
                    prevEnd = end;
                }
            }
            if(i === intervals.length - 1){
                ans.push([prevStart, prevEnd]);
            }
        }
        return ans;
    }
}
