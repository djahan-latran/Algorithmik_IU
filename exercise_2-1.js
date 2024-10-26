/*Erstellen Sie eine vollständige JavaScript-Klasse, 
die einen Array-basierten Stapel implementiert. 
Testen Sie die Klasse im Hauptprogramm, indem Sie die Zahlen 10,
35, 63, 12 und 29 nacheinander mit jeweils einem Push-Befehl in einen Stapel einfügen.
Anschließend soll Ihr Hauptprogramm den Stapel anzeigen, 
das oberste Element per Pop-Befehl entfernen und den verbleibenden Stapel erneut anzeigen.*/

class ArrayStack {
    constructor() {
        this.nodes = [];
    }
    pushNode(e) {
        this.nodes.push(e);
        return this
    }
    popNode() {
        this.nodes.pop();
        return this
    }
    showNodes() {
        console.log(this.nodes);
    }
    showTopNode() {
        let top = this.nodes.length - 1;
        console.log(this.nodes[top]);
    }
}

let myStack = new ArrayStack();
myStack.pushNode(10);
myStack.pushNode(35);
myStack.pushNode(63);
myStack.pushNode(12);
myStack.pushNode(29);

myStack.showNodes();
myStack.showTopNode();

myStack.popNode();

myStack.showNodes();
myStack.showTopNode();
