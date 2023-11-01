import { Map, build, transform } from '../base'

export const virama = '\u094d'
export const anusvara = '\u0902'
export const visarga = '\u0903'

export const standaloneVowels: Record<string, string> = {
  अ: 'a',
  अं: '&',
  अः: 'h',
  आ: 'a_',
  इ: 'i',
  ई: 'i_',
  उ: 'u',
  ऊ: 'u_',
  ऋ: 'u$',
  ऌ: 'l',
  ऍ: 'A',
  ए: 'e_',
  ऐ: 'ai',
  ऑ: 'a',
  ओ: 'o',
  औ: 'au',
  ॠ: 'u$_',
  ॡ: 'll',
  ॲ: 'A',
}

export const vowelDiacritics: Record<string, string> = {
  '\u093a': 'oe',
  '\u093b': 'o_e',
  '\u093e': 'a_',
  '\u093f': 'i',
  '\u0940': 'i_',
  '\u0941': 'u',
  '\u0942': 'u_',
  '\u0943': 'u$',
  '\u0944': 'u$_',
  '\u0945': 'A',
  '\u0946': 'e',
  '\u0947': 'e_',
  '\u0948': 'ai',
  '\u0949': 'a',
  '\u094a': 'o',
  '\u094b': 'o_',
  '\u094c': 'au',
  '\u094e': 'e',
  '\u0955': 'e',
  '\u0956': 'ue',
  '\u0962': 'l',
  '\u0963': 'll',
}

export const consonants: Record<string, string> = {
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

const vowelTransformer = Object.keys(vowelDiacritics).reduce<Map>(
  (m, x) => {
    let render = vowelDiacritics[x]
    m[x] = m => {
      const last = m[m.length - 1]
      if (last) {
        m[m.length - 1] = last.replace(/a_?/, '') + render
      }
    }
    return m
  },
  {},
)

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
