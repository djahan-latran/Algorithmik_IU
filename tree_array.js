// construction a binary tree with an array

class BinTree {
    constructor(lenOfTree) {
        this.lenOfTree = lenOfTree;
        this.elements = [];
    }
    initializeBinTree() {
        for (let i = 0; i < this.lenOfTree; i++) {
            this.elements.push(undefined);
        }
        return this
    }
    insertElement(e,idx) {
        if (idx === 0) {return this.elements[idx] = e}
        else {
            if (idx % 2 !== 0) {
                var parPos = (idx - 1) / 2;
            } else {
                var parPos = (idx / 2);
            }
        }
        if (this.elements[parPos] !== undefined) {
            this.elements[idx] = e
        } else {
            return console.log("Error: ParentNode at index " + parPos + " missing.\n Element cannot be inserted at this index yet")
        }
    }
    getElementAtIdx(idx) {
        return this.elements[idx]
    }
}


let myBinTree = new BinTree(7);
myBinTree.initializeBinTree();
myBinTree.insertElement(50,0);
myBinTree.insertElement(25,1);
myBinTree.insertElement(75,2);
myBinTree.insertElement(10,8);

console.log(myBinTree.getElementAtIdx(2));