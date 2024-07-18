import { Mark } from '../base'
import marks from './marks.json'

export const consonants = marks.filter(x =>
  x.role?.includes('consonant'),
)

export const boundVowels = marks.filter(
  x => x.role?.includes('vowel') && x.role.includes('bound'),
)

export const modifiers = marks.filter(x => x.role?.includes('modifier'))

export const punctuations = marks.filter(x =>
  x.role?.includes('punctuation'),
)
