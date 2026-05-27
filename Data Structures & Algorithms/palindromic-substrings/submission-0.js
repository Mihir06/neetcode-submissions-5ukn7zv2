class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let pallindromeCount = 0;
        let left;
        let right;
        for(let i = 0; i < s.length; i++){
            // Odd strings
            left = i;
            right = i;
            while(left >= 0 && right < s.length && s[left] === s[right]){
                pallindromeCount++;
                left--;
                right++;
            }

            // Even strings
            left = i;
            right = i + 1;
            while(left >= 0 && right < s.length && s[left] === s[right]){
                pallindromeCount++;
                left--;
                right++;
            }
        }
        // console.log(pallindromeCount);
        return pallindromeCount;
    }
}
