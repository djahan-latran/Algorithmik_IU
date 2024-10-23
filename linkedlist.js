// creating a linked list data-structure

class NodeClass {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new NodeClass(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }
    pushNode(value) {
        const newNode = new NodeClass(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this
    }
    popNode() {
        if (!this.head) return undefined;
        let temp = this.head;
        let prev = this.head;
        while (temp.next) {
            prev = temp;
            temp = temp.next;
        }
        this.tail = prev;
        prev.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp
    }
    unshiftNode(value) {
        const newNode = new NodeClass(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this
    }
    shiftNode() {
        if (!this.head) {return undefined}
        let temp = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            temp.next = null;
        }
        this.length--;
        return temp
    }
    getNode(index) {
        if (index < 0 || index >= this.length) {return undefined}
        let temp = this.head;
        for (i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp
        
    }
    removeNode(index) {
        if (index === 0) {return this.shiftNode()}
        if (index === this.length-1) {return this.popNode()}

        let prev = this.getNode(index-1);
        let temp = prev.next;

        prev.next = temp.next;
        temp.next = null;
        this.length--;
        return temp
    }
    insertNode(index, value) {
        if (index === 0) {this.unshiftNode(value)}
        if (index === this.length-1) {this.pushNode(value)}
        if (index < 0 || index >= this.length) {return false}

        const newNode = new NodeClass(value);
        const prev = this.getNode(index-1);

        newNode.next = prev.next;
        prev.next = newNode;
        this.length++;
        return this  
    }

}