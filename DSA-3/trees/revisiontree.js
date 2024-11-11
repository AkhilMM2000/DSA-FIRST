class Btsnode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Makebts {
  constructor() {
    this.root = null;
  }

  isempty() {
    return this.root === null;
  }
  insertvalue(value) {
    const newnode = new Btsnode(value);
    if (this.isempty()) {
      this.root = newnode;
    } else {
      this.insertnode(this.root, newnode);
    }
  }
  insertnode(root, node) {
    if (node.value < root.value) {
      if (root.left == null) {
        root.left = node;
      } else {
        this.insertnode(root.left, node);
      }
    } else {
      if (root.right == null) {
        root.right = node;
      } else {
        {
          this.insertnode(root.right, node);
        }
      }
    }
  }
  _preorder(root) {
    if (!root) {
      return;
    }
    console.log(root.value);

    this._preorder(root.left);
    this._preorder(root.right);
  }
  inoroder(root) {
    if (root) {
      this.inoroder(root.left);
      console.log(root.value);
      this.inoroder(root.right);
    }
  }

  postorder(root) {
    if (root) {
      this.postorder(root.left);
      this.postorder(root.right);
      console.log(root.value);
    }
  }

  bfs(root) {
    const queue = [];
    queue.push(root);
    const result = [];
    while (queue.length > 0) {
      const current = queue.shift();
      result.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return result;
  }
  min(root) {
    if (!root) {
      return null;
    }
    if (root.left == null) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }
  max(root) {
    if (!root) {
      return false;
    }
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  searchvalue(root, value) {
    if (!root) {
      return false;
    }
    if (root.value == value) {
      return true;
    } else {
      if (value < root.value) {
        return this.searchvalue(root.left, value);
      } else {
        return this.searchvalue(root.right, value);
      }
    }
  }
  delete(value) {
    this.root = this.nodedelete(this.root, value);
  }


  nodedelete(root, value) {
    if (!root) {
      return root;
    }
    if (value < root.value) {
      root.left = this.nodedelete(root.left, value);
    } else if (value > root.value) {
      root.right = this.nodedelete(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      } else {
        root.value = this.min(root.right);
        root.right=this.nodedelete(root.right,root.value)
      }
    }
return root
  }
  
  CheckBSt(root,min=-Infinity,max=Infinity){
    if(!root){
        return true
    }
   if(root.value<=min||root.value>=max)return false
    return (
        this.CheckBSt(root.left,min,root.value)&&this.CheckBSt(root.right,root.value.max)
    )

  }

}

const Bts = new Makebts();
Bts.insertvalue(20);
Bts.insertvalue(15);
Bts.insertvalue(25);
Bts.insertvalue(10);
Bts.insertvalue(16);
Bts.insertvalue(24);
Bts.insertvalue(26);
// Bts._preorder(Bts.root);
console.log(Bts.CheckBSt(Bts.root));

// console.log(".....................................");

// Bts.inoroder(Bts.root);
// console.log("--------------------------");
// Bts.postorder(Bts.root);
// Bts.delete(26)
// console.log(Bts.bfs(Bts.root));
