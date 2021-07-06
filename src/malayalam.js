
const { build, transform } = require('./base')

const virama = '\u0D4d'

const vowelDiacritics = {
  '\u0D3e': 'aa',
  '\u0D3f': 'i',
  '\u0D40': 'ii',
  '\u0D41': 'u',
  '\u0D42': 'uu',
  '\u0D43': 'r',
  '\u0D44': 'rr',
  '\u0D46': 'e',
  '\u0D47': 'ee',
  '\u0D48': 'ai',
  '\u0D4a': 'o',
  '\u0D4b': 'oo',
  '\u0D4c': 'au',
  '\u0D62': 'l',
  '\u0D63': 'll',
}

const otherDiacritics = {
  '\u0D11': '&',
  '\u0D12': '&',
  '\u0D13': 'h',
}

const standaloneVowels = {
  'അ': 'a',
  'ഇ': 'i',
  'ഉ': 'u',
  'ഋ': 'r̥',
  'ഌ': 'l̥',
  'എ': 'e',
  'ഒ': 'o',
  'ആ': 'aa',
  'ഈ': 'ii',
  'ഊ': 'uu',
  'ൠ': 'rr',
  'ൡ': 'll',
  'ഏ': 'ee',
  'ഓ': 'oo',
  'ഐ': 'ai',
  'ഔ': 'au',
}

const consonants = {
  'ക': 'ka',
  'ഖ': 'kha',
  'ഗ': 'ga',
  'ഘ': 'gha',
  'ങ': 'qa',
  'ച': 'txa',
  'ഛ': 'txha',
  'ജ': 'dja',
  'ഝ': 'djha',
  'ഞ': 'nya',
  'ട': 'Ta',
  'ഠ': 'Tha',
  'ഡ': 'Da',
  'ഢ': 'Dha',
  'ണ': 'Na',
  'ത': 'ta',
  'ഥ': 'tha',
  'ദ': 'da',
  'ധ': 'dha',
  'ന': 'na',
  'പ': 'pa',
  'ഫ': 'pha',
  'ബ': 'ba',
  'ഭ': 'bha',
  'മ': 'ma',
  'യ': 'ya',
  'ര': 'ra',
  'ല': 'la',
  'വ': 'Va',
  'ശ': 'xa',
  'ഷ': 'Xa',
  'സ': 'sa',
  'ഹ': 'ha',
  'ള': 'La',
  'ഴ': 'Ra',
  'റ': 'r!a',
  'ഩ': 'nna',
  'ഺ': 'tta',
  'ൿ': 'k',
  'ൾ': 'll',
  'ൽ': 'l',
  'ർ': 'r!',
  'ൻ': 'n',
  'ൺ': 'N',
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
