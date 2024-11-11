// TreeNode class definition
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// BinaryTree class definition
class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    // Function to check if the tree is symmetric
    isSymmetric() {
        if (!this.root) return true; // An empty tree is symmetric

        // Helper function to check if two trees are mirror images of each other
        function isMirror(t1, t2) {
            if (!t1 && !t2) return true; // Both are null, so they are symmetric
            if (!t1 || !t2) return false; // One is null, and the other is not, so not symmetric
            return (t1.val === t2.val) &&
                   isMirror(t1.left, t2.right) && // Compare left of t1 with right of t2
                   isMirror(t1.right, t2.left);   // Compare right of t1 with left of t2
        }

        // Start checking symmetry from the left and right subtrees of the root
        return isMirror(this.root.left, this.root.right);
    }

    // Function to add a node to the tree (level-order insertion)
    addNode(val) {
        if (!this.root) {
            this.root = new TreeNode(val); // If the tree is empty, create a new node
            return this.root;
        }

        const queue = [this.root]; // Queue for level-order traversal

        while (queue.length > 0) {
            const node = queue.shift(); // Get the first node in the queue
            
            // Check if left child is null
            if (!node.left) {
                node.left = new TreeNode(val); // Add new node as left child
                return this.root;
            } else {
                queue.push(node.left); // Otherwise, add left child to the queue
            }

            // Check if right child is null
            if (!node.right) {
                node.right = new TreeNode(val); // Add new node as right child
                return this.root;
            } else {
                queue.push(node.right); // Otherwise, add right child to the queue
            }
        }
    }
}

// Example of using the BinaryTree class

// Create a binary tree and add nodes
const tree1 = new BinaryTree(new TreeNode(1));
tree1.addNode(2);
tree1.addNode(2);
tree1.addNode(3);
tree1.addNode(4);
tree1.addNode(4);
tree1.addNode(3);

// Check if the tree is symmetric
console.log(tree1.isSymmetric()); // Output: true

// Create another tree and add nodes
const tree2 = new BinaryTree(new TreeNode(1));
tree2.addNode(2);
tree2.addNode(2);
tree2.addNode(3);
tree2.addNode(4);
tree2.addNode(5);

// Check if the tree is symmetric
console.log(tree2.isSymmetric()); // Output: false
