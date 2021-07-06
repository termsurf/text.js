
const { build, transform } = require('./base')

/**
 * Korean.
 */

const m = {

}

const vowels = {
  'ㅏ': 'a',
  'ㅐ': 'E',
  'ㅑ': 'ya',
  'ㅒ': 'yE',
  'ㅓ': 'U',
  'ㅔ': 'e',
  'ㅕ': 'yU',
  'ㅖ': 'ye',
  'ㅗ': 'o',
  'ㅘ': 'wa',
  'ㅙ': 'wE',
  'ㅚ': 'a~',
  'ㅛ': 'yo',
  'ㅜ': 'u',
  'ㅝ': 'wU',
  'ㅞ': 'we',
  'ㅟ': 'i~',
  'ㅠ': 'yu',
  'ㅡ': 'O',
  'ㅢ': 'r~i',
  'ㅣ': 'i',
}

const clusters = {
  'ㄳㅇ': 'ks',
  'ㄳㄷ': 'kt',
  'ㄳ': 'k',
  'ㄵㅇ': 'ntx~',
  'ㄵㄷ': 'ntx~t',
  'ㄵ': 'ntx~',
  'ㄶㅇ': 'lh',
  'ㄶㄷ': 'nt',
  'ㄶ': 'nh',
  'ㄺㅇ': 'lk',
  'ㄺㄷ': 'kd',
  'ㄺ': 'k',
  'ㄻㅇ': 'lm',
  'ㄻㄷ': 'md',
  'ㄻ': 'm',
  'ㄼㅇ': 'lp',
  'ㄼㄷ': 'pd',
  'ㄼ': 'p',
  'ㄽㅇ': 'ls',
  'ㄽㄷ': 'lt',
  'ㄽ': 's',
  'ㄾㅇ': 'lth',
  'ㄾㄷ': 'lth',
  'ㄾ': 'th',
  'ㄿㅇ': 'lph',
  'ㄿㄷ': 'phd',
  'ㄿ': 'ph',
  'ㅀㅇ': 'lh',
  'ㅀㄷ': 'lt',
  'ㅀ': 'h',
  'ㅄㅇ': 'ps',
  'ㅄㄷ': 'pt',
  'ㅄ': 'p',

  'ㄱㄱ': 'kk',
  'ㄴㄱ': 'nk',
  'ㄷㄱ': 'tk',
  'ㄹㄱ': 'lk',
  'ㅁㄱ': 'mk',
  'ㅂㄱ': 'pk',
  'ㅅㄱ': 'tk',
  'ㅈㄱ': 'tk',
  'ㅊㄱ': 'tk',
  'ㅌㄱ': 'tk',
  'ㅍㄱ': 'phk',
  'ㅎㄱ': 'hk',
  'ㄱㄴ': 'qn',
  'ㄴㄴ': 'nn',
  'ㄹㄴ': 'll',
  'ㅁㄴ': 'mn',
  'ㅂㄴ': 'mn',
  'ㅅㄴ': 'thn',
  'ㅆㄴ': 'nth',
  'ㅈㄴ': 'thn',
  'ㅊㄴ': 'thn',
  'ㅌㄴ': 'thn',
  'ㅍㄴ': 'phn',
  'ㅎㄴ': 'hn',
  'ㄱㄷ': 'kt',
  'ㄴㄷ': 'nt',
  'ㄷㄷ': 'thth',
  'ㄹㄷ': 'lt',
  'ㅁㄷ': 'mt',
  'ㅂㄷ': 'pht',
  'ㅅㄷ': 'thth',
  'ㅆㄷ': 'thth',
  'ㅈㄷ': 'thth',
  'ㅊㄷ': 'thth',
  'ㅋㄷ': 'kt',
  'ㅌㄷ': 'thth',
  'ㅍㄷ': 'pht',
  'ㅎㄷ': 'hth',
  'ㄱㄹ': 'kn',
  'ㄴㄹ': 'll',
  'ㄹㄹ': 'll',
  'ㅁㄹ': 'mn',
  'ㅂㄹ': 'mn',
  'ㅇㄹ': 'qn',
  'ㅎㄹ': 'r',
  'ㄱㅁ': 'km',
  'ㄴㅁ': 'nm',
  'ㄷㅁ': 'thm',
  'ㄹㅁ': 'lm',
  'ㅁㅁ': 'mm',
  'ㅂㅁ': 'mm',
  'ㅅㅁ': 'thm',
  'ㅇㅁ': 'qm',
  'ㅈㅁ': 'thm',
  'ㅊㅁ': 'thm',
  'ㅋㅁ': 'kt',
  'ㅌㅁ': 'thm',
  'ㅍㅁ': 'phm',
  'ㅎㅁ': 'hm',
  'ㄱㅂ': 'kp',
  'ㅂㅂ': 'phph',
  'ㅅㅂ': 'thp',
  'ㅆㅅ': 's@s',
  'ㄱㅇ': 'k',
  'ㄲㅇ': 'k@h',
  'ㄴㅇ': 'n',
  'ㄷㅇ': 'th',
  'ㄹㅇ': 'r',
  'ㅁㅇ': 'm',
  'ㅂㅇ': 'ph',
  'ㅅㅇ': 's',
  'ㅆㅇ': 's@',
  'ㅇㅇ': 'qh',
  'ㅈㅇ': 'thtx~h',
  'ㅊㅇ': 'thtx~h',
  'ㅋㅇ': 'kh',
  'ㅌㅇ': 'thtx~h',
  'ㅍㅇ': 'ph',
  'ㅎㅇ': 'h',
  'ㅆㅈ': 'thtx~h',
  'ㄱㅎ': 'k',
  'ㄲㅎ': 'k@h',
  'ㄴㅎ': 'nh',
  'ㄷㅎ': 'th',
  'ㄹㅎ': 'lh',
  'ㅁㅎ': 'mh',
  'ㅂㅎ': 'ph',
  'ㅅㅎ': 'th',
  'ㅈㅎ': 'thtx~h',
  'ㅊㅎ': 'thtx~h',
  'ㅋㅎ': 'k',
  'ㅌㅎ': 'th',
  'ㅍㅎ': 'ph',
}

const consonants = {
  'ㄱ': ['k', 'k.'],
  'ㄲ': ['k@', 'k.'],
  'ㄴ': ['n', 'n'],
  'ㄷ': ['t', 't.'],
  'ㄸ': ['t@', ''],
  'ㄹ': ['r!', 'L'],
  'ㅁ': ['m', 'm'],
  'ㅂ': ['p', 'p.'],
  'ㅃ': ['p@', ''],
  'ㅅ': ['s', 't.'],
  'ㅆ': ['s@', 't.'],
  'ㅇ': ['', 'q'],
  'ㅈ': ['tx~', 't.'],
  'ㅈ': ['tx~', 't.'],
  'ㅉ': ['t@x~', ''],
  'ㅊ': ['tx~h', 't.'],
  'ㅋ': ['kh', 'k.'],
  'ㅌ': ['th', 't.'],
  'ㅍ': ['ph', 'p.'],
  'ㅎ': ['h', 't.']
}

let initial = [
  'ㄱ',
  'ㄲ',
  'ㄴ',
  'ㄷ',
  'ㄸ',
  'ㄹ',
  'ㅁ',
  'ㅂ',
  'ㅃ',
  'ㅅ',
  'ㅆ',
  'ㅇ',
  'ㅈ',
  'ㅉ',
  'ㅊ',
  'ㅋ',
  'ㅌ',
  'ㅍ',
  'ㅎ',
]

const medial = [
  'ㅏ',
  'ㅐ',
  'ㅑ',
  'ㅒ',
  'ㅓ',
  'ㅔ',
  'ㅕ',
  'ㅖ',
  'ㅗ',
  'ㅘ',
  'ㅙ',
  'ㅚ',
  'ㅛ',
  'ㅜ',
  'ㅝ',
  'ㅞ',
  'ㅟ',
  'ㅠ',
  'ㅡ',
  'ㅢ',
  'ㅣ',
]

const finals = [
  '',
  'ㄱ',
  'ㄲ',
  'ㄳ',
  'ㄴ',
  'ㄵ',
  'ㄶ',
  'ㄷ',
  'ㄹ',
  'ㄺ',
  'ㄻ',
  'ㄼ',
  'ㄽ',
  'ㄾ',
  'ㄿ',
  'ㅀ',
  'ㅁ',
  'ㅂ',
  'ㅄ',
  'ㅅ',
  'ㅆ',
  'ㅇ',
  'ㅈ',
  'ㅊ',
  'ㅋ',
  'ㅌ',
  'ㅍ',
  'ㅎ',
]

const list = []
const map = {}

initial.forEach((i, ii) => {
  medial.forEach((m, mi) => {
    finals.forEach((f, fi) => {
      let v = ((ii * 588) + (mi * 28) + fi) + 44032
      let s = String.fromCodePoint(v)
      list.push({ s, t: `${i}${m}${f}` })
    })
  })
})

list.sort((a, b) => b.t.length - a.t.length)
list.forEach(({ s, t }) => map[s] = t)

// first divide into hangul jamo https://en.wikipedia.org/wiki/Korean_language_and_computers#Hangul_in_Unicode

/**
 * Transform the text.
 */

const form = s => {
  let i = 0
  let r = s
  let syllables = []

  while (r.length) {
    let found = false

    o:
    for (let k in map) {
      if (r.indexOf(k) === 0) {
        let v = map[k]
        i += k.length
        r = r.substr(k.length)
        syllables.push(v.split(''))
        found = true
        break o
      }
    }

    if (!found) {
      throw `oops`
    }
  }

  let out = []

  while (syllables.length) {
    let r = syllables.shift()
    let ri = r[0]
    let rm = r[1]
    let rf = r[2]
    let next = syllables[0] && syllables[0][0]

    if (ri) {
      let v = consonants[ri][0]
      out.push(v)
    }

    if (rm) {
      let v = vowels[rm]
      out.push(v)
    }

    if (rf) {
      if (next) {
        let combined = clusters[`${rf}${next}`]
        if (combined) {
          out.push(combined)
          syllables[0][0] = null
          continue
        }
      }
      let consonant = clusters[rf] || consonants[rf][1]
      out.push(consonant)
    }
  }

  return out.join('')
}

module.exports = form
