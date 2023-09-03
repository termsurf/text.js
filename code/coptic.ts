/* eslint-disable sort-keys/sort-keys-fix */

import { build, transform } from './base'

const m = {
  ⲁ: 'a',
  ⲃ: 'v+',
  ⲅ: 'k',
  ⲇ: 't',
  ⲉ: 'u+',
  ⲋ: '',
  ⲍ: 's',
  ⲏ: 'ee',
  ⲑ: 'th',
  ⲓ: 'i',
  ⲕ: 'k',
  ⲗ: 'l',
  ⲙ: 'm',
  ⲛ: 'n',
  ⲝ: 'ks',
  ⲟ: 'o~',
  ⲡ: 'p',
  ⲣ: 'r',
  ⲥ: 's',
  ⲧ: 't',
  ⲩ: 'w',
  ⲫ: 'ph',
  ⲭ: 'kh',
  ⲯ: 'ps',
  ⲱ: 'oo',
  ϣ: 'x',
  ϥ: 'f',
  ϧ: 'h+',
  ⳉ: 'h+',
  ϩ: 'h',
  ϫ: 'tx',
  ϭ: 'txh',
  ϯ: 'ti',
}

const s = build(m)

const form = (t: string) => transform(t, s, m)

export default form
