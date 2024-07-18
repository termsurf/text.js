import { Map, Mark, build, transform } from '../base'
import * as groups from './groups'

const boundVowels = groups.boundVowels.reduce((m: Map, x: Mark) => {
  m[x.text] = x.code!
  return m
}, {})

const vowels = groups.vowels.reduce((m: Map, x: Mark) => {
  m[x.text] = x.code!
  return m
}, {})

const consonants = groups.consonants.reduce((m: Map, x: Mark) => {
  m[x.text] = x.code!
  return m
}, {})

const sounds = groups.sounds.reduce((m: Map, x: Mark) => {
  m[x.text] = x.code!
  return m
}, {})

const visarga = groups.modifiers.find(x => x.name!.link === 'visarga')!
const anusvara = groups.modifiers.find(
  x => x.name!.link === 'anusvara',
)!
const virama = groups.modifiers.find(x => x.name!.link === 'virama')!

const laghava = groups.punctuations.find(
  x => x.name!.link === 'laghava',
)!

const vowelTransformer = Object.keys(boundVowels).reduce<Map>(
  (m, x) => {
    let render = boundVowels[x]
    m[x] = m => {
      const last = m[m.length - 1]
      if (last) {
        m[m.length - 1] = last.replace(/a_?/, '') + render
      }
    }
    return m
  },
  {},
)

const map: Map = {
  ...vowels,
  ...consonants,
  ...sounds,
  [visarga.text]: visarga.code!,
  [laghava.text]: laghava.code!,
  [anusvara.text]: anusvara.code!,
  [virama.text]: m => {
    const last = m[m.length - 1]
    if (last) {
      m[m.length - 1] = last.replace(/a_?/, '')
    }
  },
  ...vowelTransformer,
}

const s = build(map)

const talk = (t: string) => transform(t, s, map)

export default talk
