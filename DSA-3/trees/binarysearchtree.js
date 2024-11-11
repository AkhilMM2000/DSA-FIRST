class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class Binarytree {
  constructor() {
    this.root = null;
  }

  isempty() {
    return this.root === null;
  }

  insert(value) {
    const newnode = new Node(value);
    if (this.isempty()) {
      this.root = newnode;
    } else {
      this.insertNode(this.root, newnode);
    }
  }

  insertNode(root, newnode) {
    if (newnode.value < root.value) {
      if (root.left === null) {
        root.left = newnode;
      } else {
        this.insertNode(root.left, newnode);
      }
    } else {
      if (root.right === null) {
        root.right = newnode;
      } else {
        this.insertNode(root.right, newnode);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (value === root.value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }
  // 10
  // /   \
  // 5     15
  // / \
  // 3   7
  preorder(root) {
    if (root) {
      console.log(root.value);
      this.preorder(root.left);
      this.preorder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postorder(root) {
    if (root) {
      this.postorder(root.left);
      this.postorder(root.right);
      console.log(root.value);
    }
  }

  bfs() {
    const result = [];
    const queue = [];
    if (this.root) {
      queue.push(this.root);
    }
    while (queue.length) {
      this.result = [];
      this.current = queue.shift();
      result.push(this.current.value);
      if (this.current.left) queue.push(this.current.left);
      if (this.current.right) queue.push(this.current.right);
    }

    return result;
  }

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root) {
      return null;
    }
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }
  // 10
  // /   \
  // 5     15
  // / \
  // 3   7
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }
  deleteNode(root, value) {
    if (root == null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
}

const bts = new Binarytree();
bts.insert(8);
bts.insert(4);
bts.insert(16);
bts.insert(2);
bts.insert(5);
bts.insert(15);
bts.insert(19);
bts.insert(17);
console.log(bts.inOrder(bts.root));
