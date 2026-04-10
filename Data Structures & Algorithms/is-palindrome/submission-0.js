class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        const isAlpha = (char) => {
            if(
                // 0 to 9
                char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57 ||
                // small a to z
                char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122 ||
                // big A to Z
                char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90
            ){
                return true;
            }
            return false;
        }


        let l = 0;
        let r = s.length - 1;
        while(l < r){
            if(!isAlpha(s[l])){
                l++;
                continue;
            }
            if(!isAlpha(s[r])){
                r--;
                continue;
            }
            if(s[l].toLowerCase() != s[r].toLowerCase()){
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
}
