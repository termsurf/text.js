<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<h3 align='center'>@cluesurf/text</h3>
<p align='center'>
  Convert traditional orthography into Latin or pronunciation text.
</p>

<br/>
<br/>
<br/>

## Welcome

**Text** is a TypeScript library which **transforms traditional
orthography into Latin/Romanized text**, using the
[Talk](https://github.com/cluesurf/talk) spec. TalkText can be used to
render [Tone](https://github.com/cluesurf/tone), which is a unique and
modern rune-like writing system for pronunciations.

_Caveat: It's not always possible to do transform traditional
orthography into pronunciation text across every language, especially on
a language like English, where it is impossible to generate
pronunciation based on written words. You must memorize individual cases
in English, and in some other languages. However, some languages do have
the ability to get pretty close to correct pronunciation based purely on
the native spelling, which is pretty cool. Taking advantage of that fact
here!_

## Goals

- [x] Script detection.
- [ ] Romanization transliterations of scripts/languages in various
      forms.
- [ ] Structured script data, such as what are the vowels, etc..
- [ ] [Keyboard layout data](https://github.com/simple-keyboard/simple-keyboard-layouts)
      for various languages.

## Installation

```bash
npm install @cluesurf/text
```

## Examples

Here are some API examples.

### Detect Script

```ts
import detect from '@cluesurf/text/detect'

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
} from '@cluesurf/text/arabic'

make('جَمِيل') //=> "djami_l"

vowels.forEach(console.log)
```

#### Chinese

```ts
import make from '@cluesurf/text/chinese'

make('měi lì de') //=> "me\\/i li\\ tO"
```

#### Tibetan

```ts
import toWylie from '@cluesurf/text/tibetan/wylie/to'
import fromWylie from '@cluesurf/text/tibetan/wylie/from'

toWylie('རིག་པ་') //=> "rig pa"
fromWylie('rig pa') //=> "རིག་པ"
```

## Integrations

### Talk

Take the generated [TalkText](https://github.com/cluesurf/talk) (the
ASCII output from the base `make` calls), and convert it into a more
compact, human readable, "simplified" form.

```ts
import talk from '@cluesurf/talk'

talk('rIg ph~a') //=> "ṙịg pɦa"
```

### Tone

Take the generated [TalkText](https://github.com/cluesurf/talk) and
convert it into a format compatible with
[ToneText](https://github.com/cluesurf/tone) fonts.

```ts
import talk from '@cluesurf/text/chinese'
import tone from '@cluesurf/tone'

tone(talk('měi lì de')) //=> "me8i li6 tO"
```

...which is [rendered](https://tone.surf) as:

<p align='center'>
  <img src="https://github.com/cluesurf/text.js/blob/make/view/tone-example.png?raw=true" width="360" />
</p>

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

## Inspiration

- https://github.com/microsoft/Tokenizer/tree/main/tokenizer_ts

## License

MIT

## ClueSurf

This is being developed by the folks at [ClueSurf](https://clue.surf), a
California-based project for helping humanity master information and
computation. Find us on [Twitter](https://twitter.com/cluesurf),
[LinkedIn](https://www.linkedin.com/company/cluesurf), and
[Facebook](https://www.facebook.com/cluesurf). Check out our other
[GitHub projects](https://github.com/cluesurf) as well!
