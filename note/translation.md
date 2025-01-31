# Translation

For purposes of this repo, we will use rule-based translations. Here is
the basic flow:

1. Write the sentence in English.
2. Parse the English sentence using the English sentence grammar, into a
   `MentalRepresentation`.
3. Convert the `MentalRepresentation` into the target language using the
   target language's dictionary and grammar.

If the target language doesn't have translations for all the words used
in English, then it returns empty. If it does, it figures out the proper
word form and word order, and writes that out.

This way, we can translate simple sentences which use common patterns
into semantically/syntactically correct target language sentences.

It won't really use AI for text-to-text translation, which usually
relies on large parallel corpora.

The English sentence needs to be written nicely, so it easy to tokenize.
