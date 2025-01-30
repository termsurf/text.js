// class Grammar {
//   language: string

//   groups: Array<TemplateGroup>

//   types: Record<string, Array<string>>

//   constructor(language: string) {
//     this.language = language
//     this.groups = []
//     this.types = {}
//   }

//   type(type: string, mappings?: string | Array<string>) {
//     if (Array.isArray(mappings)) {
//       this.types[type] = mappings
//     } else if (typeof mappings === 'string') {
//       this.types[type] = [mappings]
//     } else {
//       this.types[type] = []
//     }
//     return this
//   }

//   group(name: string) {
//     const group = new TemplateGroup(name)
//     this.groups.push(group)
//     return group
//   }
// }

// class TemplateGroup {
//   name: string

//   templates: Array<Template>

//   constructor(name: string) {
//     this.name = name
//     this.templates = []
//   }

//   template(name: string) {
//     const template = new Template(name)
//     this.templates.push(template)
//     return template
//   }
// }

// class Template {
//   name: string

//   examples?: Array<string>

//   keys?: Record<string, Array<string>>

//   constructor(name: string) {
//     this.name = name
//   }

//   example(text: string) {
//     this.examples ??= []
//     this.examples.push(text)
//     return this
//   }

//   where(key: string, sets: Array<string>) {
//     this.keys ??= {}
//     this.keys[key] = sets
//     return this
//   }
// }

// const grammar = new Grammar('english')

// grammar.type('plural pronoun')
// grammar.type('first person pronoun')
// grammar.type('second person pronoun')

// grammar.type('non-s pronoun', [
//   'plural pronoun',
//   'first person pronoun',
//   'second person pronoun',
//   'gerund',
// ])

// grammar.type('s pronoun', ['third person pronoun'])

// grammar.template('non-s verb', '[verb]')
// grammar.template('s verb', '[verb, -s]')

// const svp = grammar.group('subject conjugated verb')
// svp.template('[non-s pronoun] [non-s-verb]')
// svp.template('[s pronoun] [s-verb]')

// // - template: '[subject] [verb]'
// //   example: i see
// //   where:
// //     subject:
// //       - type: plural pronoun
// //         example: they
// //       - type: first person pronoun
// //         example: i
// //       - type: second person pronoun
// //         example: you
// // - template: '[subject] [verb, -s]'
// //   example: he sees
// //   where:
// //     subject:
// //       - type: singular pronoun
// //         example: he
// //       - type: singular indefinite pronoun
// //         example: everybody
// //       - type: gerund
// //         example: running
// // - template: '[subject] [modal] [verb, -s]'
// //   example: he can see
// //   where:
// //     subject:
// //       - type: singular pronoun
// //         example: he
// //       - type: singular indefinite pronoun
// //         example: everybody
// //       - type: gerund
// //         example: running

// // # see,[verb]
// // # [i/you] [verb]
// // # i see
// // # [a] [verb + -s],conditions: a=
// // # he sees
// // # the dog sees
// // # i saw
// // # i will see
// // # i used to see
// // # i did see
// // # i have seeen
// // # i am seeing
// // # i have been seeing
// // # i will have been seeing
// // # i see trees
// // # i see red trees
