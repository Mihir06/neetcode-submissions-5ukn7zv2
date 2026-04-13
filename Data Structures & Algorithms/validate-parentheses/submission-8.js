class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length < 2) return false;
        // Will use a stack to push the braces 
        let braces = []
        // Loop 1: Create a stack of the 
        for(let bracket of s){
            if(["[", "{", "("].includes(bracket)){
                braces.push(bracket)
            } else {
                let curr = braces.pop();
                if(bracket === "}"){
                    if(curr != "{"){
                        return false;
                    }
                } else if(bracket === ")"){
                    if(curr != "("){
                        return false;
                    }
                } else {
                    // ]
                    if(curr != "["){
                        return false;
                    }
                }
            }
        }
        if(braces.length === 0){
           return true; 
        }
        return false;
    }
}
