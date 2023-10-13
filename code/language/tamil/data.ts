import * as source from '.'

export const legend = {
  iso: {
    title: 'ISO 15919',
    url: 'https://en.wikipedia.org/wiki/ISO_15919',
  },
  wikipedia: {
    url: 'https://en.wikipedia.org/wiki/Tamil_script',
  },
}

export const consonants = [
  {
    symbol: 'க்',
    chat: source.consonants['க'],
    iso: 'k',
    type: 'vallinam',
    ipa: 'k',
  },
  {
    symbol: 'ங்',
    chat: source.consonants['ங'],
    iso: 'ṅ',
    type: 'mellinam',
    ipa: 'ŋ',
  },
  {
    symbol: 'ச்',
    chat: source.consonants['ச'],
    iso: 'c',
    type: 'vallinam',
    ipa: 't͡ʃ, s',
  },
  {
    symbol: 'ஞ்',
    chat: source.consonants['ஞ'],
    iso: 'ñ',
    type: 'mellinam',
    ipa: 'ɲ',
  },
  {
    symbol: 'ட்',
    chat: source.consonants['ட'],
    iso: 'ṭ',
    type: 'vallinam',
    ipa: 'ʈ',
  },
  {
    symbol: 'ண்',
    chat: source.consonants['ண'],
    iso: 'ṇ',
    type: 'mellinam',
    ipa: 'ɳ',
  },
  {
    symbol: 'த்',
    chat: source.consonants['த'],
    iso: 't',
    type: 'vallinam',
    ipa: 't̪',
  },
  {
    symbol: 'ந்',
    chat: source.consonants['ந'],
    iso: 'n',
    type: 'mellinam',
    ipa: 'n̪',
  },
  {
    symbol: 'ப்',
    chat: source.consonants['ப'],
    iso: 'p',
    type: 'vallinam',
    ipa: 'p',
  },
  {
    symbol: 'ம்',
    chat: source.consonants['ம'],
    iso: 'm',
    type: 'mellinam',
    ipa: 'm',
  },
  {
    symbol: 'ய்',
    chat: source.consonants['ய'],
    iso: 'y',
    type: 'idaiyinam',
    ipa: 'j',
  },
  {
    symbol: 'ர்',
    chat: source.consonants['ர'],
    iso: 'r',
    type: 'idaiyinam',
    ipa: 'ɾ',
  },
  {
    symbol: 'ல்',
    chat: source.consonants['ல'],
    iso: 'l',
    type: 'idaiyinam',
    ipa: 'l',
  },
  {
    symbol: 'வ்',
    chat: source.consonants['வ'],
    iso: 'v',
    type: 'idaiyinam',
    ipa: 'ʋ',
  },
  {
    symbol: 'ழ்',
    chat: source.consonants['ழ'],
    iso: 'ḻ',
    type: 'idaiyinam',
    ipa: 'ɻ',
  },
  {
    symbol: 'ள்',
    chat: source.consonants['ள'],
    iso: 'ḷ',
    type: 'idaiyinam',
    ipa: 'ɭ',
  },
  {
    symbol: 'ற்',
    chat: source.consonants['ற'],
    iso: 'ṟ',
    type: 'vallinam',
    ipa: 'r',
  },
  {
    symbol: 'ன்',
    chat: source.consonants['ன'],
    iso: 'ṉ',
    type: 'mellinam',
    ipa: 'n',
  },
]

export const granthaConsonants = [
  { symbol: 'ஜ்', chat: source.consonants['ஜ'], iso: 'j', ipa: 'd͡ʒ' },
  { symbol: 'ஶ்', chat: source.consonants['ஶ'], iso: 'ś', ipa: 'ʃ' },
  { symbol: 'ஷ்', chat: source.consonants['ஷ'], iso: 'ṣ', ipa: 'ʂ' },
  { symbol: 'ஸ்', chat: source.consonants['ஸ'], iso: 's', ipa: 's' },
  { symbol: 'ஹ்', chat: source.consonants['ஹ'], iso: 'h', ipa: 'h' },
  {
    symbol: 'க்ஷ்',
    chat: source.consonants['க்ஷ'],
    iso: 'kṣ',
    ipa: 'kʂ',
  },
]
