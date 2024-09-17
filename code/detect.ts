export type Block = [number, number]

export type Text =
  | 'arabic'
  | 'armenian'
  | 'avestan'
  | 'bengali'
  | 'burmese'
  | 'chinese'
  | 'coptic'
  | 'cuneiform'
  | 'cyrillic'
  | 'devanagari'
  | 'egyptian'
  | 'geez'
  | 'georgian'
  | 'gothic'
  | 'greek'
  | 'gujarati'
  | 'gurmukhi'
  | 'hebrew'
  | 'japanese'
  | 'javanese'
  | 'kannada'
  | 'khmer'
  | 'korean'
  | 'latin'
  | 'malayalam'
  | 'mongolian'
  | 'oriya'
  | 'sinhala'
  | 'sundanese'
  | 'syllabics'
  | 'syriac'
  | 'tamil'
  | 'telugu'
  | 'thai'
  | 'tibetan'
  | 'tifinagh'
  | 'aramaic'
  | 'balinese'
  | 'bopomofo'
  | 'buginese'
  | 'cherokee'
  | 'grantha'
  | 'lao'
  | 'lepcha'
  | 'linear-a'
  | 'linear-b'
  | 'makasar'
  | 'mandaic'
  | 'modi'
  | 'ogham'
  | 'osage'
  | 'phoenician'
  | 'runic'
  | 'baybayin'

export const ARAMAIC_UNICODE_BLOCKS: Array<Block> = [[0x10840, 0x1085f]]
export const BALINESE_UNICODE_BLOCKS: Array<Block> = [[0x1b00, 0x1b7f]]
export const BOPOMOFO_UNICODE_BLOCKS: Array<Block> = [[0x3100, 0x312f]]
export const BUGINESE_UNICODE_BLOCKS: Array<Block> = [[0x1a00, 0x1a1f]]
export const CHEROKEE_UNICODE_BLOCKS: Array<Block> = [[0x13a0, 0x13ff]]
export const GRANTHA_UNICODE_BLOCKS: Array<Block> = [[0x11300, 0x1137f]]
export const LAO_UNICODE_BLOCKS: Array<Block> = [[0x0e80, 0x0eff]]
export const LEPCHA_UNICODE_BLOCKS: Array<Block> = [[0x1c00, 0x1c4f]]
export const LINEAR_A_UNICODE_BLOCKS: Array<Block> = [
  [0x10600, 0x1077f],
]
export const LINEAR_B_UNICODE_BLOCKS: Array<Block> = [
  [0x10000, 0x1007f],
]
export const MAKASAR_UNICODE_BLOCKS: Array<Block> = [[0x11ee0, 0x11eff]]
export const MANDAIC_UNICODE_BLOCKS: Array<Block> = [[0x0840, 0x085f]]
export const MODI_UNICODE_BLOCKS: Array<Block> = [[0x11600, 0x1165f]]
export const OGHAM_UNICODE_BLOCKS: Array<Block> = [[0x1680, 0x169f]]
export const OSAGE_UNICODE_BLOCKS: Array<Block> = [[0x104b0, 0x104ff]]
export const PHOENICIAN_UNICODE_BLOCKS: Array<Block> = [
  [0x10900, 0x1091f],
]
export const RUNIC_UNICODE_BLOCKS: Array<Block> = [[0x16a0, 0x16ff]]
export const BAYBAYIN_UNICODE_BLOCKS: Array<Block> = [[0x1700, 0x171f]]

// https://github.com/Xotic750/white-space-x/blob/master/src/white-space-x.js

export const CHINESE_UNICODE_BLOCKS: Array<Block> = [
  [0x3400, 0x4db5],
  [0x4e00, 0x62ff],
  [0x6300, 0x77ff],
  [0x7800, 0x8cff],
  [0x8d00, 0x9fcc],
  [0x2e80, 0x2fd5],
  [0x3190, 0x319f],
  [0x3400, 0x4dbf],
  [0x4e00, 0x9fcc],
  [0xf900, 0xfaad],
  [0x20000, 0x215ff],
  [0x21600, 0x230ff],
  [0x23100, 0x245ff],
  [0x24600, 0x260ff],
  [0x26100, 0x275ff],
  [0x27600, 0x290ff],
  [0x29100, 0x2a6df],
  [0x2a700, 0x2b73f],
  [0x2b740, 0x2b81f],
  [0x2b820, 0x2ceaf],
  [0x2ceb0, 0x2ebef],
  [0x30000, 0x3134f],
  [0x31350, 0x323af],
]

export const JAPANESE_UNICODE_BLOCKS: Array<Block> = [
  [0x3041, 0x3096],
  [0x30a0, 0x30ff],
  [0x3400, 0x4db5],
  [0x4e00, 0x9fcb],
  [0xf900, 0xfa6a],
  [0x2e80, 0x2fd5],
  [0xff5f, 0xff9f],
  [0x3000, 0x303f],
  [0x31f0, 0x31ff],
  [0x3220, 0x3243],
  [0x3280, 0x337f],
  [0xff01, 0xff5e],
]

export const LATIN_UNICODE_BLOCKS: Array<Block> = [
  [0x0000, 0x007f],
  [0x0080, 0x00ff],
  [0x0100, 0x017f],
  [0x0180, 0x024f],
  [0x0250, 0x02af],
  [0x02b0, 0x02ff],
  [0x1d00, 0x1d7f],
  [0x1d80, 0x1dbf],
  [0x1e00, 0x1eff],
  [0x2070, 0x209f],
  [0x2100, 0x214f],
  [0x2150, 0x218f],
  [0x2c60, 0x2c7f],
  [0xa720, 0xa7ff],
  [0xab30, 0xab6f],
  [0xfb00, 0xfb4f],
  [0xff00, 0xffef],
  [0x10780, 0x107bf],
  [0x1df00, 0x1dfff],
]

export const THAI_UNICODE_BLOCKS: Array<Block> = [[0x0e00, 0x0e7f]]
export const COPTIC_UNICODE_BLOCKS: Array<Block> = [[0x2c80, 0x2cff]]
export const GOTHIC_UNICODE_BLOCKS: Array<Block> = [[0x10330, 0x1034f]]
export const GUJARATI_UNICODE_BLOCKS: Array<Block> = [[0x0a80, 0x0aff]]
export const GEORGIAN_UNICODE_BLOCKS: Array<Block> = [[0x10a0, 0x10ff]]
export const GURMUKHI_UNICODE_BLOCKS: Array<Block> = [[0x0a00, 0x0a7f]]
export const SYLLABICS_UNICODE_BLOCKS: Array<Block> = [[0x1400, 0x167f]]
export const KANNADA_UNICODE_BLOCKS: Array<Block> = [[0x0c80, 0x0cff]]
export const KOREAN_UNICODE_BLOCKS: Array<Block> = [[0xac00, 0xd7a3]]
export const ORIYA_UNICODE_BLOCKS: Array<Block> = [[0x0b00, 0x0b7f]]
export const TELUGU_UNICODE_BLOCKS: Array<Block> = [[0x0c00, 0x0c7f]]
export const ARMENIAN_UNICODE_BLOCKS: Array<Block> = [[0x0530, 0x058f]]
export const GEEZ_UNICODE_BLOCKS: Array<Block> = [[0x1200, 0x137f]]
export const AVESTAN_UNICODE_BLOCKS: Array<Block> = [[0x10b00, 0x10b3f]]
export const CUNEIFORM_UNICODE_BLOCKS: Array<Block> = [
  [0x12000, 0x123ff],
]
export const BENGALI_UNICODE_BLOCKS: Array<Block> = [[0x0980, 0x09ff]]
export const BURMESE_UNICODE_BLOCKS: Array<Block> = [[0x1000, 0x109f]]
export const JAVANESE_UNICODE_BLOCKS: Array<Block> = [[0xa980, 0xa9df]]
export const KHMER_UNICODE_BLOCKS: Array<Block> = [[0x1780, 0x17ff]]
export const MONGOLIAN_UNICODE_BLOCKS: Array<Block> = [[0x1800, 0x18af]]
export const SINHALA_UNICODE_BLOCKS: Array<Block> = [[0x0d80, 0x0dff]]
export const SUNDANESE_UNICODE_BLOCKS: Array<Block> = [[0x1b80, 0x1bbf]]
export const SYRIAC_UNICODE_BLOCKS: Array<Block> = [[0x0700, 0x074f]]
export const TIFINAGH_UNICODE_BLOCKS: Array<Block> = [[0x2d30, 0x2d7f]]
export const EGYPTIAN_UNICODE_BLOCKS: Array<Block> = [
  [0x13000, 0x1342f],
]

// thai
// coptic
// gothic
// gujarati
// georgian
// gurmukhi
// syllabics
// kannada
// korean
// oriya
// telugu
// turkish
// armenian
// geez
// avestan
// cuneiform
// bengali
// burmese
// javanese
// khmer
// mongolian
// sinhala
// sundanese
// syriac
// tifinagh
// egyptian

export const DEVANAGARI_UNICODE_BLOCKS: Array<Block> = [
  [0x0900, 0x097f],
]

export const ARABIC_UNICODE_BLOCKS: Array<Block> = [
  [0x0600, 0x06ff],
  [0x0750, 0x077f],
  [0x0870, 0x089f],
  [0x08a0, 0x08ff],
  [0xfb50, 0xfdff],
  [0xfe70, 0xfeff],
  [0x10e60, 0x10e7f],
  [0x1ec70, 0x1ecbf],
  [0x1ed00, 0x1ed4f],
  [0x1ee00, 0x1eeff],
]

export const TIBETAN_UNICODE_BLOCKS: Array<Block> = [[0x0f00, 0x0fff]]
export const TIBETAN_UNICODE_BLOCKS_MISSING: Array<Block> = [
  [0x0f48, 0x0f48],
  [0x0f6d, 0x0f70],
  [0x0f98, 0x0f98],
  [0x0fbd, 0x0fbd],
  [0x0fcd, 0x0fcd],
  [0x0fdb, 0x0fff],
]

export const GREEK_UNICODE_BLOCKS: Array<Block> = [
  [0x0370, 0x03ff],
  [0x1d00, 0x1d7f],
  [0x1d80, 0x1dbf],
  [0x1f00, 0x1fff],
  [0x2100, 0x214f],
  [0xab30, 0xab6f],
  [0x10140, 0x1018f],
  [0x10190, 0x101cf],
  [0x1d200, 0x1d24f],
]

export const TAMIL_UNICODE_BLOCKS: Array<Block> = [[0x0b80, 0x0bff]]

export const CYRILLIC_UNICODE_BLOCKS: Array<Block> = [
  [0x0400, 0x04ff],
  [0x0500, 0x052f],
  [0x2de0, 0x2dff],
  [0xa640, 0xa69f],
  [0x1c80, 0x1c8f],
  [0x1d2b, 0x1d78],
  [0xfe2e, 0xfe2f],
]

export const HEBREW_UNICODE_BLOCKS: Array<Block> = [[0x0590, 0x05ff]]

export const MALAYALAM_UNICODE_BLOCKS: Array<Block> = [[0x0d00, 0x0d7f]]

export default function detect(characters: Array<string>) {
  const possibilities = measure(characters)

  let maxPair: [null | string, number] = [null, 0]
  let sum = 0

  Object.keys(possibilities).forEach(form => {
    const mark = possibilities[form]

    if (
      mark != null &&
      maxPair[1] != null &&
      maxPair[1] < mark &&
      form !== 'other'
    ) {
      sum += mark
      maxPair[0] = form
      maxPair[1] = mark
    }
  })

  return { form: maxPair[0], rank: maxPair[1] / sum }
}

export function measure(characters: Array<string>) {
  const possibilities: Record<string, number> = {}

  for (const character of characters) {
    const form = detectSymbol(character)
    add(possibilities, form)
  }

  return possibilities
}

export function detectSymbol(character: string): Text | 'other' {
  if (isLatin(character)) {
    return 'latin'
  } else if (isChinese(character)) {
    return 'chinese'
  } else if (isJapanese(character)) {
    return 'japanese'
  } else if (isDevanagari(character)) {
    return 'devanagari'
  } else if (isHebrew(character)) {
    return 'hebrew'
  } else if (isTamil(character)) {
    return 'tamil'
  } else if (isGreek(character)) {
    return 'greek'
  } else if (isTibetan(character)) {
    return 'tibetan'
  } else if (isArabic(character)) {
    return 'arabic'
  } else if (isCyrillic(character)) {
    return 'cyrillic'
  } else if (isMalayalam(character)) {
    return 'malayalam'
  } else if (isThai(character)) {
    return 'thai'
  } else if (isCoptic(character)) {
    return 'coptic'
  } else if (isGothic(character)) {
    return 'gothic'
  } else if (isGujarati(character)) {
    return 'gujarati'
  } else if (isGeorgian(character)) {
    return 'georgian'
  } else if (isGurmukhi(character)) {
    return 'gurmukhi'
  } else if (isSyllabics(character)) {
    return 'syllabics'
  } else if (isKannada(character)) {
    return 'kannada'
  } else if (isKorean(character)) {
    return 'korean'
  } else if (isOriya(character)) {
    return 'oriya'
  } else if (isTelugu(character)) {
    return 'telugu'
  } else if (isArmenian(character)) {
    return 'armenian'
  } else if (isGeez(character)) {
    return 'geez'
  } else if (isAvestan(character)) {
    return 'avestan'
  } else if (isCuneiform(character)) {
    return 'cuneiform'
  } else if (isBengali(character)) {
    return 'bengali'
  } else if (isBurmese(character)) {
    return 'burmese'
  } else if (isJavanese(character)) {
    return 'javanese'
  } else if (isKhmer(character)) {
    return 'khmer'
  } else if (isMongolian(character)) {
    return 'mongolian'
  } else if (isSinhala(character)) {
    return 'sinhala'
  } else if (isSundanese(character)) {
    return 'sundanese'
  } else if (isSyriac(character)) {
    return 'syriac'
  } else if (isTifinagh(character)) {
    return 'tifinagh'
  } else if (isEgyptian(character)) {
    return 'egyptian'
  } else if (isAramaic(character)) {
    return 'aramaic'
  } else if (isBalinese(character)) {
    return 'balinese'
  } else if (isBopomofo(character)) {
    return 'bopomofo'
  } else if (isBuginese(character)) {
    return 'buginese'
  } else if (isCherokee(character)) {
    return 'cherokee'
  } else if (isGrantha(character)) {
    return 'grantha'
  } else if (isLao(character)) {
    return 'lao'
  } else if (isLepcha(character)) {
    return 'lepcha'
  } else if (isLinearA(character)) {
    return 'linear-a'
  } else if (isLinearB(character)) {
    return 'linear-b'
  } else if (isMakasar(character)) {
    return 'makasar'
  } else if (isMandaic(character)) {
    return 'mandaic'
  } else if (isModi(character)) {
    return 'modi'
  } else if (isOgham(character)) {
    return 'ogham'
  } else if (isOsage(character)) {
    return 'osage'
  } else if (isPhoenician(character)) {
    return 'phoenician'
  } else if (isRunic(character)) {
    return 'runic'
  } else if (isBaybayin(character)) {
    return 'baybayin'
  } else {
    return 'other'
  }
}

export function isHebrew(character: string) {
  return isWithinRange(HEBREW_UNICODE_BLOCKS, character)
}

export function isCyrillic(character: string) {
  return isWithinRange(CYRILLIC_UNICODE_BLOCKS, character)
}

export function isArabic(character: string) {
  return isWithinRange(ARABIC_UNICODE_BLOCKS, character)
}

export function isMalayalam(character: string) {
  return isWithinRange(MALAYALAM_UNICODE_BLOCKS, character)
}

export function isTibetan(character: string) {
  return isWithinRange(TIBETAN_UNICODE_BLOCKS, character)
}

export function isGreek(character: string) {
  return isWithinRange(GREEK_UNICODE_BLOCKS, character)
}

export function isTamil(character: string) {
  return isWithinRange(TAMIL_UNICODE_BLOCKS, character)
}

export function isDevanagari(character: string) {
  return isWithinRange(DEVANAGARI_UNICODE_BLOCKS, character)
}

export function isJapanese(character: string) {
  return isWithinRange(JAPANESE_UNICODE_BLOCKS, character)
}

export function isLatin(character: string) {
  return isWithinRange(LATIN_UNICODE_BLOCKS, character)
}

export function isChinese(character: string) {
  return isWithinRange(CHINESE_UNICODE_BLOCKS, character)
}

export function isThai(character: string) {
  return isWithinRange(THAI_UNICODE_BLOCKS, character)
}

export function isCoptic(character: string) {
  return isWithinRange(COPTIC_UNICODE_BLOCKS, character)
}

export function isGothic(character: string) {
  return isWithinRange(GOTHIC_UNICODE_BLOCKS, character)
}

export function isGujarati(character: string) {
  return isWithinRange(GUJARATI_UNICODE_BLOCKS, character)
}

export function isGeorgian(character: string) {
  return isWithinRange(GEORGIAN_UNICODE_BLOCKS, character)
}

export function isGurmukhi(character: string) {
  return isWithinRange(GURMUKHI_UNICODE_BLOCKS, character)
}

export function isSyllabics(character: string) {
  return isWithinRange(SYLLABICS_UNICODE_BLOCKS, character)
}

export function isKannada(character: string) {
  return isWithinRange(KANNADA_UNICODE_BLOCKS, character)
}

export function isKorean(character: string) {
  return isWithinRange(KOREAN_UNICODE_BLOCKS, character)
}

export function isOriya(character: string) {
  return isWithinRange(ORIYA_UNICODE_BLOCKS, character)
}

export function isTelugu(character: string) {
  return isWithinRange(TELUGU_UNICODE_BLOCKS, character)
}

export function isArmenian(character: string) {
  return isWithinRange(ARMENIAN_UNICODE_BLOCKS, character)
}

export function isGeez(character: string) {
  return isWithinRange(GEEZ_UNICODE_BLOCKS, character)
}

export function isAvestan(character: string) {
  return isWithinRange(AVESTAN_UNICODE_BLOCKS, character)
}

export function isCuneiform(character: string) {
  return isWithinRange(CUNEIFORM_UNICODE_BLOCKS, character)
}

export function isBengali(character: string) {
  return isWithinRange(BENGALI_UNICODE_BLOCKS, character)
}

export function isBurmese(character: string) {
  return isWithinRange(BURMESE_UNICODE_BLOCKS, character)
}

export function isJavanese(character: string) {
  return isWithinRange(JAVANESE_UNICODE_BLOCKS, character)
}

export function isKhmer(character: string) {
  return isWithinRange(KHMER_UNICODE_BLOCKS, character)
}

export function isMongolian(character: string) {
  return isWithinRange(MONGOLIAN_UNICODE_BLOCKS, character)
}

export function isSinhala(character: string) {
  return isWithinRange(SINHALA_UNICODE_BLOCKS, character)
}

export function isSundanese(character: string) {
  return isWithinRange(SUNDANESE_UNICODE_BLOCKS, character)
}

export function isSyriac(character: string) {
  return isWithinRange(SYRIAC_UNICODE_BLOCKS, character)
}

export function isTifinagh(character: string) {
  return isWithinRange(TIFINAGH_UNICODE_BLOCKS, character)
}

export function isEgyptian(character: string) {
  return isWithinRange(EGYPTIAN_UNICODE_BLOCKS, character)
}

export function isAramaic(character: string) {
  return isWithinRange(ARAMAIC_UNICODE_BLOCKS, character)
}

export function isBalinese(character: string) {
  return isWithinRange(BALINESE_UNICODE_BLOCKS, character)
}

export function isBopomofo(character: string) {
  return isWithinRange(BOPOMOFO_UNICODE_BLOCKS, character)
}

export function isBuginese(character: string) {
  return isWithinRange(BUGINESE_UNICODE_BLOCKS, character)
}

export function isCherokee(character: string) {
  return isWithinRange(CHEROKEE_UNICODE_BLOCKS, character)
}

export function isGrantha(character: string) {
  return isWithinRange(GRANTHA_UNICODE_BLOCKS, character)
}

export function isLao(character: string) {
  return isWithinRange(LAO_UNICODE_BLOCKS, character)
}

export function isLepcha(character: string) {
  return isWithinRange(LEPCHA_UNICODE_BLOCKS, character)
}

export function isLinearA(character: string) {
  return isWithinRange(LINEAR_A_UNICODE_BLOCKS, character)
}

export function isLinearB(character: string) {
  return isWithinRange(LINEAR_B_UNICODE_BLOCKS, character)
}

export function isMakasar(character: string) {
  return isWithinRange(MAKASAR_UNICODE_BLOCKS, character)
}

export function isMandaic(character: string) {
  return isWithinRange(MANDAIC_UNICODE_BLOCKS, character)
}

export function isModi(character: string) {
  return isWithinRange(MODI_UNICODE_BLOCKS, character)
}

export function isOgham(character: string) {
  return isWithinRange(OGHAM_UNICODE_BLOCKS, character)
}

export function isOsage(character: string) {
  return isWithinRange(OSAGE_UNICODE_BLOCKS, character)
}

export function isPhoenician(character: string) {
  return isWithinRange(PHOENICIAN_UNICODE_BLOCKS, character)
}

export function isRunic(character: string) {
  return isWithinRange(RUNIC_UNICODE_BLOCKS, character)
}

export function isBaybayin(character: string) {
  return isWithinRange(BAYBAYIN_UNICODE_BLOCKS, character)
}

function isWithinRange(blocks: Array<Block>, character: string) {
  return blocks.some(([start, end]) => {
    const code = character.codePointAt(0)
    return Boolean(code && code >= start && code <= end)
  })
}

function add(possibilities: Record<string, number>, type: string) {
  possibilities[type] = possibilities[type] ?? 0
  possibilities[type]++
}
