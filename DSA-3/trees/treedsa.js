class TreeNode {
    constructor(value) {
        this.value = value;       // The value of the node
        this.children = [];       // An array to hold child nodes
    }
}

class Tree {
    constructor(rootValue) {
        this.root = new TreeNode(rootValue); // Create the root node
    }

    // Add a child to a parent node
    addChild(parentValue, childValue) {
        const parentNode = this.findNode(this.root, parentValue);
        if (parentNode) {
            parentNode.children.push(new TreeNode(childValue));
        } else {
            console.log(`Parent node with value ${parentValue} not found.`);
        }
    }

    // Remove a child from a parent node
    removeChild(parentValue, childValue) {
        const parentNode = this.findNode(this.root, parentValue);
        if (parentNode) {
            parentNode.children = parentNode.children.filter(child => child.value !== childValue);
        } else {
            console.log(`Parent node with value ${parentValue} not found.`);
        }
    }

    // Find a node with a specific value
    findNode(node, value) {
        if (node.value === value) {
            return node;
        }
        for (let child of node.children) {
            const result = this.findNode(child, value);
            if (result) {
                return result;
            }
        }
        return null; // Return null if not found
    }

    // Depth-First Traversal
    depthFirstTraversal(node = this.root) {
        console.log(node.value);
        for (let child of node.children) {
            this.depthFirstTraversal(child);
        }
    }

    // Breadth-First Traversal
    breadthFirstTraversal() {
        const queue = [this.root];
        while (queue.length > 0) {
            const node = queue.shift();
            console.log(node.value);
            queue.push(...node.children); // Add all children to the queue
        }
    }
}

// Example Usage
const myTree = new Tree(1); // Create a tree with root value 1
myTree.addChild(1, 2);      // Add child 2 to parent 1
myTree.addChild(1, 3);      // Add child 3 to parent 1
myTree.addChild(2, 4);      // Add child 4 to parent 2
myTree.addChild(2, 5);      // Add child 5 to parent 2
myTree.addChild(3, 6);      // Add child 6 to parent 3

console.log("Depth-First Traversal:");
myTree.depthFirstTraversal(); // Should print 1, 2, 4, 5, 3, 6

console.log("Breadth-First Traversal:");
myTree.breadthFirstTraversal(); // Should print 1, 2, 3, 4, 5, 6

myTree.removeChild(2, 5); // Remove child 5 from parent 2

console.log("After removing 5 from 2:");
myTree.depthFirstTraversal(); // Should print 1, 2, 4, 3, 6
