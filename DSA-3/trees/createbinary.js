class BinaryNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class MakeBinary {
  constructor() {
    this.root = null;
  }

  isempty() {
    return this.root === null;
  }

  addValue(value) {
    const node = new BinaryNode(value);
    if (this.isempty()) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, node) {
    let queue = [];
    queue.push(root);

    // Perform a level-order traversal (breadth-first search)
    while (queue.length > 0) {
      let current = queue.shift();

      // If there's an empty spot (left or right), insert the node
      if (current.left === null) {
        current.left = node;
        return;
      } else {
        queue.push(current.left);
      }

      if (current.right === null) {
        current.right = node;
        return;
      } else {
        queue.push(current.right);
      }
    }
  }

  Isymmetric(root) {
    if (!root) return true;
    function checksymmetric(left, right) {
      if (!left && !right) return true;
      if (!left || !right) return false;

      return (
        left.value == right.value &&
        checksymmetric(left.right, right.left) &&
        checksymmetric(left.left, right.right)
      );
    }

    return checksymmetric(root.left, root.right);
  }
  identical(r1, r2) {
    if (!r1 && !r2) {
      return true;
    }
    if (!r1 || !r2) return false;
    if (r1.value == r2.value) {
      return (
        this.identical(r1.left, r2.left) && this.identical(r1.right, r2.right)
      );
    }
    return false;
  }
  checkBst(node = this.root, min = -Infinity, max = Infinity) {
    if (node == null) {
      return true;
    }
    if (node.value <= min || node.value >= max) return false;

    return (
      this.checkBst(node.left, min, node.value) &&
      this.checkBst(node.right, node.value, max)
    );
  }

  preorder(root) {
    if (root) {
      console.log(root.value);
      this.preorder(root.left);

      this.preorder(root.right);
    }
  }

  maxdepth(root) {
    let maximum = 0;
    function check(root, leval) {
      if (!root) return maximum;
      // if (maximum < leval) {
      //   maximum = leval;
      // }
      maximum=Math.max(maximum,leval)
      check(root.left, leval + 1) 
       check(root.right, leval + 1);
    }
    check(root, 1);
    return maximum;
  }

  minDepth(root) {
    let min = Infinity;

    function minimum(root, level) {
      if (!root) return;

      if (!root.left && !root.right) {
        min = Math.min(min, level);
      }

      minimum(root.left, level + 1)
      minimum(root.right, level + 1);
    }

    minimum(root, 1);

    return min === Infinity ? 0 : min;
  }
}

// Example usage
const tree = new MakeBinary();
tree.addValue(10);
tree.addValue(5);
tree.addValue(15);

// tree.addValue(4);
tree.addValue(23);
tree.addValue(15);
console.log(tree.maxdepth(tree.root));


