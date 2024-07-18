import { Map, Mark, build, transform } from '../base'

export const virama = '\u094d'
export const anusvara = '\u0902'
export const visarga = '\u0903'

export const vowelDiacritics: Record<string, string> = {
  '\u093a': 'ö',
  '\u093b': 'ö',
  '\u093e': 'ā',
  '\u093f': 'i',
  '\u0940': 'ī',
  '\u0941': 'u',
  '\u0942': 'ū',
  '\u0943': 'ṛ',
  '\u0944': 'ṝ',
  '\u0945': 'ê',
  '\u0946': 'e',
  '\u0947': 'ē',
  '\u0948': 'ai',
  '\u0949': 'a',
  '\u094a': 'o',
  '\u094b': 'ō',
  '\u094c': 'au',
  '\u094e': 'e',
  '\u0955': 'e',
  '\u0956': 'ue',
  '\u0962': 'ḷ',
  '\u0963': 'ḹ',
}

const vowelTransformer = Object.keys(vowelDiacritics).reduce<Mesh>(
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

// IAST

const m: Mesh = {
  अ: 'a',
  आ: 'ā',
  इ: 'i',
  ई: 'ī',
  उ: 'u',
  ऊ: 'ū',
  ऋ: 'ṛ',
  ॠ: 'ṝ',
  ऌ: 'ḷ',
  ॡ: 'ḹ',
  ए: 'e',
  ऐ: 'ai',
  ओ: 'o',
  औ: 'au',
  'ं': 'ṃ',
  'ः': 'ḥ',
  'ँ': '˜',
  ऽ: "'",
  क: 'ka',
  ख: 'kha',
  ग: 'ga',
  घ: 'gha',
  ङ: 'ṅa',
  च: 'ca',
  छ: 'cha',
  ज: 'ja',
  झ: 'jha',
  ञ: 'ña',
  ट: 'ṭa',
  ठ: 'ṭha',
  ड: 'ḍa',
  ढ: 'ḍha',
  ण: 'ṇa',
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
  र: 'ra',
  ल: 'la',
  व: 'va',
  श: 'śa',
  ष: 'ṣa',
  स: 'sa',
  ह: 'h̤a', // this is the only different character to diambiguate g-ha vs gha
  ळ: 'ḻa',
  क्ष: 'kṣa',
  ज्ञ: 'jña',
  त्र: 'tra',
  श्र: 'śra',
  क़: 'qa',
  ख़: 'k͟ha',
  ग़: 'ġa',
  ज़: 'za',
  फ़: 'fa',
  ड़: 'ṛa',
  ढ़: 'ṛha',
  ॐ: 'oṃ',
  [virama]: m => {
    const last = m[m.length - 1]
    if (last) {
      m[m.length - 1] = last.replace(/a_?/, '')
    }
  },
  ...vowelTransformer,
}

const s = make(m)

const chat = (t: string) => form(t, s, m)

export default chat
