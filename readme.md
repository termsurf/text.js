<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<h3 align='center'>@termsurf/text</h3>
<p align='center'>
  Convert traditional orthography into Latin or pronunciation text.
</p>

<br/>
<br/>
<br/>

## Welcome

Talk is a TypeScript library which does a few things:

1. **Transforms traditional orthography into Latin/Romanized text**,
   calling it ReadText, which maintains a one-to-one correspondence
   between the original script and the Latin script, where possible
   (i.e. not for Chinese, where Pinyin already exists).
2. **Transforms traditional orthography into pronunciation text**,
   calling it TalkText. TalkText can be used to render
   [ToneText](https://github.com/termsurf/tone), which is a unique and
   modern rune-like writing system for pronunciations.

Caveat: It's not always possible to do transform traditional orthography
into pronunciation text across every language, especially on a language
like English, where it is impossible to generate pronunciation based on
written words. You must memorize individual cases in English, and in
some other languages. However, some languages do have the ability to get
pretty close to correct pronunciation based purely on the native
spelling, which is pretty cool. Taking advantage of that fact here!

## Installation

```bash
npm install @termsurf/text
```

## Example

### Detect Script

```ts
import detect from '@termsurf/text/detect'

detect([...'美丽的']) //=> { form: 'chinese', rank: 1 }
```

### Transform Text

For these languages you can currently call `make`:

| language    | status |
| :---------- | :----- |
| akkadian    | ✔      |
| arabic      | ✔      |
| chinese     | ✔      |
| coptic      | ✔      |
| devanagari  | ✔      |
| finnish     | ✔      |
| french      | ✔      |
| geez        | ✔      |
| georgian    | ✔      |
| gothic      | ✔      |
| gujarati    | ✔      |
| gurmukhi    | ✔      |
| hebrew      | 🔧     |
| irish       | 🔧     |
| italian     | 🔧     |
| japanese    | 🔧     |
| kannada     | 🔧     |
| korean      | 🔧     |
| latin       | 🔧     |
| malayalam   | 🔧     |
| navajo      | 🔧     |
| old-norse   | 🔧     |
| old-persian | 🔧     |
| oriya       | 🔧     |
| pali        | 🔧     |
| runic       | 🔧     |
| swahili     | 🔧     |
| tamil       | 🔧     |
| telugu      | 🔧     |
| thai        | 🔧     |
| tibetan     | 🔧     |
| turkish     | 🔧     |
| ugaritic    | 🔧     |
| vietnamese  | 🔧     |
| welsh       | 🔧     |

#### Arabic

```ts
import make, {
  symbols,
  vowels,
  boundVowels,
  consonants,
} from '@termsurf/text/system/arabic'

make('جَمِيل') //=> "djami_l"

vowels.forEach(console.log)
```

#### Chinese

```ts
import make from '@termsurf/text/system/chinese'

make('měi lì de') //=> "me\\/i li\\ tO"
```

## Derivable Pronunciations

Here is a table explaining which languages we've looked at so far which
can and can't have pronunciations automatically done.

| language           | automatic                                                      | note                                                                                                                                                                                                    |
| :----------------- | :------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Chinese (Mandarin) | yes but not perfect                                            | Pinyin can be used to auto generate pronunciations, but it doesn't always accurately reflect how people actually say each word, so it would be better to manually write each pronunciation if possible. |
| Korean             | yes but not perfect                                            |                                                                                                                                                                                                         |
| Sanskrit           | yes                                                            | With Devanagari, each sound has an exact pronunciation in Sanskrit, so we can get pretty close to exact pronunciations automatically done.                                                              |
| Finnish            | yes                                                            |                                                                                                                                                                                                         |
| Navajo             | yes                                                            | Since it was fairly recently transcribed intoa Latin alphabet, it is phonetic for the most part.                                                                                                        |
| Akkadian           | yes                                                            | Because it is no longer spoken, we have at least a standard way f representing things.                                                                                                                  |
| Spanish            | yes                                                            | Because it is no longer spoken, we have at least a standard way f representing things.                                                                                                                  |
| Hebrew             | partially yes, but only for consonants unless diacritics given |                                                                                                                                                                                                         |
| Arabic             | partially yes, but only for consonants unless diacritics given |                                                                                                                                                                                                         |
| English            | no                                                             | Too many words need to have pronunciation memorized.                                                                                                                                                    |
| Tibetan            | no                                                             | Modern Tibetan has evolved to where the script no longer is phonetic.                                                                                                                                   |
| Vietnamese         | no                                                             |                                                                                                                                                                                                         |

## Goals

- [x] Script detection.
- [ ] Romanization transliterations of scripts/languages in various
      forms.
- [ ] Structured script data, such as what are the vowels, etc..
- [ ] [Keyboard layout data](https://github.com/simple-keyboard/simple-keyboard-layouts)
      for various languages.

## License

MIT

## TermSurf

This is being developed by the folks at [TermSurf](https://term.surf), a
California-based project for helping humanity master information and
computation. Find us on [Twitter](https://twitter.com/termsurf),
[LinkedIn](https://www.linkedin.com/company/termsurf), and
[Facebook](https://www.facebook.com/termsurf). Check out our other
[GitHub projects](https://github.com/termsurf) as well!
