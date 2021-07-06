
// https://en.wikipedia.org/wiki/Gurmukhi

const { build, transform } = require('./base')

const virama = '\u0A4d'

const standaloneVowels = {
  'ਅ': 'U'
}

const vowels = {
  '\u0A3e': 'aa',
  '\u0A3f': 'i',
  '\u0A40': 'ii',
  '\u0A41': 'u',
  '\u0A42': 'uu',
  '\u0A47': 'ee',
  '\u0A48': 'ai',
  '\u0A4b': 'oo',
  '\u0A4c': 'au',
  '\u0A4f': 'i',
}

const vowelTransformer = Object.keys(vowels).reduce((m, x) => {
  let render = vowels[x]
  m[x] = m => {
    m[m.length - 1] = m[m.length - 1].replace(/U_?/, '') + render
  }
  return m
}, {})

const blank = {
  'ੳ': '',
  'ੲ': ''
}

const consonants = {
  'ਸ਼': 'x',
  'ਖ਼': 'h+',
  'ਗ਼': 'r~',
  'ਜ਼': 'z',
  'ਫ਼': 'f',
  'ਲ਼': 'L',

  'ਸ': 'sU',
  'ਹ': 'hU',
  'ਕ': 'kU',
  'ਖ': 'khU',
  'ਗ': 'gU',
  'ਘ': 'kU_',
  'ਙ': 'qU',
  'ਚ': 'txU',
  'ਛ': 'txhU',
  'ਜ': 'djU',
  'ਝ': 'txU_',
  'ਞ': 'nyU',
  'ਟ': 'TU',
  'ਠ': 'ThU',
  'ਡ': 'DU',
  'ਢ': 'TU_',
  'ਣ': 'NU',
  'ਤ': 'tU',
  'ਥ': 'thU',
  'ਦ': 'dU',
  'ਧ': 'tU_',
  'ਨ': 'nU',
  'ਪ': 'pU',
  'ਫ': 'phU',
  'ਬ': 'bU',
  'ਭ': 'pU_',
  'ਮ': 'mU',
  'ਯ': 'yU',
  'ਰ': 'r!U',
  'ਲ': 'lU',
  'ਵ': 'VU',
  'ੜ': 'RU',
}

const m = {
  ...blank,
  ...vowelTransformer,
  ...standaloneVowels,
  ...consonants,
  [virama]: m => {
    m[m.length - 1] = m[m.length - 1].replace(/U_?/, '')
  }
}

const s = build(m)

const form = t => transform(t, s, m)

module.exports = form
