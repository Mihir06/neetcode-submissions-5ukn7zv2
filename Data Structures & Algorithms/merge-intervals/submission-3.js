class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        let current = []
        let ans = []
        intervals.sort((a,b) => a[0] - b[0])
        console.log('intervals', intervals)
        for(let [start, end] of intervals){
            if(current.length === 0){
                current.push([start,end]);
            } else {
                // second iteration onwards
                console.log('start',start)
                console.log('end',end)
                console.log('current[0][1] before update',current[0][1])
                // IF the start of current interval is smaller that end of previous
                if(start <= current[0][1]){
                    current[0][1] = Math.max(end, current[0][1]);
                    console.log('current[0][1] after update',current[0][1])
                } else {
                    let cur = current.pop();
                    console.log('cur', cur);
                    ans.push(cur);
                    current.push([start, end])
                }
            }
            console.log('current', current);
        }
        if(current.length > 0){
            while(current.length != 0){
                let [k1, k2] = current.pop();
                ans.push([k1,k2]);
            }
        }
        console.log('ans', ans);
        console.log('current final', current);
        return ans;
    }
}
