class Stack {
    // Create a stack with an empty array
    constructor() {
        this.data = [];
    }
    // Add a record to the top of the stack
    push(record) {
        this.data.push(record);
    }
    // Remove a record from the top of the stack
    pop() {
        return this.data.pop();
    }
    // Return the record at the top of the stack
    peek() {
        return this.data[this.data.length - 1];
    }
    // Check if the stack is empty
    isEmpty() {
        return this.data.length === 0;
    }
    // Clear the stack
    clear() {
        this.data = [];
    }
    // Return the size of the stack
    size() {
        return this.data.length;
    }
}