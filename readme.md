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

## Table of Languages

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

- Include romanization transliterations of texts in various forms.
- Include pronunciation of words and word parts in Chat text and
  possibly IPA.
- Maybe include
  [keyboard layout data](https://github.com/simple-keyboard/simple-keyboard-layouts)
  for various languages.
- Have structured script data, such as what are the vowels, etc..
- Script detection.

```ts
export type Mark = {
  text: string // traditional text
  code: string // romanized orthography mapping
  talk: string // pronunciation text
  name?: {
    base?: string // Traditional name
    head: string // English
    link: string // Slug English.
  }
  role: Array<string> | string // vowel, punctuation, etc..
}
```

## License

Copyright 2021-2024 <a href='https://term.surf'>TermSurf</a>

Licensed under the Apache License, Version 2.0 (the "License"); you may
not use this file except in compliance with the License. You may obtain
a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## TermSurf

This is being developed by the folks at [TermSurf](https://term.surf), a
California-based project for helping humanity master information and
computation. Find us on [Twitter](https://twitter.com/termsurf),
[LinkedIn](https://www.linkedin.com/company/termsurf), and
[Facebook](https://www.facebook.com/termsurf). Check out our other
[GitHub projects](https://github.com/termsurf) as well!
