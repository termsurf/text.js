
const otherDiacritics = {
  '\u0E31': '', // add to shorten consonant
  '\u0E47': '', // vowel shortener
}

const toneDiacritics = {
  '\u0E48': '_',
  '\u0E49': m => {
    let i = m.length - 1
    let last = m[i]
    m[i] = `${last}^${last}_`
  },
  '\u0E4a': '^',
}

const standaloneVowels = {
  '\u0E30': 'a',
  '\u0E32': 'aa'
}

const vowelDiacritics = {
  '\u0E33': 'am',
  '\u0E34': 'i',
  '\u0E35': 'ii',
  '\u0E36': 'ue',
  '\u0E37': 'uee',
  '\u0E38': 'u',
  '\u0E39': 'uu',
  '\u0E30': 'a',
  '\u0E30': 'a',
  '\u0E30': 'a',
  '\u0E30': 'a',
  '\u0E30': 'a',
  '\u0E30': 'a'
}

const consonants = {
  'ก': ['ka', 'ka'],
  'ข': ['kha', 'ka'],
  'ฃ': ['kha', 'ka'],
  'ค': ['kha', 'ka'],
  'ฅ': ['kha', 'ka'],
  'ฆ': ['kha', 'ka'],
  'ง': ['qa', 'qa'],
  'จ': ['tx~a', 'ta'],
  'ฉ': ['tx~ha', null],
  'ช': ['tx~ha', 'ta'],
  'ซ': ['sa', 'ta'],
  'ฌ':	['tx~ha', null],
  'ญ': ['ya', 'na'],
  'ฎ': ['da', 'ta'],
  'ฏ': ['ta', 'ta'],
  'ฐ': ['tha', 'ta'],
  'ฑ': ['tha', 'ta'],
  'ฒ': ['tha', 'ta'],
  'ณ': ['na', 'na'],
  'ด':	['da', 'ta'],
  'ต':	['ta', 'ta'],
  'ถ':	['tha', 'ta'],
  'ท':	['tha', 'ta'],
  'ธ': ['tha', 'ta'],
  'น': ['na', 'na'],
  'บ': ['ba', 'pa'],
  'ป':	['pa', 'pa'],
  'ผ': ['pha', null],
  'ฝ': ['fa', null],
  'พ': ['pha', 'pa'],
  'ฟ': ['fa', 'pa'],
  'ภ': ['pha', 'pa'],
  'ม': ['ma', 'ma'],
  'ย': ['ya', null],
  'ร': ['r!a', 'na'],
  'ล': ['la', 'na'],
  'ว': ['wa', null],
  'ศ': ['sa', 'ta'],
  'ษ': ['sa', 'ta'],
  'ส': ['sa', 'ta'],
  'ห': ['ha', null],
  'ฬ': ['la', 'na'],
  'อ': ['\'a', null],
  'ฮ': ['ha', null],
}
