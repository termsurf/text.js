import { build, transform } from '../base'

const consonants = {
  b: 'b', // boy
  c: 'k', // call
  d: 'd', // dog
  ð: 'C', // this
  f: m => {
    if (!m.length) {
      m.push('f')
    } else {
      m.push('v')
    }
  }, // /v/	far (initial) very (middle or final position)
  g: (m, n) => {
    const last = m[m.length - 1]
    if (!m.length || last === 'n') {
      m.push('g')
    } else if (n.match(/^[st]/)) {
      m.push('H')
    } else {
      m.push('G')
    }
  }, // /x/ /ɣ/	good (initial, after n) Scots loch (before s or t) Scots loch (otherwise; voiced)
  h: 'h', // have
  j: 'j', // year
  k: (m, n) => {
    if (n.match(/^[st]/)) {
      m.push('H')
    } else {
      m.push('k')
    }
  }, // /x/ call loch (immediately before s or t)
  l: 'l', // /l̥/ leaf leaf (voiceless directly after h at the beginning of a word, ends of words after voiceless consonants or between voiceless consonants)
  m: 'm', // man
  n: 'n', // new
  p: (m, n) => {
    if (n.match(/^[st]/)) {
      m.push('f')
    } else {
      m.push('p')
    }
  }, // /f/ happy far (before s or t)
  q: 'k', // call (only in qu)
  r: 'r', // roof (trilled like Scottish)
  s: 's', // safe
  t: 't', // time
  v: 'v', // victory
  w: 'w', // win
  x: 'H', // lochs (Scottish)
  z: 'ts', // cats (like German z)
  þ: 'c', // thin
}

const vowels = {
  a: 'a', //	father (short)
  á: 'a_', //	father (long)
  e: 'e', // /ɛ/ é as in French 'été' (short)
  é: 'e_', //	é as in French 'été' (long)
  ē: 'e_',
  i: 'i', //	ee as in feet (short)
  í: 'i_', //	ee as in feet (long)
  o: 'o', //	o as in vote (short)
  ó: 'o_', //	o as in vote (long)
  u: 'u', //	u as in droop (short)
  ú: 'u_', //	u as in droop (long)
  y: 'i$', //	ü as in German München (short)
  ý: 'i$_', //	ü as in German Füße (long)
  æ: 'A', // /ɛ/ a as in 'cat' (long)
  ǫ: 'o$', //	o as in 'lot', (short)
  ǫ́: 'o$_', //	o as in 'lot', (long)
  ø: 'e$', //	eu as in French 'feu'
  œ: 'e$_', //	eu as in French 'feu', (long)
  ö: 'e$_',
}

const m = {
  ...consonants,
  ...vowels,
}

/**
 * Build trie.
 */

const s = build(m)

/**
 * Transform the text.
 */

const form = i => transform(i, s, m)

export default form
