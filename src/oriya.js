
const { build, transform } = require('./base')

const virama = '\u0B4d'

const vowelDiacritics = {
  '\u0B3e': 'aa',
  '\u0B3f': 'i',
  '\u0B40': 'ii',
  '\u0B41': 'u',
  '\u0B42': 'uu',
  '\u0B43': 'r',
  '\u0B44': 'rr',
  '\u0B47': 'e',
  '\u0B48': 'ai',
  '\u0B4b': 'o',
  '\u0B4c': 'au',
  '\u0B62': 'l',
  '\u0B63': 'll',
}

const standaloneVowels = {
  'ଅ': 'a',
  'ଇ': 'i',
  'ଉ': 'u',
  'ଋ': 'ru',
  'ଌ': 'lu',
  'ଆ': 'aa',
  'ଈ': 'ii',
  'ଊ': 'uu',
  'ୠ': 'rru',
  'ୡ': 'llu',
  'ଏ': 'e',
  'ଓ': 'o',
  'ଐ': 'ai',
  'ଔ': 'au',
}

const consonants = {
  'କ': 'ko~',
  'ଖ': 'kho~',
  'ଗ': 'go~',
  'ଘ': 'gho~',
  'ଙ': 'qo~',
  'ଚ': 'txo~',
  'ଛ': 'txho~',
  'ଜ': 'djo~',
  'ଝ': 'djho~',
  'ଞ': 'nyo~',
  'ଟ': 'To~',
  'ଠ': 'Tho~',
  'ଡ': 'Do~',
  'ଢ': 'Dho~',
  'ଣ': 'No~',
  'ତ': 'to~',
  'ଥ': 'tho~',
  'ଦ': 'do~',
  'ଧ': 'dho~',
  'ନ': 'no~',
  'ପ': 'po~',
  'ଫ': 'pho~',
  'ବ': 'bo~',
  'ଭ': 'bho~',
  'ମ': 'mo~',
  'ଯ': 'djo~',
  'ୟ': 'yo~',
  'ର': 'r!o~',
  'ଳ': 'Lo~',
  'ଲ': 'lo~',
  'ୱ': 'wo~',
  'ଶ': 'so~',
  'ଷ': 'so~',
  'ସ': 'so~',
  'ହ': 'ho~',
  'ଡ଼': 'Ro~',
  'ଢ଼': 'Rho~',
  'କ୍ଷ': 'kso~',
}

const vowelTransformer = Object.keys(vowelDiacritics).reduce((m, x) => {
  let render = vowels[x]
  m[x] = m => {
    m[m.length - 1] = m[m.length - 1].replace(/o~/, '') + render
  }
  return m
}, {})

const m = {
  ...blank,
  ...vowelTransformer,
  ...standaloneVowels,
  ...consonants,
  [virama]: m => {
    m[m.length - 1] = m[m.length - 1].replace(/o~/, '')
  }
}

const s = build(m)

const form = t => transform(t, s, m)

module.exports = form
