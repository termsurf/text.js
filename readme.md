<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<h3 align='center'>@nerdbond/talk</h3>
<p align='center'>
  A tool to convert traditional writing across languages into a normalized form for pronunciation.
</p>

<br/>
<br/>
<br/>

## Welcome

A bunch of utils for transforming traditional orthography into
[Read Text](https://github.com/nerdbond/read), which makes it available
as well for [Tone Text](https://github.com/nerdbond/tone), amongst other
things. Basically thing normalizes the way you write pronunciation, into
a more human readable (and easier to type on the computer) form.

Check out the
[`./code`](https://github.com/nerdbond/link/blob/make/code) folder for
the list of languages we are starting to work on. It's not always
possible to do this across every language, especially on a language like
English, where it is impossible to generate pronunciation based on
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

## License

Copyright 2021-2023 <a href='https://nerd.bond'>NerdBond</a>

Licensed under the Apache License, Version 2.0 (the "License"); you may
not use this file except in compliance with the License. You may obtain
a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## NerdBond

This is being developed by the folks at [NerdBond](https://nerd.bond), a
California-based project for helping humanity master information and
computation. Find us on [Twitter](https://twitter.com/nerdbond),
[LinkedIn](https://www.linkedin.com/company/nerdbond), and
[Facebook](https://www.facebook.com/nerdbond). Check out our other
[GitHub projects](https://github.com/nerdbond) as well!
