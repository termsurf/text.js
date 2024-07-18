import { Map, Mark, build, transform } from '../base'
import * as groups from './groups'

const boundVowels = groups.boundVowels.reduce((m: Map, x: Mark) => {
  m[x.text] = x.code!
  return m
}, {})

const consonants = groups.consonants.reduce((m: Map, x: Mark) => {
  m[x.text] = x.code!
  return m
}, {})

const punctuations = groups.punctuations.reduce((m: Map, x: Mark) => {
  m[x.text] = x.code!
  return m
}, {})

const modifiers = groups.modifiers.reduce((m: Map, x: Mark) => {
  m[x.text] = x.code!
  return m
}, {})

const map: Map = {
  ...boundVowels,
  ...consonants,
  ...punctuations,
  ...modifiers,
}

const s = build(map)

const code = (t: string) => transform(t, s, map)

export default code
