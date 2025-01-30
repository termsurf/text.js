# NLP Tokenization Techniques

The primary cutting-edge tokenization algorithms for text processing in
NLP fall into a few main categories.

1. Subword Tokenization
2. Character-Level Tokenization
3. Token-Free Tokenization
4. Adaptive Tokenization
5. Neural Tokenization

## Subword Tokenization

These techniques break words into subwords or morphemes to balance
vocabulary size and model generalization.

- **Byte-Pair Encoding (BPE)** – Used in GPT, RoBERTa, and OpenNMT.

  - Iteratively merges the most frequent adjacent character pairs to
    create subwords.
  - Reduces vocabulary size while keeping rare words understandable.

- **WordPiece** – Used in BERT, ALBERT, and T5.

  - Similar to BPE but uses a likelihood-based approach to merge
    subwords.
  - Produces more optimal tokenization for pretrained models.

- **Unigram Language Model** – Used in SentencePiece and T5.

  - Instead of merging pairs, it assigns probabilities to possible token
    splits and finds the best segmentation.
  - Often leads to more flexible and compressed tokenization.

- **Morfessor** – Unsupervised morphological segmentation.
  - Splits words into meaningful morphemes based on statistical models.
  - Useful for morphologically rich languages like Finnish or Turkish.

## Character-Level Tokenization

These methods keep all input as individual characters, offering a robust
method for out-of-vocabulary (OOV) words.

- **Character CNNs/RNNs** – Used in CharCNN and early LSTM models.

  - Encodes words as sequences of characters processed by convolutional
    or recurrent layers.
  - Robust to misspellings and new words but slower in sequence length.

- **Byte-Level BPE** – Used in GPT-3 and T5 (via SentencePiece).
  - Processes text at the byte level instead of Unicode characters.
  - Helps models handle multiple languages and special characters
    efficiently.

## Token-Free Tokenization

Instead of explicit token splitting, these models process text directly
at the byte level.

- **ByT5** – Google's byte-level Transformer.

  - Operates directly on UTF-8 bytes instead of words or subwords.
  - Great for multilingual applications but increases sequence length.

- **CANINE** – Character-aware pretraining method.
  - Uses character embeddings instead of subwords.
  - Effective for low-resource languages.

## Adaptive Tokenization

These models dynamically adjust tokenization based on context or
training data.

- **T5's Adaptive Span Tokenizer** – Learns tokenization strategies
  based on input distribution.

  - Reduces sequence length adaptively for efficiency.

- **Meta AI’s MegaByte** – Hybrid byte and token-based tokenization.
  - Combines byte-level input processing with token-based models.
  - Improves scalability for long sequences.

## Neural Tokenization

Instead of using fixed rules, these models use neural networks to learn
optimal tokenization.

- **BERT2BERT Tokenization** – Uses a Transformer to predict token
  boundaries.
  - Learns how to tokenize dynamically based on training data.
- **Charformer** – Google’s gradient-based subword tokenization.
  - Instead of explicit tokenization, it uses a Transformer to create
    subword embeddings.
  - Optimized for speed and efficiency.

## Which One is Best?

- **BPE & WordPiece**: General-purpose NLP (GPT, BERT, etc.)
- **Unigram LM**: More flexible segmentation (T5, SentencePiece)
- **Character/Byte-Level**: Extreme robustness (ByT5, CANINE, MegaByte)
- **Neural Tokenization**: Cutting-edge research but not widely adopted
  yet (Charformer, BERT2BERT)
