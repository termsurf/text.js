```
subject + object
```

A trie of types of words.

First, a map of all construct tries.

Then, a global trie with the entrypoints, referencing the map of tries.

```
subject
  verb
    object
  object
  adverb
    verb
      object
```

For generation, it needs:

- sentence template variant (alternate word orders, ranked)

```
I want the tree
I want tree

I want tree => I want the tree
[subject] [verb] [object] => [subject] [verb] [determiner] [object]

I like schools
I like school
I like trees
I like the tree

The tree, I want (yoda form)
```

```ts
group('noun', ['singular-noun', 'plural-noun'])
template('[noun]')
template('[determiner] [noun]')
```

```
my food
[possesive-pronoun] [noun]
[article] [noun]
my foods
```

```
preposition-phrases
  # off of and ultimately onto the floor
  [preposition-phrase] [preposition-phrase-attachment]+ [preposition-phrase-conjunction]
  [preposition-phrase] [preposition-phrase-conjunction]
  [preposition-phrase]
preposition-phrase-conjunction
  [conjunction] [preposition-phrase]
preposition-phrase-attachment
  [comma] [preposition-phrase]
preposition-phrase
  # off of the table
  # off the table and floor
  # off the table under the floor
  [prepositions] [noun-phrases]
  # ultimately off the table
  # way out of the way
  [adverb-phrases] [prepositions] [noun-phrases]
  # [all] [of my books]
  [scope]+ [prepositions] [noun-phrases]
prepositions
  [preposition]+

adjective-phrases
  [adjective-phrase] [adjective-phrase-attachment]+ [adjective-phrase-conjunction]
  [adjective-phrase] [adjective-phrase-conjunction]
  [adjective-phrase]
adjective-phrase-conjunction
  [conjunction] [adjective-phrase]
adjective-phrase-attachment
  [comma] [adjective-phrase]
adjective-phrase
  [adverb-phrases]? [adjective-like]+ [prepositional-phrases]?
adjective-like
  [adjective]
  [number-phrases]

number-phrases
  # two hundred million, one hundred thousand, and ten
  # two hundred million, one hundred and fifty-three thousand, sixteen
  [number-phrase] [number-phrase-conjunction-or-attachment]*
number-phrase-conjunction-or-attachment
  [number-phrase-conjunction]
  [number-phrase-attachment]
number-phrase-conjunction
  [conjunction] [number-phrase]
number-phrase-attachment
  [comma] [number-phrase]
number-phrase
  # two hundred
  # one
  [number]+

noun-phrases
  [noun-phrase] [noun-phrase-attachment]+ [noun-phrase-conjunction]
  [noun-phrase] [noun-phrase-conjunction]
  [noun-phrase]
noun-phrase-conjunction
  [conjunction] [noun-phrase]
noun-phrase-attachment
  [comma] [noun-phrase]
noun-phrase
  # [the] [interesting] [part] [of my book]
  # [all my] [books]
  [scope]* [adjective-phrases]? [noun-like]+ [preposition-phrases]?
  # the tall guy quickly eating berries
  [scope]* [adjective-phrases]? [noun-like]+ [adverb-phrases]? [preposition-phrases]?
  # the guy who ultimately quickly ate berries was fast
  # the guy who ultimately quickly ate was interesting
  [scope]* [adjective-phrases]? [noun-like]+ [relative-pronoun] [adverb-phrases]? [constructive-verb] [noun-phrases]?
noun-like
  [noun]
  [plural-noun]
  [possessive-noun]
  [proper-noun]
  [gerund]
  [independent-possessive-pronoun]
  [number-phrases]

scope
  [determiner]
  [quantifier]
  [dependent-possessive-pronoun]

verb-phrases
  [verb-phrase] [verb-phrase-attachment]+ [verb-phrase-conjunction]
  [verb-phrase] [verb-phrase-conjunction]
  [verb-phrase]
verb-phrase-conjunction
  [conjunction] [verb-phrase]
verb-phrase-attachment
  [comma] [verb-phrase]
verb-phrase
  # [should] [you and I] [talk] [on the phone]
  # [should] [you and I] [have] [a talk]
  # [should] [you and I] [quickly and calmly] [have] [a talk]
  # [should] [the guy eating berries] [climb] [the tree]
  [pseudo-verbs] [noun-phrases] [adverb-phrases]? [verb] [noun-or-preposition-or-adverb-phrases]?
  # TODO: [should] [it be] [that] [ultimately] [we] [are] [late]
  # please talk for once
  [adverb-phrases]? [verb] [noun-or-preposition-or-adverb-phrases]?
verb
  [constructive-verb]
  [inseparable-phrasal-verb]
  # eat
  [present-verb]
  # am eating
  [present-continuous-verb]
  # have eaten
  [present-perfect-verb]
  # have been eating
  [present-perfect-continuous-verb]
  # ate
  [past-verb]
  # will eat
  [future-verb]
  # to eat
  [infinitive-verb]
constructive-verb
  [infinitive-verb]
  [present-participle-verb]
  [past-participle-verb]
inseparable-phrasal-verb
  [verb] [adverbs]
  [verb] [prepositions]
  [verb] [adverbs] [prepositions]
  [verb] [prepositions] [adverbs]
  [verb] [adverbs] [prepositions] [adverbs]
pseudo-verbs
  [pseudo-verb] [pseudo-verb-attachment]+ [pseudo-verb-conjunction]
  [pseudo-verb] [pseudo-verb-conjunction]
  [pseudo-verb]
pseudo-verb-conjunction
  [conjunction] [pseudo-verb]
pseudo-verb-attachment
  [comma] [pseudo-verb]
pseudo-verb
  [modal-verb]
  [auxiliary-verb]

adverb-phrases
  [adverb-phrase] [adverb-phrase-attachment]+ [adverb-phrase-conjunction]
  [adverb-phrase] [adverb-phrase-conjunction]
  [adverb-phrase]
adverb-phrase-conjunction
  [conjunction] [adverb-phrase]
adverb-phrase-attachment
  [comma] [adverb-phrase]
adverb-phrase
  [adverbs]
adverbs
  [adverb]+

conjunction-phrases
  [conjunction-phrase] [conjunction-phrase-attachment]+ [conjunction-phrase-conjunction]
  [conjunction-phrase] [conjunction-phrase-conjunction]
  [conjunction-phrase]
conjunction-phrase-conjunction
  [conjunction] [conjunction-phrase]
conjunction-phrase-attachment
  [comma] [conjunction-phrase]
conjunction-phrase
  [preposition-phrases]? [conjunctions]
  [conjunctions]? [adjective-or-adverb-phrases] [conjunctions]
  [conjunctions] [adjective-or-adverb-phrases] [conjunctions]?
conjunctions
  [conjunction]+

interjection-phrases
  [interjection-phrase] [interjection-phrase-attachment]+ [interjection-phrase-interjection]
  [interjection-phrase] [interjection-phrase-interjection]
  [interjection-phrase]
interjection-phrase-interjection
  [conjunction-phrases] [interjection-phrase]
interjection-phrase-attachment
  [comma] [interjection-phrase]
interjection-phrase
  [interjections]
interjections
  [interjection]+

clauses
  [clause] [clause-attachment]+ [clause-conjunction]
  [clause] [clause-conjunction]
  [clause]
clause-conjunction
  [conjunction] [clause]
clause-attachment
  [comma] [clause]
clause-parenthesis
  [open-parenthesis] [clauses] [closed-parenthesis]
clause-nesting
  [endash] [clauses] [endash]
  [emdash] [clauses] [emdash]
  [double-endash] [clauses] [double-endash]
  [double-emdash] [clauses] [double-emdash]
  [quote] [clauses] [quote]
  [double-quote] [clauses] [double-quote]
clause
  [clause-parenthesis]+
  [clause-nesting]
  [relative-clause]
  # the book that I bought
  [noun-phrases] [relative-pronoun] [relative-clause]
  # the book that I bought yesterday is on the table
relative-clause
  # I went to the store
  [noun-phrases] [verb-phrases]?
  # walk to the store
  [verb-phrases]
  # afraid of the dog
  [adjective-phrases]
  # ultimately he went to the store
  [adverb-phrases] [noun-phrases] [verb-phrases]
  [preposition-phrases]
  # on the table he jumped
  [preposition-phrases] [noun-phrases] [verb-phrases]
  # [in the event that] [dogs] [eat]
  [conjunction-phrases] [noun-phrases] [verb-phrases]
  # [in the event that] [eating] [comes] [first]
  # ultimately it fell off the table
  [noun-phrases] [conjunction-phrases]? [adverb-phrases]? [noun-or-preposition-or-adverb-phrases]?

[noun-or-preposition-or-adverb-phrases]
  [noun-phrases]
  [preposition-phrases]
  [adverb-phrases]

[noun-or-preposition-phrases]
  [noun-phrases]
  [preposition-phrases]

[adjective-or-adverb-phrases]
  [adjective-phrases]
  [adverb-phrases]
```
