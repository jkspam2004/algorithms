// Trie Dictionary Implementation in JS
// TrieNode Constructor
function TrieNode(key) {
  // Each node has a key which is a string of letters up to that point ie. "di" or "docto"
  this.key = key;
  this.children = [];
  this.isWord = false;
  // length helps us determine what level of the Trie we are in
  this.length = key.length;
}
// Trie Constructor
function Trie() {
  // root starts as a blank string
  this.root = new TrieNode("");
  // addWord function takes in a word to add to the Trie
  this.addWord = function(word) {
    console.log("addWord", word);
    if(word.length == 0) {
      return
    }
    // Traverse through the Trie
    var current = this.root
    var searchKey;
    console.log("word length", word.length);
    while(word.length != current.key.length) {
      var nextChild = undefined;
      var searchKey = word.substring(0, current.key.length + 1);
      // loop through and find nextChild
      if (current.children instanceof Array) {
        console.log("array");
      } else {
        console.log("object");
      }
      console.log("current length", current.length);
      console.log("children length", current.children.length);
      for(child in current.children) {
        console.log("child", child);
        if(current.children[child].key == searchKey) {
          nextChild = current.children[child];
          break;
        }
      }
      // if we didn't find nextChild create one
      if(!nextChild) {
        nextChild = new TrieNode(searchKey)
        current.children.push(nextChild)
        console.log("children length after push", current.children.length);
      }
      // move onto the next one
      current = nextChild
      console.log(this);
    }
    // if we reached the end then we created a word so set the isWord property to true
    if(word.length == current.length) {
      current.isWord = true
      return
    }
  }
}

myTrie = new Trie();
console.log(myTrie.addWord("cat"));
console.log(myTrie.addWord("catch"));
console.log(myTrie.addWord("bob"));

