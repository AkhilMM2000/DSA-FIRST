class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    // Insert a node in level order
    insert(value) {
      const newNode = new TreeNode(value);
      if (this.root === null) {
        this.root = newNode;
        return;
      }
  
      const queue = [this.root];
      while (queue.length > 0) {
        const current = queue.shift();
  
        if (current.left === null) {
          current.left = newNode;
          return;
        } else {
          queue.push(current.left);
        }
  
        if (current.right === null) {
          current.right = newNode;
          return;
        } else {
          queue.push(current.right);
        }
      }
    }
  
    // Check if the tree is symmetric
    isSymmetric() {
      if (!this.root) return true; // An empty tree is symmetric
      return this._isMirror(this.root.left, this.root.right);
    }
  
    // Helper function to recursively check for mirror symmetry
    _isMirror(leftNode, rightNode) {
      if (!leftNode && !rightNode) return true; // Both nodes are null
      if (!leftNode || !rightNode) return false; // One node is null, the other isn't
      if (leftNode.value !== rightNode.value) return false; // Values don't match
  
      // Recursively check the symmetry of left and right children
      return (
        this._isMirror(leftNode.left, rightNode.right) &&
        this._isMirror(leftNode.right, rightNode.left)
      );
    }
  
    // Print the tree in level order
    levelOrderTraversal() {
      if (!this.root) return;
  
      const queue = [this.root];
      const result = [];
      while (queue.length > 0) {
        const current = queue.shift();
        result.push(current.value);
  
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
      }
      console.log("Level Order Traversal:", result.join(" "));
    }

    IsBst(root,min=-Infinity,max=Infinity){
     if(!root) return true
       
     if(root.value<=min||root.value>=max)return false

        return this.IsBst(root.left,min,root.value)&&this.IsBst(root.right,root.value,max)

    }
  }
  
  // Example usage:
  const symmetricTree = new BinaryTree();
  symmetricTree.insert(1);
  symmetricTree.insert(2);
//   symmetricTree.insert(2);
  symmetricTree.insert(3);
//   symmetricTree.insert(4);
//   symmetricTree.insert(4);
//   symmetricTree.insert(3);
console.log(symmetricTree.IsBst(symmetricTree.root));

  symmetricTree.levelOrderTraversal(); // Outputs: 1 2 2 3 4 4 3
  console.log("Is the tree symmetric?", symmetricTree.isSymmetric()); // Outputs: true
  