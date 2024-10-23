//constructing a stack data-structure

class NodeClass {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class StackClass {
    constructor(value) {
        const newNode = new NodeClass(value);
        this.top = newNode
        this.length = 1;
    }
    pushNode(value) {
        const newNode = new NodeClass(value);
        if (this.length === 0) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
        return this
    }
    popNode() {
        if (this.length === 0) {
            return undefined;
        }
        else {
            let temp = this.top;
            this.top = this.top.next;
            temp.next = null;
            this.length--;
            return temp
        }
    }
}

let myStack = new StackClass(5);
myStack.pushNode(8);
myStack.pushNode(3);
console.log(myStack);
myStack.popNode();
console.log(myStack);