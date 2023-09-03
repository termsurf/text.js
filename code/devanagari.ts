import { Map, build, transform } from './base'

const virama = '\u094d'

const standaloneVowels: Record<string, string> = {
  अ: 'a',
  अं: 'aM',
  अः: 'ah',
  आ: 'aa',
  इ: 'i',
  ई: 'ii',
  उ: 'u',
  ऊ: 'uu',
  ऋ: 'r',
  ऌ: 'L',
  ऍ: 'e',
  ए: 'e',
  ऐ: 'ai',
  ऑ: 'o',
  ओ: 'o',
  औ: 'au',
  ॠ: 'rr',
  ॡ: 'LL',
  ॲ: 'e',
}

const vowels: Record<string, string> = {
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
  '\u0955': 'e',
  '\u0956': 'ue',
  '\u0962': 'L',
  '\u0963': 'LL',
}

const consonants: Record<string, string> = {
  क: 'ka',
  ख: 'kha',
  ग: 'ga',
  घ: 'gha',
  ङ: 'qa',
  च: 'txa',
  छ: 'txha',
  ज: 'dja',
  झ: 'djha',
  ञ: 'nya',
  ट: 'Ta',
  ठ: 'Tha',
  ड: 'Da',
  ढ: 'Dha',
  ण: 'Na',
  त: 'ta',
  थ: 'tha',
  द: 'da',
  ध: 'dha',
  न: 'na',
  प: 'pa',
  फ: 'pha',
  ब: 'ba',
  भ: 'bha',
  म: 'ma',
  य: 'ya',
  र: 'r!a',
  ल: 'la',
  व: 'v+a',
  श: 'xa',
  ष: 'Xa',
  स: 'sa',
  ह: 'ha',
}

const vowelTransformer = Object.keys(vowels).reduce<Map>((m, x) => {
  let render = vowels[x]
  m[x] = m => {
    const last = m[m.length - 1]
    if (last) {
      m[m.length - 1] = last.replace(/a/, '') + render
    }
  }
  return m
}, {})

const m: Map = {
  ...standaloneVowels,
  ...vowelTransformer,
  ...consonants,
  [virama]: m => {
    const last = m[m.length - 1]
    if (last) {
      m[m.length - 1] = last.replace(/a/, '')
    }
  },
}

const s = build(m)

const form = (t: string) => transform(t, s, m)

export default form
