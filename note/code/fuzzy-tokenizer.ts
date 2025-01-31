import BKTree from './bk-tree'
import NGramIndex from './ngram-index'
import Trie from './trie'
import LSH from './lsh'

export default class FuzzyTokenizer {
  trie: Trie
  bkTree: BKTree
  ngramIndex: NGramIndex
  lsh: LSH

  constructor(words: string[]) {
    this.trie = new Trie()
    this.bkTree = new BKTree(words)
    this.ngramIndex = new NGramIndex()
    this.lsh = new LSH()

    words.forEach(word => {
      this.trie.insert(word)
      this.ngramIndex.addWord(word)
    })
  }

  tokenize(sentence: string): string[] {
    const words = sentence.toLowerCase().split(/\s+/)
    const result: string[] = []

    for (const word of words) {
      if (this.trie.search(word)) {
        result.push(word)
      } else {
        const bkMatches = this.bkTree.search(word, 2)
        const ngramMatches = this.ngramIndex.search(word)
        const lshMatches = this.lsh.search(word, [
          ...bkMatches,
          ...ngramMatches,
        ])

        const bestMatch = [
          ...bkMatches,
          ...ngramMatches,
          ...lshMatches,
        ][0]
        if (bestMatch) result.push(bestMatch)
      }
    }

    return result
  }
}
