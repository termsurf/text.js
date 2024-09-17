import { Mark } from '../base'
import marks from './text.json'

export const consonants = marks.filter(x =>
  x.role?.includes('consonant'),
)

export const boundVowels = marks.filter(
  x => x.role?.includes('vowel') && x.role.includes('bound'),
)

export const vowels = marks.filter(
  x => x.role?.includes('vowel') && !x.role.includes('bound'),
)

export const modifiers = marks.filter(x => x.role?.includes('modifier'))

export const punctuations = marks.filter(x =>
  x.role?.includes('punctuation'),
)

export const sounds = marks.filter(x => x.role?.includes('sound'))
