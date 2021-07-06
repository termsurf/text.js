
const { build, transform } = require('./base')

const virama = '\u0C4d'

const vowelDiacritics = {
  '\u0C3e': 'aa',
  '\u0C3f': 'i',
  '\u0C40': 'ii',
  '\u0C41': 'u',
  '\u0C42': 'uu',
  '\u0C43': 'r',
  '\u0C44': 'rr',
  '\u0C46': 'e',
  '\u0C47': 'ee',
  '\u0C48': 'ay',
  '\u0C4a': 'o',
  '\u0C4b': 'oo',
  '\u0C4c': 'aw',
  '\u0C62': 'l',
  '\u0C63': 'll',
}

const otherDiacritics = {
  '\u0C03': 'h',
  '\u0C01': '&',
  '\u0C01': '&',
}

const standaloneVowels = {
  'అ': 'a',
  'ఇ': 'i',
  'ఉ': 'u',
  'ఋ': 'r',
  'ఌ': 'l',
  'ఎ': 'e',
  'ఐ': 'ay',
  'ఒ': 'o',
  'ఔ': 'aw',
  'ఆ': 'aa',
  'ఈ': 'ii',
  'ఊ': 'uu',
  'ౠ': 'rr',
  'ౡ': 'll',
  'ఏ': 'ee',
  'ఓ': 'oo',
}

const consonants = {
  'క': 'ka',
  'ఖ': 'kha',
  'గ': 'ga',
  'ఘ': 'gha',
  'ఙ': 'qa',
  'చ': 'txa',
  'ఛ': 'txha',
  'జ': 'dja',
  'ఝ': 'djha',
  'ఞ': 'nya',
  'ట': 'Ta',
  'ఠ': 'Tha',
  'డ': 'Da',
  'ఢ': 'Dha',
  'ణ': 'Na',
  'త': 'ta',
  'థ': 'tha',
  'ద': 'da',
  'ధ': 'dha',
  'న': 'na',
  'ప': 'pa',
  'ఫ': 'pha',
  'బ': 'ba',
  'భ': 'bha',
  'మ': 'ma',
  'య': 'ya',
  'ర': 'r!a',
  'ల': 'la',
  'వ': 'Va',
  'ళ': 'La',
  'శ': 'xa',
  'ష': 'Xa',
  'స': 'sa',
  'హ': 'ha',
  'ఱ': 'r!r!a',
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
