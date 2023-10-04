
const tools = require('../../../../../../../../framework/tools')

// http://www.thlib.org/reference/transliteration/#!essay=/thl/ewts/rules/

const m = {
  // balti
  'ཫ': 'k̤',
  'ཬ': 'ṛ̂',
  'ཁ༹': 'h̤h̤',
  'ག༹': 'r̈',

  // sanskrit
  'གྷ': 'ɡh',
  'ཛྷ': 'djh',
  'ཊ': 'ṭ',
  'ཋ': 'ṭh',
  'ཌ': 'ḍ',
  'ཌྷ': 'ḍh',
  'ཎ': 'ṇ',
  'དྷ': 'dh',
  'བྷ': 'bh',
  'ཥ': 'x̣',
  'ཀྵ': 'kx̣',

  'རྔ': 'ŋ',
  'ལྔ': 'ŋ',
  'སྔ': 'ŋ',

  'རྙ': 'ny',
  'སྙ': 'ny',

  'རྣ': 'n',
  'སྣ': 'n',

  'རྨ': 'm',
  'ལྨ': 'm',
  'སྨ': 'm',

  'རྒ': 'g',
  'ལྒ': 'g',
  'སྒ': 'g',

  'རྗ': 'dj',
  'ལྗ': 'dj',
  'སྗ': 'dj',

  'རྡ': 'd',
  'ལྡ': 'd',
  'སྡ': 'd',

  'རྦ': 'b',
  'ལྦ': 'b',
  'སྦ': 'b',

  'རྫ': 'dz',
  'སྫ': 'dz',

  // head letters
  'རྐ': 'k',
  'ལྐ': 'k',
  'སྐ': 'k',

  'ལྕ': 'tʃ',
  'སྕ': 'tʃ',

  'རྟ': 't',
  'ལྟ': 't',
  'སྟ': 't',

  'རྤ': 'p',
  'ལྤ': 'p',
  'སྤ': 'p',

  'རྩ': 'ts',
  'སྩ': 'ts',

  // basic consonants
  'ཀ': 'k',
  'ཁ': 'kh',
  'ག': 'ɡ',
  'ང': 'q',
  'ཅ': 'tx',
  'ཆ': 'txh',
  'ཇ': 'dj',
  'ཉ': 'ny',
  'ཏ': 't',
  'ཐ': 'th',
  'ད': 'd',
  'ན': 'n',
  'པ': 'p',
  'ཕ': 'ph',
  'བ': 'b',
  'མ': 'm',
  'ཙ': 'ts',
  'ཚ': 'tsh',
  'ཛ': 'dz',
  'ཝ': 'w',
  'ཞ': 'j',
  'ཟ': 'z',
  'འ': "'",
  'ཡ': 'y',
  'ར': 'r',
  'ལ': 'l',
  'ཤ': 'x',
  'ས': 's',
  'ཧ': 'h',

  // vowels
  'ི': 'i',
  'ུ': 'u',
  'ེ': 'e',
  'ོ': 'o',
  '': 'a',

  '༉': '- ',
  '༈': '',
  '༄': '',
  '་': ' ',
  '།': '.',
  '༎': '.',
  '༺': '<',
  '༻': '>',
  '༼': '(',
  '༽': ')'
}