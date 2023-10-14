// https://en.wikipedia.org/wiki/Gurmukhi

import { Map, build, transform } from '../base'

export const virama = '\u0A4d'

const standaloneVowels: Map = {
  ਅ: 'U',
}

const vowels: Map = {
  '\u0A3e': 'a_',
  '\u0A3f': 'i',
  '\u0A40': 'i_',
  '\u0A41': 'u',
  '\u0A42': 'u_',
  '\u0A47': 'e_',
  '\u0A48': 'ai',
  '\u0A4b': 'o_',
  '\u0A4c': 'au',
  '\u0A4f': 'i',
}

const vowelTransformer = Object.keys(vowels).reduce<Map>((m, x) => {
  let render = vowels[x]
  m[x] = m => {
    const last = m[m.length - 1]
    if (last) {
      m[m.length - 1] = last.replace(/U[_-]?/, '') + render
    } else if (typeof render === 'string') {
      m[m.length - 1] = render
    }
  }
  return m
}, {})

export const blank: Map = {
  ੲ: '',
  ੳ: '',
}

export const consonants: Map = {
  ਕ: 'kU',
  ਖ: 'kh~U',
  ਖ਼: 'H',
  ਗ: 'gU',
  ਗ਼: 'G',
  ਘ: 'kU-',
  ਙ: 'qU',
  ਚ: 'txU',
  ਛ: 'txh~U',
  ਜ: 'djU',
  ਜ਼: 'z',
  ਝ: 'txU-',
  ਞ: 'ny~U',
  ਟ: 'TU',
  ਠ: 'Th~U',
  ਡ: 'DU',
  ਢ: 'TU-',
  ਣ: 'NU',
  ਤ: 'tU',
  ਥ: 'th~U',
  ਦ: 'dU',
  ਧ: 'tU-',
  ਨ: 'nU',
  ਪ: 'pU',
  ਫ: 'ph~U',
  ਫ਼: 'fU',
  ਬ: 'bU',
  ਭ: 'pU-',
  ਮ: 'mU',
  ਯ: 'yU',
  ਰ: 'rU',
  ਲ: 'lU',
  ਲ਼: 'LU',
  ਵ: 'VU',
  ਸ: 'sU',
  ਸ਼: 'xU',
  ਹ: 'hU',
  ੜ: 'RU',
}

export const characters: Map = {
  ...blank,
  ...vowelTransformer,
  ...standaloneVowels,
  ...consonants,
  [virama]: m => {
    const last = m[m.length - 1]
    if (last) {
      m[m.length - 1] = last.replace(/U[_-]?/, '')
    }
  },
}

const s = build(characters)

const form = (t: string) => transform(t, s, characters)

export default form
