// constructing a graph with 2d arrays

class Graph {
    constructor(numOfNodes) {
        this.numOfNodes = numOfNodes;
        this.nodeNames = [];
        this.weights = [];
    }
    initializeGraph() {
        for (let i = 1; i <= this.numOfNodes; i++) {
            this.nodeNames.push(undefined);
            let w = [];
            for (let j = 1; j <= this.numOfNodes; j++) {
                w.push(undefined)
            }
            this.weights.push(w);
        }
        return this
    }
    getTtNbOfNodes() {return this.numOfNodes}

    putElementInNodes(e,idx) {
        if ((idx >= 0) && (idx < this.nodeNames.length)) {this.nodeNames[idx] = e}
    }

    insertWeightbtwnNodes(w,first,second) {
        let a = ((first >= 0) && (first < this.nodeNames.length));
        let b = ((second >= 0) && (second < this.nodeNames.length));

        if ((a) && (b)) {
            this.weights[first][second] = w;
        }
    }
}

let myGraph = new Graph(5);
myGraph.initializeGraph();
console.log(myGraph.weights);

myGraph.putElementInNodes(5,0);
myGraph.putElementInNodes(8,1);
myGraph.putElementInNodes(32,2);
myGraph.putElementInNodes(2,3);
myGraph.putElementInNodes(15,4);

console.log(myGraph.nodeNames);
myGraph.insertWeightbtwnNodes(23,2,3);
console.log(myGraph.weights);