# Agents

Agents, for purposes here, are individuals with a mind, or mental space,
which they use to navigate and understand the world.

## Mental Space

1. desire (what directs your attention, guides your focus)
1. attention (where to focus your perception for the moment)
1. processing

   - parsing
   - analyzing

1. memory

   - temporary (local workspace for processing and thinking about the
     content)
   - lasting (more permanent memory you can recall lasting information
     from)
     - associations
     - models

1. simulation (playing things in your head)

   - grammar experiments
   - phonetic play

1. perception (the effect of playing the simulation)
1. conceptualization (final mental model)
1. experience (the result of understanding)

## Dimensions

1. visual (the text)
1. auditory (pronunciation)
1. tactile
1. olfactory
1. gustatory
1. emotional
1. experiential
1. conceptual (mental model)
1. logical
1. spatial
1. temporal
1. situational (having to do with the story / scene / events)
1. societal
1. intentional (figuring out what the intention was of what is being
   said)
1. reflective (putting yourself in other peoples shoes)

## Example Model

```ts
interface Agent {
  memory: Memory
}

interface Memory {
  long: Conceptualization
  short: Conceptualization
}

interface Conceptualization {
  embeddings: VectorIndex
  events: Record<string, Event>
  objects: Record<string, Object>
  actions: Record<string, Action>
  location: Record<string, Location>
  time: Record<string, Time>
  causes: Record<string, Cause>
  effects: Record<string, Effect>
}

interface Association {
  relation: string
  conceptualization: Conceptualization
}

interface Feature {
  name: string
  type?: string // e.g., "physical", "emotional", "symbolic"
  value?: any // Value of the feature, e.g., { size: "large" }
}

interface Action {
  name?: string
  type?: string[] // e.g., ["speech", "attack", "gesture"]
  features?: Feature[]
  manner?: string // e.g., "forcefully", "calmly"
  target?: Agent | Object // Direct target of the action
  purpose?: string // Reason for action
}

interface Object {
  name?: string
  type?: string[] // e.g., ["human", "hero", "leader"]
  role?:
    | 'subject'
    | 'recipient'
    | 'witness'
    | 'antagonist'
    | 'supporter' // Clarifies their role in event
  features?: Feature[]
  state?: string // e.g., "broken", "glowing"
  transformations?: Array<{ from: string; to: string }> // e.g., "open" → "closed"
  associations: Record<string, Association>
}

interface Location {
  name: string
  associations: Record<string, Association>
}

interface Time {
  timestamp?: string // ISO format for precise time
  relative?: string // e.g., "before sunset", "after the war"
  duration?: number // In seconds or milliseconds
}

interface Cause {
  type: 'direct' | 'indirect'
  description: string
  associations: Record<string, Association>
}

interface Effect {
  type: 'immediate' | 'delayed'
  description: string
  impact_level?: 'minor' | 'moderate' | 'major'
  associations: Record<string, Association>
}

interface Event {
  id: string
  category:
    | 'perception'
    | 'interaction'
    | 'action'
    | 'thought'
    | 'outcome'
  context?: string
  manner?: string
  associations: Record<string, Association>
}
```

- Need some way to "invoke memories", "trigger memories", through like
  "prompts" or something.
- Perhaps the input query (text) gets converted into an "experience",
  which is a combination of perceptions, attention, etc., and that gets
  turned into a vector embedding (decimal numbers).
- The vector embedding is used as a key to find all the things
  associated with that prompt in one fell swoop somehow. Like given the
  prompt "fire", it would maybe think of "recent LA fires", and also
  "campfire", and also "bon-fire", which would invoke mental experiences
  of a beach or a nice night, or worry, etc..

The `objects` have many `type` values, which are the types that that
object is. So `garfield` is a type `cat`. And `cat` is a type `mammal`,
and `mammal` is a type `animal`, etc.. So there is an abstraction
hierarchy there. Let's just focus on that specifically. How can we
encode this semantic graph/tree/network into decimal vectors?

I must also add, that each of these objects (garfield, cat, mammal,
animal, etc.), has a set of `features` and `actions`. The nested ones
inherit those features, unless otherwise specified.

- `cat`:
  - type: `mammal`
  - features: `fur`, `4-legs`, `ears`, `claws`
  - actions: `purr`, `meow`
- `mammal`
  - features: `fur`
- `animal`
  - features: `body`, `head`, etc..
- `dog`
  - type: `mammal`
- `bird`:
  - type: `animal`

So basically, there is a set of features which sort of define this
object. It defines how simiilar it is to other objects based on the
hierarchy/tree/graph of types. There could be hundreds or thousands of
features/actions associated with each object, I just listed a few here.
There can be multiple parent types associated with each object, and we
need to make sure to somehow capture the importance of each semantic
meaning.

| **Use Case**                                                       | **Recommended Vector Size** |
| ------------------------------------------------------------------ | --------------------------- |
| **Simple object hierarchy (e.g., animals, vehicles)**              | `32 - 128`                  |
| **General knowledge graph (e.g., Wikipedia, WordNet)**             | `128 - 512`                 |
| **Complex AI reasoning (e.g., GPT models, scientific ontologies)** | `512 - 2048`                |
| **Massive-scale language models (e.g., GPT-4, BERT, DALL·E)**      | `2048 - 4096+`              |

### Cases
