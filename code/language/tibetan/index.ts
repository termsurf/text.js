// http://www.thlib.org/reference/transliteration/#!essay=/thl/ewts/rules/
// https://en.wikipedia.org/wiki/Tibetan_script
// https://sites.google.com/view/chrisfynn/home/tibetanscriptfonts/thetibetanwritingsystem/tibetan-consonant-combinations/tibetanletterswithsuperfixra?authuser=0
// https://digitaltibetan.github.io/DigitalTibetan/docs/tibetan_fonts.html
// http://www.yalasoo.com/English/docs/yalasoo_en_font.html
// https://github.com/rosettatype/eczar
// https://github.com/Sandhi-IITBombay/Shobhika
// https://github.com/Omnibus-Type/Jaldi

import { build, transform } from '~/language/base'

const CLUSTER_PATTERN =
  /^(bl|br|dr|dw|fl|fr|gl|gr|kl|kr|kw|pl|pr|sk|skr|skw|sl|sm|sn|sp|spl|spr|st|str|sw|xr|tr|tw)/

export const balti: Record<string, string> = {
  ཫ: 'Ka',
  ཬ: 'Ra',
  ཁ༹: 'Ha',
  ག༹: 'Ga',
}

export const punctuation: Record<string, string> = {
  '༉': '-',
  '༈': '',
  '༄': '',
  '་': ' ',
  '།': '.',
  '༎': '.',
  '༺': '<',
  '༻': '>',
  '༼': '(',
  '༽': ')',
}

export const sanskrit: Record<string, string> = {
  གྷ: 'gh~a',
  ཛྷ: 'djh~a',
  ཊ: 'Ta',
  ཋ: 'Th~a',
  ཌ: 'Da',
  ཌྷ: 'Dh~a',
  ཎ: 'Na',
  དྷ: 'dh~a',
  བྷ: 'bh~a',
  ཥ: 'Xa',
  ཀྵ: 'kXa',
}

export const headLetters: Record<string, string> = {
  རྐ: 'ka',
  ལྐ: 'ka',
  སྐ: 'ka',

  ལྕ: 'txa',
  སྕ: 'txa',

  རྟ: 'ta',
  ལྟ: 'ta',
  སྟ: 'ta',

  རྤ: 'pa',
  ལྤ: 'pa',
  སྤ: 'pa',

  རྩ: 'tsa',
  སྩ: 'tsa',

  སྦ: 'ba',
  ལྦ: 'ba',
  རྦ: 'ba',

  རྔ: 'qa',
  ལྔ: 'qa',
  སྔ: 'qa',

  རྙ: 'ny~a',
  སྙ: 'ny~a',

  རྣ: 'na',
  སྣ: 'na',

  རྨ: 'ma',
  ལྨ: 'ma',
  སྨ: 'ma',

  རྒ: 'ga',
  ལྒ: 'ga',
  སྒ: 'ga',

  རྗ: 'dja',
  ལྗ: 'dja',
  སྗ: 'dja',

  རྡ: 'da',
  ལྡ: 'da',
  སྡ: 'da',

  རྫ: 'dza',

  ཀྲ: 'Ta',
}

export const subjoinedConsonants: Record<string, string> = {
  '\u0f90': 'ka',
  '\u0f91': 'kh~a',
  '\u0f92': 'ga',
  '\u0f93': 'gh~a',
  '\u0f94': 'qa',
  '\u0f95': 'txa',
  '\u0f96': 'txh~a',
  '\u0f97': 'dja',
  '\u0f9a': 'Ta',
  '\u0f9b': 'Th~a',
  '\u0f9c': 'Da',
  '\u0f9d': 'Dh~a',
  '\u0f9e': 'Na',
  '\u0f9f': 'ta',
  '\u0fa0': 'th~a',
  '\u0fa1': 'da',
  '\u0fa2': 'dh~a',
  '\u0fa3': 'na',
  '\u0fa4': 'pa',
  '\u0fa5': 'ph~a',
  '\u0fa6': 'ba',
  '\u0fa7': 'bh~a',
  '\u0fa8': 'ma',
  '\u0fa9': 'tsa',
  '\u0faa': 'tsh~a',
  '\u0fab': 'dza',
  '\u0fac': 'dzh~a',
  '\u0fad': 'wa',
  '\u0fae': 'zh~a',
  '\u0faf': 'za',
  '\u0fb0': 'hh~a',
  '\u0fb1': 'ya',
  '\u0fb2': 'ra',
  '\u0fb3': 'la',
  '\u0fb4': 'xa',
  '\u0fb5': 'Xa',
  '\u0fb6': 'sa',
  '\u0fb7': 'ha',
  '\u0fb8': 'a',
  '\u0fb9': 'kXa',
  '\u0fba': 'wa',
  '\u0fbb': 'ya',
  '\u0fbc': 'ra',
}

export const basicConsonants: Record<string, string> = {
  ཀ: 'ka',
  ཁ: 'kh~a',
  ག: 'ga',
  ང: 'qa',
  ཅ: 'txa',
  ཆ: 'txh~a',
  ཇ: 'dja',
  ཉ: 'ny~a',
  ཏ: 'ta',
  ཐ: 'th~a',
  ད: 'da',
  ན: 'na',
  པ: 'pa',
  ཕ: 'ph~a',
  བ: 'ba',
  མ: 'ma',
  ཙ: 'tsa',
  ཚ: 'tsh~a',
  ཛ: 'dza',
  ཝ: 'wa',
  ཞ: 'ja',
  ཟ: 'za',
  འ: 'hh~',
  ཡ: 'ya',
  ར: 'ra',
  ལ: 'la',
  ཤ: 'xa',
  ས: 'sa',
  ཧ: 'ha',
}

export const consonants: Record<string, string> = {
  ...basicConsonants,
  ...headLetters,
  ...sanskrit,
  ...balti,
  ཀྵ: 'kXa',
  ཪ: 'ra',
}

export const standaloneVowels: Record<string, string> = {
  ཨ: 'a',
}

export const vowelDiacritics: Record<string, string> = {
  '\u0f39': '', // lenition?
  // vowels
  '\u0f71': 'a_',
  '\u0f72': 'i',
  '\u0f73': 'i_',
  '\u0f74': 'u',
  '\u0f75': 'u_',
  '\u0f76': 'u$',
  '\u0f77': 'u$_',
  '\u0f78': 'l',
  '\u0f79': 'll',
  '\u0f7a': 'e',
  '\u0f7b': 'e_',
  '\u0f7c': 'o',
  '\u0f7d': 'o_',
}

const vowels: Record<string, string> = {
  ...standaloneVowels,
  ...vowelDiacritics,
}

export const nasals: Record<string, string> = {
  '\u0f7e': '&',
  '\u0f7f': '&',
}

export const numerals: Record<string, string> = {
  '༠': '0',
  '༡': '1',
  '༢': '2',
  '༣': '3',
  '༤': '4',
  '༥': '5',
  '༦': '6',
  '༧': '7',
  '༨': '8',
  '༩': '9',
}

export const characters: Record<string, string> = {
  ...consonants,
  ...subjoinedConsonants,
  ...vowels,
  ...nasals,
  ...punctuation,
  ...numerals,
}
// (m: Array<string>) => {
//     const last = m[m.length - 1]
//     if (last) {
//       m[m.length - 1] = last.replace(/a/g, 'o_')
//     }
//   }

const s = build(characters)

const form = (t: string) => transform(t, s, characters)

export default form

export const clusters = getClusters()

export const vowelConsonants = getConsonantWithVowelList()

export function getClusters() {
  const combinations: Record<string, string> = {}

  for (const a in consonants) {
    const a2 = consonants[a]

    for (const b in subjoinedConsonants) {
      const b2 = subjoinedConsonants[b]

      for (const c in vowelDiacritics) {
        const t = `${a2?.replace(/a/, '')}${b2?.replace(/a/, '')}${
          vowelDiacritics[c]
        }`
        if (t.match(CLUSTER_PATTERN) && !t.match(/ru\$/i)) {
          combinations[`${a}${b}${c}`] = t
        }
      }
      const t = `${a2?.replace(/a/, '')}${b2}`
      if (t.match(CLUSTER_PATTERN) && !t.match(/ru\$/i)) {
        combinations[`${a}${b}`] = t
      }
    }
  }

  return combinations
}

export function getConsonantWithVowelList() {
  const combinations: Record<string, string> = {}

  for (const a in consonants) {
    const a2 = consonants[a]

    for (const c in vowelDiacritics) {
      const t = `${vowelDiacritics[c] ? a2?.replace(/a/, '') : a2}${
        vowelDiacritics[c]
      }`
      if (!t.match(/ru\$/i)) {
        combinations[`${a}${c}`] = t
      }
    }
  }

  return combinations
}
