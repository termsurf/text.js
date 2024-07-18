import { Map, Mark, build, transform } from '../base'
import * as groups from './groups'

const boundVowelsToCode = groups.boundVowels.reduce(
  (m: Map, x: Mark) => {
    m[x.text] = x.code!
    return m
  },
  {},
)

const consonantsToCode = groups.consonants.reduce((m: Map, x: Mark) => {
  m[x.text] = x.code!
  return m
}, {})

const punctuationsToCode = groups.punctuations.reduce(
  (m: Map, x: Mark) => {
    m[x.text] = x.code!
    return m
  },
  {},
)

const modifiersToCode = groups.modifiers.reduce((m: Map, x: Mark) => {
  m[x.text] = x.code!
  return m
}, {})

const mapToCode: Map = {
  ...boundVowelsToCode,
  ...consonantsToCode,
  ...punctuationsToCode,
  ...modifiersToCode,
}

const treeToCode = build(mapToCode)

export const to = (t: string) => transform(t, treeToCode, mapToCode)

const boundVowelsFromCode = groups.boundVowels.reduce(
  (m: Map, x: Mark) => {
    m[x.code!] = x.text
    return m
  },
  {},
)

const consonantsFromCode = groups.consonants.reduce(
  (m: Map, x: Mark) => {
    m[x.code!] = x.text
    return m
  },
  {},
)

const punctuationsFromCode = groups.punctuations.reduce(
  (m: Map, x: Mark) => {
    m[x.code!] = x.text
    return m
  },
  {},
)

const modifiersFromCode = groups.modifiers.reduce((m: Map, x: Mark) => {
  m[x.code!] = x.text
  return m
}, {})

const mapFromCode: Map = {
  ...boundVowelsFromCode,
  ...consonantsFromCode,
  ...punctuationsFromCode,
  ...modifiersFromCode,
}

const treeFromCode = build(mapFromCode)

export const from = (t: string) =>
  transform(t, treeFromCode, mapFromCode)
