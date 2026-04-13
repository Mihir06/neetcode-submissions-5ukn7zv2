class MinStack {
    constructor() {
        this.stack = [];
        this.minVal = [];
    }
    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        
        this.stack.push(val);
        if(this.minVal.length < 1){
            this.minVal.push(val);
        } else {
            val = Math.min(val, this.minVal[this.minVal.length - 1]);
            this.minVal.push(val);
        }
        console.log('push', this.stack);
        return;
    }

    /**
     * @return {void}
     */
    pop() {
        let elm = this.stack.pop();
        this.minVal.pop();
        console.log('pop', this.stack);
        return elm;
    }

    /**
     * @return {number}
     */
    top() {
        return (this.stack.length > 0 ? this.stack[this.stack.length - 1] : null)
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minVal[this.minVal.length - 1];
    }
}
