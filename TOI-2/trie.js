class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode(); 
    }
  
    insert(word) {
      let currentNode = this.root;
      for (const char of word) {
        if (!currentNode.children[char]) {
          currentNode.children[char] = new TrieNode();
        }
        currentNode = currentNode.children[char];
      }
      currentNode.isEndOfWord = true;
    }
  
    search(word) {
      let currentNode = this.root;
      for (const char of word) {
        if (!currentNode.children[char]) {
          return false;
        }
        currentNode = currentNode.children[char];
      }
      return currentNode.isEndOfWord;
    }
    startsWith(prefix) {
      let currentNode = this.root;
      for (const char of prefix) {
        if (!currentNode.children[char]) {
          return false;
        }
        currentNode = currentNode.children[char];
      }
      return true;
    }
  }
  
  const trie = new Trie();
  trie.insert("apple");
  console.log(trie.search("apple"));  
  console.log(trie.search("app"));      
  console.log(trie.startsWith("app"))
  trie.insert("app");
  console.log(trie.search("app"));   
  