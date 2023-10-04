/* eslint-disable sort-keys/sort-keys-fix */

/**
 * Arabic to ULA map.
 */

const m: Record<string, string> = {
  '\u0626': "'y",
  '\u0624': "'w",
  '\u064E\u0627': 'aa',
  '\u0650\u0649': 'ii',
  '\u064E\u0649': 'aa',
  '\u0650\u064A': 'ii',
  '\u064F\u0648': 'uu',
  '\u064A\u064E': 'ay',
  '\u0648\u064E': 'aw',

  '\u0649': 'aa',

  ء: "'",

  ا: 'aa',
  ﺍ: 'aa',
  ﺎ: 'aa',

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

  ح: 'h~',
  ﺡ: 'h~',
  ﺢ: 'h~',
  ﺤ: 'h~',
  ﺣ: 'h~',

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

  ر: 'r!',
  ﺭ: 'r!',
  ﺮ: 'r!',

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

  غ: 'r~',
  ﻍ: 'r~',
  ﻎ: 'r~',
  ﻐ: 'r~',
  ﻏ: 'r~',

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

  آ: "'aa",
  ـآ: "'aa",
  ٱ: '',
  ﺁ: "'aa",
  ﺂ: "'aa",

  ة: 'at',
  ـة: 'at',
  ﺓ: 'at',
  ﺔ: 'at',

  ال: 'al',
  ـى: 'aa',

  ﻻ: 'laa',
  ﻼ: 'laa',

  ﲓ: 'iim',
  ﳰ: 'iim',
  ﳝ: 'iim',
  ﱘ: 'iim',

  ﲅ: 'lm',
  ﳭ: 'lm',
  ﳌ: 'lm',
  ﱂ: 'lm',

  ﻯ: 'a',
  ﻰ: 'a',

  '،‎': ',',
  '؟': '?',
  '؛': ';',
  '۔': '.',
  '﴾': '{',
  '﴿': '}',

  '\u064e': 'a',
  '\u0650': 'i',
  '\u064f': 'u',
  // '\u0627': 'aa',
  // '\u064a': 'ii',
  // '\u0648': 'uu',
  '\u064b': 'an',
  '\u064d': 'in',
  '\u064c': 'un',

  ﷲ: 'الله',

  '؀': '#',

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

  '\u0670': 'aa',
  إ: "'i", // Arabic Letter Alef With Hamza Below
  أ: "'",
  '\u200e': '', // ltr marker
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
    .replace(/aa+/g, 'aa')
    .replace(/oo+/g, 'oo')
    .replace(/uu+/g, 'uu')
}

export default form
