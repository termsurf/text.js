class TrieNode {
  children: Map<string, TrieNode>
  isEndOfWord: boolean

  constructor() {
    this.children = new Map()
    this.isEndOfWord = false
  }
}

export default class Trie {
  root: TrieNode = new TrieNode()

  insert(word: string): void {
    let node = this.root
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode())
      }
      node = node.children.get(char)!
    }
    node.isEndOfWord = true
  }

  search(prefix: string): boolean {
    let node = this.root
    for (const char of prefix) {
      if (!node.children.has(char)) return false
      node = node.children.get(char)!
    }
    return node.isEndOfWord
  }
}
