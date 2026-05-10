class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let uniques = new Set();
        let l = 0;
        let maxL = 0;
        for (let r = 0; r < s.length; r++){
            while(uniques.has(s[r])){
                uniques.delete(s[l])
                console.log('after deleting ', uniques)
                l++;
            }
            uniques.add(s[r])
            maxL = Math.max(maxL, r-l+1)
        }
        return maxL;
    }
}
