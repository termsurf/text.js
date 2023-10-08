import { Map, build, transform } from '../base'

const virama = '\u094d'
const anusvara = '\u0902'
const visarga = '\u0903'

const standaloneVowels: Record<string, string> = {
  अ: 'a',
  अं: 'am',
  अः: 'ah',
  आ: 'a_',
  इ: 'i',
  ई: 'i_',
  उ: 'u',
  ऊ: 'u_',
  ऋ: 'r',
  ऌ: 'L',
  ऍ: 'e',
  ए: 'e',
  ऐ: 'ai',
  ऑ: 'o',
  ओ: 'o',
  औ: 'au',
  ॠ: 'u$_',
  ॡ: 'LL',
  ॲ: 'e',
}

const vowels: Record<string, string> = {
  '\u093a': 'oe',
  '\u093b': 'o_e',
  '\u093e': 'a_',
  '\u093f': 'i',
  '\u0940': 'i_',
  '\u0941': 'u',
  '\u0942': 'u_',
  '\u0943': 'u$',
  '\u0944': 'u$_',
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
  ख: 'kh~a',
  ग: 'ga',
  घ: 'gh~a',
  ङ: 'qa',
  च: 'txa',
  छ: 'txh~a',
  ज: 'dja',
  झ: 'djh~a',
  ञ: 'ny~a',
  ट: 'Ta',
  ठ: 'Th~a',
  ड: 'Da',
  ढ: 'Dh~a',
  ण: 'Na',
  त: 'ta',
  थ: 'th~a',
  द: 'da',
  ध: 'dh~a',
  न: 'na',
  प: 'pa',
  फ: 'ph~a',
  ब: 'ba',
  भ: 'bh~a',
  म: 'ma',
  य: 'ya',
  र: 'ra',
  ल: 'la',
  व: 'Va',
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
      m[m.length - 1] = last.replace(/a_?/, '') + render
    }
  }
  return m
}, {})

export const laghava = '\u0970'

const m: Map = {
  ...standaloneVowels,
  ...vowelTransformer,
  ...consonants,
  [visarga]: 'h',
  [laghava]: '.',
  [anusvara]: m => {
    let last = m[m.length - 1]
    if (last) {
      if (last.endsWith('_')) {
        last = last.replace('_', '')
        last = `${last}&_`
      } else {
        last = `${last}&`
      }
      m[m.length - 1] = last
    }
  },
  ॐ: 'o_m',
  [virama]: m => {
    const last = m[m.length - 1]
    if (last) {
      m[m.length - 1] = last.replace(/a_?/, '')
    }
  },
}

const s = build(m)

const form = (t: string) => transform(t, s, m)

export default form
