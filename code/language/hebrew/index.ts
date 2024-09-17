import { Map, Mark, build, transform } from '../base'
import marks from './symbols.json'

const boundVowelsToCode = marks
  .filter(x => x.role?.includes('vowel') && x.role.includes('bound'))
  .reduce((m: Map, x: Mark) => {
    m[x.text] = x.code!
    return m
  }, {})

const consonantsToCode = marks
  .filter(x => x.role?.includes('consonant'))
  .reduce((m: Map, x: Mark) => {
    m[x.text] = x.code!
    return m
  }, {})

const punctuationsToCode = marks
  .filter(x => x.role?.includes('punctuation'))
  .reduce((m: Map, x: Mark) => {
    m[x.text] = x.code!
    return m
  }, {})

const modifiersToCode = marks
  .filter(x => x.role?.includes('modifier'))
  .reduce((m: Map, x: Mark) => {
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

const boundVowelsFromCode = marks
  .filter(x => x.role?.includes('vowel') && x.role.includes('bound'))
  .reduce((m: Map, x: Mark) => {
    m[x.code!] = x.text
    return m
  }, {})

const consonantsFromCode = marks
  .filter(x => x.role?.includes('consonant'))
  .reduce((m: Map, x: Mark) => {
    m[x.code!] = x.text
    return m
  }, {})

const punctuationsFromCode = marks
  .filter(x => x.role?.includes('punctuation'))
  .reduce((m: Map, x: Mark) => {
    m[x.code!] = x.text
    return m
  }, {})

const modifiersFromCode = marks
  .filter(x => x.role?.includes('modifier'))
  .reduce((m: Map, x: Mark) => {
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
