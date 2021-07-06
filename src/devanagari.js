
const { build, transform } = require('./base')

const virama = '\u094d'

const standaloneVowels = {
  'अ': 'a',
  'इ': 'i',
  'उ': 'u',
  'ऋ': 'r',
  'ऋ': 'rh',
  'ऌ': 'L',
  'ऌ': 'Lh',
  'ए': 'e',
  'ए': 'ee',
  'ओ': 'o',
  'ओ': 'oo',
  'अं': 'aM',
  'अं': 'aM',
  'ॲ': 'e',
  'ऍ': 'e',
  'आ': 'aa',
  'ई': 'ii',
  'ऊ': 'uu',
  'ॠ': 'rr',
  'ॠ': 'rrh',
  'ॡ': 'LL',
  'ॡ': 'LLh',
  'ऐ': 'ai',
  'औ': 'au',
  'अः': 'ah',
  'ऑ': 'o',
}

const vowels = {
  '\u093a': 'oe',
  '\u093b': 'ooe',
  '\u093e': 'aa',
  '\u093f': 'i',
  '\u0940': 'ii',
  '\u0941': 'u',
  '\u0942': 'uu',
  '\u0943': 'r',
  '\u0944': 'rr',
  '\u0945': 'e',
  '\u0946': 'e',
  '\u0947': 'e',
  '\u0948': 'ai',
  '\u0949': 'o',
  '\u094a': 'o',
  '\u094b': 'o',
  '\u094c': 'au',
  '\u094e': 'e',
  '\u094e': 'aw',
  '\u0955': 'e',
  '\u0956': 'ue',
  '\u0956': 'uue',
  '\u0962': 'L',
  '\u0963': 'LL',
}

const consonants = {
  'क': 'ka',
  'ख': 'kha',
  'ग': 'ga',
  'घ': 'gha',
  'ङ': 'qa',
  'ह': 'ha',
  'च': 'txa',
  'छ': 'txha',
  'ज': 'dja',
  'झ': 'djha',
  'ञ': 'nya',
  'य': 'ya',
  'श': 'xa',
  'ट': 'Ta',
  'ठ': 'Tha',
  'ड': 'Da',
  'ढ': 'Dha',
  'ण': 'Na',
  'र': 'r!a',
  'ष': 'Xa',
  'त': 'ta',
  'थ': 'tha',
  'द': 'da',
  'ध': 'dha',
  'न': 'na',
  'ल': 'la',
  'स': 'sa',
  'प': 'pa',
  'फ': 'pha',
  'ब': 'ba',
  'भ': 'bha',
  'म': 'ma',
  'व': 'v+a',
}

const vowelTransformer = Object.keys(vowels).reduce((m, x) => {
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
