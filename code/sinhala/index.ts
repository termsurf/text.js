import { build, transform } from '~/base'

export const consonants = {
  ක: 'ka',
  ඛ: 'kh~a',
  ග: 'ga',
  ඝ: 'gh~a',
  ඞ: 'qa',
  හ: 'ha',
  ච: 'txa',
  ඡ: 'txa',
  ජ: 'dja',
  ඣ: 'dja',
  ඤ: 'ny~a',
  ය: 'ya',
  ශ: 'xa',
  ඥ: 'djny~a',
  ට: 'Ta',
  ඨ: 'Th~a',
  ඩ: 'Da',
  ඪ: 'Da',
  ණ: 'Na',
  ර: 'ra',
  ෂ: 'xa',
  ළ: 'La',
  ත: 'ta',
  ථ: 'ta',
  ද: 'da',
  ධ: 'da',
  න: 'na',
  ල: 'la',
  ස: 'sa',
  ප: 'pa',
  ඵ: 'pa',
  බ: 'ba',
  භ: 'ba',
  ම: 'ma',
  ව: 'Va',
  ෆ: 'fa',
}

export const prenasalizedConsonants = {
  ඟ: 'qga',
  ඦ: 'qdja',
  ඬ: 'qDa',
  ඳ: 'qda',
  ඹ: 'mba',
}

export const vowels = {
  අ: 'a',
  ඇ: 'A',
  ඉ: 'i',
  උ: 'u',
  එ: 'e',
  ඔ: 'o',
}

export const longVowels = {
  ආ: 'a_',
  ඈ: 'A_',
  ඊ: 'i_',
  ඌ: 'u_',
  ඒ: 'e_',
  ඕ: 'o_',
}

export const vowelDiacritics = {
  'ැ': 'a',
  'ි': 'i',
  'ු': 'u',
  'ෙ': 'e',
  'ො': 'o',
}

export const longVowelDiacritics = {
  'ා': 'a_',
  'ෑ': 'A_',
  'ී': 'i_',
  'ූ': 'u_',
  'ේ': 'e_',
  'ෝ': 'o_',
}
