class Node {
    constructor(value, nextNode) {
        this.value = value,
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.nextNode = null
    }
    addFirst(value) {
        let node = new Node(value, null)
        this.nextNode = node;
    }
    append(value) {
        if (this.nextNode == null) {
            this.addFirst(value)
        } else {
            // create a node; the pointer is null because we are the last node
            let node = new Node(value, null);
            // keep track of which node we are iterating over
            let currentNode = this;
            // traversing: as long as the node we are currently on points to something, it's not the last
            while (currentNode.nextNode !== null) {
                // keep moving down the line until we find a node that has a null pointer
                currentNode = currentNode.nextNode;
            }
            // make that pointer point to us
            currentNode.nextNode = node;
        }
    }
    prepend(value) {
        if (this.nextNode == null) {
            this.addFirst(value)
        } else {
            // store first node in the chain
            let formerFirstNode = this.nextNode;
            // create a node; the pointer is null because we are the last node
            let node = new Node(value, null);
            // make head point to us
            this.nextNode = node;
            // make us point to the former first node
            node.nextNode = formerFirstNode;
        }
    }
    size() {
        let number = 0;
        let currentNode = this;
        while (currentNode !== null) {
            // keep moving down the line until we find a node that has a null pointer
            number++;
            currentNode = currentNode.nextNode;
        }
        return number;
    }
    head() {
        return this.nextNode;
    }
    tail() {
        // keep track of which node we are iterating over
        let currentNode = this;
        // traversing: as long as the node we are currently on points to something, it's not the last
        while (currentNode.nextNode !== null) {
            // keep moving down the line until we find a node that has a null pointer
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }
    at(index) {
        let number = 0;
        let matchingNode = null;
        let currentNode = this;
        while (currentNode !== null) {
            // keep moving down the line until we find a node that has a null pointer
            if (number == index) {
                matchingNode = currentNode;
            }
            number++;
            currentNode = currentNode.nextNode;
        }
        return matchingNode;
    }
    pop() {
        // keep track of number of nodes
        let number = 0;
        // traversing: find the last node
        let lastNode = this;
        while (lastNode.nextNode !== null) {
            // keep moving down the line until we find a node that has a null pointer
            number++;
            lastNode = lastNode.nextNode;
        }
        // if there is only only one node
        if (number < 2) {
            this.nextNode = null;
        } else {
        // traversing: find the second to last node
        let secondToLastNode = this;
        while (secondToLastNode.nextNode.nextNode !== null) {
            secondToLastNode = secondToLastNode.nextNode;
        }
        secondToLastNode.nextNode = null;
        }
    }
    contains(value) {
        let matchingNode = null;
        let currentValue = null;
        let currentNode = this;
        while (currentNode !== null) {
            currentValue = currentNode.value;
            if (currentValue == value) {
                matchingNode = currentNode;
            }
            currentNode = currentNode.nextNode;
        }
        if (matchingNode !== null) {
            return true;
        } else {
            return false;
        }
    }
    find(value) {
        let matchingNode = null;
        let currentValue = null;
        let currentNode = this;
        while (currentNode !== null) {
            currentValue = currentNode.value;
            if (currentValue == value) {
                matchingNode = currentNode;
            }
            currentNode = currentNode.nextNode;
        }
        return matchingNode;
    }
    toString() {
        let totalString = '';
        let currentString = '';
        let currentNode = this;
        while (currentNode !== null) {
            if (currentNode.value == undefined) {
                currentNode = currentNode.nextNode;
            } else {
                currentString = currentNode.value.toString();
                if (totalString == '') {
                    totalString = '( ' + currentString + ' )';
                } else {
                    totalString = totalString + ' -> ( ' + currentString + ' )';
                }
                currentNode = currentNode.nextNode;    
            }
        }
        return totalString;
    }
}

// testing
let list1 = new LinkedList();
list1.append('123');
list1.append('456');
list1.append('789');
list1.prepend('000');
console.log(list1.contains('123'));
console.log(list1.find('123'));
list1.pop();
console.log(list1.toString());