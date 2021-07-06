
const { build, transform } = require('./base')

const virama = '\u0bcd'

const vowelDiacritics = {
  '\u0BBe': 'aa',
  '\u0BBf': 'i',
  '\u0Bc0': 'ii',
  '\u0Bc1': 'u',
  '\u0Bc2': 'uu',
  '\u0Bc6': 'e',
  '\u0Bc7': 'ee',
  '\u0Bc8': 'ai',
  '\u0Bca': 'o',
  '\u0Bcb': 'oo',
  '\u0Bcc': 'au',
}

const standaloneVowels = {
  'அ': 'a',
  'ஆ': 'aa',
  'இ': 'i',
  'ஈ': 'ii',
  'உ': 'u',
  'ஊ': 'uu',
  'எ': 'e',
  'ஏ': 'ee',
  'ஐ': 'aI',
  'ஒ': 'o',
  'ஓ': 'oo',
  'ஔ': 'aO',
  'ஃ': 'aH',
  'அஂ': 'a~',
}

const consonants = {
  'கஷ': 'kXa',
  'க': 'ka',
  'ஃப': 'fa',
  'ஃஜ': 'za',
  'ஃக': 'Ha',
  'ங': 'qa',
  'ச': 'txya',
  'ஞ': 'nya',
  'ட': 'Ta',
  'ண': 'Na',
  'த': 'ta',
  'ந': 'na',
  'ப': 'pa',
  'ம': 'ma',
  'ய': 'ya',
  'ர': 'ra',
  'ல': 'la',
  'வ': 'Va',
  'ழ': 'ra',
  'ள': 'La',
  'ற': 'rra',
  'ன': 'na',
  'ஜ': 'dja',
  'ஶ': 'xya',
  'வ': 'va',
  'ஷ': 'Xa',
  'ஸ': 'sa',
  'ஹ': 'ha',
  '\u0b82': '~',
  '\u00a0': ' '
}

const vowelTransformer = Object.keys(vowelDiacritics).reduce((m, x) => {
  let render = vowelDiacritics[x]
  m[x] = m => {
    m[m.length - 1] = m[m.length - 1].replace(/a/, '') + render
  }
  return m
}, {})

const m = {
  ...vowelTransformer,
  ...standaloneVowels,
  ...consonants,
  [virama]: m => {
    m[m.length - 1] = m[m.length - 1] && m[m.length - 1].replace(/a/, '')
  }
}

const s = build(m)

const form = t => transform(t, s, m)

module.exports = form
