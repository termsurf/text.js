
const m = {
  'b': 'p',
  'd': 't',
  'g': 'k',
  'p': 'ph',
  't': 'th',
  'k': 'kh',
  'm': 'm',
  'n': 'n',
  'zh': 'TX',
  'z': 'ts',
  'j': 'tx',
  'ch': 'TXh',
  'c': 'tsh',
  'q': 'txh',
  'f': 'f',
  'sh': 'X',
  's': 's',
  'x': 'xY',
  'h': 'h+',
  'l': 'l',
  'r': 'r',
  'y': 'y',
  'w': 'w',

  'iang': 'yaq',
  'iāng': 'ya+q',
  'iàng': 'ya+a-q',
  'iáng': 'yaa+q',
  'iǎng': 'ya-q',

  'iang1': 'ya+q',
  'iang2': 'yaa+q',
  'iang4': 'ya+a-q',
  'iang3': 'ya-q',

  'iong': 'yo+q',
  'iǒng': 'yo+-q',
  'iōng': 'yo++q',
  'ióng': 'yoo++q',
  'iòng': 'yo++o+-q',

  'iong3': 'yo+-q',
  'iong1': 'yo++q',
  'iong2': 'yoo++q',
  'iong4': 'yo++o+-q',

  'ing': 'iq',
  'íng': 'ii+q',
  'ìng': 'i+i-q',
  'īng': 'i+q',
  'ǐng': 'i-q',

  'ing2': 'ii+q',
  'ing4': 'i+i-q',
  'ing1': 'i+q',
  'ing3': 'i-q',

  'iao': 'yau',
  'iāo': 'ya+u',
  'iào': 'ya+a-u',
  'iáo': 'yaa+u',
  'iǎo': 'ya-u',

  'iao1': 'ya+u',
  'iao4': 'ya+a-u',
  'iao2': 'yaa+u',
  'iao3': 'ya-u',

  'ian': 'ya+n',
  'iān': 'ya++n',
  'iǎn': 'ya+-n',
  'ián': 'ya+a++n',
  'iàn': 'ya++a+-n',

  'ian1': 'ya++n',
  'ian3': 'ya+-n',
  'ian2': 'ya+a++n',
  'ian4': 'ya++a+-n',

  'ia': 'ya',
  'iā': 'ya+',
  'ià': 'ya+a-',
  'iá': 'yaa+',
  'iǎ': 'ya-',

  'ia1': 'ya+',
  'ia4': 'ya+a-',
  'ia2': 'yaa+',
  'ia3': 'ya-',

  'ie': 'ye',
  'iē': 'ye+',
  'iě': 'ye-',
  'ié': 'yee+',
  'iè': 'ye+e-',

  'ie1': 'ye+',
  'ie3': 'ye-',
  'ie2': 'yee+',
  'ie4': 'ye+e-',

  'iu': 'you',
  'iǔ': 'you-',
  'iū': 'you+',
  'iú': 'youu+',
  'iù': 'you+u-',

  'iu3': 'you-',
  'iu1': 'you+',
  'iu2': 'youu+',
  'iu4': 'you+u-',

  'in': 'in',
  'ín': 'ii+n',
  'ìn': 'i+i-n',
  'īn': 'i+n',
  'ǐn': 'i-n',

  'in2': 'ii+n',
  'in4': 'i+i-n',
  'in1': 'i+n',
  'in3': 'i-n',

  'io': 'yo',
  'iō': 'yo+',
  'iò': 'yo+o-',
  'ió': 'yoo+',
  'iǒ': 'yo-',

  'io1': 'yo+',
  'io4': 'yo+o-',
  'io2': 'yoo+',
  'io3': 'yo-',

  'eng': 'u+q',
  'ēng': 'u++q',
  'ěng': 'u+-q',
  'éng': 'u+u++q',
  'èng': 'u++u+-q',

  'eng1': 'u++q',
  'eng3': 'u+-q',
  'eng2': 'u+u++q',
  'eng4': 'u++u+-q',

  'ei': 'ei',
  'ēi': 'e+i',
  'ěi': 'e-i',
  'éi': 'ee+i',
  'èi': 'e+e-i',

  'ei1': 'e+i',
  'ei3': 'e-i',
  'ei2': 'ee+i',
  'ei4': 'e+e-i',

  'en': 'u+n',
  'ēn': 'u++n',
  'ěn': 'u+-n',
  'én': 'u+u++n',
  'èn': 'u++u+-n',

  'en1': 'u++n',
  'en3': 'u+-n',
  'en2': 'u+u++n',
  'en4': 'u++u+-n',

  'er': 'a+o~',
  'ēr': 'a++o~',
  'ěr': 'a+-o~',
  'ér': 'a+a++o~',
  'èr': 'a++a+-o~',

  'er1': 'a++o~',
  'er3': 'a+-o~',
  'er2': 'a+a++o~',
  'er4': 'a++a+-o~',

  'ang': 'aq',
  'āng': 'a+q',
  'àng': 'a+a-q',
  'áng': 'aa+q',
  'ǎng': 'a-q',

  'ang1': 'a+q',
  'ang4': 'a+a-q',
  'ang2': 'aa+q',
  'ang3': 'a-q',

  'ai': 'ai',
  'āi': 'a+i',
  'ǎi': 'a-i',
  'ái': 'aa+i',
  'ài': 'a+a-i',

  'ai1': 'a+i',
  'ai3': 'a-i',
  'ai2': 'aa+i',
  'ai4': 'a+a-i',

  'ao': 'au',
  'āo': 'a+u',
  'ào': 'a+a-u',
  'áo': 'aa+u',
  'ǎo': 'a-u',

  'ao1': 'a+u',
  'ao4': 'a+a-u',
  'ao2': 'aa+u',
  'ao3': 'a-u',

  'an': 'an',
  'ān': 'a+n',
  'àn': 'a+a-n',
  'án': 'aa+n',
  'ǎn': 'a-n',

  'an1': 'a+n',
  'an4': 'a+a-n',
  'an2': 'aa+n',
  'an3': 'a-n',

  'ong': 'o+q',
  'ōng': 'o++q',
  'óng': 'o+o++q',
  'ǒng': 'o+-q',
  'òng': 'o++o+-q',

  'ong1': 'o++q',
  'ong2': 'o+o++q',
  'ong3': 'o+-q',
  'ong4': 'o++o+-q',

  'uang': 'waq',
  'uāng': 'wa+q',
  'uàng': 'wa+a-q',
  'uáng': 'waa+q',
  'uǎng': 'wa-q',

  'uang1': 'wa+q',
  'uang4': 'wa+a-q',
  'uang2': 'waa+q',
  'uang3': 'wa-q',

  'uai': 'wai',
  'uāi': 'wa+i',
  'uài': 'wa+a-i',
  'uái': 'waa+i',
  'uǎi': 'wa-i',

  'uai1': 'wa+i',
  'uai4': 'wa+a-i',
  'uai2': 'waa+i',
  'uai3': 'wa-i',

  'uan': 'wan',
  'uān': 'wa+n',
  'uàn': 'wa+a-n',
  'uán': 'waa+n',
  'uǎn': 'wa-n',

  'uan1': 'wa+n',
  'uan4': 'wa+a-n',
  'uan2': 'waa+n',
  'uan3': 'wa-n',

  'uan': 'yua+n',
  'uān': 'yua++n',
  'uǎn': 'yua+-n',
  'uán': 'yua+a++n',
  'uàn': 'yua++a+-n',

  'uan1': 'yua++n',
  'uan3': 'yua+-n',
  'uan2': 'yua+a++n',
  'uan4': 'yua++a+-n',

  'ua': 'wu+',
  'uā': 'wu++',
  'uǎ': 'wu+-',
  'uá': 'wu+u++',
  'uà': 'wu++u+-',

  'ua1': 'wu++',
  'ua3': 'wu+-',
  'ua2': 'wu+u++',
  'ua4': 'wu++u+-',

  'uo': 'wo',
  'uō': 'wo+',
  'uó': 'woo+',
  'uǒ': 'wo-',
  'uò': 'wo+o-',

  'uo1': 'wo+',
  'uo2': 'woo+',
  'uo3': 'wo-',
  'uo4': 'wo+o-',

  'ui': 'wei',
  'uí': 'weii+',
  'uì': 'wei+i-',
  'uī': 'wei+',
  'uǐ': 'wei-',

  'ui2': 'weii+',
  'ui4': 'wei+i-',
  'ui1': 'wei+',
  'ui3': 'wei-',

  'un': 'wu+n',
  'ǔn': 'wu+-n',
  'ūn': 'wu++n',
  'ún': 'wu+u++n',
  'ùn': 'wu++u+-n',

  'un3': 'wu+-n',
  'un1': 'wu++n',
  'un2': 'wu+u++n',
  'un4': 'wu++u+-n',

  'ue': 'yue',
  'uē': 'yue+',
  'uě': 'yue-',
  'ué': 'yuee+',
  'uè': 'yue+e-',

  'ue1': 'yue+',
  'ue3': 'yue-',
  'ue2': 'yuee+',
  'ue4': 'yue+e-',

  'un': 'yn',
  'ǔn': 'yu+-n',
  'ūn': 'yu++n',
  'ún': 'yu+u++n',
  'ùn': 'yu++u+-n',

  'un3': 'yu+-n',
  'un1': 'yu++n',
  'un2': 'yu+u++n',
  'un4': 'yu++u+-n',

  'ou': 'ou',
  'ōu': 'o+u',
  'óu': 'oo+u',
  'ǒu': 'o-u',
  'òu': 'o+o-u',

  'ou1': 'o+u',
  'ou2': 'oo+u',
  'ou3': 'o-u',
  'ou4': 'o+o-u',

  'i': 'i',
  'í': 'ii+',
  'i2': 'ii+',
  'ì': 'i+i-',
  'i4': 'i+i-',
  'ī': 'i+',
  'i1': 'i+',
  'ǐ': 'i-',
  'i3': 'i-',
  'ê': 'a+',
  'ē': 'o++',
  'e1': 'o++',
  'ě': 'o+-',
  'e3': 'o+-',
  'é': 'o+o++',
  'e2': 'o+o++',
  'è': 'o++o+-',
  'e4': 'o++o+-',
  'e': 'o+',
  'ā': 'a+',
  'a1': 'a+',
  'à': 'a+a-',
  'a4': 'a+a-',
  'á': 'aa+',
  'a2': 'aa+',
  'ǎ': 'a-',
  'a3': 'a-',
  'a': 'a',
  'ō': 'wo+',
  'o1': 'wo+',
  'ó': 'woo+',
  'o2': 'woo+',
  'ǒ': 'wo-',
  'o3': 'wo-',
  'ò': 'wo+o-',
  'o4': 'wo+o-',
  'o': 'wo',
  'o': 'o',
  'ǚ': 'yu-',
  'ü3': 'yu-',
  'ǖ': 'yu+',
  'ü1': 'yu+',
  'ǘ': 'yuu+',
  'ü2': 'yuu+',
  'ǜ': 'yu+u-',
  'ü4': 'yu+u-',
  'ü': 'yu',
  'ǔ': 'u-',
  'u3': 'u-',
  'ū': 'u+',
  'u1': 'u+',
  'ú': 'uu+',
  'u2': 'uu+',
  'ù': 'u+u-',
  'u4': 'u+u-',
  'u': 'u',

  'yun': 'ywun',
  'yǔn': 'ywu-n',
  'yūn': 'ywu+n',
  'yún': 'ywuu+n',
  'yùn': 'ywu+u-n',

  'yun3': 'ywu-n',
  'yun1': 'ywu+n',
  'yun2': 'ywuu+n',
  'yun4': 'ywu+u-n',

  'yu': 'ywu',
  'yǔ': 'ywu-',
  'yū': 'ywu+',
  'yú': 'ywuu+',
  'yù': 'ywu+u-',

  'yu3': 'ywu-',
  'yu1': 'ywu+',
  'yu2': 'ywuu+',
  'yu4': 'ywu+u-',

  ' ': ' ',
  '　': ' ',
  '，': ', ',
  ',': ',',
  '。': '. ',
  '.': '.',
  '？': '? ',
  '?': '?',
  '；': '; ',
  ';': ';',
  '：': ': ',
  ':': ':',
  '（': ' (',
  '(': '(',
  '）': ') ',
  ')': ')',
  '［': ' [',
  '[': '[',
  '］': '] ',
  ']': ']',
  '【': ' [',
  '】': '] ',
  '『': '"',
  '』': '"',
  '「': "'",
  '」': "'",
  '"': '"',
  '"': '"',
  "'": "'",
  "'": "'",
  '“': '"',
  '”': '"',
  '‘': "'",
  '’': "'",
  '、': ', ',
  '\n': '\n',
  '‧': ' ',
  '‧': ' ',
  '《': ' <',
  '》': '> ',
  '〈': ' <',
  '〉': '> ',
  '<': '<',
  '>': '>',
  '…': '...',
  '⋯': '...',
  '～': '~',
  '—': '-',
  ' ': ' '
}

const s = build(m)

const form = t => transform(t, s, m)

module.exports = form

/**
 * Transform input text to output using map.
 */

function transform(i, s, m) {
  let o = []
  let w = 0

  while (w < i.length) {
    let r = s
    let v = w

    while (true) {
      let c = i.charAt(v).toLowerCase()
      if (r[c]) {
        r = r[c]
        v++
      } else {
        break
      }
    }

    if (r === s) {
      const t = i.charAt(w).toLowerCase()
      const h = t.codePointAt(0).toString(16)
      const e = '\\u' + '0000'.substring(0, 4 - h.length) + h
      throw new Error(`---${w}:${e}:${t}---`)
    }

    let z = i.substr(w, v - w).toLowerCase()

    if (typeof m[z] == 'function') {
      m[z](o)
    } else {
      o.push(m[z])
    }

    w = v
  }

  return o.join('')
}

/**
 * Build trie.
 */

function build(m) {
  let s = {}

  for (let key in m) {
    let v = key.toLowerCase().split('')
    let r = s
    while (v.length) {
      var x = v.shift()
      r = r[x] = r[x] || {}
    }
  }

  return s
}
