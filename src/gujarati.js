
const { build, transform } = require('./base')

const virama = '\u0D4d'

const vowelDiacritics = {
  '\u0abe': 'aa',
  '\u0abf': 'i',
  '\u0ac0': 'ii',
  '\u0ac1': 'u',
  '\u0ac2': 'uu',
  '\u0ac3': 'r',
  '\u0ac4': 'rr',
  '\u0ac5': 'e&',
  '\u0ac7': 'e',
  '\u0ac8': 'ai',
  '\u0ac9': 'o&',
  '\u0acb': 'o',
  '\u0acc': 'au',
  '\u0ae2': 'l',
  '\u0ae3': 'll',
}

const otherDiacritics = {
  '\u0a81': '&',
  '\u0a82': '&',
  '\u0a83': 'h',
}

const standaloneVowels = {
  'અ': 'U',
  'આ': 'a',
  'ઇ': 'i',
  'ઈ': 'i',
  'ઉ': 'u',
  'ઊ': 'u',
  'એ': 'E',
  'ઐ': 'Uy',
  'ઓ': 'o~',
  'ઔ': 'UV',
  'અં': 'a',
  'અ': 'i~',
  'ઋ': 'ru',
  'ઍ': 'A',
  'ઑ': 'o~',
  'ર': 'r',
  'જ': 'y',
  'હ': 'h',
  'રૂ': 'ru',
  'જી': 'yi',
  'હૃ': 'hr',
}

const digits = {
  '૦': '0',
  '૧': '1',
  '૨': '2',
  '૩': '3',
  '૪': '4',
  '૫': '5',
  '૬': '6',
  '૭': '7',
  '૮': '8',
  '૯': '9',
}

const consonants = {
  'ક': 'kU',
  'ખ': 'khU',
  'ગ': 'gU',
  'ઘ': 'ghU',
  'ઙ': 'qU',
  'ચ': 'txU',
  'છ': 'txhI',
  'જ': 'djU',
  'ઝ': 'djhU',
  'ઞ': 'nyU',
  'ય': 'yU',
  'શ': 'xU',
  'ટ': 'TU',
  'ઠ': 'ThU',
  'ડ': 'DU',
  'ઢ': 'DhU',
  'ણ': 'NU',
  'ર': 'r!U',
  'ષ': 'XU',
  'ત': 'tU',
  'થ': 'thU',
  'દ': 'dU',
  'ધ': 'dhU',
  'ન': 'nU',
  'લ': 'lU',
  'સ': 'sU',
  'પ': 'pU',
  'ફ': 'phU',
  'બ': 'bU',
  'ભ': 'bhU',
  'મ': 'mU',
  'વ': 'VU',
  'હ': 'hU',
  'ળ': 'LU',
  'ક્ષ': 'kXU',
  'જ્ઞ': 'gnU',
}

const vowelTransformer = Object.keys(vowelDiacritics).reduce((m, x) => {
  let render = vowels[x]
  m[x] = m => {
    m[m.length - 1] = m[m.length - 1].replace(/a/, '') + render
  }
  return m
}, {})

const m = {
  ...blank,
  ...otherDiacritics,
  ...vowelTransformer,
  ...standaloneVowels,
  ...consonants,
  [virama]: m => {
    m[m.length - 1] = m[m.length - 1].replace(/a/, '')
  }
}

const s = build(m)

const form = t => transform(t, s, m)

module.exports = form
