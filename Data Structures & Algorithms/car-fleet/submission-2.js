class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let stack = [];
        // Creating a single corrdinate 
        let pair = position.map((p,i) => [p, speed[i]]);
        console.log('pair', pair);
        // Sorting the pair by the positions
        pair.sort((a,b) => b[0] -a [0])
        for(let [pos,speed] of pair){
            let a = (target - pos)/speed
            stack.push(a);
            // IF the car I just pushed onto the stack is faster that prevous car, it will join the fleet, it's own time can be removed
            if(stack.length >= 2 && stack[stack.length -1] <= stack[stack.length -2]){
                stack.pop()
            }
        }
        return stack.length;
    }
}
