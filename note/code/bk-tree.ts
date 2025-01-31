function levenshteinDistance(a: string, b: string): number {
  const dp: number[][] = Array.from({ length: a.length + 1 }, (_, i) =>
    Array.from({ length: b.length + 1 }, (_, j) =>
      i === 0 ? j : j === 0 ? i : 0,
    ),
  )

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1, // Deletion
        dp[i][j - 1] + 1, // Insertion
        dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1), // Substitution
      )
    }
  }

  return dp[a.length][b.length]
}

class BKTreeNode {
  term: string
  children: Map<number, BKTreeNode>

  constructor(term: string) {
    this.term = term
    this.children = new Map()
  }
}

export default class BKTree {
  root: BKTreeNode | null = null

  constructor(words: string[]) {
    for (const word of words) this.insert(word)
  }

  insert(word: string): void {
    if (!this.root) {
      this.root = new BKTreeNode(word)
      return
    }

    let current = this.root
    while (true) {
      const dist = levenshteinDistance(word, current.term)
      if (!current.children.has(dist)) {
        current.children.set(dist, new BKTreeNode(word))
        return
      }
      current = current.children.get(dist)!
    }
  }

  search(query: string, maxDistance: number): string[] {
    if (!this.root) return []
    const results: string[] = []
    const stack: BKTreeNode[] = [this.root]

    while (stack.length > 0) {
      const node = stack.pop()!
      const dist = levenshteinDistance(query, node.term)
      if (dist <= maxDistance) results.push(node.term)

      for (const [childDist, childNode] of node.children.entries()) {
        if (
          childDist >= dist - maxDistance &&
          childDist <= dist + maxDistance
        ) {
          stack.push(childNode)
        }
      }
    }
    return results
  }
}
