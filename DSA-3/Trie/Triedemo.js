class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class MakeTrie {
    constructor() {
        this.root = new TrieNode();
    }

    // Insert a word into the Trie
    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    // Delete a word from the Trie
    delete(word) {
        this._deleteHelper(this.root, word, 0);
    }

    _deleteHelper(node, word, index) {
        if (index === word.length) {
            if (!node.isEndOfWord) {
                return false; // Word does not exist
            }
            node.isEndOfWord = false;
            return Object.keys(node.children).length === 0;
        }

        const char = word[index];
        const childNode = node.children[char];
        if (!childNode) {
            return false; // Word does not exist
        }

        const shouldDeleteChild = this._deleteHelper(childNode, word, index + 1);
        if (shouldDeleteChild) {
            delete node.children[char];
            return Object.keys(node.children).length === 0 && !node.isEndOfWord;
        }

        return false;
    }

    // Print all words in the Trie
    printWords(node = this.root, currentWord = "", result = []) {
        if (node.isEndOfWord) {
            result.push(currentWord);
        }

        for (let char in node.children) {
            this.printWords(node.children[char], currentWord + char, result);
        }

        return result;
    }

    // Search for a word in the Trie
    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false; // Word does not exist
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }
}

// Test the Trie
const trie = new MakeTrie();
trie.insert('pool');
trie.insert('poor');

// Get all words in the Trie
let words = trie.printWords();
console.log(words); // Expected Output: ['poor']
