class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        
        // Binary search on eating rate
        let start = 1;
        let end = Math.max(...piles);
        let minSpeed = end;

        while ( start <= end ){
            let mid = Math.floor((start + end) / 2);

            let rate = 0;
            for(let num of piles){
                rate += Math.ceil(num/mid);
            }
            console.log('rate', rate)
            if( rate <= h) {
                minSpeed = mid
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return minSpeed;

    }
}
