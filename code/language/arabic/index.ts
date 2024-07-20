/* eslint-disable sort-keys/sort-keys-fix */

import { makeBack } from '../base'

/**
 * Arabic to ULA map.
 */

const precomposedConsonants: Record<string, string> = {
  ﺍ: 'a_',
  ﺎ: 'a_',
}

const codeHead = {
  '٠': '0',
  '١': '1',
  '٢': '2',
  '٣': '3',
  '٤': '4',
  '٥': '5',
  '٦': '6',
  '٧': '7',
  '٨': '8',
  '٩': '9',
}
const codeBack = makeBack(codeHead)

// ```
// import make from '@termsurf/talk'
// make('arabic') //=> ascii

// make.head // forward to ascii
// make.back // backward from ascii
// make.back.mesh['a_']
// make.back.vowel/tone
// make.back.vowel.link // diacritics
// make.back.vowel.site // standalone
// make.back.consonant/vibe
// make.back.bulb // punctuation

// make.back.bulb.open_parenthesis
// ```

// {
//   open_parenthesis: { i: '(', o: '(' },
//   a_long,
//   A_long,
//   A_toneHigh_toneLow2_2,

// }

// {
//   { i: '(', o: '(', name: 'open_parenthesis' },
//   a_long,
//   A_long,
//   A_toneHigh_toneLow2_2,

// }

// const vibeHead = readHead(base, [
//   'c',
//   'C',
// ])

// const codeBase = read(base, )

const vibe: Record<string, string> = {
  '\u0626': "'y",
  '\u0624': "'w",
  '\u064E\u0627': 'a_',
  '\u0650\u0649': 'i_',
  '\u064E\u0649': 'a_',
  '\u0650\u064A': 'i_',
  '\u064F\u0648': 'u_',
  '\u064A\u064E': 'ay',
  '\u0648\u064E': 'aw',

  '\u0649': 'a_',

  ء: "'",

  ا: 'a_',

  ب: 'b',
  ﺏ: 'b',
  ﺐ: 'b',
  ﺒ: 'b',
  ﺑ: 'b',

  ت: 't',
  ﺕ: 't',
  ﺖ: 't',
  ﺘ: 't',
  ﺗ: 't',

  ث: 'c',
  ﺙ: 'c',
  ﺚ: 'c',
  ﺜ: 'c',
  ﺛ: 'c',

  ج: 'dj',
  ﺝ: 'dj',
  ﺞ: 'dj',
  ﺠ: 'dj',
  ﺟ: 'dj',

  ح: 'hh~',
  ﺡ: 'hh~',
  ﺢ: 'hh~',
  ﺤ: 'hh~',
  ﺣ: 'hh~',

  خ: 'H',
  ﺥ: 'H',
  ﺦ: 'H',
  ﺨ: 'H',
  ﺧ: 'H',

  د: 'd',
  ﺩ: 'd',
  ﺪ: 'd',

  ذ: 'C',
  ﺫ: 'C',
  ﺬ: 'C',

  ر: 'r',
  ﺭ: 'r',
  ﺮ: 'r',

  ز: 'z',
  ﺯ: 'z',
  ﺰ: 'z',

  س: 's',
  ﺱ: 's',
  ﺲ: 's',
  ﺴ: 's',
  ﺳ: 's',

  ش: 'x',
  ﺵ: 'x',
  ﺶ: 'x',
  ﺸ: 'x',
  ﺷ: 'x',

  ص: 's"',
  ﺹ: 's"',
  ﺺ: 's"',
  ﺼ: 's"',
  ﺻ: 's"',

  ض: 'd"',
  ﺽ: 'd"',
  ﺾ: 'd"',
  ﻀ: 'd"',
  ﺿ: 'd"',

  ط: 't"',
  ﻁ: 't"',
  ﻂ: 't"',
  ﻄ: 't"',
  ﻃ: 't"',

  ظ: 'C',
  ﻅ: 'C',
  ﻆ: 'C',
  ﻈ: 'C',
  ﻇ: 'C',

  ع: "'",
  ﻉ: "'",
  ﻊ: "'",
  ﻌ: "'",
  ﻋ: "'",

  غ: 'G',
  ﻍ: 'G',
  ﻎ: 'G',
  ﻐ: 'G',
  ﻏ: 'G',

  ف: 'f',
  ﻑ: 'f',
  ﻒ: 'f',
  ﻔ: 'f',
  ﻓ: 'f',

  ق: 'K',
  ﻕ: 'K',
  ﻖ: 'K',
  ﻘ: 'K',
  ﻗ: 'K',

  ك: 'k',
  ﻙ: 'k',
  ﻚ: 'k',
  ﻜ: 'k',
  ﻛ: 'k',

  ل: 'l',
  ﻝ: 'l',
  ﻞ: 'l',
  ﻠ: 'l',
  ﻟ: 'l',

  م: 'm',
  ﻡ: 'm',
  ﻢ: 'm',
  ﻤ: 'm',
  ﻣ: 'm',

  ن: 'n',
  ﻥ: 'n',
  ﻦ: 'n',
  ﻨ: 'n',
  ﻧ: 'n',

  ه: 'h',
  ﻩ: 'h',
  ﻪ: 'h',
  ﻬ: 'h',
  ﻫ: 'h',

  و: 'w',
  ﻭ: 'w',
  ﻮ: 'w',

  ي: 'y',
  ﻱ: 'y',
  ﻲ: 'y',
  ﻴ: 'y',
  ﻳ: 'y',

  آ: "'a_",
  ـآ: "'a_",
  ٱ: '',
  ﺁ: "'a_",
  ﺂ: "'a_",

  ة: 'at',
  ـة: 'at',
  ﺓ: 'at',
  ﺔ: 'at',

  ال: 'al',
  ـى: 'a_',

  ﻻ: 'la_',
  ﻼ: 'la_',

  ﲓ: 'i_m',
  ﳰ: 'i_m',
  ﳝ: 'i_m',
  ﱘ: 'i_m',

  ﲅ: 'lm',
  ﳭ: 'lm',
  ﳌ: 'lm',
  ﱂ: 'lm',

  ﻯ: 'a',
  ﻰ: 'a',

  '،': ',',
  '؟': '?',
  '؛': ';',
  '۔': '.',
  '﴾': '{',
  '﴿': '}',

  '\u064e': 'a',
  '\u0650': 'i',
  '\u064f': 'u',
  // '\u0627': 'a_',
  // '\u064a': 'ii',
  // '\u0648': 'uu',
  '\u064b': 'an',
  '\u064d': 'in',
  '\u064c': 'un',

  // ﷲ: 'الله',

  '؀': '#',

  '٪': '%',
  '٫': '.',

  گ: 'g',
  ڨ: 'g',
  ڭ: 'g',
  چ: 'j',
  ڥ: 'v',
  ڤ: 'v',
  پ: 'p',

  '\n': '\n',
  ',': ',',
  ' ': ' ',
  '.': '.',

  '\u06e1': '',
  '\u0652': '',

  '\u0651': '',

  '\u0670': 'a_',
  إ: "'i", // Arabic Letter Alef With Hamza Below
  أ: "'",
  '\u200e': '', // ltr marker
}

export const m: Record<string, string> = {
  ...vibe,
  ...precomposedConsonants,
  ...codeHead,
}

const form = (s: string) => {
  let out = []
  let i = 0
  let r = s
  let last: string = ''
  while (r.length) {
    let found = false
    x: for (let k in m) {
      if (r.indexOf(k) === 0) {
        let v =
          k == '\u0651'
            ? (last.split('').pop() as string)
            : (m[k] as string)
        last = v
        i += k.length
        out.push(v)
        r = r.slice(k.length)
        found = true
        break x
      }
    }
    if (!found) {
      throw new Error(
        `oops ${out.join('')} from ${s}, ${r
          ?.codePointAt(0)
          ?.toString(16)}`,
      )
    }
  }
  return out
    .join('')
    .replace(/ii+/g, 'ii')
    .replace(/ee+/g, 'ee')
    .replace(/a_+/g, 'a_')
    .replace(/oo+/g, 'oo')
    .replace(/uu+/g, 'uu')
}

export default form
