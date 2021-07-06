
const virama = '\u0ccd'

const standaloneVowels = {
  'ಅ': 'a',
  'ಇ': 'i',
  'ಉ': 'u',
  'ಋ': 'r',
  'ಎ': 'e',
  'ಐ': 'ai',
  'ಒ': 'o',
  'ಔ': 'au',
  'ಆ': 'aa',
  'ಈ': 'ii',
  'ಊ': 'uu',
  'ೠ': 'rr',
  'ಏ': 'ee',
  'ಓ': 'oo'
}

const vowelDiacritics = {
  '\u0CBe': 'aa',
  '\u0CBf': 'i',
  '\u0Cc0': 'ii',
  '\u0cc1': 'u',
  '\u0cc2': 'uu',
  '\u0cc3': 'r',
  '\u0cc4': 'rr',
  '\u0cc6': 'e',
  '\u0cc7': 'ee',
  '\u0cc8': 'ai',
  '\u0cca': 'o',
  '\u0ccb': 'oo',
  '\u0ccc': 'au',
  '\u0ccd': 'aa',
  '\u0ce2': 'l',
  '\u0ce3': 'll',
}

const consonants = {
  'ಕ': 'ka',
  'ಖ': 'kha',
  'ಗ': 'ga',
  'ಘ': 'gha',
  'ಙ': 'ṅa',
  'ಚ': 'txa',
  'ಛ': 'txha',
  'ಜ': 'dja)',
  'ಝ': 'djha',
  'ಞ': 'nya',
  'ಟ': 'Ta',
  'ಠ': 'Tha',
  'ಡ': 'Da',
  'ಢ': 'Dha',
  'ಣ': 'Na',
  'ತ': 'ta',
  'ಥ': 'tha',
  'ದ': 'da',
  'ಧ': 'dha',
  'ನ': 'na',
  'ಪ': 'pa',
  'ಫ': 'pha',
  'ಬ': 'ba',
  'ಭ': 'bha',
  'ಮ': 'ma',
  'ಯ': 'ya',
  'ರ': 'r!a',
  'ಱ': 'rr!a',
  'ಲ': 'la',
  'ವ': 'va',
  'ಶ': 'xa',
  'ಷ': 'Xa',
  'ಸ': 'sa',
  'ಹ': 'ha',
  'ಳ': 'La',
  'ೞ': 'lla',
}

const vowelTransformer = Object.keys(vowelDiacritics).reduce((m, x) => {
  let render = vowels[x]
  m[x] = m => {
    m[m.length - 1] = m[m.length - 1].replace(/a/, '') + render
  }
  return m
}, {})

const m = {
  ...standaloneVowels,
  ...vowelTransformer,
  ...consonants,
  [virama]: m => {
    m[m.length - 1] = m[m.length - 1].replace(/a/, '')
  }
}

const s = build(m)

const form = t => transform(t, s, m)

module.exports = form
