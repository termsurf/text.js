import assert from 'assert'
import fs from 'fs/promises'
import ipaToTalk from '@termsurf/talk/make/ipa/talk'

const language = process.argv[2] as string

assert(language, `Must pass in a language.`)

make(language)

async function make(language: string) {
  const path = `code/${language}/index.ts`
  let text = await fs.readFile(path, `utf-8`)
  text = text
    .replace(/:\s*'([^']+)'/g, (_, $1) => {
      try {
        const talk = ipaToTalk($1)
        if (talk.match(/'/)) {
          return `: "${talk}"`
        } else {
          return `: '${talk}'`
        }
      } catch (e) {
        return `: '${$1}'`
      }
    })
    .replace(/:\s*"([^"]+)"/g, (_, $1) => {
      try {
        const talk = ipaToTalk($1)
        if (talk.match(/'/)) {
          return `: "${talk}"`
        } else {
          return `: '${talk}'`
        }
      } catch (e) {
        return `: "${$1}"`
      }
    })
  await fs.writeFile(path, text)
}
