class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        // Let's try to implement a heap here
        let heap = new Heap();
        for(let stone of stones){
            heap.add(stone);
        }
        while(heap.size() >= 0){
            if(heap.size() === 0){
                return 0;
            }
            if(heap.size() === 1){
                return heap.remove();
            }

            let heavier = heap.remove()
            // console.log('this is heavier', heavier)
            let lighter = heap.remove();
            // console.log('this is lighter', lighter)
            let diff = heavier - lighter;
            // console.log('diff', diff)
            // console.log('heap', heap)
            if(diff > 0){
                heap.add(diff)
            } else if(diff < 0){
                heap.add(Math.abs(diff))
            } else {
            // If they are of the same value, we keep popping  
            }
        }
        console.log('heap', heap)
        return 0

    }
}
class Heap {
/**
Important Heap Formulas:

Get the parent of nth node -> Math.floor((n-1) / 2)
left child -> 2n + 1
right child -> 2n + 2

Need to implement the following functions:

Public functions 
    peek() -> look at the top of the heap
    size() -> returns the size of the heap
    add(item) -> add a new item to the heap
    delete(item) -> Delete the largest item from the heap
Private Functions (internal use):
    _bubbleUp() -> When newly added item is greater than last item, we move it up to the correct place
    _bubbleDown() -> When newly added item is smaller than last item, we move it down to the correct place
 */

    constructor() {
        // Initialize heap
        this.heap = []    
    }
    size() {
        return this.heap.length;
    }
    peek(){
        return this.heap[0]
    }
    add(item){
        this.heap.push(item);
        if(this.heap.length > 1){
            this._bubbleUp(this.heap.length - 1)
        }
    }
    remove(){
        // It's a max heap, so remove the first item, replace it with the last item, then bubble down
        // Swapped the 2 items
        let max = this.heap[0];
        [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]]
        this.heap.pop();
        this._bubbleDown(0)
        return max;

    }
    _bubbleUp(n){
        // Goal of the function is to get the last item and put it in the correct position in the heap
        while(n > 0){
            let parentIndex = Math.floor((n-1) / 2);
            // If item at parent index is smaller than the current item, we need to swap
            if(this.heap[n] > this.heap[parentIndex]){
                // Swap the item
                let temp = this.heap[n]
                this.heap[n] = this.heap[parentIndex]
                this.heap[parentIndex] = temp
                // Now the item is at parent's index, so need to 
                n = parentIndex;
            } else {
                break;
            }
        }

    }
    _bubbleDown(n){
        // Goal of this function is to put the element in the correct place
        while(true){
            // Base condition to exit loop
            if( n >= this.heap.length - 1){
                break;
            }
            let leftIndex = 2*n + 1
            let rightIndex = 2*n + 2
            let largest = n;
            if(leftIndex < this.heap.length && this.heap[leftIndex] > this.heap[largest]) largest = leftIndex;
            if(rightIndex < this.heap.length && this.heap[rightIndex] > this.heap[largest]) largest = rightIndex;
            if(largest === n) break; // already in right place
            [this.heap[largest], this.heap[n]] = [this.heap[n], this.heap[largest]];
            n = largest;
        }
    }

}