class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let ansIndex = 0;
        let ansLen = 0;
        let left;
        let right;
        function updatePallindrome(left, right){
            while(left >= 0 && right < s.length && s[left] === s[right]){
                // We have a new longest pallindrome
                if((right - left + 1) > ansLen){
                    ansIndex = left;
                    ansLen = right - left + 1;
                }
                left--;
                right++;
            }
        }
        for(let i = 0; i < s.length; i++){
            // Odd strings 
            left = i;
            right = i
            updatePallindrome(left, right);
            // Even strings
            left = i;
            right = i + 1;
            updatePallindrome(left, right);
        }
        // console.log('ansIndex', ansIndex);
        // console.log('ansLen', ansLen);
        return s.slice(ansIndex, ansIndex + ansLen);
    }
}
