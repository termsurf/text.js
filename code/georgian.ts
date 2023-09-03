
const alphabet = {
  'ა': 'a',
  'ბ': 'b',
  'გ': 'g',
  'დ': 'd',
  'ე': 'E',
  'ვ': 'v',
  'ზ': 'z',
  'თ': 'th',
  'ი': 'i',
  'კ': 'k!',
  'ლ': 'l',
  'მ': 'm',
  'ნ': 'n',
  'ო': 'o~',
  'პ': 'p!',
  'ჟ': 'j',
  'რ': 'r',
  'ს': 's',
  'ტ': 't!',
  'უ': 'u',
  'ფ': 'ph',
  'ქ': 'kh',
  'ღ': 'r~',
  'ყ': 'K!',
  'შ': 'x',
  'ჩ': 'txh',
  'ც': 'tsh',
  'ძ': 'dz',
  'წ': 'ts!',
  'ჭ': 'tx!',
  'ხ': 'H',
  'ჯ': 'dj',
  'ჰ': 'h',
  '-': '',
}

const form = (s) => {
  let out = []
  let i = 0
  let r = s
  while (r.length) {
    let found = false
    x:
    for (let k in alphabet) {
      if (r.indexOf(k) === 0) {
        let v = alphabet[k]
        i += k.length
        out.push(v)
        r = r.substr(k.length)
        found = true
        break x
      }
    }
    if (!found) {
      throw `oops ${out.join('')} from ${s}`
    }
  }
  return out.join('')
}

module.exports = form
