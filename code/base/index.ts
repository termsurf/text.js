export type Map = Record<string, string | ((m: Array<string>) => void)>

export type Trie = {
  [key: string]: Trie | boolean
}

/**
 * Transform input text to output using map.
 */

export function transform(i: string, s: Trie, m: Map) {
  let o: Array<string> = []
  let w = 0

  while (w < i.length) {
    let r = s
    let v = w

    while (true) {
      const c = i.charAt(v).toLowerCase()
      const d = r[c]
      if (typeof d === 'object') {
        r = d
        v++
      } else {
        break
      }
    }

    if (!r.__last__) {
      const t = i.charAt(w).toLowerCase()
      const h = t.codePointAt(0)?.toString(16)
      const e = '\\u' + '0000'.substring(0, 4 - (h ?? '').length) + h
      console.log(r)
      throw new Error(`${w}:${e}:${t}`)
    }

    const z = i.slice(w, v - w).toLowerCase()
    const k = m[z]

    if (typeof k == 'function') {
      k(o)
    } else if (typeof k === 'string') {
      o.push(k)
    }

    w = v
  }

  return o.join('')
}

/**
 * Build trie.
 */

export function build(m: Map) {
  let s: Trie = {}

  for (let key in m) {
    let v = key.toLowerCase().split('')
    let r = s
    while (v.length) {
      const x = v.shift()
      if (x) {
        if (!r[x]) {
          r[x] = {}
        }
        const w = r[x]
        if (typeof w === 'object') {
          r = w
        }
      }
    }
    r.__last__ = true
  }

  return s
}
