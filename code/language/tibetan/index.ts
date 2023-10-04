import { build, transform } from '../base'

// http://www.thlib.org/reference/transliteration/#!essay=/thl/ewts/rules/

const m = {
  // balti
  ཫ: 'K',
  ཬ: 'R',
  ཁ༹: 'H',
  ག༹: 'Q',

  // sanskrit
  གྷ: 'gh~',
  ཛྷ: 'djh~',
  ཊ: 'T',
  ཋ: 'Th~',
  ཌ: 'D',
  ཌྷ: 'Dh~',
  ཎ: 'N',
  དྷ: 'dh~',
  བྷ: 'bh~',
  ཥ: 'X',
  ཀྵ: 'kX',

  རྔ: 'q',
  ལྔ: 'q',
  སྔ: 'q',

  རྙ: 'ny~',
  སྙ: 'ny~',

  རྣ: 'n',
  སྣ: 'n',

  རྨ: 'm',
  ལྨ: 'm',
  སྨ: 'm',

  རྒ: 'g',
  ལྒ: 'g',
  སྒ: 'g',

  རྗ: 'dj',
  ལྗ: 'dj',
  སྗ: 'dj',

  རྡ: 'd',
  ལྡ: 'd',
  སྡ: 'd',

  རྦ: 'b',
  ལྦ: 'b',
  སྦ: 'b',

  རྫ: 'dz',
  སྫ: 'dz',

  // head letters
  རྐ: 'k',
  ལྐ: 'k',
  སྐ: 'k',

  ལྕ: 'tx',
  སྕ: 'tx',

  རྟ: 't',
  ལྟ: 't',
  སྟ: 't',

  རྤ: 'p',
  ལྤ: 'p',
  སྤ: 'p',

  རྩ: 'ts',
  སྩ: 'ts',

  // basic consonants
  ཀ: 'k',
  ཁ: 'kh',
  ག: 'g',
  ང: 'q',
  ཅ: 'tx',
  ཆ: 'txh~',
  ཇ: 'dj',
  ཉ: 'ny~',
  ཏ: 't',
  ཐ: 'th~',
  ད: 'd',
  ན: 'n',
  པ: 'p',
  ཕ: 'ph~',
  བ: 'b',
  མ: 'm',
  ཙ: 'ts',
  ཚ: 'tsh~',
  ཛ: 'dz',
  ཝ: 'w',
  ཞ: 'j',
  ཟ: 'z',
  འ: "'",
  ཡ: 'y',
  ར: 'r',
  ལ: 'l',
  ཤ: 'x',
  ས: 's',
  ཧ: 'h',

  'ྐ': 'k',
  '\u0fb1': 'y',
  '\u0f0c': ' ',
  '\u0fb2': 'r',
  '\u0fad': 'w',
  '\u0fb3': 'l',
  '\u0fb7': 'h',
  '\u0fa1': 'd',
  '\u0fb4': 'x',
  '\u0fa4': 'p',
  '\u0fa8': 'm',
  '\u0fa9': 'ts',
  '\u0f9a': 'T',
  '\u0f9c': 'D',
  '\u0fa0': 'th~',
  '\u0fa5': 'ph~',
  '\u0f9f': 't',
  '\u0fa3': 'n',
  '\u0fab': 'dz',
  '\u0f9b': 'Th~',
  '\u0f9e': 'N',
  '\u0f92': 'g',
  '\u0fa6': 'b',
  ཨ: 'a',
  '\u0f7d': (m: Array<string>) => {
    const last = m[m.length - 1]
    if (last) {
      m[m.length - 1] = last.replace(/a/g, 'o_')
    }
  },

  '\u0f39': '', // lenition?

  '\u0f7e': (m: Array<string>) => {
    m[m.length - 1] = m[m.length - 1] + '&'
  },
  '\u0f7f': (m: Array<string>) => {
    m[m.length - 1] = m[m.length - 1] + '&'
  },

  // vowels
  '\u0f71': 'a_',
  '\u0f7b': 'e_',
  'ི': 'i',
  'ུ': 'u',
  'ེ': 'e',
  'ོ': 'o',

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

const s = build(m)

export const make = (t: string) => transform(t, s, m)
