# Tokenization

## NLP Tokenization Techniques

The primary cutting-edge tokenization algorithms for text processing in
NLP fall into a few main categories.

1. Subword Tokenization
2. Character-Level Tokenization
3. Token-Free Tokenization
4. Adaptive Tokenization
5. Neural Tokenization

#### Subword Tokenization

These techniques break words into subwords or morphemes to balance
vocabulary size and model generalization.

- **Byte-Pair Encoding (BPE)**: Used in GPT, RoBERTa, and OpenNMT.

  - Iteratively merges the most frequent adjacent character pairs to
    create subwords.
  - Reduces vocabulary size while keeping rare words understandable.

- **WordPiece**: Used in BERT, ALBERT, and T5.

  - Similar to BPE but uses a likelihood-based approach to merge
    subwords.
  - Produces more optimal tokenization for pretrained models.

- **Unigram Language Model**: Used in SentencePiece and T5.

  - Instead of merging pairs, it assigns probabilities to possible token
    splits and finds the best segmentation.
  - Often leads to more flexible and compressed tokenization.

- **Morfessor**: Unsupervised morphological segmentation.
  - Splits words into meaningful morphemes based on statistical models.
  - Useful for morphologically rich languages like Finnish or Turkish.

#### Character-Level Tokenization

These methods keep all input as individual characters, offering a robust
method for out-of-vocabulary (OOV) words.

- **Character CNNs/RNNs**: Used in CharCNN and early LSTM models.

  - Encodes words as sequences of characters processed by convolutional
    or recurrent layers.
  - Robust to misspellings and new words but slower in sequence length.

- **Byte-Level BPE**: Used in GPT-3 and T5 (via SentencePiece).
  - Processes text at the byte level instead of Unicode characters.
  - Helps models handle multiple languages and special characters
    efficiently.

#### Token-Free Tokenization

Instead of explicit token splitting, these models process text directly
at the byte level.

- **ByT5**: Google's byte-level Transformer.

  - Operates directly on UTF-8 bytes instead of words or subwords.
  - Great for multilingual applications but increases sequence length.

- **CANINE**: Character-aware pretraining method.
  - Uses character embeddings instead of subwords.
  - Effective for low-resource languages.

#### Adaptive Tokenization

These models dynamically adjust tokenization based on context or
training data.

- **T5's Adaptive Span Tokenizer**: Learns tokenization strategies based
  on input distribution.

  - Reduces sequence length adaptively for efficiency.

- **Meta AI’s MegaByte**: Hybrid byte and token-based tokenization.
  - Combines byte-level input processing with token-based models.
  - Improves scalability for long sequences.

#### Neural Tokenization

Instead of using fixed rules, these models use neural networks to learn
optimal tokenization.

- **BERT2BERT Tokenization**: Uses a Transformer to predict token
  boundaries.
  - Learns how to tokenize dynamically based on training data.
- **Charformer**: Google’s gradient-based subword tokenization.
  - Instead of explicit tokenization, it uses a Transformer to create
    subword embeddings.
  - Optimized for speed and efficiency.

#### Which One is Best?

- **BPE & WordPiece**: General-purpose NLP (GPT, BERT, etc.)
- **Unigram LM**: More flexible segmentation (T5, SentencePiece)
- **Character/Byte-Level**: Extreme robustness (ByT5, CANINE, MegaByte)
- **Neural Tokenization**: Cutting-edge research but not widely adopted
  yet (Charformer, BERT2BERT)

## BERT/GPT Sentence Scoring

| **Method**                 | **Model**     | **When to Use?**                          |
| -------------------------- | ------------- | ----------------------------------------- |
| **GPT Sentence Scoring**   | GPT-2 / GPT-3 | Ranking entire sentences based on fluency |
| **BERT Masked Prediction** | BERT          | Resolving ambiguous words in a sentence   |

## Examples

### Example Parse: `pineappleslaw`

Given a non-spaced word like `pineappleslaw`:

```
pineappleslaw
pineapples law
pineapple slaw
```

You can have sentences where it's ambiguous how to parse it:

```
The pineappleslaw is to eat it fast.
The pineapples law is to eat it fast. (yes)
The pineapple slaw is to eat it fast.
```

Or this:

```
The pineappleslaw is eaten fast.
The pineapples law is eaten fast.
The pineapple slaw is eaten fast. (yes)
```

I marked the correct with `yes`. But it would be impossible to figure
out the parse without knowing the meaning of the sentences, and weighing
how "realistic sounding" both meanings were.

It would have to take into account more than just the current sentence.
It might have to take into account a whole paragraph, or knowledge from
the text as a whole, or even knowledge from outside the text (general
knowledge). For example, the last example sentence could have it be
parsed as `The pineapples law is eaten fast.` (yes), if we maybe were
talking about how people were debating different laws, and quickly
"chewing them up" or destroying the arguments, so to speak. In that
case, it might make sense! But if we are talking about food, then the
term `pineapple slaw` might make sense.

### Example Parse: `myrishaltypanathisgreat`

```
my rishaltypanath is great
my rishalty panath is great
my rishaltypana this great
my rishal typana this great
my ris halty pana this great
my ris halty panath is great
myr is halty panath is great
...
```

Basically it should probably figure out:

```
my <X> is great
```

But does it have to try and check every combination first before it
makes its decision?

Brute force (checking all combinations) is very slow. Instead, use "beam
search" with a bigram probability model.

| **Method**                   | **Time Complexity** | **Why it Works?**              |
| ---------------------------- | ------------------- | ------------------------------ |
| **Brute Force (O(2^N))**     | ❌ Too slow         | Tries every segmentation       |
| **Beam Search (O(N log K))** | ✅ Fast             | Keeps only best segmentations  |
| **Bigram Model**             | ✅ Accurate         | Learns unknown words via `<X>` |

### Example Parse: `myrealloreatdust`

What I had in mind was:

```
myre all or eat dust
```

But you could also do:

```
my real lore at dust
```

Both are valid grammatical sentences, but the second one doesn't make as
much practical/logical sense as the first one.

Could also be that we mispelled the last word `dust` and meant `dusk`,
then the second one is better:

```
my real lore at dusk
```

And the first no longer makes sense.

```
myre all or eat dusk
```

So ideally you take the full story / context ito perspective, to figure
out what is most likely meant here. Try changing some words to be other
words if you change the spelling slightly potentially, and see where
that goes.

| **Feature**                     | **How We Solved It?**       |
| ------------------------------- | --------------------------- |
| **Efficient Word Segmentation** | ✅ Beam Search (O(N log K)) |
| **Spell Correction**            | ✅ Levenshtein Distance     |
| **Context Awareness**           | ✅ Bigram Language Model    |
| **Dynamic Word Discovery**      | ✅ Allows unknown words     |

### Summary

| **Method**                    | **Handles Context?** | **Handles Unknown Words?** | **Computational Cost** |
| ----------------------------- | -------------------- | -------------------------- | ---------------------- |
| **Dictionary-Based**          | ❌ No                | ❌ No                      | ✅ Fast                |
| **HMM/Viterbi (Statistical)** | ⚠️ Limited           | ⚠️ Limited                 | ✅ Efficient           |
| **CRF (ML-Based)**            | ✅ Yes               | ⚠️ Needs training data     | ✅ Moderate            |
| **BERT/GPT Sentence Scoring** | ✅ Yes               | ✅ Yes                     | 🔥 High                |
| **Discourse-Aware Models**    | ✅ Yes               | ✅ Yes                     | 🔥🔥 Very High         |
