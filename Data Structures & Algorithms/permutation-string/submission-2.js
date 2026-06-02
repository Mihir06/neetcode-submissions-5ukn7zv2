class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        if (s1.length > s2.length) return false;
        let s1Counts = new Array(26).fill(0);
        let s2Counts = new Array(26).fill(0);
        // Initially count the characters of both the arrays
        
        for(let i = 0; i < s1.length; i++){
            s1Counts[s1[i].charCodeAt(0) - "a".charCodeAt(0)]++
            s2Counts[s2[i].charCodeAt(0) - "a".charCodeAt(0)]++
        }
        let l = 0;
        for(let r = s1.length; r < s2.length; ){
            if(s1Counts.join("#") === s2Counts.join("#")){
                return true;
            }
            s2Counts[s2[l].charCodeAt(0) - "a".charCodeAt(0)]--;
            s2Counts[s2[r].charCodeAt(0) - "a".charCodeAt(0)]++;
            l++;
            r++;
        }
        return s1Counts.join("#") === s2Counts.join("#");

    }
}
