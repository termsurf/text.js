export default class LSH {
  hashFunctions: ((word: string) => number)[]

  constructor(numHashes: number = 5) {
    this.hashFunctions = Array.from({ length: numHashes }, () => {
      const a = Math.floor(Math.random() * 1000)
      const b = Math.floor(Math.random() * 1000)
      return (word: string) => {
        let hash = 0
        for (const char of word)
          hash = (hash * a + char.charCodeAt(0) + b) % 997
        return hash
      }
    })
  }

  hash(word: string): number[] {
    return this.hashFunctions.map(fn => fn(word))
  }

  similarity(word1: string, word2: string): number {
    const hash1 = this.hash(word1)
    const hash2 = this.hash(word2)
    return hash1.filter((h, i) => h === hash2[i]).length / hash1.length
  }

  search(
    word: string,
    candidates: string[],
    threshold: number = 0.7,
  ): string[] {
    return candidates.filter(w => this.similarity(word, w) >= threshold)
  }
}
