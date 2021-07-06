// https://en.wiktionary.org/wiki/Category:Gothic_terms_with_IPA_pronunciation

const { build, transform } = require('./base')

/**
 * Expose module.
 */

module.exports = transform

/**
 * Gothic to ULA map.
 */

const m = {
  '𐌰': 'a',
  '𐌱': 'b',
  '𐌲': 'ɡ',
  '𐌳': 'd',
  '𐌴': 'ee',
  '𐌵': 'kw',
  '𐌶': 'z',
  '𐌷': 'h',
  '𐌸': 'c',
  '𐌹': 'i',
  '𐌺': 'k',
  '𐌻': 'l',
  '𐌼': 'm',
  '𐌽': 'n',
  '𐌾': 'y',
  '𐌿': 'U',
  '𐍀': 'p',
  '𐍁': '',
  '𐍂': 'rr',
  '𐍃': 's',
  '𐍄': 't',
  '𐍅': 'w',
  '𐍆': 'F',
  '𐍇': 'x',
  '𐍈': 'hw',
  '𐍉': 'oo',
  '𐍊': '',

  ' ': ' ',
  '\n': '\n',
  '(': '(',
  ')': ')',
  "'": "'",
  ",": ',',
  '.': '.',
  '?': '?',
  "׳": "'",
  '״': '"',
  ':': ':',
  ';': ';',
  '!': '!'
}

const s = build(m)

const form = i => transform(i, s, m)

module.exports = form
