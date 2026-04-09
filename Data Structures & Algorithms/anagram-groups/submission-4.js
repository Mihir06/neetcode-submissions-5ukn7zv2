class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let charMap = new Map();
        for(let str of strs){
            let charArr = new Array(26).fill(0);
            // console.log('arr', charArr);
            for(let char of str){
                // I can figure out remaining charaters by charcode
                // Then increment that index of the array
                charArr[char.charCodeAt(0) - "a".charCodeAt(0)]++;
            }
            // console.log("charArr", charArr);
            let charStr = charArr.join('#');
            // console.log("charStr", charStr);
            if (charMap.has(charStr)) {
                charMap.get(charStr).push(str); // just push str into the existing array
            } else {
                charMap.set(charStr, [str]);
            }
            // console.log('charArr', charArr);
        }
        let ans = [];
        charMap.forEach((val, key) => {
            // console.log('val', val);
            ans.push(val);
        })
        return ans;
    }
}
