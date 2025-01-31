# Language Features

- Each language has a list of words and their part of speech and
  potentially other features. (Dictionary).
- Wiktionary structured content
  - paragraph
  - list
  - list-item
  - definition-list
  - definition-term
  - definition-value
  - link
  - bold
  - italic
- Frequency of use of words.
- Parsing potentially has a mental context, to help in figuring out the
  meaning of things in the text.
- Pronunciation/phonetics of text.
- Syllable structure.
- Visual look of letters (3 means 'e' in certain contexts).
- Noise in text.
- Misspelling.
- Sentence structure (and dependency relations).
- Punctuation (or lack of it).
- Reading multiple times, back and forth.
- Subword structure (morphological analysis).
- Named entity recognition.
- Idioms and fixed expressions.
- Borrowed words (loan words, multilingual influence).
- Abbreviations / acronyms.
- Mixed language texts.
- Metaphors and figures of speech.

## Processing Text

Somehow in parallel, we are analyzing each of these features. So in a
single-threaded code parse, we need to somehow switch between each mode
to add to our mental model.

- pronounceString()
- visitNextGlyph()
- visitPreviousGlyph()
- visitNextTerm()
- visitPreviousTerm()
- replaySequenceInTemporaryMemory()
- jumpToConception(direction)
- replaceGlyphInTemporaryMemory()
- editStringInTemporaryMemory()
- conceptualizeString()
- addConceptualizationToMemory()
- checkMemoryForString() // search dictionary for string
- checkMemoryForPronunciation()
- playWithStringPronunciation()
- conceptualizeSequence()
- playWithSequenceConceptualization()
