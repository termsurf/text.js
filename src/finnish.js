
const { build, transform } = require('./base')

/**
 * Finnish.
 */

const m = {
  'a': 'a',
  'b': 'p',
  'c': ['k', 's'],
  'd': 't',
  'e': 'E',
  'f': 'f',
  'ng': 'q',
  'g': 'k',
  'h': 'h',
  'i': 'i',
  'l': 'l',
  'm': 'm',
  'n': 'n',
  'o': 'o',
  'q': 'k',
  'r': 'r',
  't': 't',
  'u': 'u',
  'v': 'V',
  'w': 'V',
  'x': 'ks',
  'y': 'i~',
  'z': 'ts',
  'å': 'o',
  'ä': 'A',
  'ö': 'a~',
  'š': 's',
  'ž': 'j',
}

/**
 * Build trie.
 */

const s = build(m)

/**
 * Transform the text.
 */

const form = i => transform(i, s, m)

module.exports = form
