class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let words = new Map();
        for(let str of strs){
            let strArr = new Array(26).fill(0);
            for(let char of str){
                strArr[char.charCodeAt(0) - "a".charCodeAt(0)]++;
            }
            strArr = strArr.join("#");
            if(words.has(strArr)){
                let val = words.get(strArr);
                val.push(str);
                words.set(strArr, val);
            } else {
                words.set(strArr, [str]);
            }
        }
        // console.log("reversed", reversed);
        let ans = []
        words.forEach((val, key) => {
            ans.push(val);
        })
        return ans;
    }
}
