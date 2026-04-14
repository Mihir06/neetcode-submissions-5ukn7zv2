class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
      // Will use the sliding window approach
      // Will use a hashSet as the data structure
      let enc = new Set();
      let l = 0
      let max = 0;
      for(let r = 0; r < s.length; r++){
        // IF currently encountered element s[r] is not previously encountered
        while(enc.has(s[r])){
            enc.delete(s[l])
            l++;
        }
        enc.add(s[r]);
        max = Math.max(max, r - l + 1)
      }
      return max;
    }
}
