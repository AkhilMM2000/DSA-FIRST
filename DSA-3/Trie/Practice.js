class TrieNode {
  constructor() {
    this.children = {};
    this.endword = false;
  }
}

class Triemake {
  constructor() {
    this.root = new TrieNode();
  }
  insertword(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.endword = true;
  }

  // printword(node = this.root, current = "", result = []) {
  //   if (node.endword) {
  //     result.push(current);
  //   }
  //   for (const char in node.children) {
  //     this.printword(node.children[char], current + char, result);
  //   }
  //   return result;
  // }

  serachword(word) {
    let node = this.root;
    for (const element of word) {
      if (!node.children[element]) {
        return false;
      }
      node = node.children[element];
    }
    return node.endword;
  }
  searchprefix(word) {
    let node = this.root;
    for (const element of word) {
      if (!node.children[element]) {
        return false;
      }
      node = node.children[element];
    }
    return true;
  }
  deleteword(word) {
    this._delete(this.root, word, 0);
  }

  _delete(node, word, index) {
    if (index === word.length) {
      if (!node.endword) {
        return false;
      }
      node.endword = false;
      return Object.keys(node.children).length === 0;
    }
    const char = word[index];
    const childnode = node.children[char];
    if (!childnode) {
      return false;
    }
    const shouldDeleteChildNode = this._delete(childnode, word, index + 1);
    if (shouldDeleteChildNode) {
      delete node.children[char];
      return Object.keys(node.children).length == 0 && !node.endword;
    }
  }

  autocomplete(word) {
    let node = this.root;
    for (const element of word) {
      if (!node.children[element]) {
        return false;
      }
      node = node.children[element];
    }
    let list = [];
    this.collectword(node, word, list);
    return list;
  }

  collectword(node,word,list){
      if(node.endword){
        list.push(word)
      }
      for (const char in node.children) {
          this.collectword(node.children[char],word+char,list)
      }
      return list
  }

  print(node = this.root, current = "", result = []) {
    if (node.endword) {
      result.push(current);
    }
    for (const element in node.children) {
      this.print(node.children[element], current + element, result);
    }
    return result;
  }
}

const T = new Triemake();
T.insertword("applue");
T.insertword("application");
T.insertword("apple");
T.insertword("wordof");
T.insertword("meanusn");

console.log(T.autocomplete('app'));

console.log(T.deleteword("apwplue"));

console.log(T.serachword("applue"));
