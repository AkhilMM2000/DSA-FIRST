class TrieNode {
    constructor() {
      this.children = {};  // Holds references to child nodes (character -> node)
      this.endOfWord = false;  // Marks the end of a word
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
    
    // Insert a word into the Trie
    insert(word) {
      let node = this.root;
      for (const char of word) {
        // If the character doesn't exist, create a new TrieNode
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
      }
      node.endOfWord = true;  // Mark the end of the word
    }
  
    // Search for a word in the Trie
    search(word) {
      let node = this.root;
      for (const char of word) {
        // If the character isn't found, the word doesn't exist in the Trie
        if (!node.children[char]) {
          return false;
        }
        node = node.children[char];
      }
      return node.endOfWord;  // Return true only if it's a complete word
    }
  
    // Check if any word in the Trie starts with the given prefix
    startsWith(prefix) {
      let node = this.root;
      for (const char of prefix) {
        // If the character doesn't exist, the prefix isn't in the Trie
        if (!node.children[char]) {
          return false;
        }
        node = node.children[char];
      }
      return true;  // Return true since the prefix exists
    }

  delete(word) {
    this._delete(this.root, word, 0);
  }

  _delete(node, word, index) {
    // Base case: if we've reached the end of the word
    if (index === word.length) {
      // Only unmark endOfWord if it's a valid word
      if (!node.endOfWord) {
        
        return false; // Word does not exist in Trie
      }
      node.endOfWord = false; // Unmark the end of word

      // If node has no other children, it can be deleted
      return Object.keys(node.children).length === 0;
    }

    const char = word[index];
    const childNode = node.children[char];
    
    // If the character does not exist, the word is not in the Trie
    if (!childNode) {
      return false;
    }

    // Recursively call delete on the child node
    const shouldDeleteChildNode = this._delete(childNode, word, index + 1);

    // If true, delete the child node from the current node
    if (shouldDeleteChildNode) {
      delete node.children[char];

      // Return true if no other children are present and it’s not end of another word
      return Object.keys(node.children).length === 0 && !node.endOfWord;
    }

    return false;
  }
  }
  const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("bat");

console.log(trie.search("apple"));   // Output: true
console.log(trie.search("ap"));     // Output: true
console.log(trie.search("appl"));    // Output: false
console.log(trie.startsWith("a")); // Output: true

  