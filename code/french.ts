
const endsWith = {
  'bs': '',
  'cs': '',
  'ds': '',
  'fs': '',
  'gs': '',
  'ps': '',
  'ts': '',
  'st': 'st',
  'ie': 'i',
  'oue': 'u',
  'cte': 't',
  'ent': '',
  'er': 'e',
  'es': '',
  'bb': '',
  'b': '',
  'c': 'k',
  'dd': '',
  'd': '',
  'g': '',
  'pp': '',
  'p': '',
  'tt': '',
  't': '',
  'x': '',
  'z': '',
  'ue': 'i~',
  'üe': 'i~',
}

const vowels = {
  'i': true,
  'e': true,
  'a': true,
  'o': true,
  'u': true,
  'ë': true,
  'ü': true,
  'î': true,
  'ï': true,
  'œ': true,
  'ô': true,
  'û': true,
}

const consonants = {
  'b': true,
  'd': true,
  'f': true,
  'g': true,
  'h': true,
  'j': true,
  'k': true,
  'l': true,
  'm': true,
  'n': true,
  'p': true,
  'q': true,
  'r': true,
  's': true,
  't': true,
  'v': true,
  'w': true,
  'x': true,
  'y': true,
  'z': true,
  'ç': true,
}

const voicelessConsonant = {
  's': true,
  'f': true,
  'p': true,
  'k': true,
  'h': true,
}

const special = {
  '-': () => '-',
  'sch': () => 'x',
  'ss': () => 's',
  's': (l, i) => {
    if (i == 0) return 's'
    if (consonants[l[i - 1]] || consonants[l[i + 1]]) return 's'
    if (l[i - 1] == '&') return 's'
    if (i == l.length - 1) return ''
    return 'z'
  },
  'x': (l, i) => {
    if (i == 0) return 'ks'
    if (voicelessConsonant[l[i - 1]] || voicelessConsonant[l[i + 1]]) return 'ks'
    // todo: phonologically finally
    if (i == l.length - 1) return ''
    return 'gz'
  },
  'au': (l, i) => {
    if (l[i + 1] == 'r') return 'o~'
    return 'o'
  },
  'ay': (l, i) => {
    if (i == l.length - 1) return 'E'
    return 'Ey'
  },
  'ey': (l, i) => {
    if (i == l.length - 1) return 'E'
    return 'Ey'
  },
  'i': (l, i) => {
    if (vowels[l[i + 1]]) return 'y'
    return 'i'
  },
  'ou': (l, i) => {
    if (vowels[l[i + 1]]) return 'w'
    if ('h' == l[i + 1] && vowels[l[i + 2]]) return 'w'
    return 'u'
  },
  'où': (l, i) => {
    if (vowels[l[i + 1]]) return 'w'
    if ('h' == l[i + 1] && vowels[l[i + 2]]) return 'w'
    return 'u'
  },
  'y': (l, i) => {
    if (vowels[l[i + 1]]) return 'y'
    return 'i'
  },
  'am': (l, i) => {
    if (consonants[i + 2]) return 'a&'
    return 'am'
  },
  'an': (l, i) => {
    if (consonants[i + 2]) return 'a&'
    if (i == l.length - 1) return 'a&'
    return 'an'
  },
  'em': (l, i) => {
    if (i == l.length - 1) return 'a&'
    if (consonants[l[i + 1]]) return 'a&'
    if (l[i - 1] && l[i - 1].match(/[éiy]/)) return 'E&'
    return 'em'
  },
  'en': (l, i) => {
    if (i == l.length - 1) return 'a&'
    if (consonants[l[i + 1]]) return 'a&'
    if (l[i - 1] && l[i - 1].match(/[éiy]/)) return 'E&'
    return 'en'
  },
  'eim': (l, i) => {
    if (i == l.length - 1) return 'E&'
    if (consonants[l[i + 1]]) return 'E&'
    return 'eim'
  },
  'ein': (l, i) => {
    if (i == l.length - 1) return 'E&'
    if (consonants[l[i + 1]]) return 'E&'
    return 'ein'
  },
  'eun': (l, i) => {
    if (i == l.length - 1) return 'e~&'
    if (consonants[l[i + 1]]) return 'e~&'
    return 'eun'
  },
  'ge': (l, i) => {
    if (l[i + 2] && l[i + 2].match(/[aou]/)) return 'j'
    return 'ge'
  },
  'ilh': (l, i) => {
    if (vowels[l[i - 1]]) {
      if ('u' == l[i - 1]) return 'iy'
      return 'y'
    } else {
      return 'ilh'
    }
  },
  'ill': (l, i) => {
    if (vowels[l[i - 1]]) {
      return 'y'
    } else {
      return 'iy'
    }
  },
  'il': (l, i) => {
    if (vowels[l[i - 1]]) return 'y'
    return 'il'
  },
  'im': (l, i) => {
    if (consonants[l[i + 2]]) return 'E&'
    if (i == l.length - 2) return 'E&'
    return 'im'
  },
  'in': (l, i) => {
    if (consonants[l[i + 2]]) return 'E&'
    if (i == l.length - 2) return 'E&'
    return 'in'
  },
  'în': (l, i) => {
    if (consonants[l[i + 2]]) return 'E&'
    if (i == l.length - 2) return 'E&'
    return 'in'
  },
  'oin': (l, i) => {
    if (consonants[l[i + 2]]) return 'wE&'
    if (i == l.length - 2) return 'wE&'
    return 'oin'
  },
  'oën': (l, i) => {
    if (consonants[l[i + 2]]) return 'wE&'
    if (i == l.length - 2) return 'wE&'
    return 'oyen'
  },
  'tch': () => 'tx',
  'th': () => 't',
  'ti': (l, i) => {
    if (vowels[l[i + 2]]) {
      if (i == 0) return 'ty'
      if (l[i - 1] && l[i - 1].match(/[sx]/)) return 'ty'
      return 'sy'
    }
    return 'ti'
  },
  'um': (l, i) => {
    if (i == l.length - 2) return 'e~&'
    if (consonants[l[i + 2]]) return 'e~&'
    return 'um'
  },
  'un': (l, i) => {
    if (i == l.length - 2) return 'e~&'
    if (consonants[l[i + 2]]) return 'e~&'
    return 'un'
  },
  'ym': (l, i) => {
    if (i == l.length - 2) return 'e~&'
    if (consonants[l[i + 2]]) return 'e~&'
    return 'ym'
  },
  'yn': (l, i) => {
    if (i == l.length - 2) return 'E&'
    if (consonants[l[i + 2]]) return 'E&'
    return 'yn'
  },
  'bb': (l, i) => {
    if (voicelessConsonant[l[i + 2]]) return 'p'
    return 'b'
  },
  'b': (l, i) => {
    if (voicelessConsonant[l[i + 1]]) return 'p'
    return 'b'
  },
  'cc': (l, i) => {
    if (l[i + 2] && l[i + 2].match(/[eiy]/)) return 'ks'
    return 'k'
  },
  'c': (l, i) => {
    if (l[i + 1] && l[i + 1].match(/[eiy]/)) return 's'
    return 'k'
  },
  'gn': () => 'ny',
  'gu': (l, i) => {
    if (l[i + 2] && l[i + 2].match(/[eiy]/)) return 'g'
    return 'gu'
  },
  'gg': (l, i) => {
    if (l[i + 2] && l[i + 2].match(/[eiy]/)) return 'gj'
    return 'g'
  },
  'g': (l, i) => {
    if (l[i + 1] && l[i + 1].match(/[eiy]/)) return 'j'
    return 'g'
  },
  'sc': (l, i) => {
    if (l[i + 2] && l[i + 2].match(/[eiy]/)) return 's'
    return 'sk'
  },
  'xc': (l, i) => {
    if (l[i + 2] && l[i + 2].match(/[eiy]/)) return 'ks'
    return 'ksk'
  },
  'ue': () => 'i~E',
  'üe': () => 'i~E',
  'z': () => 'z',
  'tt': () => 't',
  't': () => 't',
  'dd': () => 'd',
  'd': () => 'd',
  'pp': () => 'p',
  'ph': () => 'f',
  'pt': () => 'pt',
  'p': () => 'p',
  'ct': () => 'kt',
  'ch': () => 'x',
  'ç': () => 's',
  'ff': () => 'f',
  'f': () => 'f',
  'h': () => '',
  'j': () => 'j',
  'k': () => 'k',
  'll': () => 'l',
  'l': () => 'l',
  'mm': () => 'm',
  'm': () => 'm',
  'ng': () => 'q',
  'nn': () => 'n',
  'n': () => 'n',
  'q': () => 'k',
  'rr': () => 'r~',
  'r': () => 'r~',
  'v': () => 'v',
  'w': () => 'w',
  'aa': () => 'a',
  'à': () => 'a',
  'a': () => 'a',
  'â': () => 'a',
  'æ': () => 'e',
  'ae': () => 'e',
  'aë': () => 'ayE',
  'ai': () => 'e',
  'aî': () => 'E',
  'aï': () => 'ayi',
  'aie': () => 'E',
  'ao': () => 'ao',
  'aou': () => 'au',
  'aye': () => 'Eyi',
  'ée': () => 'e',
  'é': () => 'e',
  'è': () => 'E',
  'ê': () => 'E',
  'ea': () => 'i',
  'ee': () => 'i',
  'eau': () => 'o',
  'ei': () => 'E',
  'eî': () => 'E',
  'eoi': () => 'wa',
  'eu': () => 'a~',
  'eû': () => 'a~',
  'e': () => 'e',
  'î': () => 'i',
  'ï': () => 'y',
  'ô': () => 'o',
  'o': () => 'o', // ?
  'œ': () => 'e~',
  'oe': () => 'o~ye',
  'oê': () => 'wa',
  'oë': () => 'o~yE',
  'œu': () => 'e~', // ?
  'oie': () => 'wa',
  'oi': () => 'wa',
  'oî': () => 'wa',
  'oï': () => 'o~yi',
  'oo': () => 'oOo',
  'oû': () => 'u',
  'oy': () => 'way',
  'u': () => 'i~',
  'û': () => 'i~',
  'uy': () => 'i~y',
  'ÿ': () => 'i',
  'aan': () => 'a&',
  'aen': () => 'a&',
  'aën': () => 'a&',
  'aim': () => 'E&',
  'ain': () => 'E&',
  'aon': () => 'a&',
  'aw': () => 'o',
  'cqu': () => 'k',
  'ew': () => 'yu',
  'om': () => 'o~&',
  'on': () => 'o~&',
  'ow': () => 'o',
  'qu': () => 'k',
  '\'': () => '\'',
  ' ': () => ' '
}

// TODO: e

const endsWithPattern = new RegExp('(' + Object.keys(endsWith).join('|') + ')' + '$')

const form = (s) => {
  let end = []
  let start = []
  if (s.match(endsWithPattern)) {
    let str = endsWith[RegExp.$1]
    end.push(str)
    s = s.substr(0, s.length - 1 - str.length)
  }
  let i = 0
  let r = s
  while (r.length) {
    let found = false
    x:
    for (let k in special) {
      if (r.indexOf(k) === 0) {
        let f = special[k]
        let v = f(s, i)
        i += k.length
        start.push(v)
        r = r.substr(k.length)
        found = true
        break x
      }
    }
    if (!found) {
      throw `oops ${start.join('')}${end.join('')} from ${s}`
    }
  }
  return `${start.join('')}${end.join('')}`
}

module.exports = form
