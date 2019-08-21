//Create a stack
let Stack = function(){
    this.count = 0;
    this.storage = {};

    // Adds a value onto the end of the stack
    this.push = (value) => {
        this.storage[this.count] = value;
        this.count ++;
    }

    // Remove and returns the value at the end of the stack
    this.pop = () => {
        if(this.count === 0){
            return undefined;
        }

        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = () => {
        return this.count;
    }

    // Return the value at the end of the stack
    this.peek = () => {
        return this.storage[this.count-1];
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop());
console.log(stack.peek());
stack.push('hello');
console.log(stack.peek());
console.log(stack.size());
console.log(stack.pop());
console.log(stack.size());
console.log(stack.peek());
