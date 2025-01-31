export default class NGramIndex {
  index: Map<string, Set<string>> = new Map()
  n: number

  constructor(n: number = 3) {
    this.n = n
  }

  addWord(word: string): void {
    for (let i = 0; i <= word.length - this.n; i++) {
      const gram = word.slice(i, i + this.n)
      if (!this.index.has(gram)) this.index.set(gram, new Set())
      this.index.get(gram)!.add(word)
    }
  }

  search(query: string): string[] {
    const candidates: Map<string, number> = new Map()

    for (let i = 0; i <= query.length - this.n; i++) {
      const gram = query.slice(i, i + this.n)
      if (this.index.has(gram)) {
        for (const word of this.index.get(gram)!) {
          candidates.set(word, (candidates.get(word) || 0) + 1)
        }
      }
    }

    return Array.from(candidates.entries())
      .sort((a, b) => b[1] - a[1]) // Sort by highest match count
      .map(([word]) => word)
  }
}
