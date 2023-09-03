
/**
 * Vietnamese.
 */

const consonants = {
  'b': ['b!', ''],
  'c': ['k', 'k'],
  'ch': ['tx~', 'k'],
  'd': ['z', ''],
  'đ': ['d!', ''],
  'gh': ['r~', ''],
  'gi': ['z', ''],
  'g': ['r~', ''],
  'h': ['h', ''],
  'kh': ['H', ''],
  'k': ['k', ''],
  'l': ['l', ''],
  'm': ['m', 'm'],
  'n': ['n', 'n'],
  'ngh': ['q', ''],
  'ng': ['q', 'q'],
  'nh': ['ny', 'q'],
  'p': ['', 'p'],
  'ph': ['f', ''],
  'qu': ['kw', ''],
  'r': ['z', '-'],
  's': ['s', ''],
  't': ['t', 't'],
  'th': ['th', ''],
  'tr': ['tx~', ''],
  'v': ['v', ''],
  'x': ['s', ''],
}

const vowels = {
  'a': 'a',
  'à': 'a_a__',
  'ả': 'aa_',
  'ã': 'aa^\'',
  'á': 'aa^',
  'ạ': 'aa_\'',

  'ă': 'a',
  'ằ': 'a_a__',
  'ẳ': 'aa_',
  'ẵ': 'aa^\'',
  'ắ': 'aa^',
  'ặ': 'aa_\'',

  'â': 'U',
  'ầ': 'U_U__',
  'ẩ': 'UU_',
  'ẫ': 'UU^\'',
  'ấ': 'UU^',
  'ậ': 'UU_\'',

  'e': 'E',
  'è': 'E_E__',
  'ẻ': 'EE_',
  'ẽ': 'EE^\'',
  'é': 'EE^',
  'ẹ': 'EE_\'',

  'ê': 'e',
  'ề': 'e_e__',
  'ể': 'ee_',
  'ễ': 'ee^\'',
  'ế': 'ee^',
  'ệ': 'ee_\'',

  'i': 'i',
  'ì': 'i_i__',
  'ỉ': 'ii_',
  'ĩ': 'ii^\'',
  'í': 'ii^',
  'ị': 'ii_\'',

  'o': 'o~',
  'ò': 'o~_o~__',
  'ỏ': 'o~o~_',
  'õ': 'o~o~^\'',
  'ó': 'o~o~^',
  'ọ': 'o~o~_\'',

  'ô': 'o',
  'ồ': 'o_o__',
  'ổ': 'oo_',
  'ỗ': 'oo^\'',
  'ố': 'oo^',
  'ộ': 'oo_\'',

  'ơ': 'U',
  'ờ': 'U_U__',
  'ở': 'UU_',
  'ỡ': 'UU^\'',
  'ớ': 'UU^',
  'ợ': 'UU_\'',

  'u': 'u',
  'ù': 'u_u__',
  'ủ': 'uu_',
  'ũ': 'uu^\'',
  'ú': 'uu^',
  'ụ': 'uu_\'',

  'ư': 'i~',
  'ừ': 'i~_i~__',
  'ử': 'i~i~_',
  'ữ': 'i~i~^\'',
  'ứ': 'i~i~^',
  'ự': 'i~i~_\'',

  'y': 'i',
  'ỳ': 'i_i__',
  'ỷ': 'ii_',
  'ỹ': 'ii^\'',
  'ý': 'ii^',
  'ỵ': 'ii_\'',
}

/**
 * Build trie.
 */

/**
 * Transform the text.
 */

const form = s => {
  let i = 0
  let r = s
  let out = []
  while (r.length) {
    let found = false
    x:
    for (let k in vowels) {
      if (r.indexOf(k) === 0) {
        let v = vowels[k]
        i += k.length
        out.push(v)
        r = r.substr(k.length)
        found = true
        break x
      }
    }

    if (found) continue

    y:
    for (let k in consonants) {
      if (r.indexOf(k) === 0) {
        let v = consonants[k][r.length == k.length ? 1 : 0]
        i += k.length
        out.push(v)
        r = r.substr(k.length)
        found = true
        break y
      }
    }

    if (!found) {
      throw `oops ${out.join('')} from ${s}`
    }
  }
  return out.join('')
}

module.exports = form
